import React, { useEffect, useState } from 'react';
import { formatAbsoluteDateTime, formatRelativeDateTime } from '../dateUtils';

interface RelativeDateProps {
  /** the JS Date object to represent */
  date: Date;
  /**
   * (optional) other date to compare against
   * @default now
   */
  baseDate?: Date;
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
  const [relativeTime, setRelativeTime] = useState(
    formatRelativeDateTime(date, baseDate),
  );
  const absoluteTime = formatAbsoluteDateTime(date);

  useEffect(() => {
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

export default RelativeDate;
