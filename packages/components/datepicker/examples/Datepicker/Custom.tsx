import React, { useState, useRef } from 'react';
import { Calendar } from '@contentful/f36-components';
import { TextInput } from '@contentful/f36-forms';
import { format, parse, isValid } from 'date-fns';
import { Popover } from '@contentful/f36-popover';
import FocusLock from 'react-focus-lock';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export default function CustomExample() {
  const DATE_FORMAT = 'yyyy-MM-dd'; // e.g. 2022-01-31

  const [selected, setSelected] = useState(new Date('2022-04-15'));
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState(() =>
    selected ? format(selected, DATE_FORMAT) : '',
  );
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const popoverWasClosed = useRef(false);

  const closePopover = () => {
    popoverWasClosed.current = true;
    setIsPopoverOpen(false);
  };

  const handleDaySelect = (date) => {
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
            className={css({
              padding: tokens.spacingM,
            })}
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
}
