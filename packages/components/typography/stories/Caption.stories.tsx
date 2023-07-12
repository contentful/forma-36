import React from 'react';
import { Flex } from '@contentful/f36-core';
import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from '../src/Caption/Caption';
import { Paragraph } from '../src/Paragraph/Paragraph';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    propTypes: [Caption['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
} as Meta<typeof Caption>;

type Story = StoryObj<typeof Caption>;

export const Basic: Story = {
  args: {
    children: 'Caption',
  },
};

export const Overview: Story = {
  args: {
    children: 'Caption',
  },
  render: (props) => (
    <>
      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightNormal</Paragraph>
        <Caption {...props} fontWeight="fontWeightNormal" />
      </Flex>

      <Flex alignItems="center" gap="spacingS">
        <Paragraph marginBottom="none">fontWeightMedium</Paragraph>
        <Caption {...props} fontWeight="fontWeightMedium" />
      </Flex>
    </>
  ),
};
