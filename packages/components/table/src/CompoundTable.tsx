import { Table as OriginalTable } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

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
