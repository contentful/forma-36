import React, { useState, useCallback } from 'react';

import { Autocomplete, AutocompleteProps } from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  parameters: {
    propTypes: [Autocomplete['__docgenInfo']],
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
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Ananas' },
  { value: 3, label: 'Banana' },
  { value: 4, label: 'Lemon Curd' },
  { value: 5, label: 'Avocado' },
];

export const Basic = (args: AutocompleteProps<{}>) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState();

  const handleQueryChange = useCallback(
    (query: string) => {
      setFilteredItems(
        query ? items.filter((item) => item.label.includes(query)) : items,
      );
    },
    [setFilteredItems],
  );

  const handleChange = useCallback(
    (item: object) => {
      setSelectedItem(item.label);
    },
    [setSelectedItem],
  );

  return (
    <Autocomplete<Item>
      {...args}
      onQueryChange={handleQueryChange}
      items={filteredItems}
      onChange={handleChange}
      selectedItem={selectedItem}
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
  placeholder: 'Find fruit',
  width: 'full',
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
};
export const MultiSelect = (args: AutocompleteProps<{}>) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [tagElements, setTagElements] = useState([]);

  const handleQueryChange = useCallback(
    (query: string) => {
      setFilteredItems(
        query ? items.filter((item) => item.label.includes(query)) : items,
      );
    },
    [setFilteredItems],
  );

  const handleChange = useCallback(
    (item: object) => {
      console.log(item);
      setTagElements((tagElements) => [...tagElements, item.label]);
    },
    [setTagElements],
  );

  return (
    <>
      <Autocomplete<Item>
        {...args}
        onQueryChange={handleQueryChange}
        items={filteredItems}
        onChange={handleChange}
      >
        {(options: Item[]) =>
          options.map((option: Item) => (
            <span key={option.value}>{option.label}</span>
          ))
        }
      </Autocomplete>
      Shopping List:
      <ul>
        {tagElements.map((tag: string) => (
          <li>{tag}</li>
        ))}
      </ul>
    </>
  );
};

MultiSelect.args = {
  placeholder: 'Choose fruit to buy',
  width: 'full',
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
};
