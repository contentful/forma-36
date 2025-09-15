import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import type { CommonProps } from '@contentful/f36-core';

import { format, isValid, parse, startOfDay, endOfDay } from 'date-fns';
import { getStyles } from './Datepicker.styles';
import { Calendar } from './Calendar';
import { Popover } from '@contentful/f36-popover';
import type { DayPickerSingleProps } from 'react-day-picker';
import FocusLock from 'react-focus-lock';
import { TextInput, type TextInputProps } from '@contentful/f36-forms';
import { IconButton } from '@contentful/f36-button';
import { CalendarBlankIcon } from '@contentful/f36-icons';
import type { PopoverProps } from '@contentful/f36-popover';

export type DatepickerProps = CommonProps & {
  /**
   * Callback fired when the day is selected
   */
  onSelect: (day: Date | undefined) => void;

  /**
   * Format that is used to display date in the input,
   * It is based on (Unicode Technical Standart #35)[https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table]
   *
   * @default 'dd LLL yyyy' e.g. 31 Jan 2022
   */
  dateFormat?: string;

  /**
   * If `true`, the Datepicker will be initially opened.
   */
  defaultIsOpen?: boolean;

  /**
   * Custom placeholder for the input field
   */
  placeholder?: string;

  /**
   * Props to pass to the TextInput component
   */
  inputProps?: Partial<TextInputProps>;

  /**
   * Props to pass to the Popover (Dropdown) component
   */
  popoverProps?: Partial<PopoverProps>;
} & Omit<
    DayPickerSingleProps,
    | 'mode'
    | 'onSelect'
    | 'fromMonth'
    | 'toMonth'
    | 'fromYear'
    | 'toYear'
    | 'classNames'
    | 'className'
  >;

/**
 * Provides functionality for date selection.
 */
export function Datepicker(props: DatepickerProps) {
  const styles = getStyles();
  const {
    testId = 'cf-ui-datepicker',
    className,
    style,
    inputProps,
    popoverProps,
    selected,
    onSelect,
    fromDate,
    toDate,
    locale,
    dateFormat = 'dd LLL yyyy',
    defaultIsOpen,
    placeholder,
    ...otherProps
  } = props;

  const isDateValid = useCallback(
    (date: Date) => {
      if (!isValid(date)) {
        return false;
      }
      if (fromDate && startOfDay(fromDate).getTime() > date.getTime()) {
        return false;
      }
      if (toDate && date.getTime() > endOfDay(toDate).getTime()) {
        return false;
      }
      return true;
    },
    [fromDate, toDate],
  );

  const parseInputDate = useCallback(
    (value: string) => parse(value, dateFormat, new Date(), { locale }),
    [locale, dateFormat],
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(defaultIsOpen);
  const [inputValue, setInputValue] = useState<string>(() =>
    selected ? format(selected, dateFormat) : '',
  );

  useEffect(() => {
    if (!selected) {
      setInputValue('');
      return;
    }

    if (selected.getTime() !== parseInputDate(inputValue).getTime()) {
      setInputValue(format(selected, dateFormat));
    }
    // we want to run this hook only when `selected` prop changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInputValue(e.currentTarget.value);

      const date = parseInputDate(e.currentTarget.value);
      if (isDateValid(date)) {
        onSelect(date);
      } else {
        onSelect(undefined);
      }
    },
    [onSelect, parseInputDate, isDateValid],
  );

  const handleDaySelect = useCallback(
    (date: Date) => {
      if (date && isDateValid(date)) {
        onSelect(date);
        setIsPopoverOpen(false);
      }
    },
    [onSelect, isDateValid],
  );

  const isTextInputValueInvalid =
    inputValue && !isDateValid(parseInputDate(inputValue));

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClose={() => setIsPopoverOpen(false)}
      {...popoverProps}
    >
      <Popover.Trigger>
        {/* we need this additional component to pass <Popover.Trigger> props to the correct trigger button */}
        <DatepickerTrigger
          className={className}
          style={style}
          testId={testId}
          isDisabled={inputProps?.isDisabled}
          onTriggerClick={() => {
            setIsPopoverOpen((prevState) => !prevState);
          }}
        >
          <TextInput
            placeholder={
              typeof placeholder === 'undefined'
                ? format(new Date(), dateFormat)
                : placeholder
            }
            value={inputValue}
            onChange={handleInputChange}
            isInvalid={inputProps?.isInvalid || isTextInputValueInvalid}
            aria-label="Enter date"
            testId="cf-ui-datepicker-input"
            {...inputProps}
          />
        </DatepickerTrigger>
      </Popover.Trigger>
      <Popover.Content>
        <FocusLock focusOptions={{ preventScroll: true }} returnFocus={true}>
          <Calendar
            {...otherProps}
            className={styles.calendar}
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            initialFocus={false}
            defaultMonth={selected}
            fromDate={fromDate}
            toDate={toDate}
            locale={locale}
          />
        </FocusLock>
      </Popover.Content>
    </Popover>
  );
}

type DatepickerTriggerProps = {
  children: React.ReactNode;
  isDisabled: boolean;
  onTriggerClick: () => void;
} & Pick<DatepickerProps, 'className' | 'style' | 'testId'>;

// eslint-disable-next-line react/display-name
const DatepickerTrigger = React.forwardRef<
  HTMLDivElement,
  DatepickerTriggerProps
>((props, ref) => {
  const {
    children,
    testId,
    style,
    className,
    onTriggerClick,
    isDisabled,
    // props will be passed from <Popover.Trigger> wrapper
    ...popoverTriggerProps
  } = props;

  return (
    <TextInput.Group
      ref={ref}
      className={className}
      style={style}
      testId={testId}
    >
      {children}
      <IconButton
        aria-label="Use calendar"
        variant="secondary"
        icon={<CalendarBlankIcon aria-label="calendar" />}
        onClick={onTriggerClick}
        isDisabled={isDisabled}
        testId="cf-ui-datepicker-button"
        {...popoverTriggerProps}
      />
    </TextInput.Group>
  );
});
