import React, { Component } from 'react';
import cn from 'classnames';

import { TableCellContext } from './TableCellContext';

import styles from './TableCell.css';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export interface TableCellProps {
  align?: 'center' | 'left' | 'right';
  sorting?: TableCellSorting;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children?: React.ReactNode;
}

const defaultProps: Partial<TableCellProps> = {
  align: 'left',
  sorting: false as TableCellSorting,
  testId: 'cf-ui-table-cell',
};

export class TableCell extends Component<TableCellProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      sorting,
      align,
      testId,
      ...otherProps
    } = this.props;

    return (
      <TableCellContext.Consumer>
        {({ name: context, element, offsetTop }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Element = element as any;
          return (
            <Element
              className={cn(styles['TableCell'], className, {
                [styles['TableCell--head']]: context === 'head',
                [styles['TableCell--head__sorting']]: sorting,
              })}
              style={{
                top: offsetTop,
              }}
              align={align}
              data-test-id={testId}
              {...otherProps}
            >
              {children}
            </Element>
          );
        }}
      </TableCellContext.Consumer>
    );
  }
}

export default TableCell;
