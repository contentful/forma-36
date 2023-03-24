import { cx } from 'emotion';
import React, { forwardRef, useMemo, useState } from 'react';
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
import { getTextFromChildren } from '@contentful/f36-utils/src';

export enum TableCellSorting {
  Ascending = 'ascending',
  Descending = 'descending',
}

const SortingIconMap = {
  [TableCellSorting.Ascending]: SortAscendingIcon,
  [TableCellSorting.Descending]: SortDescendingIcon,
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
        'aria-sort': (isSorted ?? 'none') as
          | 'none'
          | 'ascending'
          | 'descending'
          | 'other',
        onBlur: () => setShowSorting(false),
        onFocus: () => setShowSorting(true),
        onMouseEnter: () => setShowSorting(true),
        onMouseLeave: () => setShowSorting(false),
      }
    : {};
  const columnName = useMemo(() => getTextFromChildren(children), [children]);
  let tableCellContent = children;

  if (isSortable) {
    tableCellContent = (
      <button
        aria-label={`Sort ${
          isSorted === TableCellSorting.Ascending
            ? TableCellSorting.Descending
            : TableCellSorting.Ascending
        } by ${columnName}`}
        className={styles.button}
        type="button"
      >
        {children}
        {isSorted ? (
          <SortingIcon size="tiny" variant="secondary" />
        ) : (
          <SortIcon
            aria-hidden={!showSorting}
            className={styles.sortIcon(showSorting)}
            size="tiny"
            variant="secondary"
          />
        )}
      </button>
    );
  }

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
      {tableCellContent}
    </BaseComponent>
  );
}

_TableCell.displayName = 'TableCell';

export const TableCell: PolymorphicComponent<
  ExpandProps<TableCellInternalProps>,
  'th' | 'td'
> = forwardRef(_TableCell);
