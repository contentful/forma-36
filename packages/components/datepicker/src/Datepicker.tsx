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

const DATE_FORMAT = 'dd/MM/yyyy';

export type DatepickerProps = CommonProps & {
  onSelect: (day: Date | undefined) => void;
} & Omit<
    DayPickerSingleProps,
    'mode' | 'onSelect' | 'fromMonth' | 'toMonth' | 'fromYear' | 'toYear'
  > &
  Pick<
    TextInputProps,
    'id' | 'isDisabled' | 'isInvalid' | 'isReadOnly' | 'isRequired'
  > &
  Pick<PopoverProps, 'usePortal'>;

/**
 * Provides functionality for date selection.
 */
export function Datepicker(props: DatepickerProps) {
  const styles = getStyles();
  const {
    //common props
    testId = 'cf-datepicker',
    className,
    style,
    // input props
    id,
    isDisabled,
    isInvalid,
    isReadOnly,
    isRequired,
    // popover props
    usePortal,
    // calendar props
    selected,
    onSelect,
    fromDate,
    toDate,
    locale,
    ...restCalendarProps
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
    (value: string) => parse(value, DATE_FORMAT, new Date(), { locale }),
    [locale],
  );

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(() =>
    selected ? format(selected, DATE_FORMAT) : '',
  );

  useEffect(() => {
    if (
      selected &&
      selected.getTime() !== parseInputDate(inputValue).getTime()
    ) {
      setInputValue(format(selected, DATE_FORMAT));
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
            placeholder={format(new Date(), DATE_FORMAT)}
            value={inputValue}
            onChange={handleInputChange}
            id={id}
            isInvalid={isInvalid || isTextInputValueInvalid}
            isDisabled={isDisabled}
            isRequired={isRequired}
            isReadOnly={isReadOnly}
          />
          <IconButton
            aria-label="Choose date"
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
            {...restCalendarProps}
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
