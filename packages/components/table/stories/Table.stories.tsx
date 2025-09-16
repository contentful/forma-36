import React, { useState } from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import {
  Skeleton,
  EntityStatusBadge,
  type EntityStatus,
  Button,
  Flex,
  SectionHeading,
} from '@contentful/f36-components';

import { Table, TableCellSorting } from '../src';
import tokens from '@contentful/f36-tokens';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Table,
  parameters: {
    propTypes: [
      Table['__docgenInfo'],
      Table.Head['__docgenInfo'],
      Table.Body['__docgenInfo'],
      Table.Cell['__docgenInfo'],
      Table.Row['__docgenInfo'],
    ],
  },
  subcomponents: {
    TableHead: Table.Head,
    TableBody: Table.Body,
    TableCell: Table.Cell,
    TableRow: Table.Row,
  },
  title: 'Components/Table',
} as Meta;

export const Default: StoryObj = {
  render: (args) => {
    return (
      <div style={{ width: '800px' }}>
        <Table {...args}>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Name</Table.Cell>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>Organization role</Table.Cell>
              <Table.Cell>Last activity</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Jane Roe</Table.Cell>
              <Table.Cell>jane@roe.com</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>August 29, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>John Doe</Table.Cell>
              <Table.Cell>john@doe.com</Table.Cell>
              <Table.Cell>CTO</Table.Cell>
              <Table.Cell>July 27, 2019</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  },
};

export const WithLoadingState: StoryFn = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '800px' }}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Organization role</Table.Cell>
            <Table.Cell>Last activity</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {isLoading ? (
            <Skeleton.Row rowCount={4} columnCount={4} />
          ) : (
            <>
              <Table.Row>
                <Table.Cell>Jane Roe</Table.Cell>
                <Table.Cell>jane@roe.com</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>August 29, 2018</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>john@doe.com</Table.Cell>
                <Table.Cell>CTO</Table.Cell>
                <Table.Cell>July 27, 2019</Table.Cell>
              </Table.Row>
            </>
          )}
        </Table.Body>
      </Table>
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

export const Overview: StoryFn = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Inline Table
      </SectionHeading>

      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Organization role</Table.Cell>
            <Table.Cell
              isSortable
              sortDirection={TableCellSorting.Descending}
              sortButtonAriaLabel="Nach letzter Aktivität aufsteigend sortieren"
            >
              Last activity
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row isSelected>
            <Table.Cell>Jane Roe</Table.Cell>
            <Table.Cell>jane@roe.com</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>August 29, 2018</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John Doe</Table.Cell>
            <Table.Cell>john@doe.com</Table.Cell>
            <Table.Cell>CTO</Table.Cell>
            <Table.Cell>July 27, 2019</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bill Oh</Table.Cell>
            <Table.Cell>bill@oh.com</Table.Cell>
            <Table.Cell>CFO</Table.Cell>
            <Table.Cell>January 27, 2021</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Embedded Table
      </SectionHeading>

      <Table layout="embedded">
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Email</Table.Cell>
            <Table.Cell>Organization role</Table.Cell>
            <Table.Cell
              isSortable
              sortDirection={TableCellSorting.Ascending}
              sortButtonAriaLabel="Nach letzter Aktivität absteigend sortieren"
            >
              Last activity
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row isSelected>
            <Table.Cell>Jane Roe</Table.Cell>
            <Table.Cell>jane@roe.com</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>August 29, 2018</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>John Doe</Table.Cell>
            <Table.Cell>john@doe.com</Table.Cell>
            <Table.Cell>CTO</Table.Cell>
            <Table.Cell>July 27, 2019</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bill Oh</Table.Cell>
            <Table.Cell>bill@oh.com</Table.Cell>
            <Table.Cell>CFO</Table.Cell>
            <Table.Cell>January 27, 2021</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Flex>
  </>
);

const withContentTableData: {
  name: string;
  status: EntityStatus;
  contentType: string;
  updatedBy: string;
  updated: string;
}[] = [
  {
    name: 'How does writing influence your personal brand?',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: 'Yesterday',
  },
  {
    name: 'How to optimize images in WordPress for faster loading (complete guide)',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '6 months ago',
  },
  {
    name: 'Travelling as a way of self-discovery and progress',
    status: 'changed',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '9 months ago',
  },
  {
    name: 'Start a blog to reach your creative peak',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '11 months ago',
  },
  {
    name: 'Why choose a theme that looks good with WooCommerce',
    status: 'published',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '11 months ago',
  },
];

export const WithContent: StoryObj = {
  render: (args) => (
    <div style={{ width: '960px' }}>
      <Table {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>Content Type</Table.Cell>
            <Table.Cell>Updated by</Table.Cell>
            <Table.Cell>Updated</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {withContentTableData.map((item) => (
            <Table.Row key={item.name}>
              <Table.Cell
                style={{
                  maxWidth: '350px',
                  fontWeight: tokens.fontWeightDemiBold,
                }}
                isTruncated
              >
                {item.name}
              </Table.Cell>
              <Table.Cell style={{ width: '150px' }}>
                <EntityStatusBadge entityStatus={item.status} />
              </Table.Cell>
              <Table.Cell style={{ width: '150px' }}>
                {item.contentType}
              </Table.Cell>
              <Table.Cell style={{ width: '250px' }}>
                {item.updatedBy}
              </Table.Cell>
              <Table.Cell style={{ width: '150px' }}>{item.updated}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
};
