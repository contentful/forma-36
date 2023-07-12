import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { Table } from '@contentful/f36-components';
import { MissingContent } from '../src';

export default {
  title: 'Empty-state/MissingContent',
  component: MissingContent,
  parameters: {
    propTypes: MissingContent['__docgenInfo'],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof MissingContent>;

type Story = StoryObj<typeof MissingContent>;

export const Basic: Story = {
  render: () => {
    return (
      <div>
        <Flex flexDirection="row">
          Description: <MissingContent label="No description provided" />
        </Flex>
        <Flex flexDirection="row">
          Missing: <MissingContent testId="missing-entry-1234" />
        </Flex>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Filename</Table.Cell>
              <Table.Cell>Dimensions</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Pony.jpg</Table.Cell>
              <Table.Cell>160px x 300px</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cat.jpg</Table.Cell>
              <Table.Cell>
                <MissingContent label="No Dimensions available" />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Dog.jpg</Table.Cell>
              <Table.Cell>
                <MissingContent label="No Dimensions available" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  },
};
