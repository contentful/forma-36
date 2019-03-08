import React, { Component } from 'react';

export interface TableBodyProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TableBody extends Component<TableBodyProps> {
  render() {
    const { extraClassNames, children } = this.props;

    return <tbody className={extraClassNames}>{children}</tbody>;
  }
}

export default TableBody;
