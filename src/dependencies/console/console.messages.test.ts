import { beforeEach, describe, expect, it, vi } from 'vitest';

import { mockConsole, mockPicocolors } from '@tests/mocks';

mockConsole({
  info: vi.fn(),
  error: vi.fn(),
});
mockPicocolors({
  cyanBright: vi.fn(),
  greenBright: vi.fn(),
  redBright: vi.fn(),
  whiteBright: vi.fn(),
  yellowBright: vi.fn(),
  underline: {
    cyanBright: vi.fn(),
  },
});

describe('displaySuccess function', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('displaySuccess function', () => {
    it('should call console.info', async () => {
      const { displaySuccess } = await import('./console.messages.js');

      displaySuccess(5);

      expect(console.info).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', async () => {
      const colors = await import('picocolors');
      const { displaySuccess } = await import('./console.messages.js');

      displaySuccess(5);

      expect(colors.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display a success message in green with the number of icons added', async () => {
      const colors = await import('picocolors');
      const { displaySuccess } = await import('./console.messages.js');

      displaySuccess(5);

      expect(colors.greenBright).toHaveBeenCalledTimes(1);
      expect(colors.greenBright).toHaveBeenCalledWith('Readme updated');

      expect(colors.yellowBright).toHaveBeenCalledTimes(1);
      expect(colors.yellowBright).toHaveBeenCalledWith(5);
    });
  });

  describe('displayError function', () => {
    const errorMessage = 'oh no!';

    it('should call console.error', async () => {
      const { displayError } = await import('./console.messages.js');

      displayError({ stack: errorMessage });

      expect(console.error).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', async () => {
      const colors = await import('picocolors');
      const { displayError } = await import('./console.messages.js');

      displayError({ stack: errorMessage });

      expect(colors.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display the error message in red', async () => {
      const colors = await import('picocolors');
      const { displayError } = await import('./console.messages.js');

      displayError({ stack: errorMessage });

      expect(colors.redBright).toHaveBeenCalledWith(errorMessage);
    });
  });
});
