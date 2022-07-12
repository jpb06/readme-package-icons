import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import { GenerateReadmeIconsArgs } from '../../workflows/generate-readme-icons';

type Argv = { p: string; h: number };

export const validateArguments = (): GenerateReadmeIconsArgs => {
  const argv = yargs(hideBin(process.argv))
    .scriptName('generateReadmeIcons')
    .usage(chalk.blueBright('$0 -p [repoPath] -h [iconsHeight]'))
    .epilogue('Generates icons from dependencies and adds them to README.md')
    .example('$0 -p ./repos/myRepo -h 50', '')
    .describe('p', chalk.cyanBright('The path to the repo'))
    .describe('h', chalk.cyanBright('The height'))
    .default('h', 50)
    .default('p', '.')
    .number('h').argv as Argv;

  return {
    path: argv.p,
    iconsHeight: argv.h,
  };
};
