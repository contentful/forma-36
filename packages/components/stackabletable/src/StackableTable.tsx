import React from 'react';
import { cx } from '@emotion/css';
import { TableNext, TableBody, TableCell } from '@contentful/f36-table-next';
import type { TableNextProps } from '@contentful/f36-table-next';
import { TableHeader } from './TableHeader/TableHeader';
import { StackableTableRow } from './TableRow/StackableTableRow';
import {
  StackableTableContextProvider,
  type StackableBreakpointValue,
} from './tableContext';
import { getStackableTableStyles } from './StackableTable.styles';

export type StackableBreakpoint =
  number | `${number}px` | `${number}rem` | `${number}em`;

const DEFAULT_STACKABLE_BREAKPOINT = 700;

const getStackableBreakpointValue = (
  breakpoint: StackableBreakpoint = DEFAULT_STACKABLE_BREAKPOINT,
): StackableBreakpointValue =>
  typeof breakpoint === 'number' ? `${breakpoint}px` : breakpoint;

type StackableTableProps = {
  /**
   * Column titles used to generate the hidden <thead> and the inline labels
   * shown in each row when the container is narrow.
   */
  columnTitles: Array<string>;

  /**
   * Container width at which the table switches to the stacked layout.
   * Numbers are interpreted as px.
   * @default 700
   */
  stackableBreakpoint?: StackableBreakpoint;

  /**
   * @default false
   */
  isHeaderSticky?: boolean;

  offsetTop?: number | string;

  children?: React.ReactNode;
  className?: string;
  testId?: string;
} & Pick<TableNextProps, 'verticalAlign' | 'variant'>;

const StackableTableBase = ({
  children,
  className,
  columnTitles,
  stackableBreakpoint: stackableBreakpointProp,
  isHeaderSticky = false,
  offsetTop = 0,
  variant = 'inline',
  verticalAlign = 'top',
  testId,
}: StackableTableProps) => {
  const stackableBreakpoint = getStackableBreakpointValue(
    stackableBreakpointProp,
  );
  const styles = getStackableTableStyles(stackableBreakpoint);

  return (
    <StackableTableContextProvider
      value={{ columnTitles, stackableBreakpoint }}
    >
      <section className={cx(styles.wrapper, styles[variant])}>
        <TableNext
          layout="plain"
          verticalAlign={verticalAlign}
          testId={testId}
          className={className}
        >
          <TableHeader
            columnTitles={columnTitles}
            offsetTop={offsetTop}
            isHeaderSticky={isHeaderSticky}
            stackableBreakpoint={stackableBreakpoint}
          />
          {children}
        </TableNext>
      </section>
    </StackableTableContextProvider>
  );
};

StackableTableBase.displayName = 'StackableTable';

type CompoundStackableTable = typeof StackableTableBase & {
  Row: typeof StackableTableRow;
  Body: typeof TableBody;
  Cell: typeof TableCell;
};

export const StackableTable = StackableTableBase as CompoundStackableTable;
StackableTable.Row = StackableTableRow;
StackableTable.Body = TableBody;
StackableTable.Cell = TableCell;
