import React from 'react';

import Tag, { tagType, TagProps } from './Tag';
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
    {tagType.map((type, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <Tag tagType={type}>{type}</Tag>
        </Flex>
      </Flex>
    ))}
  </>
);
