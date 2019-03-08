import React, { Component } from 'react';
import cn from 'classnames';

import { TableCellContext } from './TableCellContext';

import styles from './TableCell.css';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export interface TableCellProps {
  extraClassNames?: string;
  children?: React.ReactNode;
  align?: 'center' | 'left' | 'right';
  sorting?: keyof typeof sortingDirections | boolean;
}

export class TableCell extends Component<TableCellProps> {
  static defaultProps: Partial<TableCellProps> = {
    align: 'left',
    sorting: false,
  };

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
