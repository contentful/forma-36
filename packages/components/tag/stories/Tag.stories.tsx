import React from 'react';

import { Tag, TagProps } from '../src/Tag';
import SectionHeading from '../../../forma-36-react-components/src/components/Typography/SectionHeading/SectionHeading';
import Flex from '../../../forma-36-react-components/src/components/Flex/Flex';

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

interface Args extends TagProps {
  tagText?: string;
}

export const basic = ({ tagText, ...args }: Args) => (
  <Tag {...args}>{tagText}</Tag>
);

basic.args = {
  tagType: 'primary',
  tagText: 'Published',
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
        <Tag tagType="primary-filled">primary filled</Tag>
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
