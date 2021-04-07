import { css, cx } from 'emotion';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { FocusEvent, FocusEventHandler } from 'react';
import { Box } from '@contentful/f36-core';
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import Pikaday from 'pikaday';
import dayjs from 'dayjs';
import { TextInput, ValidationMessage } from '@contentful/f36-components';
import { Label } from '@contentful/f36-forms';
import tokens from '@contentful/f36-tokens';
import 'pikaday/css/pikaday.css';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

const styles = {
  root: css({
    maxHeight: 70,
  }),
  datepicker: css({
    zIndex: tokens.zIndexDropdown,
    display: 'block',
    '&.is-hidden': {
      display: 'none',
    },
  }),
};

const DEFAULT_TAG = 'div';

export type DatepickerInternalProps = {
  /**
   * Date format to display the date input value with
   */
  dateFormat?: string;
  /**
   * Boolean to control the open state of the datepicker
   */
  isOpen?: boolean;
  /**
   * Text to render as label for the input
   */
  labelText?: string;
  /**
   * The latest date that users should be able to choose in the calendar
   */
  maxDate?: Date;
  /**
   * The earliest date that users should be able to choose in the calendar
   */
  minDate?: Date;
  onBlur?: FocusEventHandler;
  onChange?: (val: Date) => void;
  onFocus?: FocusEventHandler;
  /**
   * Default value to use
   */
  value?: Date;
};

export type DatepickerProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, DatepickerInternalProps>;

export const _Datepicker: PolymorphicComponentWithRef<
  DatepickerInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    className,
    dateFormat = 'Do MMM YYYY',
    disabled,
    id,
    isOpen,
    labelText,
    maxDate,
    minDate,
    onBlur,
    onChange,
    onFocus,
    required,
    testId = 'cf-ui-datepicker',
    value,
    ...otherProps
  },
  forwardedRef,
) => {
  const [validationError] = useState<string>();
  const pikaday = useRef<Pikaday>();
  const input = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    pikaday.current = new Pikaday({
      bound: typeof isOpen === 'undefined',
      field: input && input.current,
      format: dateFormat,
      minDate: minDate,
      maxDate: maxDate,
      yearRange: 5,
      theme: cx(styles.datepicker, 'hide-carret'),
      toString: (date, dateFormat) => {
        return dayjs(date).format(dateFormat);
      },
      onSelect: (value) => {
        onChange?.(value);
      },
    });

    return () => {
      if (pikaday.current) {
        pikaday.current.destroy();
      }
    };
  }, [dateFormat, isOpen, minDate, maxDate, onChange]);

  useEffect(() => {
    if (isOpen && pikaday.current) {
      pikaday.current.show();
    }
  }, [isOpen]);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      onFocus?.(event);

      if (typeof isOpen === 'undefined' && pikaday.current) {
        pikaday.current.show();
      }
    },
    [isOpen, onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      onBlur?.(event);

      if (
        typeof isOpen === 'undefined' &&
        pikaday.current &&
        !pikaday.current.el.contains(event.relatedTarget as HTMLInputElement)
      ) {
        pikaday.current.hide();
      }
    },
    [isOpen, onBlur],
  );

  return (
    <Box
      as={DEFAULT_TAG}
      {...otherProps}
      className={cx(styles.root, className)}
      ref={forwardedRef}
    >
      {labelText && (
        <Label required={required} htmlFor={id}>
          {labelText}
        </Label>
      )}
      <TextInput
        disabled={disabled}
        id={id}
        required={required}
        testId={testId}
        readOnly={true}
        inputRef={input}
        value={value && dayjs(value).format(dateFormat)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete="off"
      />
      {validationError && (
        <ValidationMessage>{validationError}</ValidationMessage>
      )}
    </Box>
  );
};

export const Datepicker: PolymorphicComponent<
  DatepickerInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_Datepicker);
