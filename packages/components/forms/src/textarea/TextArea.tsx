import React from 'react';

import { BaseInput, BaseInputInternalProps } from '@contentful/f36-inputs';

import { Label } from '../Label';

type BaseInputAndTextAreaElementProps = BaseInputInternalProps &
  React.AllHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps
  extends Omit<BaseInputAndTextAreaElementProps, 'as'> {
  label: string;
}

const _TextArea = (
  { className, id, label, ...otherProps }: TextAreaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) => {
  return (
    <span className={className}>
      <Label htmlFor={id}>{label}</Label>
      <BaseInput
        {...otherProps}
        id={id}
        as="textarea"
        ref={ref}
        className={className}
        label={label}
      />
    </span>
  );
};

export const TextArea = React.forwardRef(_TextArea);
