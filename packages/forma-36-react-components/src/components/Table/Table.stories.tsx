import React, { useState } from 'react';
import { button } from '@storybook/addon-knobs';
import type { Meta, Story } from '@storybook/react/types-6-0';

import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableRow from './TableRow';
import SkeletonRow from '../Skeleton/SkeletonRow';
import notes from './Table.md';
import Flex from '../Flex/Flex';
import SectionHeading from '../Typography/SectionHeading';

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

  button('toggle isLoading', () => {
    setIsLoading((state) => !state);
    return false;
  });

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
    </Flex>
  </>
);
