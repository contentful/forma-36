import React from 'react';
import { EntityStatusBadge } from '@contentful/f36-components';
import { TableNext } from '@contentful/f36-tablenext';

export default function TableScrollableStickyHeaderAndFirstColumnExample() {
  const withLongContentTableData = Array.from({ length: 5 }, (_, index) => {
    const entries = [
      {
        name: 'How to optimize images in WordPress for faster loading',
        status: 'published',
        contentType: 'Blog post',
        updatedBy: 'Ayman Mahmoud',
        locale: 'en-US',
        space: 'Marketing',
        environment: 'master',
        tags: 'featured, seo-optimized',
      },
      {
        name: 'Building accessible web applications from the ground up',
        status: 'changed',
        contentType: 'Landing page',
        updatedBy: 'Jane Roe',
        locale: 'de-DE',
        space: 'Documentation',
        environment: 'staging',
        tags: 'accessibility, review',
      },
      {
        name: 'Content modeling best practices for large teams',
        status: 'draft',
        contentType: 'Case study',
        updatedBy: 'John Doe',
        locale: 'fr-FR',
        space: 'Support',
        environment: 'development',
        tags: 'internal',
      },
    ];
    const entry = entries[index % entries.length];

    return {
      ...entry,
      id: `entry-${index + 1}`,
      updated: `${index + 1} days ago`,
    };
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '320px',
        overflowY: 'auto',
      }}
    >
      <TableNext
        layout="scrollable"
        isFirstColumnSticky
        isHeaderSticky
        columnTitles={[
          'Name',
          'Status',
          'Content type',
          'Updated by',
          'Updated',
          'Locale',
          'Spacce',
          'Environment',
          'Tags',
          'ID',
        ]}
      >
        <TableNext.Body>
          {withLongContentTableData.map((item) => (
            <TableNext.Row key={item.id}>
              <TableNext.Cell>{item.name}</TableNext.Cell>
              <TableNext.Cell>
                <EntityStatusBadge
                  entityStatus={
                    item.status === 'published'
                      ? 'published'
                      : item.status === 'changed'
                        ? 'changed'
                        : 'draft'
                  }
                />
              </TableNext.Cell>
              <TableNext.Cell>{item.contentType}</TableNext.Cell>
              <TableNext.Cell>{item.updatedBy}</TableNext.Cell>
              <TableNext.Cell>{item.updated}</TableNext.Cell>
              <TableNext.Cell>{item.locale}</TableNext.Cell>
              <TableNext.Cell>{item.space}</TableNext.Cell>
              <TableNext.Cell>{item.environment}</TableNext.Cell>
              <TableNext.Cell>{item.tags}</TableNext.Cell>
              <TableNext.Cell>{item.id}</TableNext.Cell>
            </TableNext.Row>
          ))}
        </TableNext.Body>
      </TableNext>
    </div>
  );
}
