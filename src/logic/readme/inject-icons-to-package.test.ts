import { readFile, writeFile } from 'fs-extra';
import { mocked } from 'jest-mock';

import { injectIconsToPackage } from './inject-icons-to-package';

jest.mock('fs-extra');

describe('injectIconsToPackage function', () => {
  const path = './repo/myRepo';

  it('should replace everything between placeholders', async () => {
    mocked(readFile).mockResolvedValueOnce(
      'yolo\n<!-- readme-package-icons start -->\ncool<!-- readme-package-icons end -->bro' as never,
    );

    await injectIconsToPackage(path, 'content');

    expect(writeFile).toHaveBeenCalledWith(
      path,
      'yolo\n<!-- readme-package-icons start -->\n\ncontent\n\n<!-- readme-package-icons end -->bro',
    );
  });
});
