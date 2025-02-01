import { readFile, stat } from 'node:fs/promises';
import { describe, expect, it, vi } from 'vitest';

import { iconsRemotePath } from '@constants';
import { packageJson } from '@tests/mock-data';

import { getPackageDependenciesIcons } from './get-package-dependencies-icons.js';

vi.mock('node:fs/promises', () => ({
  stat: vi.fn(),
  readFile: vi.fn(),
}));

describe('getPackageDependenciesIcons function', () => {
  const path = './cool';

  it('should return an empty array if package.json does not exist', async () => {
    vi.mocked(stat).mockRejectedValueOnce(false);

    const result = await getPackageDependenciesIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should get matching technos', async () => {
    vi.mocked(stat).mockResolvedValueOnce({
      isFile: () => true,
    } as never);
    vi.mocked(readFile).mockResolvedValueOnce(JSON.stringify(packageJson));

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
