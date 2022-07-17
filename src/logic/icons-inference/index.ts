import { Techno } from '../../specs/technos';
import { getCiIcons } from './get-ci-icons';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons';
import { getRootItemsIcons } from './get-root-items-icons';

export const inferIcons = async (path: string): Promise<Array<Techno>> => {
  const ciIcons = await getCiIcons(path);
  const rootIcons = await getRootItemsIcons(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  return [...ciIcons, ...rootIcons, ...dependenciesIcons];
};
