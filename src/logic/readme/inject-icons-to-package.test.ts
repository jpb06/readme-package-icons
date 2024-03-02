import { readFile, writeFile } from 'fs-extra';
import { describe, it, expect, vi } from 'vitest';

import { injectIconsToPackage } from './inject-icons-to-package';

vi.mock('fs-extra', () => ({
  readFile: vi.fn(),
  writeFile: vi.fn(),
}));

describe('injectIconsToPackage function', () => {
  const path = './repo/myRepo';

  it('should replace everything between placeholders', async () => {
    vi.mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool<!-- readme-package-icons end -->bro' as never,
    );

    await injectIconsToPackage(path, 'content');

    expect(writeFile).toHaveBeenCalledWith(
      path,
      'yolo\n<!-- readme-package-icons start -->\n\ncontent\n\n<!-- readme-package-icons end -->bro',
    );
  });
});
