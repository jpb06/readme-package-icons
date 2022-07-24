type Provider =
  | 'postgresql'
  | 'mysql'
  | 'sqlite'
  | 'sqlserver'
  | 'mongodb'
  | 'cockroachdb';

export const prismaSchema = (provider: Provider): string => `generator client {
  provider      = "prisma-client-js"
}

datasource db {
  provider = "${provider}"
  url      = env("DATABASE_URL")
}

model Book {
  id              Int      @id @default(autoincrement())
  idAuthor        Int
  idCategory      Int
  name            String   @unique
  publicationDate Int?
  author          Author   @relation(fields: [idAuthor], references: [id])
  category        Category @relation(fields: [idCategory], references: [id])
  createdAt       DateTime @default(now())
}`;
