import React from 'react';

import { getStyles } from './Calendar.styles';

import {
  DayPicker,
  type DayPickerDefaultProps,
  type DayPickerSingleProps,
} from 'react-day-picker';
import { CalendarCaption } from './CalendarCaption';
import { CalendarCaptionLabel } from './CalendarCaptionLabel';

export type CalendarProps =
  | Omit<DayPickerDefaultProps, 'classNames'>
  | Omit<DayPickerSingleProps, 'classNames'>;

/**
 * Provides functionality for calendar date selection. Used as a part of Datepicker component.
 * Based on the [React DayPicker](https://react-day-picker.js.org/) library.
 */
export function Calendar(props: CalendarProps) {
  const styles = getStyles();

  return (
    <DayPicker
      {...props}
      weekStartsOn={props.weekStartsOn ?? 1}
      classNames={styles}
      components={{
        Caption: CalendarCaption,
        CaptionLabel: CalendarCaptionLabel,
        ...props.components,
      }}
    />
  );
}
