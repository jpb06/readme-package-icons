import { stat } from 'node:fs/promises';
import { describe, expect, it, vi } from 'vitest';

import { iconsRemotePath } from '@constants';

import { getCiIcons } from './get-ci-icons.js';

vi.mock('node:fs/promises', () => ({
  stat: vi.fn(),
}));

describe('getCiIcons function', () => {
  const path = './cool';

  it('should return github actions icon', async () => {
    vi.mocked(stat)
      .mockResolvedValueOnce({
        isDirectory: () => true,
      } as never)
      .mockRejectedValueOnce(false);

    const result = await getCiIcons(path);

    expect(result).toStrictEqual([
      {
        dependenciesPattern: undefined,
        docUrl: 'https://docs.github.com/en/actions',
        iconUrl: `${iconsRemotePath}/GithubActions-Dark.svg`,
      },
    ]);
  });

  it('should return circle ci icon', async () => {
    vi.mocked(stat)
      .mockRejectedValueOnce(false)
      .mockResolvedValueOnce({
        isFile: () => true,
      } as never);

    const result = await getCiIcons(path);

    expect(result).toStrictEqual([
      {
        dependenciesPattern: undefined,
        docUrl: 'https://circleci.com/docs',
        iconUrl: `${iconsRemotePath}/Circleci-Dark.svg`,
      },
    ]);
  });
});
