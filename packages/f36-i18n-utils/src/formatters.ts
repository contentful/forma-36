import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/fr';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export function formatDate(locale: string, date: string): string {
  return dayjs(date)
    .locale(mapToDayjsLocale(locale))
    .format(getLocalizeDateFormat(locale));
}

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

function getLocalizeDateFormat(locale: string) {
  switch (locale) {
    case 'de-DE':
      return 'ddd, DD. MMM YYYY [um] H:mm:ss';
    case 'fr-FR':
      return 'ddd DD MMM YYYY [à] H:mm:ss';
  }
  return 'ddd, DD MMM YYYY [at] h:mm:ss A';
}

function mapToDayjsLocale(locale: string) {
  switch (locale) {
    case 'de-DE':
      return 'de';
    case 'fr-FR':
      return 'fr';
  }
  return 'en';
}
