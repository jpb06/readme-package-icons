import { pathExists, readFile, readJson } from 'fs-extra';
import { describe, it, beforeEach, expect, vi } from 'vitest';

import { iconsRemotePath } from '../../constants/icons-remote-path.constant';
import { packageJsonWithPrismaGenerate } from '../../tests/mock-data/package-json-with-prisma-generate';
import { packageJsonWithoutPrisma } from '../../tests/mock-data/package-json-without-prisma';
import { prismaSchema } from '../../tests/mock-data/prisma-schema';

import { getDbIcons } from './get-db-icons';

vi.mock('fs-extra', () => ({
  pathExists: vi.fn(),
  readFile: vi.fn(),
  readJson: vi.fn(),
}));

describe('getDbIcons function', () => {
  const path = './cool';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return an empty array if package.json does not exist', async () => {
    vi.mocked(pathExists).mockResolvedValueOnce(false as never);

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return an empty array if dependencies do not contain prisma', async () => {
    vi.mocked(pathExists).mockResolvedValueOnce(true as never);
    vi.mocked(readJson).mockResolvedValueOnce(
      packageJsonWithoutPrisma as never,
    );

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return technos based on providers in prisma schemas', async () => {
    vi.mocked(pathExists).mockResolvedValueOnce(true as never);
    vi.mocked(readJson).mockResolvedValueOnce(
      packageJsonWithPrismaGenerate as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('cockroachdb') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('mongodb') as never);
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('mysql') as never);
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(prismaSchema('sqlite') as never);

    const result = await getDbIcons(path);

    expect(readFile).toHaveBeenCalledTimes(5);
    expect(readFile).toHaveBeenNthCalledWith(
      1,
      `${path}/prisma/schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      2,
      `${path}/libs/nest/prisma/auth/auth-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      3,
      `${path}/libs/nest/prisma/main/main-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      4,
      `${path}/libs/nest/prisma/mission/mission-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      5,
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
    vi.mocked(pathExists).mockResolvedValueOnce(true as never);
    vi.mocked(readJson).mockResolvedValueOnce(
      packageJsonWithPrismaGenerate as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );
    vi.mocked(readFile).mockResolvedValueOnce(
      prismaSchema('postgresql') as never,
    );

    const result = await getDbIcons(path);

    expect(readFile).toHaveBeenCalledTimes(5);
    expect(readFile).toHaveBeenNthCalledWith(
      1,
      `${path}/prisma/schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      2,
      `${path}/libs/nest/prisma/auth/auth-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      3,
      `${path}/libs/nest/prisma/main/main-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      4,
      `${path}/libs/nest/prisma/mission/mission-db-schema.prisma`,
      'utf-8',
    );
    expect(readFile).toHaveBeenNthCalledWith(
      5,
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
