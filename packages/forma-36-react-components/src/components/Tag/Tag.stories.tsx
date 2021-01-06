import React from 'react';

import Tag, { TagProps } from './Tag';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    propTypes: [Tag['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const basic = (args: TagProps) => (
  <Tag tagType={args.tagType}>{args['Tag Text']}</Tag>
);

basic.args = {
  tagType: 'primary',
  'Tag Text': 'Published',
};

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Tag types overview</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="primary">primary</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="filled-primary">filled-primary</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="positive">positive</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="negative">negative</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="warning">warning</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="muted">muted</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="secondary">secondary</Tag>
      </Flex>
    </Flex>
  </>
);
