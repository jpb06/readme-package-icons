#!/usr/bin/env node

import { displayError, displaySuccess } from '@deps/console';

import { generateReadmeIcons } from '../workflows/generate-readme-icons.js';
import { validateArguments } from './args/generate-readme-icons.arguments.js';

/* istanbul ignore file */

(async (): Promise<void> => {
  try {
    const args = validateArguments();

    const iconsCount = await generateReadmeIcons(args);

    displaySuccess(iconsCount);
  } catch (err) {
    displayError(err);
  }
})();
