import React from 'react';

export interface OptionProps {
  value: string;
  children: React.ReactNode;
  testId?: string;
}

export const Option = ({
  value,
  children,
  testId = 'cf-ui-select-option',
  ...otherProps
}: OptionProps) => {
  return (
    <option value={value} data-test-id={testId} {...otherProps}>
      {children}
    </option>
  );
};

export default Option;
