import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';

import { format, isValid, parse, startOfDay, endOfDay } from 'date-fns';
import { getStyles } from './Datepicker.styles';
import { Calendar } from './Calendar';
import { Popover } from '@contentful/f36-popover';
import { DayPickerSingleProps } from 'react-day-picker';
import FocusLock from 'react-focus-lock';
import { TextInput, TextInputProps } from '@contentful/f36-forms';
import { IconButton } from '@contentful/f36-button';
import { CalendarIcon } from '@contentful/f36-icons';
import { PopoverProps } from '@contentful/f36-popover/src';

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
} & Omit<
    DayPickerSingleProps,
    'mode' | 'onSelect' | 'fromMonth' | 'toMonth' | 'fromYear' | 'toYear'
  > &
  Pick<
    TextInputProps,
    | 'id'
    | 'isDisabled'
    | 'isInvalid'
    | 'isReadOnly'
    | 'isRequired'
    | 'aria-label'
  > &
  Pick<PopoverProps, 'usePortal'>;

/**
 * Provides functionality for date selection.
 */
export function Datepicker(props: DatepickerProps) {
  const styles = getStyles();
  const {
    testId = 'cf-datepicker',
    className,
    style,
    id,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    usePortal,
    selected,
    onSelect,
    fromDate,
    toDate,
    locale,
    dateFormat = 'dd LLL yyyy',
    defaultIsOpen,
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
    if (
      selected &&
      selected.getTime() !== parseInputDate(inputValue).getTime()
    ) {
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
      usePortal={usePortal}
    >
      <Popover.Trigger>
        <TextInput.Group
          className={cx(className)}
          style={style}
          testId={testId}
        >
          <TextInput
            placeholder={format(new Date(), dateFormat)}
            value={inputValue}
            onChange={handleInputChange}
            id={id}
            isInvalid={isInvalid || isTextInputValueInvalid}
            aria-label="Enter date"
            isDisabled={isDisabled}
            isRequired={isRequired}
            isReadOnly={isReadOnly}
          />
          <IconButton
            aria-label="Use calendar"
            variant="secondary"
            icon={<CalendarIcon aria-label="calendar" variant="muted" />}
            onClick={() => {
              setIsPopoverOpen((prevState) => !prevState);
            }}
            isDisabled={isDisabled}
          />
        </TextInput.Group>
      </Popover.Trigger>
      <Popover.Content>
        <FocusLock returnFocus={true}>
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
