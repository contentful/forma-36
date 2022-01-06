module.exports.warningMessage = function warningMessage(
  message,
  { file, value } = {},
) {
  const filePath = file?.path || '';
  const lineNumber = value?.loc?.start?.line || '';
  const messageHeader = [filePath, lineNumber]
    .filter((x) => x !== '')
    .join(':');
  const warning = [messageHeader, message].filter((x) => x !== '').join('\n\n');
  // eslint-disable-next-line no-console
  console.warn(warning);
};
