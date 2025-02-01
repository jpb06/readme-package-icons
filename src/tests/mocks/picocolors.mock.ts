import { type Mock, vi } from 'vitest';

interface PicocolorsMockArgs {
  cyanBright?: Mock;
  greenBright?: Mock;
  redBright?: Mock;
  whiteBright?: Mock;
  yellowBright?: Mock;
  underline?: {
    cyanBright?: Mock;
  };
}

export const mockPicocolors = (args: PicocolorsMockArgs) => {
  vi.doMock('picocolors', () => ({ default: args, ...args }));
};
