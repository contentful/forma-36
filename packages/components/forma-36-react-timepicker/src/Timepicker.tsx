import React, {
  useState,
  useCallback,
  useRef,
  FocusEventHandler,
  useEffect,
  FocusEvent,
} from 'react';
import isHotkey from 'is-hotkey';
import orderBy from 'lodash.orderby';
import * as dateFns from 'date-fns';
import {
  HelpText,
  FormLabel,
  ValidationMessage,
  Dropdown,
  DropdownListItem,
  DropdownList,
} from '@contentful/forma-36-react-components';

import { css } from 'emotion';
import tokens from '@contentful/forma-36-tokens';

const styles = {
  timePicker: css({
    display: 'block',
  }),
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
      paddingRight: '2rem',
    },
  }),
  timeInput: css({
    width: '100%',
    flexBasis: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${tokens.colorElementMid}`,
    paddingLeft: tokens.spacingXs,
    paddingRight: tokens.spacingXs,
    height: '40px',
    color: tokens.colorTextMid,
    textAlign: 'center',
    fontSize: tokens.fontSizeM,
    margin: 0,
    MozAppearance: 'textfield',
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&:focus': {
      outline: 'none',
      border: `1px solid ${tokens.colorPrimary}`,
      boxShadow: tokens.glowPrimary,
    },
  }),
};

const DATE_NOW_FORMAT = 'dd/MM/yyyy';
const DATE_NOW = dateFns.format(new Date(), DATE_NOW_FORMAT);

const DATEFNS_12H_FORMAT = 'h:mm a';
const DATEFNS_24H_FORMAT = 'HH:mm';

function createHours() {
  const hours = [];
  for (let hour = 0; hour < 24; hour++) {
    hours.push(dateFns.addHours(dateFns.startOfDay(new Date()), hour));
    hours.push(
      dateFns.addMinutes(
        dateFns.addHours(dateFns.startOfDay(new Date()), hour),
        30
      )
    );
  }
  return orderBy(hours, (time: Date) => time, 'asc').map((m: Date) =>
    dateFns.format(m, DATEFNS_12H_FORMAT)
  );
}

const allHourSuggestions = createHours();

function parseRawInput(raw: string) {
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
    .map(timeFormat =>
      dateFns.parse(
        normalisedValue,
        `${DATE_NOW_FORMAT} ${timeFormat}`,
        new Date()
      )
    )
    .filter(date => dateFns.isValid(date));

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
  return allHourSuggestions.map(timeSuggestion => {
    if (
      dateFns.isBefore(
        dateFns.parse(
          `${date} ${timeSuggestion}`,
          `yyyy-MM-dd ${DATEFNS_12H_FORMAT}`,
          new Date()
        ),
        dateFns.parse(
          `${date} ${value}`,
          `yyyy-MM-dd ${DATEFNS_24H_FORMAT}`,
          new Date()
        )
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

export type TimepickerProps = {
  value: string;
  date: string;
  onChange: (val: string) => void;
  onBlur?: FocusEventHandler;
  required?: boolean;
  helpText?: string;
  validationMessage?: string;
  id?: string;
  name?: string;
} & typeof defaultProps;

const defaultProps = {
  onBlur: () => {},
};

const TimePicker: React.FC<TimepickerProps> = ({
  value,
  date,
  helpText,
  validationMessage,
  onChange,
  onBlur,
}) => {
  const [isTimeSuggestionOpen, setTimeSuggestionOpen] = useState(false);
  const [filteredHours, setFilteredHours] = useState(
    getSuggestionList(value, date)
  );
  const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;
  const activeListItem = useRef() as React.MutableRefObject<HTMLLIElement>;
  const [selectedTime, setSelectedTime] = useState(
    dateFns.format(
      dateFns.parse(value, DATEFNS_24H_FORMAT, new Date()),
      DATEFNS_12H_FORMAT
    )
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
    if (parsedTime && dateFns.isValid(parsedTime)) {
      return dateFns.format(parsedTime, DATEFNS_12H_FORMAT);
    } else {
      return dateFns.format(
        dateFns.parse(value, DATEFNS_24H_FORMAT, new Date()),
        DATEFNS_12H_FORMAT
      );
    }
  }, [selectedTime, value]);

  const closeDropdown = useCallback(
    (event: FocusEvent) => {
      if (dropdownContainer) {
        const parent = dropdownContainer;
        const activeElement: HTMLElement | null =
          (event.relatedTarget as HTMLElement) || document.activeElement;
        if (activeElement === document.body && inputRef && inputRef.current) {
          inputRef.current.focus();
        } else if (parent) {
          const isDropdownListFocused =
            //@ts-ignore
            activeElement === parent || parent.contains(activeElement);

          if (!isDropdownListFocused) {
            setTimeSuggestionOpen(false);
          }
        }
      }
    },
    [dropdownContainer, inputRef]
  );

  const handleChange = useCallback(
    val => {
      setSelectedTime(val);
      const parsedTime = parseRawInput(val);
      if (parsedTime && dateFns.isValid(parsedTime)) {
        const time24H = dateFns.format(parsedTime, DATEFNS_24H_FORMAT);
        setFilteredHours(getSuggestionList(time24H, date));
        onChange(time24H);
      }
    },
    [onChange, date]
  );

  const handleKeyUp = useCallback(
    event => {
      if (isHotkey('enter', event)) {
        setTimeSuggestionOpen(false);
      }

      const activeIndex = filteredHours.findIndex(elem => elem.isActive);
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
    [handleChange, filteredHours]
  );

  const handleKeyDown = useCallback(event => {
    if (isHotkey('arrowUp', event) || isHotkey('arrowDown', event)) {
      event.preventDefault();
    }
  }, []);

  const handleFocus = useCallback(e => {
    e.preventDefault();
    e.target.select();
    setTimeSuggestionOpen(true);
  }, []);

  const handleBlur = useCallback(
    e => {
      const time = getTimeFromUserInputOrDefaultToValue();
      setSelectedTime(time);
      closeDropdown(e);
      onBlur();
    },
    [
      getTimeFromUserInputOrDefaultToValue,
      setSelectedTime,
      closeDropdown,
      onBlur,
    ]
  );

  return (
    <div className={styles.timePicker}>
      <FormLabel required={true} htmlFor="scheduleTimeForm">
        Time
      </FormLabel>
      <div className={styles.inputWrapper} id="scheduleTimeForm">
        <Dropdown
          className={styles.dropdown}
          dropdownContainerClassName={styles.dropdownContainer}
          // TODO: Fix getContainerRef on Dropdown to accept ref object. F36 4.0 Breaking Change
          // @ts-ignore
          getContainerRef={setDropdownContainer}
          toggleElement={
            <input
              ref={inputRef}
              className={styles.timeInput}
              name="time input"
              data-test-id="time"
              value={selectedTime}
              onKeyUp={handleKeyUp}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={e => handleChange(e.target.value)}
            />
          }
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

TimePicker.defaultProps = defaultProps;

export default TimePicker;
