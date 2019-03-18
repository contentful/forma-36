import React, { Component } from 'react';
import cn from 'classnames';
import styles from './TableHead.css';

import { TableCellContext, contextOptions } from '../TableCell';

export type TableHeadProps = {
  isSticky?: boolean;
  offsetTop?: number | string;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  isSticky: false,
  testId: 'cf-ui-table-head',
};

export class TableHead extends Component<TableHeadProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      testId,
      offsetTop,
      isSticky,
      children,
      ...otherProps
    } = this.props;

    const classNames = cn(className, {
      [styles[`TableHead--sticky`]]: isSticky,
    });
    return (
      <TableCellContext.Provider
        value={{ ...contextOptions.head, offsetTop: offsetTop || 0 }}
      >
        <thead className={classNames} data-test-id={testId} {...otherProps}>
          {children}
        </thead>
      </TableCellContext.Provider>
    );
  }
}

export default TableHead;
