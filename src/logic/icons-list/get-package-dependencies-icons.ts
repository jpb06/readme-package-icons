import { technosSpecs, Techno } from '../../specs/technos';
import { getDependencies } from '../package/get-dependencies';

export const getPackageDependenciesIcons = async (
  path: string,
): Promise<Array<Techno>> => {
  const dependencies = await getDependencies(path);

  return Object.entries(technosSpecs)
    .filter(
      ([, { dependenciesPattern }]) =>
        dependenciesPattern &&
        dependencies.some((dep) => dep.match(dependenciesPattern)),
    )
    .map(([, techno]) => techno);
};
