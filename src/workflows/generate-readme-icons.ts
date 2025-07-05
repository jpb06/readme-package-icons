import { inferIcons } from '../logic/icons-inference/index.js';
import { buildIconsList } from '../logic/icons-list/build-icons-list.js';
import { ensureReadmePlaceholders } from '../logic/readme/ensure-readme-placeholders.js';
import { injectIconsToPackage } from '../logic/readme/inject-icons-to-package.js';

export interface GenerateReadmeIconsArgs {
  path: string;
  iconsSize: number;
}

export const generateReadmeIcons = async ({
  path = '.',
  iconsSize = 50,
}: GenerateReadmeIconsArgs): Promise<number> => {
  const readmePath = `${path}/README.md`;
  await ensureReadmePlaceholders(readmePath);

  const icons = await inferIcons(path);
  const iconsString = buildIconsList(icons, iconsSize);

  await injectIconsToPackage(readmePath, iconsString);

  return icons.length;
};
