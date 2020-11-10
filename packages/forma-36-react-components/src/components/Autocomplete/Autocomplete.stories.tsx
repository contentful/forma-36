import React, { useState, useCallback } from 'react';
import { action } from '@storybook/addon-actions';

import Autocomplete, { AutocompleteProps } from './Autocomplete';

export default {
  title: '(alpha)/Autocomplete',
  component: Autocomplete,
  parameters: {
    propTypes: [Autocomplete['__docgenInfo']],
  },
};

interface Fruit {
  value: number;
  label: string;
}

const items: Fruit[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Orange' },
  { value: 4, label: 'Tomato' },
  { value: 5, label: 'Strawberry' },
];

export const Default = ({ items, ...args }: AutocompleteProps<Fruit>) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleQueryChange = useCallback(
    (query: string) => {
      setFilteredItems(
        query ? items.filter((item) => item.label.includes(query)) : items,
      );
    },
    [items, setFilteredItems],
  );

  return (
    <Autocomplete<Fruit>
      {...args}
      items={filteredItems}
      onQueryChange={handleQueryChange}
    >
      {(options: Fruit[]) =>
        options.map((option: Fruit) => (
          <span key={option.value}>{option.label}</span>
        ))
      }
    </Autocomplete>
  );
};

Default.args = {
  maxHeight: 100,
  width: 'full',
  items,
  onChange: action('on Change'),
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
  dropdownProps: { isFullWidth: true },
};
