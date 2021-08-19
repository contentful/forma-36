import React from 'react';
import {
  Box,
  CommonProps,
  PolymorphicComponent,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
} from '@contentful/f36-core';

import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
extend(utcPlugin);

interface DateTimeInternalProps extends CommonProps {
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

export type DateTimeProps = PolymorphicComponentProps<
  'time',
  DateTimeInternalProps
>;

function formatDateAndTime(
  date: DateTimeInternalProps['date'],
  format: DateTimeInternalProps['format'],
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

const _DateTime: PolymorphicComponentWithRef<DateTimeInternalProps, 'time'> = (
  {
    className,
    date,
    format = 'full',
    testId = 'cf-ui-date-time',
    ...otherProps
  },
  ref,
) => {
  const machineReadableDate = dayjs(date).format();

  return (
    <Box
      {...otherProps}
      as="time"
      className={className}
      data-test-id={testId}
      dateTime={machineReadableDate}
      ref={ref}
    >
      {formatDateAndTime(date, format)}
    </Box>
  );
};

/**
 * The DateTime component will format a date to a human friendly format and wrap it in a `<time>` tag
 */
export const DateTime: PolymorphicComponent<
  DateTimeInternalProps,
  'time'
> = React.forwardRef(_DateTime);
