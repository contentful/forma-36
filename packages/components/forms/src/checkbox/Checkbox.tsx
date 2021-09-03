import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { useFormControl } from '../form-control/FormControlContext';

export type CheckboxProps = Omit<BaseCheckboxProps, 'type'>;

const _Checkbox = (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-checkbox',
    id,
    isDisabled,
    isRequired,
    isInvalid,
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
      type="checkbox"
      testId={testId}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
