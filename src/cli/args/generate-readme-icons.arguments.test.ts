import { runCommand } from '../../tests/run-command';

describe('validateGenerateReadmeIconsArguments function', () => {
  const validateArgumentsPath = './../cli/args/generate-readme-icons.arguments';
  const path = './repos/myRepo';

  global.console = { error: jest.fn() } as unknown as Console;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return args', async () => {
    const args = runCommand(validateArgumentsPath, '-p', path, '-h', '100');

    expect(args).toStrictEqual({
      iconsHeight: 100,
      path,
    });
  });

  it('should return args with defaults', async () => {
    const args = runCommand(validateArgumentsPath);

    expect(args).toStrictEqual({
      iconsHeight: 50,
      path: '.',
    });
  });
});
