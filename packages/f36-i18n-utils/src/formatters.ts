type ListFormatType = 'conjunction' | 'disjunction' | 'unit';

/**
 * Formats a number based on the provided locale.
 *
 * @example formatNumber('en-US', 1000);
 * // '1,000'
 * @example formatNumber('fr-FR', 1000);
 * // '1 000'
 * @example formatNumber('de-DE', 1000);
 * // '1.000'
 */
export function formatNumber(locale: string, value: number): string {
  return Intl.NumberFormat(locale).format(value);
}

/**
 * Formats a list of numbers based on the provided locale and list type.
 *
 * Each number is formatted according to the locale's number formatting rules.
 *
 * @example formatNumberList('en-US', [1, 2, 3]);
 * // '1, 2, and 3'
 * @example formatNumberList('fr-FR', [1, 2, 3]);
 * // '1, 2 et 3'
 * @example formatNumberList('de-DE', [1, 2, 3]);
 * // '1, 2 und 3'
 *
 * - The list type can be 'conjunction' (default), 'disjunction', or 'unit'.
 * @example formatNumberList('en-US', [1, 2, 3], 'disjunction');
 * // '1, 2, or 3'
 * @example formatNumberList('en-US', [1, 2, 3], 'unit');
 * // '1, 2, 3'
 */
export function formatNumberList(
  locale: string,
  items: number[],
  type: ListFormatType = 'conjunction',
): string {
  return formatStringList(
    locale,
    items.map((item) => formatNumber(locale, item)),
    type,
  );
}

/**
 * Formats the given number as currency based on the provided locale.
 *
 * @example formatCurrency('en-US', 15);
 * // '$15'
 * @example formatCurrency('fr-FR', 15);
 * // '15 $'
 * @example formatCurrency('de-DE', 15);
 * // '15 $'
 *
 * - The currency is set to USD by default, but can be overridden with options.
 * @example formatCurrency('en-US', 15, { currency: 'EUR' });
 * // '€15'
 * - Decimal places are set to 0 by default, but can be overridden with options.
 * @example formatCurrency('en-US', 15.5, { minimumFractionDigits: 2 });
 * // '$15.50'
 */
export function formatCurrency(
  locale: string,
  value: number,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol',
    ...options,
  }).format(value);
}

/**
 * Formats a list of strings based on the provided locale and list type.
 *
 * @example formatStringList('en-US', ['a', 'b', 'c']);
 * // 'a, b, and c'
 * @example formatStringList('fr-FR', ['a', 'b', 'c']);
 * // 'a, b et c'
 * @example formatStringList('de-DE', ['a', 'b', 'c']);
 * // 'a, b und c'
 *
 * - The list type can be 'conjunction' (default), 'disjunction', or 'unit'.
 * @example formatStringList('en-US', ['a', 'b', 'c'], 'disjunction');
 * // 'a, b, or c'
 * @example formatStringList('en-US', ['a', 'b', 'c'], 'unit');
 * // 'a, b, c'
 */
export function formatStringList(
  locale: string,
  items: string[],
  type: ListFormatType = 'conjunction',
): string {
  const formatter = new Intl.ListFormat(locale, {
    style: 'long',
    type,
  });
  return formatter.format(items);
}

/**
 * Joins the strings with commas and a final 'and X more' (determined by maxLength).
 *
 * The sentence is localized based on the provided locale.
 *
 * @example formatTruncatedStringList('en-US', ['a', 'b', 'c', 'd'], 2)
 * // 'a, b and 2 more'
 * @example formatTruncatedStringList('fr-FR', ['a', 'b', 'c', 'd'], 2)
 * // 'a, b et 2 autres'
 * @example formatTruncatedStringList('de-DE', ['a', 'b', 'c', 'd'], 2)
 * // 'a, b und 2 weitere'
 *
 * - If the list length is less than or equal to maxLength, it formats the list normally.
 * @example formatTruncatedStringList('en-US', ['a', 'b'], 2)
 * // 'a and b'
 * @example formatTruncatedStringList('fr-FR', ['a', 'b'], 2)
 * // 'a et b'
 * @example formatTruncatedStringList('de-DE', ['a', 'b'], 2)
 * // 'a und b'
 */
export function formatTruncatedStringList(
  locale: string,
  list: string[],
  maxLength: number,
) {
  if (list.length <= maxLength) {
    return formatStringList(locale, list);
  }

  // This prevents finishing the sentence with 'and 1 more'
  if (list.length === maxLength + 1) {
    if (maxLength === 1) {
      return formatStringList(locale, list);
    }
    maxLength = maxLength - 1;
  }

  const restLength = list.length - maxLength;
  const initialList = list.slice(0, maxLength);
  initialList.push(`${restLength} ${getLocalizeMore(locale)}`);
  return formatStringList(locale, initialList);
}

function getLocalizeMore(locale: string) {
  switch (locale) {
    case 'de-DE':
      return 'weitere';
    case 'fr-FR':
      return 'autres';
  }
  return 'more';
}
