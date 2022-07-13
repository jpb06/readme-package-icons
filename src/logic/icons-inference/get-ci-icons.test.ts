import { pathExists } from 'fs-extra';
import { mocked } from 'jest-mock';

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
        iconUrl:
          'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/github-actions.svg',
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
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain-wordmark.svg',
      },
    ]);
  });
});
