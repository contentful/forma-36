import React, { Component } from 'react';
import cn from 'classnames';

import { TableCellContext } from './TableCellContext';

import styles from './TableCell.css';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export type TableCellProps = {
  align?: 'center' | 'left' | 'right';
  sorting?: TableCellSorting;
  style?: React.CSSProperties;
  extraClassNames?: string;
  children?: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  align: 'left',
  sorting: false as TableCellSorting,
};

export class TableCell extends Component<TableCellProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      extraClassNames,
      children,
      sorting,
      align,
      ...otherProps
    } = this.props;

    return (
      <TableCellContext.Consumer>
        {({ name: context, element, offsetTop }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Element = element as any;
          return (
            <Element
              className={cn(styles['TableCell'], extraClassNames, {
                [styles['TableCell--head']]: context === 'head',
                [styles['TableCell--head__sorting']]: sorting,
              })}
              style={{
                top: offsetTop,
              }}
              align={align}
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
