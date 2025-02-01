import { readFile } from 'node:fs/promises';
import { describe, expect, it, vi } from 'vitest';

import { ensureReadmePlaceholders } from './ensure-readme-placeholders.js';

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
}));

describe('ensureReadmePlaceholders function', () => {
  const path = './repo/myRepo';

  it('should throw when file contains no placeholders', async () => {
    vi.mocked(readFile).mockResolvedValueOnce('yolo');

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should throw when file does not contain start placeholder', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons end -->\ncool',
    );

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should throw when file does not contain end placeholder', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool',
    );

    await expect(ensureReadmePlaceholders(path)).rejects.toThrow(
      'Missing placeholders in ./repo/myRepo',
    );
  });

  it('should not throw when file contains placeholders', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool<!-- readme-package-icons end -->',
    );

    await expect(ensureReadmePlaceholders(path)).resolves.not.toThrow();
  });
});
