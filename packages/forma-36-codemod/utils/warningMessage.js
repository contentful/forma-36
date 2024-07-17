const chalk = require('chalk');

/**
 * Prints a warning message to terminal
 * @param {string} message - Message to be printed
 * @param {{file: *, value: *}} param = Object with more information about the warning
 * @param {*} param.file - File object with path information
 * @param {*} param.value - Value object with line number information
 */
module.exports.warningMessage = function warningMessage(
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
