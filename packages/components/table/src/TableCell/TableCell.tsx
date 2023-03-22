import { cx } from 'emotion';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  type CommonProps,
  type PropsWithHTMLElement,
  type ExpandProps,
  type PolymorphicComponent,
} from '@contentful/f36-core';
import { Text, Caption, type TextProps } from '@contentful/f36-typography';
import {
  SortAscendingIcon,
  SortDescendingIcon,
  SortIcon,
} from '@contentful/f36-icons';

import { useTableCellContext } from './TableCellContext';
import { getTableCellStyles } from './TableCell.styles';
import { useTableContext } from '../tableContext';

export const sortingDirections = {
  asc: 'asc',
  desc: 'desc',
};

export enum TableCellSorting {
  ascending = 'ascending',
  descending = 'descending',
}

const SortingIconMap = {
  [TableCellSorting.ascending]: SortAscendingIcon,
  [TableCellSorting.descending]: SortDescendingIcon,
};

export type TableCellInternalProps = CommonProps & {
  align?: 'center' | 'left' | 'right';
  isSortable?: boolean;
  isSorted?: TableCellSorting;
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
    isSortable,
    isSorted,
    testId = 'cf-ui-table-cell',
    ...otherProps
  }: TableCellProps,
  forwardedRef: React.Ref<any>,
) {
  const [showSorting, setShowSorting] = useState(false);
  const { as, name: context, offsetTop } = useTableCellContext();
  const { verticalAlign } = useTableContext();
  const SortingIcon = SortingIconMap[isSorted];

  const isTableHead = context === 'head';
  const styles = getTableCellStyles({
    isSortable: isTableHead ? isSortable : undefined,
    isSorted,
    isTableHead,
    align,
    verticalAlign,
  });

  const BaseComponent = isTableHead ? Caption : Text;

  const sortableProps = isSortable
    ? {
        onBlur: () => setShowSorting(false),
        onFocus: () => setShowSorting(true),
        onMouseEnter: () => setShowSorting(true),
        onMouseLeave: () => setShowSorting(false),
        tabIndex: 0,
      }
    : {};

  return (
    <BaseComponent
      {...otherProps}
      {...sortableProps}
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
      {showSorting || isSorted ? (
        isSorted ? (
          <SortingIcon size="tiny" variant="secondary" />
        ) : (
          <SortIcon size="tiny" variant="secondary" />
        )
      ) : null}
    </BaseComponent>
  );
}

_TableCell.displayName = 'TableCell';

export const TableCell: PolymorphicComponent<
  ExpandProps<TableCellInternalProps>,
  'th' | 'td'
> = forwardRef(_TableCell);
