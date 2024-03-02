import { describe, it, beforeEach, expect, vi } from 'vitest';

import { mockChalk } from '../../tests/mocks/chalk.mock';
import { mockConsole } from '../../tests/mocks/console.mock';

mockConsole({
  info: vi.fn(),
  error: vi.fn(),
});
mockChalk({
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
      const { displaySuccess } = await import('./console.messages');

      displaySuccess(5);

      // eslint-disable-next-line no-console
      expect(console.info).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', async () => {
      const chalk = await import('chalk');
      const { displaySuccess } = await import('./console.messages');

      displaySuccess(5);

      expect(chalk.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display a success message in green with the number of icons added', async () => {
      const chalk = await import('chalk');
      const { displaySuccess } = await import('./console.messages');

      displaySuccess(5);

      expect(chalk.greenBright).toHaveBeenCalledTimes(1);
      expect(chalk.greenBright).toHaveBeenCalledWith('Readme updated');

      expect(chalk.yellowBright).toHaveBeenCalledTimes(1);
      expect(chalk.yellowBright).toHaveBeenCalledWith(5);
    });
  });

  describe('displayError function', () => {
    const errorMessage = 'oh no!';

    it('should call console.error', async () => {
      const { displayError } = await import('./console.messages');

      displayError({ stack: errorMessage });

      expect(console.error).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', async () => {
      const chalk = await import('chalk');
      const { displayError } = await import('./console.messages');

      displayError({ stack: errorMessage });

      expect(chalk.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display the error message in red', async () => {
      const chalk = await import('chalk');
      const { displayError } = await import('./console.messages');

      displayError({ stack: errorMessage });

      expect(chalk.redBright).toHaveBeenCalledWith(errorMessage);
    });
  });
});
