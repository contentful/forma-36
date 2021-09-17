import React, { useState } from 'react';

import { Autocomplete, AutocompleteProps } from './Autocomplete';
import { Subheading } from '@contentful/f36-typography';
import { List } from '@contentful/f36-list';

export default {
  title: 'Components/Autocomplete V3',
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
  const [selectedItem, setSelectedItem] = useState('');

  const handleQueryChange = (query: string) => {
    setFilteredItems(
      query ? items.filter((item) => item.label.includes(query)) : items,
    );
  };

  const handleChange = (item: Item) => {
    setSelectedItem(item.label);
  };

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

export const ErrorHandling = (args: AutocompleteProps<{}>) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState('');

  const handleQueryChange = (query: string) => {
    setFilteredItems(
      query ? items.filter((item) => item.label.includes(query)) : items,
    );
  };

  const handleChange = (item: Item) => {
    setSelectedItem(item.label);
  };

  return (
    <Autocomplete<Item>
      {...args}
      onQueryChange={handleQueryChange}
      items={filteredItems}
      onChange={handleChange}
      selectedItem={selectedItem}
      validationMessage="This field is required"
    >
      {(options: Item[]) =>
        options.map((option: Item) => (
          <span key={option.value}>{option.label}</span>
        ))
      }
    </Autocomplete>
  );
};

ErrorHandling.args = {
  placeholder: 'Find fruit',
  width: 'full',
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
};

export const MultiSelect = (args: AutocompleteProps<{}>) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [tagElements, setTagElements] = useState([]);

  const handleQueryChange = (query: string) => {
    setFilteredItems(
      query ? items.filter((item) => item.label.includes(query)) : items,
    );
  };

  const handleChange = (item: Item) => {
    setTagElements((tagElements) => [...tagElements, item.label]);
  };

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
      <Subheading marginBottom="spacingS">Shopping List:</Subheading>
      <List>
        {tagElements.map((tag: string, idx: number) => (
          <List.Item key={`element-${tag}-${idx}`}>{tag}</List.Item>
        ))}
      </List>
    </>
  );
};

MultiSelect.args = {
  placeholder: 'Choose fruit to buy',
  width: 'full',
  emptyListMessage: 'There are no items to choose from',
  noMatchesMessage: 'No matches',
};
