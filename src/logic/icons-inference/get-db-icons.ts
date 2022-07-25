import { pathExists, readFile } from 'fs-extra';

import { Techno, technosSpecs } from '../../specs/technos';
import { InferenceFunction } from '../../types/inference-function.type';
import { getPackageJsonData } from '../package/get-package-json-data';
import { prismaGenerateRegex } from '../regex/prisma-generate.regex';
import { prismaProviderRegex } from '../regex/prisma-provider.regex';

export const getDbIcons: InferenceFunction = async (path) => {
  const packageJsonExists = await pathExists(`${path}/package.json`);
  if (!packageJsonExists) {
    return [];
  }

  const json = await getPackageJsonData(path);
  if (!json.dependencies.includes('prisma')) {
    return [];
  }

  return Object.values(json.scripts).reduce<Promise<Array<Techno>>>(
    async (technosPromise, command) => {
      const res = command.match(prismaGenerateRegex);
      if (!res || res.length !== 4) {
        return technosPromise;
      }

      const value = `${path}/${res[3] ? res[3] : 'prisma/schema.prisma'}`;
      const raw = await readFile(value, 'utf-8');
      const matches = raw.match(prismaProviderRegex);
      if (!matches) {
        return technosPromise;
      }

      const previousTechnos = await technosPromise;
      const dbEngine = matches[1];
      const techno = (technosSpecs as Record<string, Techno>)[dbEngine];
      return [...previousTechnos, techno];
    },
    [] as never,
  );
};
