import { readFile } from 'node:fs/promises';

import { fileExists } from '@deps/fs';
import { type Techno, technosSpecs } from '@specs';
import type { InferenceFunction } from '@type';

import { getPackageJsonData } from '../package/get-package-json-data.js';
import { prismaGenerateRegex } from '../regex/prisma-generate.regex.js';
import { prismaProviderRegex } from '../regex/prisma-provider.regex.js';

export const getDbIcons: InferenceFunction = async (path) => {
  const packageJsonExists = await fileExists(`${path}/package.json`);
  if (!packageJsonExists) {
    return [];
  }

  const packageJson = await getPackageJsonData(path);
  if (!packageJson.dependencies.includes('prisma')) {
    return [];
  }

  const scripts = Object.values(packageJson.scripts);
  const prismaConfigFiles = scripts.reduce<string[]>((result, command) => {
    const matches = command.match(prismaGenerateRegex);
    if (matches && matches.length === 4) {
      const prismaConfigPath = `${path}/${matches[3] ? matches[3] : 'prisma/schema.prisma'}`;

      return [...result, prismaConfigPath];
    }

    return result;
  }, []);

  const prismaConfigFilesContent = await Promise.all(
    prismaConfigFiles.map((path) => readFile(path, 'utf-8')),
  );

  return prismaConfigFilesContent.reduce<Techno[]>((result, fileContent) => {
    const matches = fileContent.match(prismaProviderRegex);
    if (!matches) {
      return result;
    }

    const techno = (technosSpecs as Record<string, Techno>)[matches[1]];
    if (result.some((el) => el.iconUrl === techno.iconUrl)) {
      return result;
    }

    return [...result, techno];
  }, []);
};
