import React, { useState } from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import {
  Skeleton,
  EntityStatusBadge,
  Button,
  Flex,
  SectionHeading,
  Note,
  Layout,
} from '@contentful/f36-components';
import { withLongContentTableData } from './WithLongContent.mockdata';
import { css } from '@emotion/css';

import { TableNext, TableCellSorting } from '../src';

type SortState = { column: string; direction: TableCellSorting } | null;

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: TableNext,
  parameters: {
    propTypes: [
      TableNext['__docgenInfo'],
      TableNext.Body['__docgenInfo'],
      TableNext.Head['__docgenInfo'],
      TableNext.Cell['__docgenInfo'],
      TableNext.Row['__docgenInfo'],
    ],
  },
  subcomponents: {
    TableHead: TableNext.Head,
    TableBody: TableNext.Body,
    TableCell: TableNext.Cell,
    TableRow: TableNext.Row,
  },
  title: 'Components/TableNext',
} as Meta;

export const Default: StoryObj = {
  render: (args) => {
    return (
      <div style={{ width: '800px' }}>
        <TableNext {...args}>
          <TableNext.Head>
            <TableNext.Row>
              <TableNext.Cell>Name</TableNext.Cell>
              <TableNext.Cell>Email</TableNext.Cell>
              <TableNext.Cell>Organization role</TableNext.Cell>
              <TableNext.Cell>Last activity</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Head>
          <TableNext.Body>
            <TableNext.Row>
              <TableNext.Cell>Jane Roe</TableNext.Cell>
              <TableNext.Cell>jane@roe.com</TableNext.Cell>
              <TableNext.Cell>CEO</TableNext.Cell>
              <TableNext.Cell>August 29, 2018</TableNext.Cell>
            </TableNext.Row>
            <TableNext.Row>
              <TableNext.Cell>John Doe</TableNext.Cell>
              <TableNext.Cell>john@doe.com</TableNext.Cell>
              <TableNext.Cell>CTO</TableNext.Cell>
              <TableNext.Cell>July 27, 2019</TableNext.Cell>
            </TableNext.Row>
          </TableNext.Body>
        </TableNext>
      </div>
    );
  },
};

export const WithLoadingState: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '800px' }}>
      <TableNext>
        <TableNext.Head>
          <TableNext.Row>
            <TableNext.Cell>Name</TableNext.Cell>
            <TableNext.Cell>Email</TableNext.Cell>
            <TableNext.Cell>Organization role</TableNext.Cell>
            <TableNext.Cell>Last activity</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Head>
        <TableNext.Body>
          {isLoading ? (
            <Skeleton.Row rowCount={4} columnCount={4} />
          ) : (
            <>
              <TableNext.Row>
                <TableNext.Cell>Jane Roe</TableNext.Cell>
                <TableNext.Cell>jane@roe.com</TableNext.Cell>
                <TableNext.Cell>CEO</TableNext.Cell>
                <TableNext.Cell>August 29, 2018</TableNext.Cell>
              </TableNext.Row>
              <TableNext.Row>
                <TableNext.Cell>John Doe</TableNext.Cell>
                <TableNext.Cell>john@doe.com</TableNext.Cell>
                <TableNext.Cell>CTO</TableNext.Cell>
                <TableNext.Cell>July 27, 2019</TableNext.Cell>
              </TableNext.Row>
            </>
          )}
        </TableNext.Body>
      </TableNext>
      <br />
      <Button
        size="small"
        variant="secondary"
        onClick={() => setIsLoading((state) => !state)}
      >
        isLoading toggle button
      </Button>
    </div>
  );
};

export const StyleVariants: StoryFn = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Inline TableNext
      </SectionHeading>

      <TableNext>
        <TableNext.Head>
          <TableNext.Row>
            <TableNext.Cell>Name</TableNext.Cell>
            <TableNext.Cell>Email</TableNext.Cell>
            <TableNext.Cell>Organization role</TableNext.Cell>
            <TableNext.Cell>Last activity</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Head>
        <TableNext.Body>
          <TableNext.Row isSelected>
            <TableNext.Cell>Jane Roe</TableNext.Cell>
            <TableNext.Cell>jane@roe.com</TableNext.Cell>
            <TableNext.Cell>CEO</TableNext.Cell>
            <TableNext.Cell>August 29, 2018</TableNext.Cell>
          </TableNext.Row>
          <TableNext.Row>
            <TableNext.Cell>John Doe</TableNext.Cell>
            <TableNext.Cell>john@doe.com</TableNext.Cell>
            <TableNext.Cell>CTO</TableNext.Cell>
            <TableNext.Cell>July 27, 2019</TableNext.Cell>
          </TableNext.Row>
          <TableNext.Row>
            <TableNext.Cell>Bill Oh</TableNext.Cell>
            <TableNext.Cell>bill@oh.com</TableNext.Cell>
            <TableNext.Cell>CFO</TableNext.Cell>
            <TableNext.Cell>January 27, 2021</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Body>
      </TableNext>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Embedded TableNext
      </SectionHeading>

      <TableNext variant="embedded">
        <TableNext.Head>
          <TableNext.Row>
            <TableNext.Cell>Name</TableNext.Cell>
            <TableNext.Cell>Email</TableNext.Cell>
            <TableNext.Cell>Organization role</TableNext.Cell>
            <TableNext.Cell>Last activity</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Head>
        <TableNext.Body>
          <TableNext.Row isSelected>
            <TableNext.Cell>Jane Roe</TableNext.Cell>
            <TableNext.Cell>jane@roe.com</TableNext.Cell>
            <TableNext.Cell>CEO</TableNext.Cell>
            <TableNext.Cell>August 29, 2018</TableNext.Cell>
          </TableNext.Row>
          <TableNext.Row>
            <TableNext.Cell>John Doe</TableNext.Cell>
            <TableNext.Cell>john@doe.com</TableNext.Cell>
            <TableNext.Cell>CTO</TableNext.Cell>
            <TableNext.Cell>July 27, 2019</TableNext.Cell>
          </TableNext.Row>
          <TableNext.Row>
            <TableNext.Cell>Bill Oh</TableNext.Cell>
            <TableNext.Cell>bill@oh.com</TableNext.Cell>
            <TableNext.Cell>CFO</TableNext.Cell>
            <TableNext.Cell>January 27, 2021</TableNext.Cell>
          </TableNext.Row>
        </TableNext.Body>
      </TableNext>
    </Flex>
  </>
);

const sortableContentTypes = [
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
export const WithSorting: StoryFn = () => {
  const [sorting, setSorting] = useState<SortState>(null);
  const [sortedRows, setSortedRows] = useState(sortableContentTypes);

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
    <div style={{ width: '800px' }}>
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
                <EntityStatusBadge
                  entityStatus={item.status as 'published' | 'draft'}
                />
              </TableNext.Cell>
            </TableNext.Row>
          ))}
        </TableNext.Body>
      </TableNext>
    </div>
  );
};

export const Stackable: StoryObj = {
  render: (args) => (
    <div
      className={css({
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '300px',
        width: '100vw',
        height: '100vh',
        margin: '-1rem',
        flexDirection: 'column',
        overflow: 'hidden',
      })}
    >
      <div className={css({ backgroundColor: 'silver', height: '60px' })}>
        Navbar
      </div>
      <Layout>
        <Layout.Body>
          <Note className={css({ margin: '1rem' })}>
            TableNext in stackable layout. When the surrounding container is
            smaller than 700px the table is displayed in a stacked layout.
          </Note>
          <TableNext layout="stackable" {...args}>
            <TableNext.Body>
              {withContentTableData.map((item) => (
                <TableNext.Row key={item.name}>
                  <TableNext.Cell>{item.name}</TableNext.Cell>
                  <TableNext.Cell>
                    <EntityStatusBadge entityStatus={item.status} />
                  </TableNext.Cell>
                  <TableNext.Cell>{item.email}</TableNext.Cell>
                  <TableNext.Cell>{item.contentType}</TableNext.Cell>
                  <TableNext.Cell>{item.updatedBy}</TableNext.Cell>
                  <TableNext.Cell>{item.updated}</TableNext.Cell>
                </TableNext.Row>
              ))}
            </TableNext.Body>
          </TableNext>
        </Layout.Body>
      </Layout>
    </div>
  ),
};

const stackableColumnTitles = [
  'Name',
  'Status',
  'Email',
  'Content type',
  'Updated by',
  'Last activity',
];

export const StackableWithTitles: StoryObj = {
  render: (args) => (
    <div
      className={css({
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '300px',
        width: '100vw',
        height: '100vh',
        margin: '-1rem',
        flexDirection: 'column',
        overflow: 'hidden',
      })}
    >
      <div className={css({ backgroundColor: 'silver', height: '60px' })}>
        Navbar
      </div>
      <Layout>
        <Layout.Body>
          <Note className={css({ margin: '1rem' })}>
            TableNext in stackable layout with columnTitles. When the
            surrounding container is smaller than 700px the table stacks and
            shows column titles next to each cell value.
          </Note>
          <TableNext
            layout="stackable"
            columnTitles={stackableColumnTitles}
            {...args}
          >
            <TableNext.Head>
              <TableNext.Row>
                {stackableColumnTitles.map((item, id) => (
                  <TableNext.Cell key={`table-head-cell-${item}-${id}`}>
                    {item}
                  </TableNext.Cell>
                ))}
              </TableNext.Row>
            </TableNext.Head>
            <TableNext.Body>
              {withContentTableData.map((item) => (
                <TableNext.Row key={item.name}>
                  <TableNext.Cell>{item.name}</TableNext.Cell>
                  <TableNext.Cell>
                    <EntityStatusBadge entityStatus={item.status} />
                  </TableNext.Cell>
                  <TableNext.Cell>{item.email}</TableNext.Cell>
                  <TableNext.Cell>{item.contentType}</TableNext.Cell>
                  <TableNext.Cell>{item.updatedBy}</TableNext.Cell>
                  <TableNext.Cell>{item.updated}</TableNext.Cell>
                </TableNext.Row>
              ))}
            </TableNext.Body>
          </TableNext>
        </Layout.Body>
      </Layout>
    </div>
  ),
};

const contentTableHeaderTitles = [
  'Name',
  'Status',
  'Content Type',
  'Updated by',
  'Updated',
  'Locale',
  'Space',
  'Environment',
  'Tags',
  'ID',
];

export const Scrollable: StoryObj = {
  render: (args) => (
    <div
      className={css({
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '300px',
        width: '100vw',
        height: '100vh',
        margin: '-1rem',
        flexDirection: 'column',
        overflow: 'hidden',
      })}
    >
      <div className={css({ backgroundColor: 'silver', height: '60px' })}>
        Navbar
      </div>
      <Layout>
        <Layout.Body>
          <Note className={css({ margin: '1rem' })}>
            TableNext with overflow-x scrollbar
          </Note>
          <TableNext layout="scrollable" {...args}>
            <TableNext.Head>
              <TableNext.Row>
                {contentTableHeaderTitles.map((title) => (
                  <TableNext.Cell key={title}>{title}</TableNext.Cell>
                ))}
              </TableNext.Row>
            </TableNext.Head>
            <TableNext.Body>
              {withLongContentTableData.map((item) => (
                <TableNext.Row key={item.id}>
                  <TableNext.Cell>{item.name}</TableNext.Cell>
                  <TableNext.Cell>
                    <EntityStatusBadge entityStatus={item.status} />
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
        </Layout.Body>
      </Layout>
    </div>
  ),
};

export const ScrollableStickyFirstColumn: StoryObj = {
  render: (args) => (
    <div
      className={css({
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '300px',
        width: '100vw',
        height: '100vh',
        margin: '-1rem',
        flexDirection: 'column',
        overflow: 'hidden',
      })}
    >
      <div className={css({ backgroundColor: 'silver', height: '60px' })}>
        Navbar
      </div>
      <Layout>
        <Layout.Body>
          <Note className={css({ margin: '1rem' })}>
            TableNext with overflow-x and fixed first column
          </Note>
          <TableNext layout="scrollable" isFirstColumnSticky={true} {...args}>
            <TableNext.Head>
              <TableNext.Row>
                {contentTableHeaderTitles.map((title) => (
                  <TableNext.Cell key={title}>{title}</TableNext.Cell>
                ))}
              </TableNext.Row>
            </TableNext.Head>
            <TableNext.Body>
              {withLongContentTableData.map((item) => (
                <TableNext.Row key={item.id}>
                  <TableNext.Cell>{item.name}</TableNext.Cell>
                  <TableNext.Cell>
                    <EntityStatusBadge entityStatus={item.status} />
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
        </Layout.Body>
      </Layout>
    </div>
  ),
};

export const ScrollableStickyHeaderAndFirstColumn: StoryObj = {
  render: (args) => (
    <div
      className={css({
        position: 'relative',
        flex: '1 1 auto',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '300px',
        width: '100vw',
        height: '100vh',
        margin: '-1rem',
        flexDirection: 'column',
        overflow: 'hidden',
      })}
    >
      <div className={css({ backgroundColor: 'silver', height: '60px' })}>
        Navbar
      </div>
      <Layout>
        <Layout.Body>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            })}
          >
            <Note className={css({ margin: '1rem' })}>
              TableNext with sticky header, sticky first column and scrollable.
              Because of compatiability issues of sticky-top with overflow-x,
              the scrollbar moves from the outer container to the table
              container. To avoid the outer container overflow, the contents of
              the layout.body are additionally contained in a flexbox
            </Note>
            <TableNext layout="scrollable" isFirstColumnSticky {...args}>
              <TableNext.Head isSticky>
                <TableNext.Row>
                  {contentTableHeaderTitles.map((title) => (
                    <TableNext.Cell key={title}>{title}</TableNext.Cell>
                  ))}
                </TableNext.Row>
              </TableNext.Head>
              <TableNext.Body>
                {withLongContentTableData.map((item) => (
                  <TableNext.Row key={item.id}>
                    <TableNext.Cell>{item.name}</TableNext.Cell>
                    <TableNext.Cell>
                      <EntityStatusBadge entityStatus={item.status} />
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
        </Layout.Body>
      </Layout>
    </div>
  ),
};
