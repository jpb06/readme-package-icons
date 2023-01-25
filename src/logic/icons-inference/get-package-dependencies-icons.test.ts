import { pathExists, readJson } from 'fs-extra';
import { mocked } from 'jest-mock';

import { getPackageDependenciesIcons } from './get-package-dependencies-icons';
import { iconsRemotePath } from '../../constants/icons-remote-path.constant';
import { packageJson } from '../../tests/mock-data/package-json';

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
        iconUrl: `${iconsRemotePath}/Eslint-Dark.svg`,
      },
      {
        dependenciesPattern: /^jest$/,
        docUrl: 'https://jestjs.io/docs/getting-started',
        iconUrl: `${iconsRemotePath}/Jest.svg`,
      },
      {
        dependenciesPattern: /^prettier$/,
        docUrl: 'https://prettier.io/docs/en/index.html',
        iconUrl: `${iconsRemotePath}/Prettier-Dark.svg`,
      },
      {
        dependenciesPattern: /^@swc.*/,
        docUrl: 'https://swc.rs/docs/getting-started',
        iconUrl: `${iconsRemotePath}/Swc-Dark.svg`,
      },
    ]);
  });
});
