import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { Button } from '@contentful/f36-button';
import { Skeleton } from '@contentful/f36-components';

import { Table } from '../src';

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

export const Default: Story = (args) => {
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
};

export const WithLoadingState: Story = () => {
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

export const Overview: Story = () => (
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
            <Table.Cell>Last activity</Table.Cell>
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
            <Table.Cell>Last activity</Table.Cell>
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
