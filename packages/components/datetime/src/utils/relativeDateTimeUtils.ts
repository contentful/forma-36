import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendarPlugin from 'dayjs/plugin/calendar';
dayjs.extend(utcPlugin);
dayjs.extend(relativeTime);
dayjs.extend(calendarPlugin);

import type { DateType } from '../types';

/**
 * A function that will return a string with how far a given date is in the past or future,
 * using a baseDate as reference. If the baseDate is not passed, the function will use today as reference.
 *
 * @param {DateType} date - the date to be formatted
 * @param {DateFormat} baseDate - the date that should be used as a reference (default is "today")
 * @returns a relative date
 *
 * @example
 * // Considering today as 18.08.2021
 * formatRelativeDateTime('2021-08-17T15:45:00') // returns "a day ago"
 *
 * @example
 * formatRelativeDateTime('2021-08-17T15:45:00', '2021-08-16') // returns "in a day"
 */
export function formatRelativeDateTime(
  date: DateType,
  baseDate: DateType = new Date(),
) {
  return dayjs(date).from(baseDate);
}

/**
 * A function that formats a date relative to Today or to the `baseDate` if passed.
 * If the date is not today, it will return a string with "Yesterday ...", "Tomorrow ...", etc
 * If the date is not in the current week, it return a string with "DD MMM YYYY" format
 * If the date is today, it will return a string with "... ago" or "in ..."
 *
 * @param {DateType} date - the date to be formatted
 * @param {DateFormat} baseDate - the date that should be used as a reference (default is "today")
 * @returns a relative date
 *
 * @example
 * // Considering today as 18.08.2021
 * formatRelativeToCurrentWeekDateTime('2021-08-17T15:45:00') // returns "Yesterday at 3:45 PM"
 *
 * @example
 * formatRelativeToCurrentWeekDateTime('2021-08-17T15:45:00', '2021-08-16') // returns "Tomorrow at 3:45 PM"
 */
export function formatRelativeToCurrentWeekDateTime(
  date: DateType,
  baseDate: DateType = new Date(),
) {
  const isToday = dayjs(date).isSame(baseDate, 'day');

  if (!isToday) {
    // if the date is not today, we display it with "Yesterday", "Tomorrow", etc.
    // and if the date is not in the current week then it will display "17 Aug 2021"
    return dayjs(date).calendar(baseDate, {
      sameElse: 'DD MMM YYYY',
    });
  }

  // returns "... ago"
  return formatRelativeDateTime(date, baseDate);
}
