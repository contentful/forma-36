import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { useFormControl } from '../form-control/FormControlContext';

export type RadioProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Radio = (props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-radio-button',
    id,
    isDisabled,
    isInvalid,
    isRequired,
    children,
    ...otherProps
  } = props;

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
      type="radio"
      testId={testId}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Radio = React.forwardRef(_Radio);
