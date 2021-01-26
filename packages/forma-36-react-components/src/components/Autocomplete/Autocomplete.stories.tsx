import React, { useState, useCallback } from 'react';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

import notes from './README.mdx';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    propTypes: [Autocomplete['__docgenInfo']],
    notes,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

interface Item {
  value: number;
  label: string;
}

const items: Item[] = [
  { value: 1, label: 'entry foo' },
  { value: 2, label: 'entry bar' },
  { value: 3, label: 'entry baz' },
  { value: 4, label: 'entry fooBar' },
  { value: 5, label: 'entry out of viewport' },
];

export const Basic = (args: AutocompleteProps<{}>) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleQueryChange = useCallback(
    (query: string) => {
      setFilteredItems(
        query ? items.filter((item) => item.label.includes(query)) : items,
      );
    },
    [setFilteredItems],
  );

  return (
    <Autocomplete<Item>
      {...args}
      onQueryChange={handleQueryChange}
      items={filteredItems}
      onChange={() => {}}
    >
      {(options: Item[]) =>
        options.map((option: Item) => (
          <span key={option.value}>{option.label}</span>
        ))
      }
    </Autocomplete>
  );
};

Basic.args = {
  placeholder: 'Choose from spaces in your organization',
  width: 'full',
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
};
