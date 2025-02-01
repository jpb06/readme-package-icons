import colors from 'picocolors';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import type { GenerateReadmeIconsArgs } from '../../workflows/generate-readme-icons.js';

interface Argv {
  p: string;
  h: number;
}

export const validateArguments = (): GenerateReadmeIconsArgs => {
  const argv = yargs(hideBin(process.argv))
    .scriptName('generateReadmeIcons')
    .usage(colors.blueBright('$0 -p [repoPath] -h [iconsHeight]'))
    .epilogue('Generates icons from dependencies and adds them to README.md')
    .example('$0 -p ./repos/myRepo -h 50', '')
    .describe('p', colors.cyanBright('The path to the repo'))
    .describe('h', colors.cyanBright('The height'))
    .default('h', 50)
    .default('p', '.')
    .number('h').argv as Argv;

  return {
    path: argv.p,
    iconsHeight: argv.h,
  };
};
