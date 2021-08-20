import React from 'react';
import { CommonProps } from '@contentful/f36-core';

import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendarPlugin from 'dayjs/plugin/calendar';
import isTodayPlugin from 'dayjs/plugin/isToday';
dayjs.extend(utcPlugin);
dayjs.extend(relativeTime);
dayjs.extend(calendarPlugin);
dayjs.extend(isTodayPlugin);

export interface RelativeDateTimeProps
  extends CommonProps,
    React.AllHTMLAttributes<HTMLTimeElement> {
  /**
   * The date that will be displayed. It accepts a JS Date, an ISO8601 Timestamp string, or Unix Epoch Milliseconds number
   */
  date: Date | string | number;
  /**
   * If a value is passed to baseDate, then the component will compare both dates and return the time between them.
   * If no value is passed then the date will be compared to "now"
   *
   * @default "Now"
   */
  baseDate?: Date | string | number;
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
    className,
    testId = 'cf-ui-relative-date-time',
    ...otherProps
  }: RelativeDateTimeProps,
  ref: React.Ref<HTMLTimeElement>,
) => {
  const now = new Date();
  const dayjsDate = dayjs(date);
  const machineReadableDate = dayjsDate.format();

  let relativeDate: string;

  if (isRelativeToCurrentWeek && !dayjsDate.isToday()) {
    // if isRelativeToCurrentWeek is true and the date is not today, we display the date with Yesterday, Tomorrow, etc.
    // but if the date is not in the current week then it will display "17 Aug 2021"
    relativeDate = dayjsDate.calendar(null, {
      sameElse: 'DD MMM YYYY',
    });
  } else {
    // otherwise we display it with "X days ago" or "in X days"
    relativeDate = dayjsDate.from(baseDate ?? now);
  }

  return (
    <time
      className={className}
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
