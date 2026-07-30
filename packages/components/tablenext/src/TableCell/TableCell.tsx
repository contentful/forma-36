import { cx } from '@emotion/css';
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
  CaretUpDownIcon,
} from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { getTextFromChildren } from '@contentful/f36-utils';

import { useTableCellContext } from './TableCellContext';
import { getTableCellStyles } from './TableCell.styles';
import { useTableContext } from '../tableContext';

export enum TableCellSorting {
  Ascending = 'ascending',
  Descending = 'descending',
}

const SortingIconMap = {
  [TableCellSorting.Ascending]: SortAscendingIcon,
  [TableCellSorting.Descending]: SortDescendingIcon,
};

type SortableTableCellProps = {
  isSortable: true;
  sortDirection?: TableCellSorting;
  /** Override auto-generated aria-label on the sort button */
  sortButtonAriaLabel?: string;
};

type NonSortableTableCellProps = {
  isSortable?: false | undefined;
  sortDirection?: never;
  sortButtonAriaLabel?: never;
};

export type TableCellInternalProps = CommonProps &
  (SortableTableCellProps | NonSortableTableCellProps) & {
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
    isSortable,
    sortDirection,
    testId = 'cf-ui-table-cell',
    sortButtonAriaLabel,
    ...otherProps
  }: TableCellProps,
  forwardedRef: React.Ref<HTMLTableCellElement>,
) {
  const [showSorting, setShowSorting] = useState(false);
  const { as, name: context, offsetTop } = useTableCellContext();
  const { verticalAlign, isStackable } = useTableContext();

  const isTableHead = context === 'head';
  const isSortingActive = isSortable && isTableHead && !isStackable;

  const SortingIcon = sortDirection ? SortingIconMap[sortDirection] : undefined;
  const styles = getTableCellStyles({
    isSortable: isSortingActive,
    isTableHead,
    align,
    verticalAlign,
  });
  const BaseComponent = isTableHead ? Caption : Text;
  const sortableProps = isSortingActive
    ? {
        'aria-sort': (sortDirection ?? 'none') as
          'none' | 'ascending' | 'descending' | 'other',
        onBlur: () => setShowSorting(false),
        onFocus: () => setShowSorting(true),
        onMouseEnter: () => setShowSorting(true),
        onMouseLeave: () => setShowSorting(false),
      }
    : {};
  const columnName = useMemo(() => getTextFromChildren(children), [children]);
  let tableCellContent = children;

  if (isSortingActive) {
    tableCellContent = (
      <button
        aria-label={
          sortButtonAriaLabel ??
          `Sort ${
            sortDirection === TableCellSorting.Ascending
              ? TableCellSorting.Descending
              : TableCellSorting.Ascending
          } by ${columnName}`
        }
        className={styles.button}
        type="button"
      >
        {children}
        {sortDirection && SortingIcon ? (
          <SortingIcon size="tiny" color={tokens.gray900} />
        ) : (
          <CaretUpDownIcon
            aria-hidden={!showSorting}
            className={styles.sortIcon(showSorting)}
            size="tiny"
            color={tokens.gray900}
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

TableCellBase.displayName = 'TableCell';

export const TableCell = forwardRef(TableCellBase) as PolymorphicComponent<
  ExpandProps<TableCellInternalProps>,
  'th' | 'td'
>;
