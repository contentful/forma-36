import React from 'react';
import { cx } from 'emotion';

import { BaseInput } from '../base-input';
import type { BaseInputInternalProps } from '../base-input/types';
import { getStyles } from './Textarea.styles';

export type TextareaProps = Omit<BaseInputInternalProps, 'as'>;

const _Textarea = (
  { className, isDisabled, isInvalid, ...otherProps }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  const styles = getStyles();

  return (
    <BaseInput
      {...otherProps}
      as="textarea"
      ref={ref}
      className={cx(className, {
        [styles.disabled]: isDisabled,
        [styles.error]: isInvalid,
      })}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
    />
  );
};

/**
 * Textarea is a form component that allows the user to enter a sizeable amount of multi-line plain text.
 */
export const Textarea = React.forwardRef(_Textarea);
