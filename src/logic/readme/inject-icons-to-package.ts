import { readFile, writeFile } from 'fs-extra';

export const injectIconsToPackage = async (
  path: string,
  input: string,
): Promise<void> => {
  const data = await readFile(path, 'utf-8');

  const replaceRegex =
    /(?<=<!-- readme-package-icons start -->)([\W\w]*)(?=<!-- readme-package-icons end -->)/gm;

  const alteredReadmeData = data.replace(replaceRegex, `\n\n${input}\n\n`);

  await writeFile(path, alteredReadmeData);
};
