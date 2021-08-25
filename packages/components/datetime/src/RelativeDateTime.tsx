import React from 'react';
import { CommonProps } from '@contentful/f36-core';

import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendarPlugin from 'dayjs/plugin/calendar';
dayjs.extend(utcPlugin);
dayjs.extend(relativeTime);
dayjs.extend(calendarPlugin);

import type { DateType } from '../types';
import {
  formatMachineReadableDateTime,
  formatRelativeDateTime,
  formatRelativeToCurrentWeekDateTime,
} from './utils';

export interface RelativeDateTimeProps
  extends CommonProps,
    React.AllHTMLAttributes<HTMLTimeElement> {
  /**
   * The date that will be displayed. It accepts a JS Date, an ISO8601 Timestamp string, or Unix Epoch Milliseconds number
   */
  date: DateType;
  /**
   * If a value is passed to baseDate, then the component will compare both dates and return the time between them.
   * If no value is passed then the date will be compared to "now"
   *
   * @default "Now"
   */
  baseDate?: DateType;
  /**
   * Sets the date to be relative only if it is in the current week
   * @default false
   */
  isRelativeToCurrentWeek?: boolean;
}

const _RelativeDateTime = (
  {
    date,
    baseDate,
    isRelativeToCurrentWeek = false,
    testId = 'cf-ui-relative-date-time',
    ...otherProps
  }: RelativeDateTimeProps,
  ref: React.Ref<HTMLTimeElement>,
) => {
  const now = new Date();
  const referenceDate = baseDate ?? now;
  const dayjsDate = dayjs(date);
  const machineReadableDate = formatMachineReadableDateTime(date);

  let relativeDate: string;

  if (isRelativeToCurrentWeek && !dayjsDate.isSame(referenceDate, 'day')) {
    /**
     * if isRelativeToCurrentWeek is true and the date is not today, we display the date with Yesterday, Tomorrow, etc
     * or, if the date is not in the current week, it displays "17 Aug 2021"
     *
     * check formatRelativeToCurrentWeekDateTime for more details
     */
    relativeDate = formatRelativeToCurrentWeekDateTime(date, referenceDate);
  } else {
    // otherwise we display it with "... ago" or "in ..." notation
    relativeDate = formatRelativeDateTime(date, referenceDate);
  }

  return (
    <time
      dateTime={machineReadableDate}
      data-test-id={testId}
      {...otherProps}
      ref={ref}
    >
      {relativeDate}
    </time>
  );
};

/**
 * The RelativeDateTime will show a `date` relative to "now" or to the `baseDate`
 * (e.g. in a day, in one month, one month ago, etc).
 */
export const RelativeDateTime = React.forwardRef(_RelativeDateTime);
