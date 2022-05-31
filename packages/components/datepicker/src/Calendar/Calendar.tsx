import React from 'react';

import { getStyles } from './Calendar.styles';

import { DayPicker, DayPickerProps } from 'react-day-picker';
import { CalendarCaption } from './CalendarCaption';
import { CalendarCaptionLabel } from './CalendarCaptionLabel';

// Props comparison to our current datepickers:
// Current      DayPicker
// value        selected
// onChange     onSelect
// min          fromDate/fromMonth/fromYear
// max          toDate/toMonth/toYear

export type CalendarProps = DayPickerProps;

export function Calendar(props: CalendarProps) {
  const styles = getStyles();

  return (
    <DayPicker
      {...props}
      classNames={styles}
      components={{
        Caption: CalendarCaption,
        CaptionLabel: CalendarCaptionLabel,
      }}
    />
  );
}
