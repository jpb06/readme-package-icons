import { buildIconsList } from '../logic/icons-list/build-icons-list';
import { getPackageDependenciesIcons } from '../logic/icons-list/get-package-dependencies-icons';
import { getPackageManager } from '../logic/icons-list/get-package-manager';
import { ensureReadmePlaceholders } from '../logic/readme/ensure-readme-placeholders';
import { injectIconsToPackage } from '../logic/readme/inject-icons-to-package';

export type GenerateReadmeIconsArgs = {
  path: string;
  iconsHeight: number;
};

export const generateReadmeIcons = async ({
  path = '.',
  iconsHeight = 50,
}: GenerateReadmeIconsArgs): Promise<number> => {
  const readmePath = `${path}/README.md`;
  await ensureReadmePlaceholders(readmePath);

  const packageManagerIcons = await getPackageManager(path);
  const dependenciesIcons = await getPackageDependenciesIcons(path);

  const icons = [...packageManagerIcons, ...dependenciesIcons];

  const iconsString = buildIconsList(icons, iconsHeight);

  await injectIconsToPackage(readmePath, iconsString);

  return icons.length;
};
