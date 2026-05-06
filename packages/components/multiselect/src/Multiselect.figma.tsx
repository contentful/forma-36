import React from 'react';
import figma from '@figma/code-connect';
import { Multiselect } from './CompoundMultiselect';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=12925:124903';

figma.connect(Multiselect, FIGMA_URL, {
  example: () => (
    <Multiselect placeholder="Select options">
      <Multiselect.Option
        value="option1"
        itemId="option1"
        label="Option 1"
        onSelectItem={() => {}}
      />
      <Multiselect.Option
        value="option2"
        itemId="option2"
        label="Option 2"
        onSelectItem={() => {}}
      />
      <Multiselect.Option
        value="option3"
        itemId="option3"
        label="Option 3"
        onSelectItem={() => {}}
      />
    </Multiselect>
  ),
});
