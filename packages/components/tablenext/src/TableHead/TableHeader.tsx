import React from 'react';
import { TableHead } from './TableHead';
import { TableRow, TableCell } from '../';

type TableHeaderProps = {
  columnTitles: Array<string>;
  isHeaderSticky?: boolean;
};

export const TableHeader = ({
  columnTitles,
  isHeaderSticky,
}: TableHeaderProps) => {
  return (
    <TableHead isSticky={isHeaderSticky}>
      <TableRow>
        {columnTitles.map((title) => (
          <TableCell key={title}>{title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
