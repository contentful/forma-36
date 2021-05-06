import React from 'react';

import {
  DateTimeFormat,
  formatDateTime,
  formatMachineReadableDateTime,
} from './dateUtils';
import { CoercibleDate } from './types';

export interface DateTimeProps {
  /**
   * The date to display as a JS Date, an ISO8601 Timestamp, or Unix Epoch Milliseconds
   *
   * @example '2020-08-13T01:23:45.000Z'
   * @example new Date()
   * @example Date.now()
   */
  date: CoercibleDate;
  /**
   * Which display format to use
   *
   * @default 'FULL'
   **/
  format?: DateTimeFormat;
  className?: string;
  testId?: string;
}

/**
 * Formats a JS Date object to an absolute date and time inside of a <time /> tag
 */
export const DateTime: React.FC<DateTimeProps> = ({
  date,
  format = 'FULL',
  className,
  testId,
}) => {
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  const formatted = formatDateTime(date, format);
  const machineReadable = formatMachineReadableDateTime(date, format);

  return (
    <time
      dateTime={machineReadable}
      className={className}
      data-test-id={testId}
    >
      {formatted}
    </time>
  );
};
