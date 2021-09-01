import React from 'react';
import { cx } from 'emotion';

import { BaseInput } from '../base-input';
import type { BaseInputInternalProps } from '../base-input';
import { getStyles } from './Textarea.styles';

const styles = getStyles();

type BaseInputAndTextareaElementProps = BaseInputInternalProps &
  React.AllHTMLAttributes<HTMLTextAreaElement>;

export interface TextareaProps
  extends Omit<BaseInputAndTextareaElementProps, 'as'> {
  /** The id will be passed to both the id of the textarea tag and to the `htmlFor` prop of the Label component */
  id: string;
}

const _Textarea = (
  { className, isDisabled, isInvalid, ...otherProps }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
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
