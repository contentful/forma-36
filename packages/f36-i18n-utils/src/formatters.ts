type ListFormatType = 'conjunction' | 'disjunction' | 'unit';

export function formatNumber(locale: string, value: number): string {
  return Intl.NumberFormat(locale).format(value);
}

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
 * The sentence is localized based on the provided locale.
 *
 * formatTruncatedStringList('en-US', ['a', 'b', 'c', 'd'], 2)
 * // => 'a, b and 2 more'
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

function getLocalizeMore(locale: string) {
  switch (locale) {
    case 'de-DE':
      return 'weitere';
    case 'fr-FR':
      return 'autres';
  }
  return 'more';
}
