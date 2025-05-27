export function formatNumber(locale: string, value: number): string {
  return Intl.NumberFormat(locale).format(value);
}

export function formatStringList(locale: string, items: string[]): string {
  if (items.length === 1) {
    return items[0];
  }
  if (items.length === 2) {
    return `${items[0]} ${getLocalizeAnd(locale)} ${items[1]}`;
  }

  return `${items.slice(0, -1).join(', ')} ${getLocalizeAnd(locale)} ${
    items[items.length - 1]
  }`;
}

export function formatNumberList(locale: string, items: number[]): string {
  return formatStringList(
    locale,
    items.map((item) => formatNumber(locale, item)),
  );
}

function getLocalizeAnd(locale: string) {
  switch (locale) {
    case 'de-DE':
      return 'und';
    case 'fr-FR':
      return 'et';
  }
  return 'and';
}
