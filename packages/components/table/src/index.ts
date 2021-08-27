import { Table as NakedTable } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export type { TableProps } from './Table';
export { TableBody } from './TableBody';
export type { TableBodyProps } from './TableBody';
export { TableCell } from './TableCell';
export type { TableCellProps } from './TableCell';
export { contextOptions, TableCellContext } from './tableCellContext';
export { TableHead } from './TableHead';
export type { TableHeadProps } from './TableHead';
export { TableRow } from './TableRow';
export type { TableRowProps } from './TableRow';

export const Table = Object.assign(NakedTable, {
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Body: TableBody,
});
