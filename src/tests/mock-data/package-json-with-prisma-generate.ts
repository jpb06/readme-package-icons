export const packageJsonWithPrismaGenerate = {
  dependencies: {
    prisma: '^4.1.0',
  },
  devDependencies: {},
  scripts: {
    dev: 'yarn dev',
    'prisma:gen': 'prisma generate',
    'prisma:gen:auth':
      'prisma generate --schema libs/nest/prisma/auth/auth-db-schema.prisma',
    'prisma:gen:main':
      'prisma generate --schema libs/nest/prisma/main/main-db-schema.prisma',
    'prisma:gen:mission':
      'prisma generate --schema libs/nest/prisma/mission/mission-db-schema.prisma',
    'prisma:gen:books':
      'prisma generate --schema libs/nest/prisma/books/books-db-schema.prisma',
  },
};
