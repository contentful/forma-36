import React from 'react';
import figma from '@figma/code-connect';
import { Autocomplete } from './Autocomplete';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=13825:4394';

figma.connect(Autocomplete, FIGMA_URL, {
  props: {
    isDisabled: figma.enum('States', {
      Disabled: true,
      Default: undefined,
      Active: undefined,
      'Active typing': undefined,
      'Item selected': undefined,
    }),
    isRequired: figma.boolean('is Required', {
      true: true,
      false: undefined,
    }),
  },
  example: ({ isDisabled, isRequired }) => (
    <Autocomplete
      items={['Item 1', 'Item 2', 'Item 3']}
      onSelectItem={() => {}}
      isDisabled={isDisabled}
      isRequired={isRequired}
      placeholder="Search"
    />
  ),
});
