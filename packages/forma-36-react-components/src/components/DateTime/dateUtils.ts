import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
dayjs.extend(RelativeTime);

import { CoercibleDate } from './types';

const formatTokens = {
  FULL: 'D MMM YYYY[ at ]h:mm a',
  DATE_ONLY: 'D MMM YYYY',
  TIME_ONLY: 'h:mm a',
  WEEKDAY_DATE: 'ddd[, ]D MMM',
};

const formatTokensMachineReadable = {
  FULL: 'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
  DATE_ONLY: 'YYYY-MM-DD',
  TIME_ONLY: 'HH:mm:ss.SSS',
  WEEKDAY_DATE: 'MM-DD',
};

export type DateTimeFormat = keyof typeof formatTokens;

/**
 * @example
 * > formatDateTime(date)
 * 13 Aug 2019 at 10:00 am
 *
 * @example
 * > formatDateTime(date, 'DATE_ONLY')
 * 13 Aug 2019
 */
export const formatDateTime = (
  date: CoercibleDate,
  token: DateTimeFormat = 'FULL',
): string => {
  if (!formatTokens[token]) {
    throw new TypeError(`Unknown date format '${token}'`);
  }
  return dayjs(date).format(formatTokens[token]);
};

/**
 * @example
 * > formatMachineReadableDateTime(date)
 * 2019-08-13T10:00:00.000Z
 *
 * @example
 * > formatMachineReadableDateTime(date, 'DATE_ONLY')
 * 2019-08-13
 */
export const formatMachineReadableDateTime = (
  date: CoercibleDate,
  token: DateTimeFormat = 'FULL',
): string => {
  if (!formatTokens[token]) {
    throw new TypeError(`Unknown date format '${token}'`);
  }
  return dayjs(date).utc().format(formatTokensMachineReadable[token]);
};

/**
 * @example
 * > formatDate(date)
 * 13 Aug 2019
 */
export const formatDate = (date: CoercibleDate): string => {
  return formatDateTime(date, 'DATE_ONLY');
};

/**
 * @example
 * > formatTime(date)
 * 8:00 am
 */
export const formatTime = (date: CoercibleDate): string => {
  return formatDateTime(date, 'TIME_ONLY');
};

/**
 * @example
 * > formatWeekdayDate(date)
 * Mon, 12 Aug
 */
export const formatWeekdayDate = (date: CoercibleDate): string => {
  return formatDateTime(date, 'WEEKDAY_DATE');
};

export const formatRelativeDateTime = (
  date: CoercibleDate,
  baseDate: CoercibleDate = new Date(),
): string => {
  return dayjs(date).from(baseDate);
};
