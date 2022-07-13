import { inferIcons } from '../logic/icons-inference';
import { buildIconsList } from '../logic/icons-list/build-icons-list';
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

  const icons = await inferIcons(path);
  const iconsString = buildIconsList(icons, iconsHeight);

  await injectIconsToPackage(readmePath, iconsString);

  return icons.length;
};
