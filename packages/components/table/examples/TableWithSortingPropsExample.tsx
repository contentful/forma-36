import React, { useState } from 'react';
import { Badge, Table, TableCellSorting } from '@contentful/f36-components';

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
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Cell
            isSortable
            isSorted={
              sorting && sorting.column === 'name' ? sorting.direction : false
            }
            onClick={() => handleSort({ column: 'name' })}
          >
            Name
          </Table.Cell>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell
            isSortable
            isSorted={
              sorting && sorting.column === 'updatedAt'
                ? sorting.direction
                : false
            }
            onClick={() => handleSort({ column: 'updatedAt' })}
          >
            Updated
          </Table.Cell>
          <Table.Cell>Status</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedRows.map((contentType) => {
          return (
            <Table.Row key={contentType.id}>
              <Table.Cell>{contentType.name || 'Untitled'}</Table.Cell>
              <Table.Cell>{contentType.description}</Table.Cell>
              <Table.Cell>{contentType.updatedAt}</Table.Cell>
              <Table.Cell>
                <Badge
                  variant={
                    contentType.status === 'published' ? 'positive' : 'warning'
                  }
                >
                  {contentType.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
