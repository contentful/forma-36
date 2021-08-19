import React from 'react';
import {
  Box,
  CommonProps,
  PolymorphicComponent,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
} from '@contentful/f36-core';

import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendarPlugin from 'dayjs/plugin/calendar';
import isTodayPlugin from 'dayjs/plugin/isToday';
dayjs.extend(utcPlugin);
dayjs.extend(relativeTime);
dayjs.extend(calendarPlugin);
dayjs.extend(isTodayPlugin);

interface RelativeDateTimeInternalProps extends CommonProps {
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
   */
  isRelativeToCurrentWeek?: boolean;
}

export type RelativeDateTimeProps = PolymorphicComponentProps<
  'time',
  RelativeDateTimeInternalProps
>;

const _RelativeDateTime: PolymorphicComponentWithRef<
  RelativeDateTimeInternalProps,
  'time'
> = (
  {
    date,
    baseDate,
    isRelativeToCurrentWeek = false,
    className,
    testId = 'cf-ui-relative-date-time',
    ...otherProps
  }: RelativeDateTimeInternalProps,
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
    <Box
      {...otherProps}
      as="time"
      className={className}
      dateTime={machineReadableDate}
      data-test-id={testId}
      ref={ref}
    >
      {relativeDate}
    </Box>
  );
};

/**
 * The RelativeDateTime will show a `date` relative to "now" or to the `baseDate`
 * (e.g. in a day, in one month, one month ago, etc).
 */
export const RelativeDateTime: PolymorphicComponent<
  RelativeDateTimeInternalProps,
  'time'
> = React.forwardRef(_RelativeDateTime);
