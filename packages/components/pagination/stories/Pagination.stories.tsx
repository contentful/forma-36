import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Pagination } from '../src/Pagination';
import type { PaginationProps } from '../src/Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

export const Default: Story<PaginationProps> = (args) => {
  return <Pagination {...args}>Pagination</Pagination>;
};
