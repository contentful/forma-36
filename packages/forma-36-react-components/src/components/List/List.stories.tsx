import React from 'react';

import { List, ListProps } from './List';
import { ListItem } from './ListItem/ListItem';
import { TextLink } from '../TextLink';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '../Typography';
import notes from './README.mdx';

export default {
  title: 'Components/List',
  component: List,
  subcomponents: { ListItem },
  parameters: {
    propTypes: [List['__docgenInfo'], ListItem['__docgenInfo']],
    notes,
  },
  argTypes: {
    element: {
      table: { defaultValue: { summary: 'ul' } },
      control: { type: 'select', options: ['ul', 'ol'] },
    },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    children: { control: { disable: true } },
  },
};

export const basic = ({ ...args }: ListProps) => (
  <List {...args}>
    <ListItem>List Item 1</ListItem>
    <ListItem>List Item 2</ListItem>
    <ListItem>
      List Item with a&nbsp;
      <TextLink>text link</TextLink>&nbsp;
    </ListItem>
    <ListItem>
      <List>
        <ListItem>Sublist Item 1</ListItem>
        <ListItem>Sublist Item 2</ListItem>
      </List>
    </ListItem>
  </List>
);

export const overview = ({ ...args }: ListProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
      <Flex marginBottom="spacingS">
        <SectionHeading>Unordered List</SectionHeading>
      </Flex>
      <Flex>
        <List {...args}>
          <ListItem>List Item 1</ListItem>
          <ListItem>List Item 2</ListItem>
          <ListItem>
            List Item with a&nbsp;
            <TextLink>text link</TextLink>&nbsp;
          </ListItem>
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
      <Flex marginBottom="spacingS">
        <SectionHeading>Ordered List</SectionHeading>
      </Flex>
      <Flex>
        <List element="ol" {...args}>
          <ListItem>List Item 1</ListItem>
          <ListItem>List Item 2</ListItem>
          <ListItem>
            List Item with a&nbsp;
            <TextLink>text link</TextLink>&nbsp;
          </ListItem>
          <ListItem>
            <List element="ol">
              <ListItem>Sublist Item 1</ListItem>
              <ListItem>Sublist Item 2</ListItem>
            </List>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  </>
);
