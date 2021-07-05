import React from 'react';

import { ControlledInput, ControlledInputProps } from '..';

export type CheckboxProps = Omit<ControlledInputProps, 'type'>;

export const _Checkbox = (
  { testId = 'cf-ui-checkbox', ...otherProps }: CheckboxProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  return (
    <ControlledInput
      testId={testId}
      type="checkbox"
      ref={ref}
      {...otherProps}
    />
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
