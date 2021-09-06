import React from 'react';
import { cx } from 'emotion';

import { BaseInput } from '../base-input';
import type { BaseInputProps } from '../base-input';
import { useFormControl } from '../form-control/FormControlContext';
import { getStyles } from './Textarea.styles';

export type TextareaProps = Omit<
  BaseInputProps<'textarea'>,
  'as' | 'type' | 'size'
>;

const _Textarea = (
  {
    className,
    isDisabled,
    isInvalid,
    isRequired,
    isReadOnly,
    id,
    ...otherProps
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  const formProps = useFormControl({
    id,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
  });
  const styles = getStyles();

  return (
    <BaseInput
      {...otherProps}
      {...formProps}
      as="textarea"
      ref={ref}
      className={cx(className, {
        [styles.disabled]: isDisabled,
        [styles.error]: isInvalid,
      })}
    />
  );
};

/**
 * Textarea is a form component that allows the user to enter a sizeable amount of multi-line plain text.
 */
export const Textarea = React.forwardRef(_Textarea);
