import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { List } from '../src';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem: List.Item },
  parameters: {
    propTypes: [List['__docgenInfo'], List.Item['__docgenInfo']],
  },
  argTypes: {
    as: {
      table: { defaultValue: { summary: 'ul' } },
      control: { type: 'select', options: ['ul', 'ol'] },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
  },
} as Meta<typeof List>;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: (args) => {
    return (
      <List {...args}>
        <List.Item>List Item 1</List.Item>
        <List.Item>List Item 2</List.Item>
        <List.Item>
          <List {...args}>
            <List.Item>Sublist Item 1</List.Item>
            <List.Item>Sublist Item 2</List.Item>
          </List>
        </List.Item>
      </List>
    );
  },
};

export const Overview: Story = {
  render: (args) => (
    <>
      <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
        <SectionHeading marginBottom="spacingS">Unordered List</SectionHeading>

        <Flex>
          <List {...args} as="ul">
            <List.Item>List Item 1</List.Item>
            <List.Item>List Item 2</List.Item>
            <List.Item>
              <List {...args} as="ul">
                <List.Item>Sublist Item 1</List.Item>
                <List.Item>Sublist Item 2</List.Item>
              </List>
            </List.Item>
          </List>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <SectionHeading marginBottom="spacingS">Ordered List</SectionHeading>

        <Flex>
          <List {...args} as="ol">
            <List.Item>List Item 1</List.Item>
            <List.Item>List Item 2</List.Item>
            <List.Item>
              <List {...args} as="ol">
                <List.Item>Sublist Item 1</List.Item>
                <List.Item>Sublist Item 2</List.Item>
              </List>
            </List.Item>
          </List>
        </Flex>
      </Flex>
    </>
  ),
};
