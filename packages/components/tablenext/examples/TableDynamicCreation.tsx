import React from 'react';
import { Badge } from '@contentful/f36-components';
import { TableNext } from '@contentful/f36-table-next';

export default function TableDynamicCreation() {
  const contentTypes = [
    {
      id: '1',
      name: 'Category',
      description:
        'Categories can be applied to Courses and Lessons. Assigning Multiple categories is also possible.',
      updatedAt: 'Nov 15, 2021',
      status: 'published',
    },
    {
      id: '2',
      updatedAt: 'Nov 15, 2021',
      status: 'draft',
    },
    {
      id: '3',
      name: 'Layout',
      description:
        'A page consisting of freely configurable and rearrangeable content modules.',
      updatedAt: 'Nov 15, 2021',
      status: 'published',
    },
  ];

  return (
    <TableNext>
      <TableNext.Head>
        <TableNext.Row>
          <TableNext.Cell>Name</TableNext.Cell>
          <TableNext.Cell>Description</TableNext.Cell>
          <TableNext.Cell>Updated</TableNext.Cell>
          <TableNext.Cell>Status</TableNext.Cell>
        </TableNext.Row>
      </TableNext.Head>
      <TableNext.Body>
        {contentTypes.map((contentType) => {
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
