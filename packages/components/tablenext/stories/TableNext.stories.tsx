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

import { TableNext } from '../src';

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

export const Default: StoryObj = {
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
                {contentTableHeaderData.map((title) => (
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

export const WithLoadingState: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '800px' }}>
      <TableNext>
        <TableNext.Head>
          <TableNext.Row>
            {tableHeaderTitles.map((title) => (
              <TableNext.Cell key={title}>{title}</TableNext.Cell>
            ))}
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
            {tableHeaderTitles.map((title) => (
              <TableNext.Cell key={title}>{title}</TableNext.Cell>
            ))}
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
            {tableHeaderTitles.map((title) => (
              <TableNext.Cell key={title}>{title}</TableNext.Cell>
            ))}
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
                {contentTableHeaderData.map((title) => (
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
            </Note>
            <TableNext layout="scrollable" isFirstColumnSticky {...args}>
              <TableNext.Head isSticky>
                <TableNext.Row>
                  {contentTableHeaderData.map((title) => (
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
