import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { List } from '../src/List';
import type { ListProps } from '../src/List';
import { ListItem } from '../src/ListItem/ListItem';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem },
  parameters: {
    propTypes: [List['__docgenInfo'], ListItem['__docgenInfo']],
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
} as Meta;

export const Default: Story<ListProps> = (args) => {
  return (
    <List {...args}>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>
        <List>
          <ListItem>Sublist Item 1</ListItem>
          <ListItem>Sublist Item 2</ListItem>
        </List>
      </ListItem>
    </List>
  );
};

export const overview = ({ ...args }: ListProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
      <SectionHeading marginBottom="spacingS">Unordered List</SectionHeading>

      <Flex>
        <List {...args}>
          <ListItem>List Item 1</ListItem>
          <ListItem>List Item 2</ListItem>
          <ListItem>
            <List>
              <ListItem>Sublist Item 1</ListItem>
              <ListItem>Sublist Item 2</ListItem>
            </List>
          </ListItem>
        </List>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <SectionHeading marginBottom="spacingS">Ordered List</SectionHeading>

      <Flex>
        <List as="ol" {...args}>
          <ListItem>List Item 1</ListItem>
          <ListItem>List Item 2</ListItem>
          <ListItem>
            <List as="ol">
              <ListItem>Sublist Item 1</ListItem>
              <ListItem>Sublist Item 2</ListItem>
            </List>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  </>
);
