import React, { useRef, useState } from 'react';
import type { Meta } from '@storybook/react-vite';
import { FormControl, TextInput } from '@contentful/f36-forms';
import { format, parse, isValid } from 'date-fns';
import { Popover } from '@contentful/f36-popover';
import FocusLock from 'react-focus-lock';
import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

import { Datepicker, Calendar } from '../src/index';

const testDate = new Date('2022-04-15');

export default {
  component: Datepicker,
  args: {
    weekStartsOn: 1,
  },
  argTypes: {
    weekStartsOn: {
      control: { type: 'number', min: 0, max: 6 },
    },
  },
  parameters: {
    chromatic: { delay: 1000 },
  },
  title: 'Components/Datepicker',
} as Meta;

export const Basic = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      defaultIsOpen={true}
    />
  );
};

export const WithMinMaxDate = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      fromDate={testDate}
      toDate={
        new Date(new Date(testDate).setFullYear(testDate.getFullYear() + 2))
      }
      defaultIsOpen={true}
    />
  );
};

export const WithMultipleMonths = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      numberOfMonths={2}
      defaultIsOpen={true}
    />
  );
};

export const WithFormControl = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date>(testDate);

  return (
    <FormControl id="date" isRequired>
      <FormControl.Label>Date</FormControl.Label>
      <Datepicker
        {...args}
        selected={selectedDay}
        onSelect={setSelectedDay}
        defaultIsOpen={true}
      />
      <FormControl.HelpText>Please enter a publish date</FormControl.HelpText>
    </FormControl>
  );
};

const DATE_FORMAT = 'yyyy-MM-dd'; // e.g. 2022-01-31
const getStyles = () => {
  return {
    calendar: css({
      padding: tokens.spacingM,
    }),
  };
};

export const Custom = () => {
  const styles = getStyles();
  const [selected, setSelected] = useState<Date>(testDate);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(() =>
    selected ? format(selected, DATE_FORMAT) : '',
  );
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const popoverWasClosed = useRef(false);

  const closePopover = () => {
    popoverWasClosed.current = true;
    setIsPopoverOpen(false);
  };

  const handleDaySelect = (date: Date) => {
    if (date) {
      setSelected(date);
      setInputValue(format(date, DATE_FORMAT));
      closePopover();
    }
  };

  const handleInputFocus = () => {
    // when popover gets closed focus returns to the input,
    // we want to prevent popover to be opened in this case
    if (popoverWasClosed.current) {
      popoverWasClosed.current = false;
      return;
    }

    setIsPopoverOpen((state) => !state);
  };

  const hendleInputKeyDown = (event) => {
    if (event.key === 'Enter' && !isInputInvalid) {
      event.preventDefault();
      setIsPopoverOpen(true);
    }
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setInputValue(value);

    const date = parse(value, DATE_FORMAT, new Date());
    if (isValid(date)) {
      setIsInputInvalid(false);
      setSelected(date);
    } else {
      setIsInputInvalid(true);
      setSelected(undefined);
    }
  };

  return (
    <Popover isOpen={isPopoverOpen} onClose={closePopover}>
      <Popover.Trigger>
        <TextInput
          placeholder={format(new Date(), DATE_FORMAT)}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={hendleInputKeyDown}
          isInvalid={isInputInvalid}
          aria-label="Choose date"
        />
      </Popover.Trigger>
      <Popover.Content>
        <FocusLock returnFocus={true}>
          <Calendar
            className={styles.calendar}
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            initialFocus={false}
            defaultMonth={selected}
          />
        </FocusLock>
      </Popover.Content>
    </Popover>
  );
};

export const Placeholder = (args) => {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  return (
    <Datepicker
      {...args}
      selected={selectedDay}
      onSelect={setSelectedDay}
      placeholder="Select a date"
    />
  );
};
