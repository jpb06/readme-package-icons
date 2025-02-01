import { fileExists } from '@deps/fs';
import { technosSpecs } from '@specs';
import type { InferenceFunction } from '@type';

import { getPackageJsonData } from '../package/get-package-json-data.js';

export const getPackageDependenciesIcons: InferenceFunction = async (path) => {
  const packageJsonExists = await fileExists(`${path}/package.json`);
  if (!packageJsonExists) {
    return [];
  }

  const json = await getPackageJsonData(path);

  return Object.entries(technosSpecs)
    .filter(
      ([, { dependenciesPattern }]) =>
        dependenciesPattern &&
        json.dependencies.some((dep) => dep.match(dependenciesPattern)),
    )
    .map(([, techno]) => techno);
};
