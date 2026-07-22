import { cx } from '@emotion/css';
import React, { forwardRef } from 'react';
import {
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
  type PolymorphicComponent,
} from '@contentful/f36-core';
import { Text, Caption, type TextProps } from '@contentful/f36-typography';

import { useTableCellContext } from './TableCellContext';
import { getTableCellStyles } from './TableCell.styles';
import { useTableContext } from '../tableContext';

export enum TableCellSorting {
  Ascending = 'ascending',
  Descending = 'descending',
}

export type TableCellInternalProps = CommonProps & {
  align?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
  width?: string | number;
} & Pick<TextProps, 'isTruncated' | 'isWordBreak'>;

export type TableCellProps = PropsWithHTMLElement<
  TableCellInternalProps,
  'th' | 'td'
>;

function TableCellBase(
  {
    align = 'left',
    children,
    className,
    testId = 'cf-ui-table-cell',
    ...otherProps
  }: TableCellProps,
  forwardedRef: React.Ref<HTMLTableCellElement>,
) {
  const { as, name: context, offsetTop } = useTableCellContext();
  const { verticalAlign } = useTableContext();

  const isTableHead = context === 'head';
  const styles = getTableCellStyles({
    isTableHead,
    align,
    verticalAlign,
  });
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

TableCellBase.displayName = 'TableCell';

export const TableCell = forwardRef(TableCellBase) as PolymorphicComponent<
  ExpandProps<TableCellInternalProps>,
  'th' | 'td'
>;
