import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
dayjs.extend(utcPlugin);

import type { DateType, DateFormat } from '../types';

/**
 * A funtion that will return a formatted date string. The format will dependend on the option
 * passed in the second argument.
 * By default, it will return a string with Forma 36’s "full" format (e.g. Tue, 17 Aug 2021 at 3:45 PM)
 *
 * @param {DateType} date - the date to be formatted
 * @param {DateFormat} format - the desired format ("full", "day", "weekday", or "time")
 * @returns a formatted date
 *
 * @example
 * formatDateAndTime('2021-08-17T15:45:00') // returns "Tue, 17 Aug 2021 at 3:45 PM"
 *
 * @example
 * formatDateAndTime('2021-08-17T15:45:00', 'day') // returns "17 Aug 2021"
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
    case 'fullWithSeconds':
      template = 'ddd, DD MMM YYYY [at] h:mm:ss A'; // Tue, 17 Aug 2021 at 3:45:67 PM
      break;
    default:
      template = 'ddd, DD MMM YYYY [at] h:mm A'; // Tue, 17 Aug 2021 at 3:45 PM
  }

  return dayjs(date).format(template);
}

/**
 * A funtion that will return a machine-readable date string that should be passed to the `datetime` attribute of a `<time>` tag
 * By default, it will return a string with "YYYY-MM-DDTHH:mm:ss.SSS[Z]" format
 *
 * @param {DateType} date - the date to be formatted
 * @param {DateFormat} format - the desired format ("full", "day", "weekday", or "time")
 * @returns a formatted date
 *
 * @example
 * formatMachineReadableDateTime(date) // returns 2019-08-13T10:00:00.000Z
 *
 * @example
 * formatMachineReadableDateTime(date, 'day') // returns 2019-08-13
 */
export function formatMachineReadableDateTime(
  date: DateType,
  format: DateFormat = 'full',
): string {
  let template: string;

  switch (format) {
    case 'day':
      template = 'YYYY-MM-DD'; // 2019-08-24
      break;
    case 'weekday':
      template = 'MM-DD'; // 08-24
      break;
    case 'time':
      template = 'HH:mm:ss.SSS'; // 15:44:07.000
      break;
    default:
      template = 'YYYY-MM-DDTHH:mm:ss.SSS[Z]'; // 2019-08-24T15:44:07.000Z
  }

  return dayjs(date).format(template);
}

/**
 * @example
 * > formatDate(date)
 * 13 Aug 2019
 */
export const formatDate = (date: DateType): string => {
  return formatDateAndTime(date, 'day');
};

/**
 * @example
 * > formatTime(date)
 * 8:00 AM
 */
export const formatTime = (date: DateType): string => {
  return formatDateAndTime(date, 'time');
};

/**
 * @example
 * > formatWeekdayDate(date)
 * Mon, 12 Aug
 */
export const formatWeekdayDate = (date: DateType): string => {
  return formatDateAndTime(date, 'weekday');
};
