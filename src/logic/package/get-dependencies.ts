import { readJson } from 'fs-extra';

export const getDependencies = async (path: string): Promise<Array<string>> => {
  const json = await readJson(`${path}/package.json`);

  const dependencies = [
    ...Object.keys(json.dependencies),
    ...Object.keys(json.devDependencies),
  ];

  return dependencies;
};
