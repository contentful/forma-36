import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';

export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Switch = (props: SwitchProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-switch',
    id,
    children,
    className,
    ...otherProps
  } = props;

  return (
    <BaseCheckbox
      testId={testId}
      id={id}
      type="switch"
      className={className}
      {...otherProps}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Switch = React.forwardRef(_Switch);
