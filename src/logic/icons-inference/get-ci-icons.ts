import { directoryExists, fileExists } from '@deps/fs';
import { technosSpecs } from '@specs';
import type { InferenceFunction } from '@type';

export const getCiIcons: InferenceFunction = async (path) => {
  const items = [];

  const githubActionsFolderExists = await directoryExists(
    `${path}/.github/workflows`,
  );
  if (githubActionsFolderExists) {
    items.push(technosSpecs['github-actions']);
  }

  const circleCiFolderExists = await fileExists(`${path}/.circleci`);
  if (circleCiFolderExists) {
    items.push(technosSpecs['circle-ci']);
  }

  return items;
};
