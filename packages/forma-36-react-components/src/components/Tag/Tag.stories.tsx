import React from 'react';

import Tag, { TagProps } from './Tag';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';
import tokens from '@contentful/forma-36-tokens';
import { Paragraph } from '../Typography/Paragraph/Paragraph';

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
    <Flex marginBottom="spacingM" flexDirection="column">
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
          <Tag tagType="secondary">secondary</Tag>
        </Flex>
      </Flex>
      <Flex marginBottom="spacingM" alignItems="center">
        <Flex marginRight="spacingS">
          <Tag tagType="muted">muted</Tag>
          <Paragraph style={{ color: `${tokens.colorRedBase}` }}>
            {' '}
            - this tagType is deprecated, please use <strong>
              secondary
            </strong>{' '}
            instead
          </Paragraph>
        </Flex>
      </Flex>
    </Flex>

    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Tag sizes overview</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="primary-filled">default</Tag>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Tag tagType="primary-filled" size="small">
          small
        </Tag>
      </Flex>
    </Flex>
  </>
);
