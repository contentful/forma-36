import React, { useState } from 'react';
import { Badge } from '@contentful/f36-components';
import { TableNext, TableCellSorting } from '@contentful/f36-table-next';

type SortState = {
  column: string;
  direction: TableCellSorting;
} | null;

const contentTypes = [
  {
    id: '1',
    name: 'Category',
    description:
      'Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible.',
    updatedAt: 'Nov 1, 2021',
    status: 'published',
  },
  {
    id: '2',
    name: 'Untitled',
    updatedAt: 'Nov 11, 2021',
    status: 'draft',
  },
  {
    id: '3',
    name: 'Layout',
    description:
      'A page consisting of freely configurable and rearrangeable content modules.',
    updatedAt: 'Nov 18, 2021',
    status: 'published',
  },
];

export default function TableNextWithSortingExample() {
  const [sorting, setSorting] = useState<SortState>(null);
  const [sortedRows, setSortedRows] = useState(contentTypes);

  const handleSort = (column: string) => {
    const direction =
      sorting?.column === column
        ? sorting.direction === TableCellSorting.Ascending
          ? TableCellSorting.Descending
          : TableCellSorting.Ascending
        : TableCellSorting.Ascending;

    setSortedRows((rows) => {
      const sorted = [...rows].sort((a, b) =>
        (a[column as keyof typeof a] ?? '').localeCompare(
          b[column as keyof typeof b] ?? '',
        ),
      );
      return direction === TableCellSorting.Ascending
        ? sorted
        : sorted.reverse();
    });
    setSorting({ column, direction });
  };

  return (
    <TableNext>
      <TableNext.Head>
        <TableNext.Row>
          <TableNext.Cell
            isSortable
            onClick={() => handleSort('name')}
            sortDirection={
              sorting?.column === 'name' ? sorting.direction : undefined
            }
          >
            Name
          </TableNext.Cell>
          <TableNext.Cell>Description</TableNext.Cell>
          <TableNext.Cell
            isSortable
            onClick={() => handleSort('updatedAt')}
            sortDirection={
              sorting?.column === 'updatedAt' ? sorting.direction : undefined
            }
          >
            Updated
          </TableNext.Cell>
          <TableNext.Cell>Status</TableNext.Cell>
        </TableNext.Row>
      </TableNext.Head>
      <TableNext.Body>
        {sortedRows.map((item) => (
          <TableNext.Row key={item.id}>
            <TableNext.Cell>{item.name}</TableNext.Cell>
            <TableNext.Cell>{item.description}</TableNext.Cell>
            <TableNext.Cell>{item.updatedAt}</TableNext.Cell>
            <TableNext.Cell>
              <Badge
                variant={item.status === 'published' ? 'positive' : 'warning'}
              >
                {item.status}
              </Badge>
            </TableNext.Cell>
          </TableNext.Row>
        ))}
      </TableNext.Body>
    </TableNext>
  );
}
