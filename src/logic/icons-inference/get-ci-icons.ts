import { pathExists } from 'fs-extra';

import { InferenceFunction } from './../../types/inference-function.type';
import { technosSpecs } from '../../specs/technos';

export const getCiIcons: InferenceFunction = async (path) => {
  const items = [];

  const githubActionsFolderExists = await pathExists(
    `${path}/.github/workflows`,
  );
  if (githubActionsFolderExists) {
    items.push(technosSpecs['github-actions']);
  }

  const circleCiFolderExists = await pathExists(`${path}/.circleci`);
  if (circleCiFolderExists) {
    items.push(technosSpecs['circle-ci']);
  }

  return items;
};
