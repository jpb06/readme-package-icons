import { readdir } from 'fs-extra';

import { technosSpecs, Techno } from '../../specs/technos';

export const getPackageManager = async (
  path: string,
): Promise<Array<Techno>> => {
  const files = await readdir(path);

  if (!files.some(() => 'package.json')) {
    return [];
  }

  const items = [];

  if (files.some((el) => el.startsWith('tsconfig'))) {
    items.push(technosSpecs.typescript);
  } else {
    items.push(technosSpecs.javascript);
  }

  items.push(technosSpecs.node);

  if (files.includes('package-lock.json')) {
    items.push(technosSpecs.npm);
  } else if (files.includes('yarn.lock')) {
    items.push(technosSpecs.yarn);
  } else if (files.includes('pnpm-lock.yaml')) {
    items.push(technosSpecs.pnpm);
  }

  return items;
};
