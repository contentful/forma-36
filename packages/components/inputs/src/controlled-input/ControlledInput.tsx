import React, {
  EventHandler,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { cx } from 'emotion';
import { Done, Minus } from '@contentful/f36-icons';
import type { IconProps } from '@contentful/f36-icons';
import { Label } from '@contentful/f36-forms';
import type { LabelProps } from '@contentful/f36-forms';

import { styles } from './ControlledInput.styles';
import { Box, BoxProps } from '@contentful/f36-core';

export interface ControlledInputProps extends Omit<BoxProps<'div'>, 'ref'> {
  id?: string;
  isRequired?: boolean;
  label: string;
  isChecked?: boolean;
  onChange?: EventHandler<ChangeEvent<HTMLInputElement>>;
  name?: string;
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  value?: string;
  isDisabled?: boolean;
  type?: 'checkbox' | 'radio';
  className?: string;
  testId?: string;
  canBlurOnEsc?: boolean;
  isIndeterminate?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps?: LabelProps;
}

const _ControlledInput = (
  {
    isChecked,
    className,
    isDisabled = false,
    id,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    isRequired = false,
    testId = 'cf-ui-controlled-input',
    type = 'checkbox',
    value,
    canBlurOnEsc = true,
    isIndeterminate,
    inputProps,
    labelProps,
    ...otherProps
  }: ControlledInputProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const inputRef = useRef(null);

  const inputClassnames = cx(
    styles.input,
    {
      [styles.inputRadioButton]: type === 'radio',
      [styles.inputCheckbox]: type === 'checkbox',
      [styles.inputDisabled]: isDisabled,
    },
    inputProps?.className,
  );

  const wrapperClassnames = cx(styles.container, className);
  const labelClassnames = cx(
    styles.ghost,
    {
      [styles.ghostRadioButton]: type === 'radio',
      [styles.ghostCheckbox]: type === 'checkbox',
    },
    labelProps?.className,
  );

  const handleOnKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      e.persist();
      if (e.nativeEvent.code === 'Escape' && canBlurOnEsc) {
        e.currentTarget.blur();
      }
    },
    [canBlurOnEsc],
  );

  useEffect(() => {
    inputRef.current.indeterminate = isIndeterminate;
  }, [isIndeterminate]);

  const iconProps: IconProps = {
    size: 'medium',
    variant: isDisabled ? 'secondary' : 'white',
  };

  return (
    <Box
      as="div"
      display="inline-block"
      ref={ref}
      testId={testId}
      {...otherProps}
      className={wrapperClassnames}
    >
      <input
        {...inputProps}
        className={inputClassnames}
        value={value}
        name={name}
        checked={isChecked}
        type={type}
        ref={inputRef}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e);
          }
        }}
        onFocus={(e) => {
          if (onFocus) {
            onFocus(e);
          }
        }}
        aria-label={label}
        id={id}
        required={isRequired}
        disabled={isDisabled}
        onKeyDown={handleOnKeyDown}
      />
      {type === 'radio' ? (
        <Label {...labelProps} className={labelClassnames} htmlFor={id} />
      ) : (
        <Label {...labelProps} className={labelClassnames} htmlFor={id}>
          {isIndeterminate ? <Minus {...iconProps} /> : <Done {...iconProps} />}
        </Label>
      )}
    </Box>
  );
};

export const ControlledInput = React.forwardRef(_ControlledInput);
