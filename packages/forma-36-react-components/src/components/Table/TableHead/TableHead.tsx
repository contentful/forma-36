import React, { Component } from 'react';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export interface TableHeadProps {
  extraClassNames?: string;
  isSticky?: boolean;
  offsetTop?: string | number;
  children: React.ReactNode;
}

export class TableHead extends Component<TableHeadProps> {
  static defaultProps = {
    isSticky: false,
  };

  render() {
    const { extraClassNames, offsetTop, isSticky, children } = this.props;

    const classNames = cn(extraClassNames, {
      [styles[`TableHead--sticky`]]: isSticky,
    });
    return (
      <TableCellContext.Provider value={{ ...contextOptions.head, offsetTop }}>
        <thead className={classNames}>{children}</thead>
      </TableCellContext.Provider>
    );
  }
}

export default TableHead;
