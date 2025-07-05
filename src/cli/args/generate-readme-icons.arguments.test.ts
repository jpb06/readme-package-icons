import { beforeEach, describe, expect, it, vi } from 'vitest';

import { runCommand } from '../../tests/run-command.js';

describe('validateGenerateReadmeIconsArguments function', () => {
  const validateArgumentsPath = './../cli/args/generate-readme-icons.arguments';
  const path = './repos/myRepo';

  global.console = { error: vi.fn() } as unknown as Console;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return args', async () => {
    const args = await runCommand(
      validateArgumentsPath,
      '-p',
      path,
      '-h',
      '100',
    );

    expect(args).toStrictEqual({
      iconsSize: 100,
      path,
    });
  });

  it('should return args with defaults', async () => {
    const args = await runCommand(validateArgumentsPath);

    expect(args).toStrictEqual({
      iconsSize: 50,
      path: '.',
    });
  });
});
