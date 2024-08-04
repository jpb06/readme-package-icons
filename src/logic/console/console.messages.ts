import chalk from 'chalk';

export const displaySuccess = (iconsCount: number): void => {
  const summary = `${chalk.yellowBright(iconsCount)} icons added`;
  console.info(
    `${chalk.cyanBright('readme-package-icons')} 🚀 - ${chalk.greenBright(
      'Readme updated',
    )} (${summary})`,
  );
};

export const displayError = (err: unknown): void => {
  console.error(
    `${chalk.cyanBright('readme-package-icons')} ❌ - ${chalk.redBright(
      (err as { stack: string }).stack,
    )}`,
  );
};
