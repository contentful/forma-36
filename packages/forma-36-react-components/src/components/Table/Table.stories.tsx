import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Table } from './Table';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';
import { TableCell } from './TableCell/TableCell';
import { TableRow } from './TableRow/TableRow';
import { SkeletonRow } from '../Skeleton';
import notes from './README.mdx';
import { Flex } from '../Flex';
import { SectionHeading } from '../Typography';
import { Button } from '../Button/Button';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Table,
  parameters: {
    propTypes: [
      Table['__docgenInfo'],
      TableHead['__docgenInfo'],
      TableBody['__docgenInfo'],
      TableCell['__docgenInfo'],
      TableRow['__docgenInfo'],
    ],
    notes,
  },
  subcomponents: { TableHead, TableBody, TableCell, TableRow },
  title: 'Components/Table',
} as Meta;

export const Default: Story = (args) => {
  return (
    <div style={{ width: '800px' }}>
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Jane Roe</TableCell>
            <TableCell>jane@roe.com</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>August 29, 2018</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@doe.com</TableCell>
            <TableCell>CTO</TableCell>
            <TableCell>July 27, 2019</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export const WithLoadingState: Story = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ width: '800px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <SkeletonRow rowCount={4} columnCount={4} />
          ) : (
            <>
              <TableRow>
                <TableCell>Jane Roe</TableCell>
                <TableCell>jane@roe.com</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>August 29, 2018</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@doe.com</TableCell>
                <TableCell>CTO</TableCell>
                <TableCell>July 27, 2019</TableCell>
              </TableRow>
            </>
          )}
        </TableBody>
      </Table>
      <br />
      <Button
        size="small"
        buttonType="muted"
        onClick={() => setIsLoading((state) => !state)}
      >
        isLoading toggle button
      </Button>
    </div>
  );
};

export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Inline Table</SectionHeading>
      </Flex>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow selected>
            <TableCell>Jane Roe</TableCell>
            <TableCell>jane@roe.com</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>August 29, 2018</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@doe.com</TableCell>
            <TableCell>CTO</TableCell>
            <TableCell>July 27, 2019</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bill Oh</TableCell>
            <TableCell>bill@oh.com</TableCell>
            <TableCell>CFO</TableCell>
            <TableCell>January 27, 2021</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingL">
      <Flex marginBottom="spacingS">
        <SectionHeading element="h3">Embedded Table</SectionHeading>
      </Flex>

      <Table layout="embedded">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Organization role</TableCell>
            <TableCell>Last activity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow selected>
            <TableCell>Jane Roe</TableCell>
            <TableCell>jane@roe.com</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>August 29, 2018</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@doe.com</TableCell>
            <TableCell>CTO</TableCell>
            <TableCell>July 27, 2019</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bill Oh</TableCell>
            <TableCell>bill@oh.com</TableCell>
            <TableCell>CFO</TableCell>
            <TableCell>January 27, 2021</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Flex>
  </>
);
