import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Autocomplete } from '../src/Autocomplete';
import type { AutocompleteProps } from '../src/Autocomplete';

export default {
  component: Autocomplete,
  title: 'Components/Autocomplete',
} as Meta;

export const Default: Story<AutocompleteProps> = (args) => {
  return <Autocomplete {...args}>Autocomplete</Autocomplete>;
};
