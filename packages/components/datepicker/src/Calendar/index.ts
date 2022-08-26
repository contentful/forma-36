import {
  Day as _Day,
  DayContent as _DayContent,
  useDayPicker as _useDayPicker,
  DayProps,
  DayContentProps,
} from 'react-day-picker';

export * from './Calendar';

// Hack for Parcel bundler, to build a valid commonJS dist
const Day = _Day;
const DayContent = _DayContent;
const useDayPicker = _useDayPicker;
export { Day, DayContent, useDayPicker };
export type { DayProps, DayContentProps };
