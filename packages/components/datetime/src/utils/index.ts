import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
extend(utcPlugin);

import type { DateType, DateFormat } from '../../types';

/**
 * A funtion that will return a formatted date string. The format will dependend on the option
 * passed in the second argument.
 * By default, it will return a string with Forma 36’s "full" format (e.g. Tue, 17 Aug 2021 at 3:45 PM)
 *
 * @param {DateType} date - the date to be formatted
 * @param {DateFormat} format - the desired format ("full", "day", "weekday", or "time")
 * @returns a formatted date
 */
export function formatDateAndTime(
  date: DateType,
  format: DateFormat = 'full',
): string {
  let template: string;

  switch (format) {
    case 'day':
      template = 'DD MMM YYYY'; // 17 Aug 2021
      break;
    case 'weekday':
      template = 'ddd, DD MMM'; // Tue, 17 Aug
      break;
    case 'time':
      template = 'h:mm A'; // 3:45 PM
      break;
    default:
      template = 'ddd, DD MMM YYYY [at] h:mm A'; // Tue, 17 Aug 2021 at 3:45 PM
  }

  return dayjs(date).format(template);
}
