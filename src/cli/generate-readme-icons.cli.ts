#!/usr/bin/env node

import { validateArguments } from './args/generate-readme-icons.arguments';
import {
  displayError,
  displaySuccess,
} from '../logic/console/console.messages';
import { generateReadmeIcons } from '../workflows/generate-readme-icons';

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
