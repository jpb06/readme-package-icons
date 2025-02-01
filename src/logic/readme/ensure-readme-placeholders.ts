import { readFile } from 'node:fs/promises';

export const ensureReadmePlaceholders = async (path: string): Promise<void> => {
  const data = await readFile(path, 'utf-8');

  const placeHolderStartRegex = /<!-- readme-package-icons start -->/;
  const placeHolderEndRegex = /<!-- readme-package-icons end -->/;

  if (
    placeHolderStartRegex.test(data) === false ||
    placeHolderEndRegex.test(data) === false
  ) {
    throw new Error(`Missing placeholders in ${path}`);
  }
};
