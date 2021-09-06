import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { useFormControl } from '../form-control/FormControlContext';
import { useBaseCheckboxGroup } from '../base-checkbox/BaseCheckboxGroupContext';

export type RadioProps = Omit<
  BaseCheckboxProps,
  'type' | 'isIndeterminate' | 'size'
>;

const _Radio = (props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-radio-button',
    id,
    isDisabled,
    isInvalid,
    isRequired,
    children,
    onChange,
    defaultChecked,
    isChecked,
    value,
    name,
    ...otherProps
  } = props;

  const groupProps = useBaseCheckboxGroup({
    onChange,
    value,
    defaultChecked,
    isChecked,
    name,
  });

  const formProps = useFormControl({
    id,
    isDisabled,
    isInvalid,
    isRequired,
  });

  return (
    <BaseCheckbox
      {...formProps}
      {...otherProps}
      {...groupProps}
      type="radio"
      testId={testId}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Radio = React.forwardRef(_Radio);
