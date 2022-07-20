import React, { useState, useRef } from 'react';
import { Calendar } from '@contentful/f36-datepicker';
import { TextInput } from '@contentful/f36-forms';
import { format } from 'date-fns';
import { Popover } from '@contentful/f36-popover';
import FocusLock from 'react-focus-lock';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export default function CustomExample() {
  const DATE_FORMAT = 'dd LLL yyyy'; // e.g. 31 Jan 2022

  const [selected, setSelected] = useState();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [inputValue, setInputValue] = useState(() =>
    selected ? format(selected, DATE_FORMAT) : '',
  );
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

  const handleInputInteraction = () => {
    // when popover gets closed focus returns to the input,
    // we want to prevent popover to be opened in this case
    if (popoverWasClosed.current) {
      popoverWasClosed.current = false;
      return;
    }

    setIsPopoverOpen(true);
  };

  return (
    <Popover isOpen={isPopoverOpen} onClose={closePopover}>
      <Popover.Trigger>
        <TextInput
          placeholder={format(new Date(), DATE_FORMAT)}
          value={inputValue}
          onFocus={handleInputInteraction}
          onClick={handleInputInteraction}
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
