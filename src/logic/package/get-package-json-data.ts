import { readJson } from '@deps/fs';

interface PackageJsonData {
  dependencies: string[];
  devDependencies?: string[];
  peerDependencies?: string[];
  scripts: Record<string, string>;
}

export const getPackageJsonData = async (
  path: string,
): Promise<PackageJsonData> => {
  const json = await readJson<PackageJsonData>(`${path}/package.json`);

  let dependencies: string[] = [];
  if (json.dependencies) {
    dependencies = [...dependencies, ...Object.keys(json.dependencies)];
  }
  if (json.devDependencies) {
    dependencies = [...dependencies, ...Object.keys(json.devDependencies)];
  }
  if (json.peerDependencies) {
    dependencies = [...dependencies, ...Object.keys(json.peerDependencies)];
  }

  return {
    dependencies,
    scripts: json.scripts,
  };
};
