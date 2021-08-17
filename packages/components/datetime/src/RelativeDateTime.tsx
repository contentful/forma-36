import React from 'react';

import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
extend(utcPlugin);

export interface RelativeDateTimeProps {
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
  className?: string;
  testId?: string;
}

function RelativeDateTime(
  {
    date,
    baseDate = new Date(),
    className,
    testId = 'f36-relative-date-time',
  }: RelativeDateTimeProps,
  ref: React.Ref<HTMLTimeElement>,
) {
  const machineReadableDate = dayjs(date).utc().format();
  const relativeDate = dayjs(date).from(baseDate);

  return (
    <time
      className={className}
      dateTime={machineReadableDate}
      data-test-id={testId}
      ref={ref}
    >
      {relativeDate}
    </time>
  );
}

/**
 * The RelativeDateTime will show a `date` relative to "now" or to the `baseDate`
 * (e.g. in a day, in one month, one month ago, etc).
 */
const _RelativeDateTime = React.forwardRef(RelativeDateTime);
export { _RelativeDateTime as RelativeDateTime };
