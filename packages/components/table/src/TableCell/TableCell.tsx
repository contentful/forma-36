import { cx } from 'emotion';
import React, { forwardRef } from 'react';
import {
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
  type PolymorphicComponent,
} from '@contentful/f36-core';

import { useTableCellContext } from './TableCellContext';
import { getTableCellStyles } from './TableCell.styles';
import { Text, Caption, type TextProps } from '@contentful/f36-typography';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export type TableCellSorting = keyof typeof sortingDirections | boolean;

export type TableCellInternalProps = CommonProps & {
  align?: 'center' | 'left' | 'right';
  sorting?: TableCellSorting;
  width?: string | number;
  children?: React.ReactNode;
} & Pick<TextProps, 'isTruncated' | 'isWordBreak'>;

export type TableCellProps = PropsWithHTMLElement<
  TableCellInternalProps,
  'th' | 'td'
>;

function _TableCell(
  {
    align = 'left',
    children,
    className,
    sorting = false as TableCellSorting,
    testId = 'cf-ui-table-cell',
    ...otherProps
  }: TableCellProps,
  forwardedRef: React.Ref<any>,
) {
  const { as, name: context, offsetTop } = useTableCellContext();

  const isTableHead = context === 'head';
  const styles = getTableCellStyles({ isTableHead, sorting, align });

  const BaseComponent = isTableHead ? Caption : Text;

  return (
    <BaseComponent
      {...otherProps}
      as={as}
      className={cx(styles.container, className)}
      ref={forwardedRef}
      style={{
        ...otherProps.style,
        top: offsetTop || undefined,
      }}
      testId={testId}
    >
      {children}
    </BaseComponent>
  );
}

_TableCell.displayName = 'TableCell';

export const TableCell: PolymorphicComponent<
  ExpandProps<TableCellInternalProps>,
  'th' | 'td'
> = forwardRef(_TableCell);
