import React, { Component } from 'react';

export interface OptionProps {
  value: string;
  children: React.ReactNode;
}

export class Option extends Component<OptionProps> {
  render() {
    const { value, children, ...otherProps } = this.props;

    return (
      <option value={value} {...otherProps}>
        {children}
      </option>
    );
  }
}

export default Option;
