import { readFile, stat } from 'node:fs/promises';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  packageJsonWithPrismaGenerate,
  packageJsonWithoutPrisma,
  prismaSchema,
} from '@tests/mock-data';

import { iconsRemotePath } from '@constants';

import { getDbIcons } from './get-db-icons.js';

vi.mock('node:fs/promises', () => ({
  stat: vi.fn(),
  readFile: vi.fn(),
}));

describe('getDbIcons function', () => {
  const path = './cool';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return an empty array if package.json does not exist', async () => {
    vi.mocked(stat).mockRejectedValueOnce(false);

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return an empty array if dependencies do not contain prisma', async () => {
    vi.mocked(stat).mockResolvedValueOnce({
      isFile: () => true,
    } as never);
    vi.mocked(readFile).mockResolvedValueOnce(
      JSON.stringify(packageJsonWithoutPrisma),
    );

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return technos based on providers in prisma schemas', async () => {
    vi.mocked(stat).mockResolvedValueOnce({
      isFile: () => true,
    } as never);
    vi.mocked(readFile).mockResolvedValueOnce(
      JSON.stringify(packageJsonWithPrismaGenerate),
    );
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('cockroachdb'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('mongodb'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('mysql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('sqlite'));

    const result = await getDbIcons(path);

    expect(readFile).toHaveBeenCalledTimes(6);
    expect(readFile).toHaveBeenNthCalledWith(1, `${path}/package.json`, {
      encoding: 'utf-8',
    });
    expect(readFile).toHaveBeenNthCalledWith(
      2,
      `${path}/prisma/schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      3,
      `${path}/libs/nest/prisma/auth/auth-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      4,
      `${path}/libs/nest/prisma/main/main-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      5,
      `${path}/libs/nest/prisma/mission/mission-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      6,
      `${path}/libs/nest/prisma/books/books-db-schema.prisma`,
      'utf-8',
    );

    expect(result).toStrictEqual([
      {
        dependenciesPattern: undefined,
        docUrl:
          'https://www.cockroachlabs.com/docs/cockroachcloud/quickstart.html',
        iconUrl: `${iconsRemotePath}/Cockroachdb-Dark.svg`,
      },
      {
        dependenciesPattern: /^mongoose$|^mongodb$/,
        docUrl: 'https://www.mongodb.com',
        iconUrl: `${iconsRemotePath}/MongoDB.svg`,
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://dev.mysql.com/doc/',
        iconUrl: `${iconsRemotePath}/MySQL-Dark.svg`,
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://www.postgresql.org/docs/',
        iconUrl: `${iconsRemotePath}/PostgreSQL-Dark.svg`,
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://www.sqlite.org/docs.html',
        iconUrl: `${iconsRemotePath}/SQLite.svg`,
      },
    ]);
  });

  it('should return only distinct technos', async () => {
    vi.mocked(stat).mockResolvedValueOnce({
      isFile: () => true,
    } as never);
    vi.mocked(readFile).mockResolvedValueOnce(
      JSON.stringify(packageJsonWithPrismaGenerate),
    );
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql'));

    const result = await getDbIcons(path);

    expect(readFile).toHaveBeenCalledTimes(6);
    expect(readFile).toHaveBeenNthCalledWith(1, `${path}/package.json`, {
      encoding: 'utf-8',
    });
    expect(readFile).toHaveBeenNthCalledWith(
      2,
      `${path}/prisma/schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      3,
      `${path}/libs/nest/prisma/auth/auth-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      4,
      `${path}/libs/nest/prisma/main/main-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      5,
      `${path}/libs/nest/prisma/mission/mission-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      6,
      `${path}/libs/nest/prisma/books/books-db-schema.prisma`,
      'utf-8',
    );

    expect(result).toStrictEqual([
      {
        dependenciesPattern: undefined,
        docUrl: 'https://www.postgresql.org/docs/',
        iconUrl: `${iconsRemotePath}/PostgreSQL-Dark.svg`,
      },
    ]);
  });
});
