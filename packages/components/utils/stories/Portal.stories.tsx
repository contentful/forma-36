import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

import { Portal, type PortalProps } from '../src';

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
} as Meta;

export const Default: StoryObj<PortalProps> = {
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
