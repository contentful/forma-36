import { css } from '@emotion/css';

import React, {
  useState,
  useCallback,
  useRef,
  FocusEventHandler,
  useEffect,
  FocusEvent,
  ChangeEvent,
} from 'react';
import isHotkey from 'is-hotkey';
import orderBy from 'lodash.orderby';
import {
  format,
  addHours,
  addMinutes,
  startOfDay,
  parse,
  isBefore,
  isValid,
} from 'date-fns';
import {
  HelpText,
  FormLabel,
  TextInput,
  ValidationMessage,
  Dropdown,
  DropdownListItem,
  DropdownList,
} from '@contentful/forma-36-react-components';

import tokens from '@contentful/forma-36-tokens';

const styles = {
  selectedTime: css({
    background: tokens.colorElementLightest,
  }),
  dropdown: css({
    width: '100%',
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
  disabled: boolean;
}

const TimePicker: React.FC<TimepickerProps> = ({
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
}) => {
  const [isTimeSuggestionOpen, setTimeSuggestionOpen] = useState(false);
  const [filteredHours, setFilteredHours] = useState(
    getSuggestionList(value, date),
  );
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const activeListItem = useRef() as React.MutableRefObject<HTMLLIElement>;
  const [selectedTime, setSelectedTime] = useState(() =>
    value
      ? format(parse(value, DATEFNS_24H_FORMAT, new Date()), DATEFNS_12H_FORMAT)
      : value,
  );
  const [dropdownContainer, setDropdownContainer] = useState(null);
  const inputRef = React.createRef<HTMLInputElement>();

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

  const closeDropdown = useCallback(
    (event: FocusEvent) => {
      if (dropdownContainer) {
        const parent = dropdownContainer;
        const activeElement: HTMLElement | null =
          (event.relatedTarget as HTMLElement) ||
          (document.activeElement as HTMLElement);
        if (activeElement === document.body && inputRef && inputRef.current) {
          inputRef.current.focus();
        } else if (parent) {
          const isDropdownListFocused =
            activeElement === parent || parent.contains(activeElement);

          if (!isDropdownListFocused) {
            setTimeSuggestionOpen(false);
          }
        }
      }
    },
    [dropdownContainer, inputRef],
  );

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

  const handleKeyUp = useCallback(
    (event) => {
      if (isHotkey('enter', event)) {
        setTimeSuggestionOpen(false);
      }

      const activeIndex = filteredHours.findIndex((elem) => elem.isActive);
      let nextIndex = 0;

      if (isHotkey('arrowUp', event) && filteredHours[activeIndex + 1]) {
        nextIndex =
          activeIndex - 1 > 0 ? activeIndex - 1 : filteredHours.length - 1;
        handleChange(filteredHours[nextIndex].format12H);
      }

      if (isHotkey('arrowDown', event)) {
        nextIndex =
          activeIndex + 1 < filteredHours.length ? activeIndex + 1 : 0;
        handleChange(filteredHours[nextIndex].format12H);
      }
    },
    [handleChange, filteredHours],
  );

  const handleKeyDown = useCallback((event) => {
    if (isHotkey('arrowUp', event) || isHotkey('arrowDown', event)) {
      event.preventDefault();
    }
  }, []);

  const handleFocus = useCallback((e) => {
    e.preventDefault();
    e.target.select();
    setTimeSuggestionOpen(true);
  }, []);

  const handleBlur = useCallback(
    (e) => {
      const time = getTimeFromUserInputOrDefaultToValue();
      setSelectedTime(time);
      closeDropdown(e);
      onBlur?.(e);
    },
    [
      getTimeFromUserInputOrDefaultToValue,
      setSelectedTime,
      closeDropdown,
      onBlur,
    ],
  );

  const inputId = id ? id : 'scheduleTimeInput';

  return (
    <div>
      {labelText && (
        <FormLabel required={isRequired} htmlFor={inputId}>
          {labelText}
        </FormLabel>
      )}
      <div className={styles.inputWrapper} id="scheduleTimeForm">
        <Dropdown
          className={styles.dropdown}
          dropdownContainerClassName={styles.dropdownContainer}
          // TODO: Fix getContainerRef on Dropdown to accept ref object. F36 4.0 Breaking Change
          getContainerRef={setDropdownContainer}
          toggleElement={
            <TextInput
              id={inputId}
              inputRef={inputRef}
              name="time input"
              data-test-id="time"
              value={selectedTime}
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.value)
              }
              disabled={disabled}
              autoComplete="off"
            />
          }
          onClose={() => setTimeSuggestionOpen(false)}
          isOpen={isTimeSuggestionOpen}
        >
          <DropdownList maxHeight={200} listRef={listRef}>
            {filteredHours.map((hour: hour) => {
              return (
                <DropdownListItem
                  testId="time-suggestion"
                  className={hour.isActive ? styles.selectedTime : undefined}
                  onClick={() => {
                    handleChange(hour.format12H);
                    setTimeSuggestionOpen(false);
                  }}
                  key={hour.format12H}
                  listItemRef={hour.isActive ? activeListItem : undefined}
                >
                  {hour.format12H}
                </DropdownListItem>
              );
            })}
          </DropdownList>
        </Dropdown>
        {helpText && <HelpText>{helpText}</HelpText>}
        {validationMessage && (
          <ValidationMessage>{validationMessage}</ValidationMessage>
        )}
      </div>
    </div>
  );
};

export default TimePicker;
