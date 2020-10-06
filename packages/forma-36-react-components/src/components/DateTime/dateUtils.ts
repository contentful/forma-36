import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { CoercibleDate } from './types';
dayjs.extend(RelativeTime);

const formatTokens = {
  FULL: 'D MMM YYYY[ at ]h:mm a',
  DATE_ONLY: 'D MMM YYYY',
  TIME_ONLY: 'h:mm a',
  WEEKDAY_DATE: 'ddd[, ]D MMM',
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
export const formatDateTime = (date: CoercibleDate, token: DateTimeFormat = 'FULL'): string => {
  if (!formatTokens[token]) {
    throw new TypeError(`Unknown date format '${token}'`);
  }
  return dayjs(date).format(formatTokens[token]);
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

export const formatRelativeDateTime = (date: CoercibleDate, baseDate?: CoercibleDate): string => {
  baseDate = baseDate ?? new Date();
  return dayjs(date).from(baseDate);
};
