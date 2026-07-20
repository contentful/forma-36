import { TableNext as OriginalTableNext } from './TableNext';
import { TableBody } from './TableBody/TableBody';
import { TableCell } from './TableCell/TableCell';
import { TableHead } from './TableHead/TableHead';
import { TableRow } from './TableRow/TableRow';

type CompoundTableNext = typeof OriginalTableNext & {
  Row: typeof TableRow;
  Head: typeof TableHead;
  Cell: typeof TableCell;
  Body: typeof TableBody;
};

export const TableNext = OriginalTableNext as CompoundTableNext;
TableNext.Row = TableRow;
TableNext.Head = TableHead;
TableNext.Cell = TableCell;
TableNext.Body = TableBody;
