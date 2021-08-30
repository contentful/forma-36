import { Table as NakedTable } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

type CompoundTable = typeof NakedTable & {
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
  Body: typeof TableBody;
};

export const Table = NakedTable as CompoundTable;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;
Table.Body = TableBody;
