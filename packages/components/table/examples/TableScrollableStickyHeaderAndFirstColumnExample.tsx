import React from 'react';
import { EntityStatusBadge, Table } from '@contentful/f36-components';

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
      <Table layout="scrollable" isFirstColumnSticky>
        <Table.Head isSticky>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>Content type</Table.Cell>
            <Table.Cell>Updated by</Table.Cell>
            <Table.Cell>Updated</Table.Cell>
            <Table.Cell>Locale</Table.Cell>
            <Table.Cell>Space</Table.Cell>
            <Table.Cell>Environment</Table.Cell>
            <Table.Cell>Tags</Table.Cell>
            <Table.Cell>ID</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {withLongContentTableData.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                <EntityStatusBadge entityStatus={item.status} />
              </Table.Cell>
              <Table.Cell>{item.contentType}</Table.Cell>
              <Table.Cell>{item.updatedBy}</Table.Cell>
              <Table.Cell>{item.updated}</Table.Cell>
              <Table.Cell>{item.locale}</Table.Cell>
              <Table.Cell>{item.space}</Table.Cell>
              <Table.Cell>{item.environment}</Table.Cell>
              <Table.Cell>{item.tags}</Table.Cell>
              <Table.Cell>{item.id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
