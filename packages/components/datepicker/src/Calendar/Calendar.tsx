import React from 'react';

import { getStyles } from './Calendar.styles';

import {
  DayPicker,
  type DayPickerDefaultProps,
  type DayPickerSingleProps,
} from 'react-day-picker';

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
      captionLayout="dropdown-buttons"
      {...props}
      weekStartsOn={props.weekStartsOn ?? 1}
      classNames={styles}
    />
  );
}
