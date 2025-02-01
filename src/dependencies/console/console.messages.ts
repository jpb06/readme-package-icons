import colors from 'picocolors';

export const displaySuccess = (iconsCount: number): void => {
  const summary = `${colors.yellowBright(iconsCount)} icons added`;
  console.info(
    `${colors.cyanBright('readme-package-icons')} 🚀 - ${colors.greenBright(
      'Readme updated',
    )} (${summary})`,
  );
};

export const displayError = (err: unknown): void => {
  console.error(
    `${colors.cyanBright('readme-package-icons')} ❌ - ${colors.redBright(
      (err as { stack: string }).stack,
    )}`,
  );
};
