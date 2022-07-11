import { readFile } from 'fs-extra';

export const ensureReadmePlaceholders = async (path: string): Promise<void> => {
  const data = await readFile(path, 'utf-8');

  const placeHolderStartRegex = /<!-- readme-package-icons start -->/;
  const placeHolderEndRegex = /<!-- readme-package-icons end -->/;

  if (!placeHolderStartRegex.test(data) || !placeHolderEndRegex.test(data)) {
    throw new Error(`Missing placeholders in ${path}`);
  }
};
