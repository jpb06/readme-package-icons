import { readdir } from 'fs-extra';

import { technosSpecs } from '../../specs/technos';
import { InferenceFunction } from '../../types/inference-function.type';

export const getRootItemsIcons: InferenceFunction = async (path) => {
  const files = (await readdir(path)).map((el) => el.toLocaleLowerCase());

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
  } else if (files.includes('fly.toml')) {
    items.push(technosSpecs['fly-io']);
  } else if (files.includes('procfile')) {
    items.push(technosSpecs.heroku);
  }

  if (files.some((el) => el.toLowerCase().includes('docker'))) {
    items.push(technosSpecs.docker);
  }

  return items;
};
