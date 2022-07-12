import { readJson } from 'fs-extra';

export const getDependencies = async (path: string): Promise<Array<string>> => {
  const json = await readJson(`${path}/package.json`);

  return [
    ...Object.keys(json.dependencies),
    ...Object.keys(json.devDependencies),
  ];
};
