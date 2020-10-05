import React from 'react';
import { DateTimeFormat, formatDateTime } from './dateUtils';

interface DateTimeProps {
  date: Date;
  /**
   * Which display format to use
   *
   * @default 'FULL' e.g. '13 Aug 2019 at 8:00 am'
   **/
  format?: DateTimeFormat;
  className?: string;
  testId?: string;
}

/**
 * Formats a JS Date object to an absolute date and time inside of a <time /> tag
 */
export const RelativeDate: React.FC<DateTimeProps> = ({
  date,
  format,
  className,
  testId,
}) => {
  format = format ?? 'FULL';
  const formatted = formatDateTime(date, format);

  return (
    <time
      dateTime={date.toISOString()}
      className={className}
      data-test-id={testId}
    >
      {formatted}
    </time>
  );
};

export default RelativeDate;
