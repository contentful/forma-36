import React from 'react';

export interface OptionProps {
  value: string;
  children: React.ReactNode;
  testId?: string;
}

const defaultProps: Partial<OptionProps> = {
  testId: 'cf-ui-select-option',
};

export const Option = (props: OptionProps) => {
  const { value, children, testId, ...otherProps } = props;

  return (
    <option value={value} data-test-id={testId} {...otherProps}>
      {children}
    </option>
  );
};

Option.defaultProps = defaultProps;

export default Option;
