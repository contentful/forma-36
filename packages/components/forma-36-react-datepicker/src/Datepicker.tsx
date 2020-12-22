import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { FocusEventHandler, FocusEvent } from 'react';
import Pikaday from 'pikaday';
import format from 'date-fns/format';
import {
  TextInput,
  FormLabel,
  ValidationMessage,
} from '@contentful/forma-36-react-components';
import { css, cx } from 'emotion';

const styles = {
  datePickerWrapper: css({
    maxHeight: 70,
  }),
  datePicker: css({
    zIndex: 1002,
    display: 'block',
    '.is-hidden': {
      display: 'none',
    },
  }),
};

export interface DatePickerProps {
  disabled: boolean;
  required: boolean;
  value?: Date;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (val: Date) => void;
  onBlur?: FocusEventHandler;
  name?: string;
  helpText?: string;
  labelText?: string;
  id?: string;
  testId?: string;
  dateFormat?: string;
}

export function Datepicker({
  labelText,
  required,
  name,
  id,
  testId,
  dateFormat,
  disabled,
  ...otherProps
}: DatePickerProps): React.ReactElement {
  const [validationError] = useState<string>();
  const pikaday = useRef<Pikaday>();
  const datePickerNode = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    pikaday.current = new Pikaday({
      field: datePickerNode && datePickerNode.current,
      minDate: otherProps.minDate,
      maxDate: otherProps.maxDate,
      yearRange: 5,
      theme: cx(styles.datePicker, 'hide-carret'),
      onSelect: (value) => {
        otherProps.onChange?.(value);
      },
    });

    return () => {
      if (pikaday.current) {
        pikaday.current.destroy();
      }
    };
  }, []);

  const handleOpen = useCallback(() => {
    if (pikaday.current) {
      pikaday.current.show();
    }
  }, []);

  const handleBlur = useCallback((e: FocusEvent) => {
    otherProps.onBlur?.(e);
    if (
      pikaday.current &&
      !pikaday.current.el.contains(e.relatedTarget as HTMLInputElement)
    ) {
      pikaday.current.hide();
    }
  }, []);

  return (
    <div className={styles.datePickerWrapper}>
      {labelText && (
        <FormLabel required={required} htmlFor={id}>
          {labelText}
        </FormLabel>
      )}
      <TextInput
        disabled={disabled}
        required={required}
        name={name}
        testId={testId}
        readOnly={true}
        inputRef={datePickerNode}
        value={
          otherProps.value && format(otherProps.value, dateFormat!) // eslint-disable-line @typescript-eslint/no-non-null-assertion
        }
        id={id}
        onFocus={handleOpen}
        onBlur={handleBlur}
        autoComplete="off"
      />
      {validationError && (
        <ValidationMessage>{validationError}</ValidationMessage>
      )}
    </div>
  );
}

Datepicker.defaultProps = {
  name: 'cf-ui-datepicker',
  id: 'cf-ui-datepicker',
  testId: 'cf-ui-datepicker',
  dateFormat: 'do MMM yyyy',
};

export default Datepicker;
