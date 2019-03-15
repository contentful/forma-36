import React, { Component } from 'react';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export type TableHeadProps = {
  isSticky?: boolean;
  offsetTop?: number | string;
  extraClassNames?: string;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  isSticky: false,
};

export class TableHead extends Component<TableHeadProps> {
  static defaultProps = defaultProps;

  render() {
    const { extraClassNames, offsetTop, isSticky, children } = this.props;

    const classNames = cn(extraClassNames, {
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
