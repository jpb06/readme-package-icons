import { pathExists } from 'fs-extra';
import { mocked } from 'jest-mock';

import { iconsRemotePath } from '../../constants/icons-remote-path.constant';
import { getCiIcons } from './get-ci-icons';

jest.mock('fs-extra');

describe('getCiIcons function', () => {
  const path = './cool';

  it('should return github actions icon', async () => {
    mocked(pathExists)
      .mockResolvedValueOnce(true as never)
      .mockResolvedValueOnce(false as never);

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
    mocked(pathExists)
      .mockResolvedValueOnce(false as never)
      .mockResolvedValueOnce(true as never);

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
