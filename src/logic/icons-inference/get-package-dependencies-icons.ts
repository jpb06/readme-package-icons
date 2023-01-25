import { pathExists } from 'fs-extra';

import { InferenceFunction } from './../../types/inference-function.type';
import { technosSpecs } from '../../specs/technos';
import { getPackageJsonData } from '../package/get-package-json-data';

export const getPackageDependenciesIcons: InferenceFunction = async (path) => {
  const packageJsonExists = await pathExists(`${path}/package.json`);
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
