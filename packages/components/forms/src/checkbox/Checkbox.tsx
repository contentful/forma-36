import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';

export type CheckboxProps = Omit<BaseCheckboxProps, 'type'>;

const _Checkbox = (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const { testId = 'cf-ui-checkbox', id, children, ...otherProps } = props;

  return (
    <BaseCheckbox
      id={id}
      type="checkbox"
      testId={testId}
      {...otherProps}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
