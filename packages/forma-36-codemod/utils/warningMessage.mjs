import chalk from 'chalk';

export const warningMessage = function warningMessage(
  message,
  { file, value } = {},
) {
  const filePath = file?.path || '';
  const lineNumber = value?.loc?.start?.line || '';
  const messageHeader = chalk.bold(
    [filePath, lineNumber].filter((x) => x !== '').join(':'),
  );
  const warning = [messageHeader, message, '\n']
    .filter((x) => x !== '')
    .join('\n');
  // eslint-disable-next-line no-console
  console.warn(chalk.yellow(warning));
};
