import { readdir } from 'fs-extra';
import { mocked } from 'jest-mock';

import { getRootItemsIcons } from './get-root-items-icons';

jest.mock('fs-extra');

describe('getRootItemsIcons function', () => {
  const path = './repos/myRepo';

  it('should return typescript if there is a tsconfig file', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'tsconfig.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://www.typescriptlang.org/docs/',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
      ]),
    );
  });

  it('should return node', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'tsconfig.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://nodejs.org/en/docs/',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        },
      ]),
    );
  });

  it('should return javascript', async () => {
    mocked(readdir).mockResolvedValueOnce(['package.json'] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
      ]),
    );
  });

  it('should return npm', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'package-lock.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.npmjs.com',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
        },
      ]),
    );
  });

  it('should return yarn', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'yarn.lock',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://yarnpkg.com/api/',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg',
        },
      ]),
    );
  });

  it('should return pnpm', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'pnpm-lock.yaml',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://pnpm.io/motivation',
          iconUrl:
            'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/pnpm.svg',
        },
      ]),
    );
  });

  it('should return docker when a Dockerfile is present', async () => {
    mocked(readdir).mockResolvedValueOnce(['Dockerfile'] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.docker.com',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
      ]),
    );
  });

  it('should return docker when a Docker compose file is present', async () => {
    mocked(readdir).mockResolvedValueOnce([
      'docker-compose.backend.yml',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.docker.com',
          iconUrl:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        },
      ]),
    );
  });
});
