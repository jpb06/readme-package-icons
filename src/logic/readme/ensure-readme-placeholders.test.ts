import { readFile } from 'fs-extra';
import { mocked } from 'jest-mock';

import { ensureReadmePlaceholders } from './ensure-readme-placeholders';

jest.mock('fs-extra');

describe('ensureReadmePlaceholders function', () => {
  const path = './repo/myRepo';

  it('should throw when file contains no placeholders', async () => {
    mocked(readFile).mockResolvedValueOnce('yolo' as never);

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should throw when file does not contain start placeholder', async () => {
    mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons end -->\ncool' as never,
    );

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should throw when file does not contain end placeholder', async () => {
    mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool' as never,
    );

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should not throw when file contains placeholders', async () => {
    mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool<!-- readme-package-icons end -->' as never,
    );

    await expect(ensureReadmePlaceholders(path)).resolves.not.toThrow();
  });
});
