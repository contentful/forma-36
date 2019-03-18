import React, { Component } from 'react';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export type TableHeadProps = {
  isSticky?: boolean;
  offsetTop?: number | string;
  className?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  isSticky: false,
};

export class TableHead extends Component<TableHeadProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, offsetTop, isSticky, children } = this.props;

    const classNames = cn(className, {
      [styles[`TableHead--sticky`]]: isSticky,
    });
    return (
      <TableCellContext.Provider
        value={{ ...contextOptions.head, offsetTop: offsetTop || 0 }}
      >
        <thead className={classNames}>{children}</thead>
      </TableCellContext.Provider>
    );
  }
}

export default TableHead;
