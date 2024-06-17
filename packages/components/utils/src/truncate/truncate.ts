export type TruncateOptions = {
  /**
   * Number of characters to keep at the start of the string
   * @default 0
   */
  start?: number;
  /**
   * Number of characters to keep at the end of the string
   * @default 0
   */
  end?: number;
  /**
   * String to replace the truncated part
   * @default '…'
   */
  replacement?: string;
};

/**
 * Truncates a given string from the start, end or the middle
 *
 * @param str String to truncate
 * @param options Truncate options
 * @returns Truncated string
 */
export function truncate(
  str: string,
  {
    start: startLength = 0,
    end: endLength = 0,
    replacement = '…',
  }: TruncateOptions,
) {
  if (str.length <= startLength + endLength) {
    return str;
  }

  const start = startLength > 0 ? str.slice(0, startLength) : '';
  const end = endLength > 0 ? str.slice(-endLength) : '';

  return `${start}${replacement}${end}`;
}
