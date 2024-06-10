export function truncateMiddle(
  str: string,
  maxLength: number,
  replacement = '…',
) {
  if (str.length <= maxLength) {
    return str;
  }

  const replacementLength = replacement.length;
  if (replacementLength >= maxLength) {
    return replacement.slice(0, maxLength);
  }

  const maxLengthOfString = maxLength - replacementLength;

  const startLength = Math.ceil(maxLengthOfString / 2);
  const endLength = Math.floor(maxLengthOfString / 2);

  return `${str.slice(0, startLength)}${replacement}${str.slice(-endLength)}`;
}
