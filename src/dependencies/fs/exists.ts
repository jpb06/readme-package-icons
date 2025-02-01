import { stat } from 'node:fs/promises';

export const fileExists = async (path: string): Promise<boolean> => {
  try {
    const pathStats = await stat(path);

    return pathStats.isFile();
  } catch (_) {
    return false;
  }
};

export const directoryExists = async (path: string): Promise<boolean> => {
  try {
    const pathStats = await stat(path);

    return pathStats.isDirectory();
  } catch (_) {
    return false;
  }
};
