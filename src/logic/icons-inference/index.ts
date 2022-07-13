import { Techno } from '../../specs/technos';
import { getCiIcons } from './get-ci-icons';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons';
import { getPackageManager } from './get-package-manager';

export const inferIcons = async (path: string): Promise<Array<Techno>> => {
  const ciIcons = await getCiIcons(path);
  const packageManagerIcons = await getPackageManager(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  return [...ciIcons, ...packageManagerIcons, ...dependenciesIcons];
};
