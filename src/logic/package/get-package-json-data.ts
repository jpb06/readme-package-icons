import { readJson } from 'fs-extra';

interface PackageJsonData {
  dependencies: string[];
  scripts: Record<string, string>;
}

export const getPackageJsonData = async (
  path: string,
): Promise<PackageJsonData> => {
  const json = await readJson(`${path}/package.json`);

  let dependencies: string[] = [];
  if (json.dependencies) {
    dependencies = [...dependencies, ...Object.keys(json.dependencies)];
  }
  if (json.devDependencies) {
    dependencies = [...dependencies, ...Object.keys(json.devDependencies)];
  }

  return {
    dependencies,
    scripts: json.scripts,
  };
};
