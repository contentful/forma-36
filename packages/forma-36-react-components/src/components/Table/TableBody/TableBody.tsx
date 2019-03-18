import React, { Component } from 'react';

export type TableBodyProps = {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-table-body',
};

export class TableBody extends Component<TableBodyProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    return (
      <tbody data-test-id={testId} className={className} {...otherProps}>
        {children}
      </tbody>
    );
  }
}

export default TableBody;
