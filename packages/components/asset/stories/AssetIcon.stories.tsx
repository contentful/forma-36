import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import { AssetIcon } from '../src/AssetIcon/AssetIcon';
import { types } from '../src/types';

import type { AssetIconProps } from '../src/AssetIcon/AssetIcon';

export default {
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    type: {
      control: 'select',
      options: Object.keys(types),
    },
  },
  args: {
    type: 'image',
  },
  component: AssetIcon,
  parameters: {
    propTypes: AssetIcon['__docgenInfo'],
  },
  title: 'Components/Asset/AssetIcon',
} as Meta;

export const Basic: StoryObj<AssetIconProps> = {
  render: (args) => {
    return <AssetIcon {...args} />;
  },
};

export const Overview = () => (
  <Flex gap="spacingM" flexWrap="wrap">
    {Object.keys(types).map((type) => (
      <Flex key={type} flexDirection="column" alignItems="center" gap="spacingXs">
        <AssetIcon type={type as AssetIconProps['type']} />
        <Text>{type}</Text>
      </Flex>
    ))}
  </Flex>
);
