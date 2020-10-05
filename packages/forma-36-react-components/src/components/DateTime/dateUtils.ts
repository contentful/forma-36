import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(RelativeTime);

const formatTokens = {
  FULL: 'D MMM YYYY[ at ]h:mm a',
  DATE_ONLY: 'D MMM YYYY',
  TIME_ONLY: 'h:mm a',
  WEEKDAY_DATE: 'ddd[, ]D MMM',
};

export type DateTimeFormat = keyof typeof formatTokens;

export const formatDateTime = (date: Date, token: DateTimeFormat): string => {
  if (!formatTokens[token]) {
    throw new TypeError(`Unknown date format '${token}'`);
  }
  return dayjs(date).format(formatTokens[token]);
};

/**
 * @example
 * > formatAbsoluteDateTime(date)
 * 13 Aug 2019 at 10:00 am
 */
export const formatAbsoluteDateTime = (date: Date): string => {
  return formatDateTime(date, 'FULL');
};

/**
 * @example
 * > formatAbsoluteDate(date)
 * 13 Aug 2019
 */
export const formatAbsoluteDate = (date: Date): string => {
  return formatDateTime(date, 'DATE_ONLY');
};

/**
 * @example
 * > formatAbsoluteTime(date)
 * 8:00 am
 */
export const formatAbsoluteTime = (date: Date): string => {
  return formatDateTime(date, 'TIME_ONLY');
};

/**
 * @example
 * > formatWeekdayDate(date)
 * Mon, 12 Aug
 */
export const formatWeekdayDate = (date: Date): string => {
  return formatDateTime(date, 'WEEKDAY_DATE');
};

export const formatRelativeDateTime = (date: Date, baseDate?: Date): string => {
  baseDate = baseDate ?? new Date();
  return dayjs(date).from(baseDate);
};
