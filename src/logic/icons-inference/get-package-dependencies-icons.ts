import { technosSpecs } from '../../specs/technos';
import { getDependencies } from '../package/get-dependencies';
import { InferenceFunction } from './../../types/inference-function.type';

export const getPackageDependenciesIcons: InferenceFunction = async (path) => {
  const dependencies = await getDependencies(path);

  return Object.entries(technosSpecs)
    .filter(
      ([, { dependenciesPattern }]) =>
        dependenciesPattern &&
        dependencies.some((dep) => dep.match(dependenciesPattern)),
    )
    .map(([, techno]) => techno);
};
