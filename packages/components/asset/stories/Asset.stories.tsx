import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Asset } from '../src/Asset';
import type { AssetProps } from '../src/Asset';

export default {
  component: Asset,
  parameters: {
    propTypes: Asset['__docgenInfo'],
  },
  title: 'Components/Asset',
} as Meta;

export const Default: Story<AssetProps> = (args) => {
  return <Asset {...args}>Asset</Asset>;
};
