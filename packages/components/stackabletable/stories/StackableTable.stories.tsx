import React from 'react';
import type { StoryFn, StoryObj, Meta } from '@storybook/react-vite';
import {
  EntityStatusBadge,
  type EntityStatus,
  Flex,
  SectionHeading,
} from '@contentful/f36-components';
import { css } from '@emotion/css';

import { StackableTable } from '../src';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    offsetTop: { control: { disable: true } },
    columnTitles: { control: { disable: true } },
  },
  component: StackableTable,
  parameters: {
    propTypes: [
      StackableTable['__docgenInfo'],
      StackableTable.Body['__docgenInfo'],
      StackableTable.Cell['__docgenInfo'],
      StackableTable.Row['__docgenInfo'],
    ],
  },
  subcomponents: {
    StackableTableBody: StackableTable.Body,
    StackableTableCell: StackableTable.Cell,
    StackableTableRow: StackableTable.Row,
  },
  title: 'Components/StackableTable',
} as Meta;

// --- shared data ---------------------------------------------------------

const simpleColumnTitles = [
  'Name',
  'Email',
  'Organization role',
  'Last activity',
];

const simpleRows: [string, string, string, string][] = [
  ['Jane Roe', 'jane@roe.com', 'CEO', 'August 29, 2018'],
  ['John Doe', 'john@doe.com', 'CTO', 'July 27, 2019'],
  ['Bill Oh', 'bill@oh.com', 'CFO', 'January 27, 2021'],
];

const wideColumnTitles = [
  'Name',
  'Status',
  'Email',
  'Content Type',
  'Updated By',
  'Last activity',
  'Locale',
  'Space',
  'Environment',
];

type WideRow = {
  name: string;
  status: EntityStatus;
  email: string;
  contentType: string;
  updatedBy: string;
  updated: string;
  locale: string;
  space: string;
  environment: string;
};

const wideRows: WideRow[] = [
  {
    name: 'How does writing influence your personal brand?',
    status: 'published',
    email: 'a.mahmoud@example.com',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: 'Yesterday',
    locale: 'en-US',
    space: 'Marketing',
    environment: 'master',
  },
  {
    name: 'Travelling as a way of self-discovery',
    status: 'changed',
    email: 'a.mahmoud@example.com',
    contentType: 'Blog post',
    updatedBy: 'Ayman Mahmoud',
    updated: '9 months ago',
    locale: 'de-DE',
    space: 'Documentation',
    environment: 'staging',
  },
  {
    name: 'Start a blog to reach your creative peak',
    status: 'published',
    email: 'a.mahmoud@example.com',
    contentType: 'Case study',
    updatedBy: 'Jane Roe',
    updated: '11 months ago',
    locale: 'fr-FR',
    space: 'Blog',
    environment: 'development',
  },
  {
    name: 'Building accessible web applications',
    status: 'draft',
    email: 'a.mahmoud@example.com',
    contentType: 'Landing page',
    updatedBy: 'John Doe',
    updated: '2 months ago',
    locale: 'es-ES',
    space: 'E-Commerce',
    environment: 'master',
  },
  {
    name: 'Content modeling best practices for large teams',
    status: 'archived',
    email: 'a.mahmoud@example.com',
    contentType: 'FAQ',
    updatedBy: 'Alice Kim',
    updated: '6 months ago',
    locale: 'pt-BR',
    space: 'Support',
    environment: 'staging',
  },
];

const WideTableBody = () => (
  <StackableTable.Body>
    {wideRows.map((item) => (
      <StackableTable.Row key={item.name}>
        <StackableTable.Cell>{item.name}</StackableTable.Cell>
        <StackableTable.Cell>
          <EntityStatusBadge entityStatus={item.status} />
        </StackableTable.Cell>
        <StackableTable.Cell>{item.email}</StackableTable.Cell>
        <StackableTable.Cell>{item.contentType}</StackableTable.Cell>
        <StackableTable.Cell>{item.updatedBy}</StackableTable.Cell>
        <StackableTable.Cell>{item.updated}</StackableTable.Cell>
        <StackableTable.Cell>{item.locale}</StackableTable.Cell>
        <StackableTable.Cell>{item.space}</StackableTable.Cell>
        <StackableTable.Cell>{item.environment}</StackableTable.Cell>
      </StackableTable.Row>
    ))}
  </StackableTable.Body>
);

// -------------------------------------------------------------------------

export const Default: StoryObj = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <StackableTable columnTitles={wideColumnTitles} {...args}>
      <WideTableBody />
    </StackableTable>
  ),
};

export const StyleVariants: StoryFn = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Inline (default)
      </SectionHeading>
      <StackableTable columnTitles={simpleColumnTitles}>
        <StackableTable.Body>
          {simpleRows.map(([name, email, role, activity]) => (
            <StackableTable.Row key={name}>
              <StackableTable.Cell>{name}</StackableTable.Cell>
              <StackableTable.Cell>{email}</StackableTable.Cell>
              <StackableTable.Cell>{role}</StackableTable.Cell>
              <StackableTable.Cell>{activity}</StackableTable.Cell>
            </StackableTable.Row>
          ))}
        </StackableTable.Body>
      </StackableTable>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <SectionHeading as="h3" marginBottom="spacingS">
        Embedded
      </SectionHeading>
      <StackableTable columnTitles={simpleColumnTitles} variant="embedded">
        <StackableTable.Body>
          {simpleRows.map(([name, email, role, activity]) => (
            <StackableTable.Row key={name}>
              <StackableTable.Cell>{name}</StackableTable.Cell>
              <StackableTable.Cell>{email}</StackableTable.Cell>
              <StackableTable.Cell>{role}</StackableTable.Cell>
              <StackableTable.Cell>{activity}</StackableTable.Cell>
            </StackableTable.Row>
          ))}
        </StackableTable.Body>
      </StackableTable>
    </Flex>
  </>
);
StyleVariants.parameters = { layout: 'padded' };

export const StickyHeader: StoryObj = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div
      className={css({
        height: '300px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      })}
    >
      <StackableTable columnTitles={wideColumnTitles} isHeaderSticky {...args}>
        <WideTableBody />
      </StackableTable>
    </div>
  ),
};
