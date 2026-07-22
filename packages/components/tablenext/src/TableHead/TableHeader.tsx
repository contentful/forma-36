import React from 'react';
import { cx } from '@emotion/css';
import { TableHead } from './TableHead';
import { TableRow, TableCell } from '../';
import { getTableHeaderStyles } from './TableHeader.styles';
import { useTableContext } from '../tableContext';

type TableHeaderProps = {
  columnTitles: Array<string>;
  offsetTop?: number | string;
};

export const TableHeader = ({ columnTitles, offsetTop }: TableHeaderProps) => {
  const { isHeaderSticky, isStackable } = useTableContext();
  const styles = getTableHeaderStyles();

  return (
    <TableHead
      className={cx({ [styles.stackableHeader]: isStackable })}
      isSticky={isHeaderSticky}
      offsetTop={offsetTop}
    >
      <TableRow>
        {columnTitles.map((title) => (
          <TableCell key={title}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
