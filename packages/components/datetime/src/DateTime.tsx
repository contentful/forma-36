import React from 'react';
import { CommonProps } from '@contentful/f36-core';

import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
extend(utcPlugin);

export interface DateTimeProps
  extends CommonProps,
    React.AllHTMLAttributes<HTMLTimeElement> {
  /**
   * The date that will be displayed. It accepts a JS Date, an ISO8601 Timestamp string, or Unix Epoch Milliseconds number
   */
  date: Date | string | number;
  /**
   * The format in which the date will be presented
   *
   * @default full
   **/
  format?: 'full' | 'time' | 'weekday' | 'day';
}

function formatDateAndTime(
  date: DateTimeProps['date'],
  format: DateTimeProps['format'],
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

const _DateTime = (
  {
    className,
    date,
    format = 'full',
    testId = 'cf-ui-date-time',
    ...otherProps
  }: DateTimeProps,
  ref: React.Ref<HTMLTimeElement>,
) => {
  const machineReadableDate = dayjs(date).format();

  return (
    <time
      dateTime={machineReadableDate}
      className={className}
      data-test-id={testId}
      {...otherProps}
      ref={ref}
    >
      {formatDateAndTime(date, format)}
    </time>
  );
};

/**
 * The DateTime component will format a date to a human friendly format and wrap it in a `<time>` tag
 */
export const DateTime = React.forwardRef(_DateTime);
