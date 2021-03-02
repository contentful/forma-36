import React, { useEffect, useState } from 'react';

import { formatDateTime, formatRelativeDateTime } from '../dateUtils';
import { CoercibleDate } from '../types';

export interface RelativeDateProps {
  /** the date to represent */
  date: CoercibleDate;
  /**
   * (optional) other date to compare against
   * @default now
   */
  baseDate?: CoercibleDate;
  className?: string;
  testId?: string;
}

/**
 * Expresses a historical or upcoming date as a relative date/date time
 *
 * Forma36 usage guidelines: https://f36.contentful.com/guidelines/date-and-time/
 */
export const RelativeDate: React.FC<RelativeDateProps> = ({
  date,
  testId,
  className,
  baseDate,
}) => {
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date);
  }
  const [relativeTime, setRelativeTime] = useState(
    formatRelativeDateTime(date, baseDate),
  );
  const absoluteTime = formatDateTime(date);

  useEffect(() => {
    if (baseDate) {
      // No need to trigger a re-render if we are doing a static comparison
      return;
    }

    const intervalId = setInterval(() => {
      setRelativeTime(formatRelativeDateTime(date, baseDate));
    }, 1000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  });

  return (
    <time
      className={className}
      dateTime={date.toISOString()}
      data-test-id={testId}
      title={absoluteTime}
    >
      {relativeTime}
    </time>
  );
};
