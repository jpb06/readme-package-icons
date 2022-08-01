import { pathExists, readFile, readJson } from 'fs-extra';
import { mocked } from 'jest-mock';

import { packageJsonWithPrismaGenerate } from '../../tests/mock-data/package-json-with-prisma-generate';
import { packageJsonWithoutPrisma } from '../../tests/mock-data/package-json-without-prisma';
import { prismaSchema } from '../../tests/mock-data/prisma-schema';
import { getDbIcons } from './get-db-icons';

jest.mock('fs-extra');

describe('getDbIcons function', () => {
  const path = './cool';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an empty array if package.json does not exist', async () => {
    mocked(pathExists).mockResolvedValueOnce(false as never);

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return an empty array if dependencies do not contain prisma', async () => {
    mocked(pathExists).mockResolvedValueOnce(true as never);
    mocked(readJson).mockResolvedValueOnce(packageJsonWithoutPrisma as never);

    const result = await getDbIcons(path);

    expect(result).toStrictEqual([]);
  });

  it('should return technos based on providers in prisma schemas', async () => {
    mocked(pathExists).mockResolvedValueOnce(true as never);
    mocked(readJson).mockResolvedValueOnce(
      packageJsonWithPrismaGenerate as never,
    );
    mocked(readFile).mockResolvedValueOnce(
      prismaSchema('cockroachdb') as never,
    );
    mocked(readFile).mockResolvedValueOnce(prismaSchema('mongodb') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('mysql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('sqlite') as never);

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
        iconUrl:
          'https://raw.githubusercontent.com/jpb06/readme-package-icons/main/icons/cockroachdb.svg',
      },
      {
        dependenciesPattern: /^mongoose$|^mongodb$/,
        docUrl: 'https://www.mongodb.com',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://dev.mysql.com/doc/',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://www.postgresql.org/docs/',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        dependenciesPattern: undefined,
        docUrl: 'https://www.sqlite.org/docs.html',
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
      },
    ]);
  });

  it('should return only distinct technos', async () => {
    mocked(pathExists).mockResolvedValueOnce(true as never);
    mocked(readJson).mockResolvedValueOnce(
      packageJsonWithPrismaGenerate as never,
    );
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);
    mocked(readFile).mockResolvedValueOnce(prismaSchema('postgresql') as never);

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
        iconUrl:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
    ]);
  });
});
