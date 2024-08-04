import { Techno } from '../../specs/technos';
import { getCiIcons } from './get-ci-icons';
import { getDbIcons } from './get-db-icons';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons';
import { getRootItemsIcons } from './get-root-items-icons';

export const inferIcons = async (path: string): Promise<Techno[]> => {
  const ciIcons = await getCiIcons(path);
  const rootIcons = await getRootItemsIcons(path);
  const dbIcons = await getDbIcons(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  return [...ciIcons, ...rootIcons, ...dbIcons, ...dependenciesIcons];
};
