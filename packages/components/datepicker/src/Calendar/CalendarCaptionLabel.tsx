import React from 'react';

import { type CaptionLabelProps, useDayPicker } from 'react-day-picker';
import { Heading } from '@contentful/f36-typography';
import { getStyles } from './Calendar.styles';
import { cx } from 'emotion';

export const CalendarCaptionLabel = (props: CaptionLabelProps) => {
  const styles = getStyles();
  const {
    fromDate,
    toDate,
    formatters: { formatCaption },
    locale,
    numberOfMonths,
  } = useDayPicker();

  const isVisuallyHidden = Boolean(fromDate && toDate && numberOfMonths === 1);

  return (
    <Heading
      as="h2"
      aria-live="polite"
      aria-atomic="true"
      id={props.id}
      className={cx(styles.caption_label, isVisuallyHidden && styles.vhidden)}
    >
      {formatCaption(props.displayMonth, { locale })}
    </Heading>
  );
};
