import React, { Component } from 'react';

export type OptionProps = {
  value: string;
  children: React.ReactNode;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-select-option',
};

export class Option extends Component<OptionProps> {
  static defaultProps = defaultProps;

  render() {
    const { value, children, testId, ...otherProps } = this.props;

    return (
      <option value={value} data-test-id={testId} {...otherProps}>
        {children}
      </option>
    );
  }
}

export default Option;
