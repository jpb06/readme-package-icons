import type { Techno } from '@specs';

import { getCiIcons } from './get-ci-icons.js';
import { getDbIcons } from './get-db-icons.js';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons.js';
import { getRootItemsIcons } from './get-root-items-icons.js';

export const inferIcons = async (path: string): Promise<Techno[]> => {
  const ciIcons = await getCiIcons(path);
  const rootIcons = await getRootItemsIcons(path);
  const dbIcons = await getDbIcons(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  return [...ciIcons, ...rootIcons, ...dbIcons, ...dependenciesIcons];
};
