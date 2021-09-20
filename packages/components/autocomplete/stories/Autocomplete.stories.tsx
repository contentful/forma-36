import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Stack } from '@contentful/f36-core';
import { Paragraph } from '@contentful/f36-typography';

import { Autocomplete } from '../src/Autocomplete';
import type { AutocompleteProps } from '../src/Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

interface Fruit {
  id: number;
  label: string;
}

const fruits: Fruit[] = [
  { id: 1, label: 'Apple 🍎' },
  { id: 2, label: 'Ananas 🍍' },
  { id: 3, label: 'Avocado 🥑' },
  { id: 4, label: 'Banana 🍌' },
  { id: 5, label: 'Coconut 🥥' },
];

export const Basic = (args: AutocompleteProps<Fruit>) => {
  const [selectedFruit, setSelectedFruit] = React.useState<Fruit>();

  const handleFilter = (item: Fruit, inputValue: string) =>
    item.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());

  const handleSelectItem = (item: Fruit) => {
    setSelectedFruit(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Fruit>
        {...args}
        items={fruits}
        onFilter={handleFilter}
        onSelectItem={handleSelectItem}
        itemToString={(item) => item.label}
        renderItem={(item) => <>{item.label}</>}
      />

      <Paragraph>Selected fruit: {selectedFruit?.label}</Paragraph>
    </Stack>
  );
};

Basic.args = {
  placeholder: 'Search your favorite fruit',
};

export const MultipleSelection = (args: AutocompleteProps<Fruit>) => {
  const [selectedFruits, setSelectedFruits] = React.useState<Fruit['label'][]>(
    [],
  );

  const handleFilter = (item: Fruit, inputValue: string) =>
    item.label.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase());

  const handleSelectItem = (item: Fruit) => {
    setSelectedFruits((prevState) => [...prevState, item.label]);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Fruit>
        {...args}
        items={fruits}
        onFilter={handleFilter}
        onSelectItem={handleSelectItem}
        itemToString={(item) => item.label}
        renderItem={(item) => <>{item.label}</>}
        clearAfterSelect
      />

      <span>
        <Paragraph>Selected fruits:</Paragraph>
        <ul>
          {selectedFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </span>
    </Stack>
  );
};
