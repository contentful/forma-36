import React from 'react';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';

export type RadioProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Radio = (props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const {
    testId = 'cf-ui-radio-button',
    id,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <BaseCheckbox
      testId={testId}
      id={id}
      type="radio"
      className={className}
      {...otherProps}
      ref={ref}
    >
      {children}
    </BaseCheckbox>
  );
};

export const Radio = React.forwardRef(_Radio);
