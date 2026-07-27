import React, { useState } from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import {
  Skeleton,
  EntityStatusBadge,
  type EntityStatus,
  Button,
  Flex,
  SectionHeading,
  Note,
  Layout,
} from '@contentful/f36-components';
import { withLongContentTableData } from './WithLongContent.mockdata';
import { css } from '@emotion/css';

import { TableNext } from '../src';
import tokens from '@contentful/f36-tokens';

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
      TableNext.Cell['__docgenInfo'],
      TableNext.Row['__docgenInfo'],
    ],
  },
  subcomponents: {
    TableBody: TableNext.Body,
    TableCell: TableNext.Cell,
    TableRow: TableNext.Row,
  },
  title: 'Components/TableNext',
} as Meta;

const tableHeaderTitles = [
  'Name',
  'Email',
  'Organization role',
  'Last activity',
];

export const Default: StoryObj = {
  render: (args) => {
    return (
      <div style={{ width: '800px' }}>
        <TableNext {...args}>
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
export const DefaultWithTitles: StoryObj = {
  render: (args) => {
    return (
      <div style={{ width: '800px' }}>
        <TableNext {...args} columnTitles={tableHeaderTitles}>
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
      <TableNext columnTitles={tableHeaderTitles}>
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

      <TableNext columnTitles={tableHeaderTitles}>
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

      <TableNext variant="embedded" columnTitles={tableHeaderTitles}>
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

const withContentTableData: {
  name: string;
  email: string;
  status: EntityStatus;
  contentType: string;
  updatedBy: string;
  updated: string;
}[] = [
  {
    name: 'How does writing influence your personal brand?',
    email: 'a.mahmoud@example.com',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: 'Yesterday',
  },
  {
    name: 'How to optimize images in WordPress for faster loading (complete guide)',
    email: 'a.mahmoud@example.com',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '6 months ago',
  },
  {
    name: 'Travelling as a way of self-discovery and progress',
    status: 'changed',
    email: 'a.mahmoud@example.com',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '9 months ago',
  },
  {
    name: 'Start a blog to reach your creative peak',
    status: 'published',
    email: 'a.mahmoud@example.com',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '11 months ago',
  },
  {
    name: 'Why choose a theme that looks good with WooCommerce',
    status: 'published',
    email: 'a.mahmoud@example.com',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '11 months ago',
  },
];

const withContentHeaderTitles = [
  'Name',
  'Status',
  'Email',
  'Content Type',
  'Updated By',
  'Last activity',
];
export const WithContent: StoryObj = {
  render: (args) => (
    <div style={{ width: '960px' }}>
      <TableNext {...args} columnTitles={withContentHeaderTitles}>
        <TableNext.Body>
          {withContentTableData.map((item) => (
            <TableNext.Row key={item.name}>
              <TableNext.Cell
                style={{
                  maxWidth: '350px',
                  fontWeight: tokens.fontWeightDemiBold,
                }}
                isTruncated
              >
                {item.name}
              </TableNext.Cell>
              <TableNext.Cell style={{ width: '150px' }}>
                <EntityStatusBadge entityStatus={item.status} />
              </TableNext.Cell>
              <TableNext.Cell style={{ width: '250px' }}>
                {item.email}
              </TableNext.Cell>
              <TableNext.Cell style={{ width: '150px' }}>
                {item.contentType}
              </TableNext.Cell>
              <TableNext.Cell style={{ width: '250px' }}>
                {item.updatedBy}
              </TableNext.Cell>
              <TableNext.Cell style={{ width: '150px' }}>
                {item.updated}
              </TableNext.Cell>
            </TableNext.Row>
          ))}
        </TableNext.Body>
      </TableNext>
    </div>
  ),
};

const contentTableHeaderData = [
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
            smaller than 700px the table is displayed rotated by 90°.
          </Note>
          <TableNext {...args} layout="stackable">
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
            TableNext in stackable layout. When the surrounding container is
            smaller than 700px the table is displayed rotated by 90°. The column
            titles are shown next to the table cell values.
          </Note>
          <TableNext
            {...args}
            layout="stackable"
            columnTitles={withContentHeaderTitles}
          >
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
          <TableNext
            {...args}
            layout="scrollable"
            columnTitles={contentTableHeaderData}
          >
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
          <TableNext
            {...args}
            layout="scrollable"
            isFirstColumnSticky={true}
            columnTitles={contentTableHeaderData}
          >
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
            <TableNext
              {...args}
              layout="scrollable"
              isFirstColumnSticky
              isHeaderSticky
              columnTitles={contentTableHeaderData}
            >
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
