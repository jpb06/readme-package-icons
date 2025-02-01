import { readFile } from 'node:fs/promises';
import { parse } from 'comment-json';

export const readJson = async <TJson>(path: string): Promise<TJson> => {
  const dataAsString = await readFile(path, { encoding: 'utf-8' });

  try {
    return parse(dataAsString, null, true) as TJson;
  } catch (error) {
    throw new Error('Invalid json', {
      cause: error,
    });
  }
};
