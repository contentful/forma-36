import { Table as OriginalTable } from './Table';
import { TableBody } from './TableBody/TableBody';
import { TableCell } from './TableCell/TableCell';
import { TableHead } from './TableHead/TableHead';
import { TableRow } from './TableRow/TableRow';

type CompoundTable = typeof OriginalTable & {
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
  Body: typeof TableBody;
};

export const Table = OriginalTable as CompoundTable;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;
Table.Body = TableBody;
