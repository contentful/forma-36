import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Portal } from '../src';
import type { PortalProps } from '../src';
import { Flex } from '@contentful/f36-core';
import tokens from '@contentful/f36-tokens';

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

export const Default: Story<PortalProps> = (args) => {
  return (
    <Flex>
      This is a patent element of Portal
      <Portal {...args}>
        <Flex
          style={{
            backgroundColor: tokens.green300,
          }}
        >
          This is a child of Portal
        </Flex>
      </Portal>{' '}
    </Flex>
  );
};
