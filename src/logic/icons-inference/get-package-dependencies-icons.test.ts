import { pathExists, readJson } from 'fs-extra';
import { mocked } from 'jest-mock';

import { packageJson } from '../../tests/mock-data/package-json';
import { getPackageDependenciesIcons } from './get-package-dependencies-icons';

jest.mock('fs-extra');

describe('getPackageDependenciesIcons function', () => {
  const path = './cool';

  it('should return an empty array if package.json does not exist', async () => {
    mocked(pathExists).mockResolvedValueOnce(false as never);

    const result = await getPackageDependenciesIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should get matching technos', async () => {
    mocked(pathExists).mockResolvedValueOnce(true as never);
    mocked(readJson).mockResolvedValueOnce(packageJson as never);

    const result = await getPackageDependenciesIcons(path);

    expect(result).toStrictEqual([
      {
        dependenciesPattern: /eslint.*/,
        docUrl: 'https://eslint.org/docs/latest/',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
      },
      {
        dependenciesPattern: /^jest$/,
        docUrl: 'https://jestjs.io/docs/getting-started',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      },
      {
        dependenciesPattern: /^prettier$/,
        docUrl: 'https://prettier.io/docs/en/index.html',
        iconUrl:
          'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/prettier.png',
      },
      {
        dependenciesPattern: /^@swc.*/,
        docUrl: 'https://swc.rs/docs/getting-started',
        iconUrl:
          'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/swc.svg',
      },
    ]);
  });
});
