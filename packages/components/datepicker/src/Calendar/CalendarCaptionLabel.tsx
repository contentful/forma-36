import React from 'react';

import { CaptionLabelProps, useDayPicker } from 'react-day-picker';
import { Heading } from '@contentful/f36-typography';
import { getStyles } from './Calendar.styles';

export const CalendarCaptionLabel = (props: CaptionLabelProps) => {
  const styles = getStyles();
  const {
    fromDate,
    toDate,
    formatters: { formatCaption },
    locale,
  } = useDayPicker();

  const isVisuallyHidden = Boolean(fromDate && toDate);

  return (
    <Heading
      as="h2"
      aria-live="polite"
      aria-atomic="true"
      id={props.id}
      className={isVisuallyHidden && styles.vhidden}
    >
      {formatCaption(props.displayMonth, { locale })}
    </Heading>
  );
};
