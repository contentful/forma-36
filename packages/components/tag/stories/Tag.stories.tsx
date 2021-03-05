import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Tag } from '../src/Tag';
import type { TagProps } from '../src/Tag';

export default {
  component: Tag,
  parameters: {
    propTypes: Tag['__docgenInfo'],
  },
  title: 'Components/Tag',
} as Meta;

export const Default: Story<TagProps> = (args) => {
  return <Tag {...args}>Tag</Tag>;
};
