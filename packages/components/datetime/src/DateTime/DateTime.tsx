import React from 'react';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';

import type { DateType, DateFormat } from '../types';
import { formatDateAndTime, formatMachineReadableDateTime } from '../utils';

interface DateTimeOwnProps extends CommonProps {
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

export type DateTimeProps = PropsWithHTMLElement<DateTimeOwnProps, 'time'>;

const DateTimeBase = (
  {
    date,
    format = 'full',
    testId = 'cf-ui-date-time',
    ...otherProps
  }: ExpandProps<DateTimeProps>,
  ref: React.Ref<HTMLTimeElement>,
) => {
  const machineReadableDate = formatMachineReadableDateTime(date);

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

DateTimeBase.displayName = 'DateTime';

/**
 * The DateTime component will format a date to a human friendly format and wrap it in a `<time>` tag
 */
export const DateTime = React.forwardRef(DateTimeBase);
