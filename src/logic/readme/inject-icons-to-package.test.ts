import { readFile, writeFile } from 'node:fs/promises';
import { describe, expect, it, vi } from 'vitest';

import { injectIconsToPackage } from './inject-icons-to-package.js';

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(),
  writeFile: vi.fn(),
}));

describe('injectIconsToPackage function', () => {
  const path = './repo/myRepo';

  it('should replace everything between placeholders', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool<!-- readme-package-icons end -->bro',
    );

    await injectIconsToPackage(path, 'content');

    expect(writeFile).toHaveBeenCalledWith(
      path,
      'yolo\n<!-- readme-package-icons start -->\n\ncontent\n\n<!-- readme-package-icons end -->bro',
    );
  });
});
