import React, { Component } from 'react';

export interface TableBodyProps {
  className?: string;
  children: React.ReactNode;
}

export class TableBody extends Component<TableBodyProps> {
  render() {
    const { className, children } = this.props;

    return <tbody className={className}>{children}</tbody>;
  }
}

export default TableBody;
