import React, {
  useState,
  useCallback,
  FocusEventHandler,
  FocusEvent,
} from 'react';
import isHotkey from 'is-hotkey';
import orderBy from 'lodash.orderBy';
import moment, { Moment, Duration } from 'moment';
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

const DATEFNS_12H_FORMAT = 'h:mm a';
const DATEFNS_24H_FORMAT = 'kk:mm';

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
  console.log(hours);
  return orderBy(hours, (time: Date) => time, 'asc').map((m: Date) =>
    dateFns.format(m, DATEFNS_12H_FORMAT)
  );
}

const allHourSuggestions = createHours();

function parseRawInput(raw: string) {
  const meridiem = moment().format('A');
  // In case an input value has no meridiem we'll add current meridiem
  const normalisedValue = /[ap]m/gi.test(raw) ? raw : `${raw} ${meridiem}`;
  return moment(normalisedValue, ['HH:mm', 'h:mm A', 'hh:mm', 'k:mm', 'kk:mm']);
}

type MathFunction = 'ceil' | 'floor';

function roundDate(date: Moment, duration: Duration, method: MathFunction) {
  return moment(Math[method](+date / +duration) * +duration);
}

function roundToHalfHour(value: string, method: MathFunction = 'ceil') {
  const roundedTime =
    moment(value, DATEFNS_24H_FORMAT).minutes() % 30 !== 0
      ? moment(
          roundDate(
            moment(value, DATEFNS_24H_FORMAT),
            moment.duration(30, 'minutes'),
            method
          )
        )
      : moment(value, DATEFNS_24H_FORMAT)[
          method === 'ceil' ? 'add' : 'subtract'
        ](0.5, 'hours');

  return roundedTime.isAfter(moment.now())
    ? roundedTime.format(DATEFNS_12H_FORMAT)
    : moment(value, DATEFNS_24H_FORMAT).format(DATEFNS_12H_FORMAT);
}

function getSuggestionList(value: string, date: string) {
  const before: string[] = [];
  const after: string[] = [];
  allHourSuggestions.forEach((m: string) => {
    if (
      dateFns.isBefore(
        dateFns.parse(m, DATEFNS_12H_FORMAT, new Date()),
        dateFns.subHours(
          dateFns.parse(value, DATEFNS_12H_FORMAT, new Date()),
          1
        )
      )
    ) {
      before.push(m);
    } else {
      after.push(m);
    }
  });

  console.log(before);

  return after
    .concat(before)
    .filter(time =>
      dateFns.isAfter(
        dateFns.parse(
          `${date} ${time}`,
          `yyyy-mm-dd${DATEFNS_12H_FORMAT}`,
          new Date()
        ),
        new Date()
      )
    );
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
  const [selectedTime, setSelectedTime] = useState(
    moment(value, DATEFNS_24H_FORMAT).format(DATEFNS_12H_FORMAT)
  );
  let dropdownContainer: HTMLElement | null = null;
  const inputRef = React.createRef<HTMLInputElement>();

  const getTimeFromUserInputOrDefaultToValue = useCallback(() => {
    const parsedTime = parseRawInput(selectedTime);
    if (parsedTime.isValid()) {
      return parsedTime.format(DATEFNS_12H_FORMAT);
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
      if (parsedTime.isValid()) {
        const time24H = parsedTime.format(DATEFNS_24H_FORMAT);

        onChange(time24H);
      }
    },
    [onChange]
  );

  const handleKeyUp = useCallback(
    event => {
      if (isHotkey('arrowUp', event)) {
        handleChange(roundToHalfHour(value, 'floor'));
      }
      if (isHotkey('arrowDown', event)) {
        handleChange(roundToHalfHour(value, 'ceil'));
      }
      if (isHotkey('enter', event)) {
        setTimeSuggestionOpen(false);
      }
    },
    [value, handleChange]
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

  const filteredHours = getSuggestionList(value, date);
  return (
    <div className={styles.timePicker}>
      <FormLabel required={true} htmlFor="scheduleTimeForm">
        Time
      </FormLabel>
      <div className={styles.inputWrapper} id="scheduleTimeForm">
        <Dropdown
          className={styles.dropdown}
          dropdownContainerClassName={styles.dropdownContainer}
          // @ts-ignore
          getContainerRef={(ref: HTMLElement | null) => {
            dropdownContainer = ref;
          }}
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
          <DropdownList maxHeight={200}>
            {filteredHours.map((hour: string) => {
              console.log(hour);
              return (
                <DropdownListItem
                  testId="time-suggestion"
                  className={
                    dateFns.format(
                      dateFns.parse(value, DATEFNS_24H_FORMAT, new Date()),
                      DATEFNS_24H_FORMAT
                    ) === hour
                      ? styles.selectedTime
                      : undefined
                  }
                  onClick={() => {
                    handleChange(hour);
                    setTimeSuggestionOpen(false);
                  }}
                  key={hour}
                >
                  {hour}
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
