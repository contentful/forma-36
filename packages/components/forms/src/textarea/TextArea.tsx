import React from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import { BaseInput, BaseInputInternalProps } from '@contentful/f36-inputs';
import { ValidationMessage } from '@contentful/f36-validation-message';

import { Label } from '../Label';
import { getStyles } from './TextArea.styles';

type BaseInputAndTextAreaElementProps = BaseInputInternalProps &
  React.AllHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps
  extends Omit<BaseInputAndTextAreaElementProps, 'as' | 'isInvalid'> {
  /** The id will be passed to both the id of the textarea tag and to the `htmlFor` prop of the Label component */
  id: string;
  /** This label will be the content of the label tag and the value of aria-label attribute */
  label: string;
  /** This prop will show validation messages below the teaxarea element */
  validationMessage?: string;
}

const _TextArea = (
  {
    className,
    id,
    label,
    validationMessage,
    isDisabled,
    ...otherProps
  }: TextAreaProps,
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

export const TextArea = React.forwardRef(_TextArea);
