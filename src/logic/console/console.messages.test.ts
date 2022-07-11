import chalk from 'chalk';

import { displayError, displaySuccess } from './console.messages';

jest.mock('chalk', () => ({
  cyanBright: jest.fn(),
  greenBright: jest.fn(),
  redBright: jest.fn(),
  whiteBright: jest.fn(),
  yellowBright: jest.fn(),
  underline: {
    cyanBright: jest.fn(),
  },
}));
global.console = { info: jest.fn(), error: jest.fn() } as unknown as Console;

describe('displaySuccess function', () => {
  beforeEach(() => jest.clearAllMocks());

  describe('displaySuccess function', () => {
    it('should call console.info', () => {
      displaySuccess(5);

      // eslint-disable-next-line no-console
      expect(console.info).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', () => {
      displaySuccess(5);

      expect(chalk.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display a success message in green with the number of icons added', () => {
      displaySuccess(5);

      expect(chalk.greenBright).toHaveBeenCalledTimes(1);
      expect(chalk.greenBright).toHaveBeenCalledWith('Readme updated');

      expect(chalk.yellowBright).toHaveBeenCalledTimes(1);
      expect(chalk.yellowBright).toHaveBeenCalledWith(5);
    });
  });

  describe('displayError function', () => {
    const errorMessage = 'oh no!';

    it('should call console.error', () => {
      displayError({ stack: errorMessage });

      expect(console.error).toHaveBeenCalledTimes(1);
    });

    it('should display the package name in cyan', () => {
      displayError({ stack: errorMessage });

      expect(chalk.cyanBright).toHaveBeenCalledWith('readme-package-icons');
    });

    it('should display the error message in red', () => {
      displayError({ stack: errorMessage });

      expect(chalk.redBright).toHaveBeenCalledWith(errorMessage);
    });
  });
});
