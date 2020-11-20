import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Asset, types } from './Asset';
import type { AssetProps } from './Asset';
import notes from './README.mdx';

export default {
  argTypes: {
    className: { control: { disable: true } },
    src: { control: 'text', defaultValue: 'https://placekitten.com/200/300' },
    status: {
      control: {
        type: 'select',
        options: ['archived', 'changed', 'draft', 'published'],
      },
    },
    testId: { control: { disable: true } },
    title: { control: 'text', defaultValue: 'Image of a cat' },
    type: {
      control: {
        type: 'select',
        options: Object.keys(types),
      },
      defaultValue: Object.keys(types)[0],
    },
  },
  component: Asset,
  parameters: {
    propTypes: Asset['__docgenInfo'],
    notes,
  },
  title: 'Components/Asset',
} as Meta;

export const Default: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

export const WithAnImage: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

WithAnImage.args = {
  type: 'image',
};

export const WithAnArchivedImage: Story<AssetProps> = (args) => {
  return <Asset {...args} />;
};

WithAnArchivedImage.args = {
  status: 'archived',
  type: 'image',
};
