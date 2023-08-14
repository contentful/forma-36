import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { Portal } from '../src';

export default {
  title: 'Utilities/Portal',
  component: Portal,
  parameters: {
    propTypes: [Portal['__docgenInfo']],
  },
  argTypes: {
    children: { control: { type: 'text' } },
    container: { control: { disable: true } },
  },
} as Meta<typeof Portal>;

type Story = StoryObj<typeof Portal>;

export const Default: Story = {
  render: (args) => {
    return (
      <Flex>
        This is a parent element of Portal
        <Portal {...args}>
          <Flex
            style={{
              backgroundColor: tokens.green300,
            }}
          >
            This is a child of Portal
          </Flex>
        </Portal>
      </Flex>
    );
  },
};
