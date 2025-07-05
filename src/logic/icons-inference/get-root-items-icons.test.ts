import { readdir } from 'node:fs/promises';

import { describe, expect, it, vi } from 'vitest';

import { iconsRemotePath } from '@constants';

import { getRootItemsIcons } from './get-root-items-icons.js';

vi.mock('node:fs/promises', () => ({
  readdir: vi.fn(),
}));

describe('getRootItemsIcons function', () => {
  const path = './repos/myRepo';

  it('should return typescript if there is a tsconfig file', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'tsconfig.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://www.typescriptlang.org/docs/',
          iconUrl: `${iconsRemotePath}/TypeScript.svg`,
        },
      ]),
    );
  });

  it('should return node', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'tsconfig.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://nodejs.org/en/docs/',
          iconUrl: `${iconsRemotePath}/NodeJS-Dark.svg`,
        },
      ]),
    );
  });

  it('should return javascript', async () => {
    vi.mocked(readdir).mockResolvedValueOnce(['package.json'] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          iconUrl: `${iconsRemotePath}/JavaScript.svg`,
        },
      ]),
    );
  });

  it('should return npm', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'package-lock.json',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.npmjs.com',
          iconUrl: `${iconsRemotePath}/Npm-Dark.svg`,
        },
      ]),
    );
  });

  it('should return yarn', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'yarn.lock',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://yarnpkg.com/api/',
          iconUrl: `${iconsRemotePath}/Yarn-Dark.svg`,
        },
      ]),
    );
  });

  it('should return pnpm', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'package.json',
      'pnpm-lock.yaml',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://pnpm.io/motivation',
          iconUrl: `${iconsRemotePath}/Pnpm-Dark.svg`,
        },
      ]),
    );
  });

  it('should return docker when a Dockerfile is present', async () => {
    vi.mocked(readdir).mockResolvedValueOnce(['Dockerfile'] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.docker.com',
          iconUrl: `${iconsRemotePath}/Docker.svg`,
        },
      ]),
    );
  });

  it('should return docker when a Docker compose file is present', async () => {
    vi.mocked(readdir).mockResolvedValueOnce([
      'docker-compose.backend.yml',
    ] as never);

    const result = await getRootItemsIcons(path);

    expect(result).toEqual(
      expect.arrayContaining([
        {
          dependenciesPattern: undefined,
          docUrl: 'https://docs.docker.com',
          iconUrl: `${iconsRemotePath}/Docker.svg`,
        },
      ]),
    );
  });
});
