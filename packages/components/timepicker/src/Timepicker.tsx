import { css } from 'emotion';
import React, {
  useState,
  useCallback,
  useRef,
  FocusEventHandler,
  useEffect,
  ChangeEvent,
} from 'react';
import orderBy from 'lodash/orderBy';
import {
  format,
  addHours,
  addMinutes,
  startOfDay,
  parse,
  isBefore,
  isValid,
} from 'date-fns';
import tokens from '@contentful/forma-36-tokens';
import { FormControl, Menu, TextInput, Text } from '@contentful/f36-components';

const styles = {
  selectedTime: css({
    background: tokens.gray100,
  }),
  dropdown: css({
    maxHeight: 200,
  }),
  dropdownContainer: css({
    zIndex: 1001,
    width: '165px',
    '& > div': {
      width: '100%',
      button: {
        width: '100%',
        textAlign: 'center',
      },
    },
  }),
  inputWrapper: css({
    display: 'flex',
    marginBottom: tokens.spacingXs,
    'div:not(:last-child)': {
      marginRight: tokens.spacingXs,
    },
  }),
  daytimeSelect: css({
    flexBasis: '100%',
    '> select': {
      paddingRight: tokens.spacingXl,
    },
  }),
  timeZonePicker: css({
    marginLeft: tokens.spacingS,
  }),
};

const DATE_NOW_FORMAT = 'dd/MM/yyyy';
const DATE_NOW = format(new Date(), DATE_NOW_FORMAT);

const DATEFNS_12H_FORMAT = 'h:mm a';
const DATEFNS_24H_FORMAT = 'HH:mm';

function createHours() {
  const hours = [];
  for (let hour = 0; hour < 24; hour++) {
    hours.push(addHours(startOfDay(new Date()), hour));
    hours.push(addMinutes(addHours(startOfDay(new Date()), hour), 30));
  }
  return orderBy(hours, (time: Date) => time, 'asc').map((m: Date) =>
    format(m, DATEFNS_12H_FORMAT),
  );
}

const allHourSuggestions = createHours();

function parseRawInput(raw: string) {
  if (!raw) {
    return null;
  }
  const normalisedValue = `${DATE_NOW} ${raw}`;
  const times = [
    'hh:mm a',
    'h:mm a',
    'hh:mm',
    'k:mm',
    'kk:mm',
    'h a',
    'h',
    'hh',
    'HH',
  ]
    .map((timeFormat) =>
      parse(normalisedValue, `${DATE_NOW_FORMAT} ${timeFormat}`, new Date()),
    )
    .filter((date) => isValid(date));

  if (times.length === 0) {
    return null;
  }

  return times.reduce((_, b) => b, new Date());
}

type hour = {
  format12H: string;
  isActive?: boolean;
};

function getSuggestionList(value: string, date: string) {
  let isActive = true;
  return allHourSuggestions.map((timeSuggestion) => {
    if (
      isBefore(
        parse(
          `${date} ${timeSuggestion}`,
          `yyyy-MM-dd ${DATEFNS_12H_FORMAT}`,
          new Date(),
        ),
        parse(
          `${date} ${value}`,
          `yyyy-MM-dd ${DATEFNS_24H_FORMAT}`,
          new Date(),
        ),
      )
    ) {
      return { format12H: timeSuggestion, isActive: false };
    } else {
      const afterInput = { format12H: timeSuggestion, isActive };
      isActive = false;
      return afterInput;
    }
  });
}

export interface TimepickerProps {
  value: string;
  date: string;
  onChange: (val: string) => void;
  onBlur?: FocusEventHandler;
  required?: boolean;
  helpText?: string;
  validationMessage?: string;
  labelText?: string;
  id?: string;
  name?: string;
  isRequired?: boolean;
  disabled?: boolean;
}

export const Timepicker = ({
  id,
  value,
  date,
  helpText,
  validationMessage,
  onChange,
  onBlur,
  isRequired = false,
  labelText,
  disabled,
}: TimepickerProps) => {
  const [filteredHours, setFilteredHours] = useState(
    getSuggestionList(value, date),
  );
  const listRef = useRef<HTMLDivElement | undefined>();
  const activeListItem = useRef<HTMLButtonElement | undefined>();
  const [selectedTime, setSelectedTime] = useState(() =>
    value
      ? format(parse(value, DATEFNS_24H_FORMAT, new Date()), DATEFNS_12H_FORMAT)
      : value,
  );

  useEffect(() => {
    if (activeListItem.current && activeListItem.current.scrollIntoView) {
      activeListItem.current.scrollIntoView({ block: 'nearest' });
    }
  });

  const getTimeFromUserInputOrDefaultToValue = useCallback(() => {
    const parsedTime = parseRawInput(selectedTime);
    if (parsedTime && isValid(parsedTime)) {
      return format(parsedTime, DATEFNS_12H_FORMAT);
    } else if (value) {
      // eslint-disable-next-line no-console
      console.log('parsedTime not valid: value', value);
      return format(
        parse(value, DATEFNS_24H_FORMAT, new Date()),
        DATEFNS_12H_FORMAT,
      );
    } else {
      return '';
    }
  }, [selectedTime, value]);

  const handleChange = useCallback(
    (val) => {
      setSelectedTime(val);
      const parsedTime = parseRawInput(val);
      if (parsedTime && isValid(parsedTime)) {
        const time24H = format(parsedTime, DATEFNS_24H_FORMAT);
        setFilteredHours(getSuggestionList(time24H, date));
        onChange(time24H);
      }
    },
    [onChange, date],
  );

  const handleBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      const time = getTimeFromUserInputOrDefaultToValue();
      setSelectedTime(time);
      onBlur?.(e);
    },
    [getTimeFromUserInputOrDefaultToValue, setSelectedTime, onBlur],
  );

  const inputId = id ? id : 'scheduleTimeInput';

  return (
    <FormControl>
      {labelText && (
        <FormControl.Label isRequired={isRequired} htmlFor={inputId}>
          {labelText}
        </FormControl.Label>
      )}
      <div className={styles.inputWrapper} id="scheduleTimeForm">
        <Menu>
          <Menu.Trigger>
            <TextInput
              id={inputId}
              name="time input"
              testId="time"
              onBlur={handleBlur}
              value={selectedTime}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              isDisabled={disabled}
              autoComplete="off"
            />
          </Menu.Trigger>
          <Menu.List className={styles.dropdown} ref={listRef}>
            {filteredHours.map((hour: hour) => {
              return (
                <Menu.Item
                  testId="time-suggestion"
                  className={hour.isActive ? styles.selectedTime : undefined}
                  onClick={() => {
                    handleChange(hour.format12H);
                  }}
                  key={hour.format12H}
                  ref={hour.isActive ? activeListItem : undefined}
                >
                  {hour.format12H}
                </Menu.Item>
              );
            })}
          </Menu.List>
        </Menu>
        {helpText && (
          <Text as="p" fontColor="gray500" marginTop="spacingXs">
            {helpText}
          </Text>
        )}
        {validationMessage && (
          <FormControl.ValidationMessage>
            {validationMessage}
          </FormControl.ValidationMessage>
        )}
      </div>
    </FormControl>
  );
};
