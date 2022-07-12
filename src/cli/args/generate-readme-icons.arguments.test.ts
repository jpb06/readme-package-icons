import { runCommand } from '../../tests/run-command';

describe('validateGenerateReadmeIconsArguments function', () => {
  const validateArgumentsPath = './../cli/args/generate-readme-icons.arguments';
  const path = './repos/myRepo';

  global.console = { error: jest.fn() } as unknown as Console;
  const mockExit = jest
    .spyOn(process, 'exit')
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    .mockImplementation((() => {}) as (code?: number | undefined) => never);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display an error when no -p option was given', async () => {
    runCommand(validateArgumentsPath);

    expect(mockExit).toHaveBeenCalled();

    expect(console.error).toHaveBeenCalledWith('Missing required argument: p');
  });

  it('should return args', async () => {
    const args = runCommand(validateArgumentsPath, '-p', path);

    expect(args).toStrictEqual({
      path,
    });
  });
});
