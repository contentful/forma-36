import React from 'react';
import { CommonProps } from '@contentful/f36-core';

import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
extend(utcPlugin);

import type { DateType, DateFormat } from '../types';
import { formatDateAndTime } from './utils';

export interface DateTimeProps
  extends CommonProps,
    React.AllHTMLAttributes<HTMLTimeElement> {
  /**
   * The date that will be displayed. It accepts a JS Date, an ISO8601 Timestamp string, or Unix Epoch Milliseconds number
   */
  date: DateType;
  /**
   * The format in which the date will be presented
   *
   * @default full
   **/
  format?: DateFormat;
}

const _DateTime = (
  {
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
