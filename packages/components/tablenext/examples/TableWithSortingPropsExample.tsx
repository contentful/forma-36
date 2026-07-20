import React, { useState } from 'react';
import { Badge } from '@contentful/f36-components';
import { TableNext, TableCellSorting } from '@contentful/f36-tablenext';

export default function TableWithSorting() {
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

  const [sorting, setSorting] = useState(undefined);
  const [sortedRows, setSortedRows] = useState(contentTypes);

  const handleSort = ({ column }) => {
    const direction =
      sorting && sorting.column === column
        ? sorting.direction === TableCellSorting.Ascending
          ? TableCellSorting.Descending
          : TableCellSorting.Ascending
        : TableCellSorting.Ascending;

    setSortedRows((rows) => {
      const sorted = rows.sort((rowA, rowB) => {
        let a = rowA[column];
        const b = rowB[column];

        if (column === 'name') {
          a = rowA[column] || 'Untitled';
        }

        return a.localeCompare(b);
      });

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
            onClick={() => handleSort({ column: 'name' })}
            sortDirection={
              sorting && sorting.column === 'name' ? sorting.direction : false
            }
          >
            Name
          </TableNext.Cell>
          <TableNext.Cell>Description</TableNext.Cell>
          <TableNext.Cell
            isSortable
            onClick={() => handleSort({ column: 'updatedAt' })}
            sortDirection={
              sorting && sorting.column === 'updatedAt'
                ? sorting.direction
                : false
            }
          >
            Updated
          </TableNext.Cell>
          <TableNext.Cell>Status</TableNext.Cell>
        </TableNext.Row>
      </TableNext.Head>
      <TableNext.Body>
        {sortedRows.map((contentType) => {
          return (
            <TableNext.Row key={contentType.id}>
              <TableNext.Cell>{contentType.name || 'Untitled'}</TableNext.Cell>
              <TableNext.Cell>{contentType.description}</TableNext.Cell>
              <TableNext.Cell>{contentType.updatedAt}</TableNext.Cell>
              <TableNext.Cell>
                <Badge
                  variant={
                    contentType.status === 'published' ? 'positive' : 'warning'
                  }
                >
                  {contentType.status}
                </Badge>
              </TableNext.Cell>
            </TableNext.Row>
          );
        })}
      </TableNext.Body>
    </TableNext>
  );
}
