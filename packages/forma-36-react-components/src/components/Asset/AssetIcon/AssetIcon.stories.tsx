import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { AssetIcon } from './AssetIcon';
import type { AssetIconProps } from './AssetIcon';
import { types } from '../Asset';
import notes from './README.mdx';

export default {
  argTypes: {
    className: { control: { disable: true } },
    type: {
      control: {
        type: 'select',
        options: Object.keys(types),
      },
      defaultValue: Object.keys(types)[0],
    },
  },
  component: AssetIcon,
  parameters: {
    propTypes: AssetIcon['__docgenInfo'],
    notes,
  },
  title: 'Components/Asset/AssetIcon',
} as Meta;

export const Default: Story<AssetIconProps> = (args) => {
  return <AssetIcon {...args} />;
};
