import React from 'react';
import { useId } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { useFormControl } from '../form-control/FormControlContext';
import { useBaseCheckboxGroup } from '../base-checkbox/BaseCheckboxGroupContext';

export type CheckboxProps = Omit<BaseCheckboxProps, 'type' | 'size'>;

const _Checkbox = (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-checkbox',
    id,
    isDisabled,
    isRequired,
    isInvalid,
    children,
    onBlur,
    onChange,
    defaultChecked,
    isChecked,
    value,
    name,
    ...otherProps
  } = props;

  const inputId = useId(id, 'checkbox');

  const groupProps = useBaseCheckboxGroup({
    onBlur,
    onChange,
    value,
    defaultChecked,
    isChecked,
    name,
  });

  // Removes the isReadOnly property that comes from FormControl context.
  const { isReadOnly, ...formProps } = useFormControl({
    id: inputId,
    isDisabled,
    isInvalid,
    isRequired,
  });

  return (
    <BaseCheckbox
      {...formProps}
      {...groupProps}
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
