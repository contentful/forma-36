import React from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import { BaseInput, BaseInputInternalProps } from '../base-input';
import { ValidationMessage } from '@contentful/f36-validation-message';

import { Label } from '../Label';
import { getStyles } from './Textarea.styles';

type BaseInputAndTextareaElementProps = BaseInputInternalProps &
  React.AllHTMLAttributes<HTMLTextAreaElement>;

export interface TextareaProps
  extends Omit<BaseInputAndTextareaElementProps, 'as' | 'isInvalid'> {
  /** The id will be passed to both the id of the textarea tag and to the `htmlFor` prop of the Label component */
  id: string;
  /** This label will be the content of the label tag and the value of aria-label attribute */
  label: string;
  /** This prop will show validation messages below the teaxarea element */
  validationMessage?: string;
}

const _Textarea = (
  {
    className,
    id,
    label,
    validationMessage,
    isDisabled,
    ...otherProps
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  const styles = getStyles();

  const isInvalid = Boolean(validationMessage);

  return (
    <Flex className={className} flexDirection="column">
      <Label htmlFor={id}>{label}</Label>
      <BaseInput
        {...otherProps}
        id={id}
        as="textarea"
        ref={ref}
        className={cx({
          [styles.disabled]: isDisabled,
          [styles.error]: isInvalid,
        })}
        label={label}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
      />

      {validationMessage && (
        <Flex marginTop="spacingXs">
          <ValidationMessage>{validationMessage}</ValidationMessage>
        </Flex>
      )}
    </Flex>
  );
};

export const Textarea = React.forwardRef(_Textarea);
