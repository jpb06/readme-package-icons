import { getCiIcons } from './get-ci-icons';
import { getDbIcons } from './get-db-icons';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons';
import { getRootItemsIcons } from './get-root-items-icons';
import { Techno } from '../../specs/technos';

export const inferIcons = async (path: string): Promise<Array<Techno>> => {
  const ciIcons = await getCiIcons(path);
  const rootIcons = await getRootItemsIcons(path);
  const dbIcons = await getDbIcons(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  return [...ciIcons, ...rootIcons, ...dbIcons, ...dependenciesIcons];
};
