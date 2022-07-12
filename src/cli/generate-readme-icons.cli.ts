#!/usr/bin/env node

import {
  displayError,
  displaySuccess,
} from '../logic/console/console.messages';
import { generateReadmeIcons } from '../workflows/generate-readme-icons';
import { validateArguments } from './args/generate-readme-icons.arguments';

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
