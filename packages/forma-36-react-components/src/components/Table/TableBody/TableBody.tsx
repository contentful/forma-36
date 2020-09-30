import React, { Component } from 'react';

export interface TableBodyProps {
  className?: string;
  style?: React.CSSProperties;
  testId?: string;
  children: React.ReactNode;
}

const defaultProps: Partial<TableBodyProps> = {
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
