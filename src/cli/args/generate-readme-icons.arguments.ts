import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';

import { GenerateReadmeIconsArgs } from '../../workflows/generate-readme-icons';

type Argv = { p: string };

export const validateArguments = (): GenerateReadmeIconsArgs => {
  const argv = yargs(hideBin(process.argv))
    .scriptName('generateReadmeIcons')
    .usage(chalk.blueBright('$0 -p [repoPath]'))
    .epilogue('Generates icons from dependencies and adds them to README.md')
    .example('$0 -p ./repos/myRepo', '')
    .describe('p', chalk.cyanBright('The path to the repo'))
    .demandOption(['p']).argv as Argv;

  return {
    path: argv.p,
  };
};
