import React, { useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Stack } from '@contentful/f36-core';
import { FormControl } from '@contentful/f36-forms';
import { Paragraph } from '@contentful/f36-typography';

import { Autocomplete } from '../src/Autocomplete';
import type { AutocompleteProps } from '../src/Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

interface Fruit {
  id: number;
  name: string;
}

const fruits: Fruit[] = [
  { id: 1, name: 'Apple 🍎' },
  { id: 2, name: 'Ananas 🍍' },
  { id: 3, name: 'Avocado 🥑' },
  { id: 4, name: 'Banana 🍌' },
  { id: 5, name: 'Coconut 🥥' },
  { id: 6, name: 'Lemon 🍋' },
  { id: 7, name: 'Orange 🍊' },
  { id: 8, name: 'Peach 🍑' },
  { id: 9, name: 'Pear 🍐' },
  { id: 10, name: 'Strawberry 🍓' },
  { id: 11, name: 'Tangerine 🍊' },
  { id: 12, name: 'Tomato 🍅' },
];

const fruitStrings = fruits.reduce((acc, fruit) => [...acc, fruit.name], []);

export const Basic = (args: AutocompleteProps<string>) => {
  const [selectedFruit, setSelectedFruit] = useState<string>('');

  const handleFilter = (item: string, inputValue: string) =>
    item.toLowerCase().includes(inputValue.toLowerCase());

  const handleSelectItem = (item: string) => {
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
      <Autocomplete<string>
        {...args}
        items={fruitStrings}
        onFilter={handleFilter}
        onSelectItem={handleSelectItem}
      />

      <Paragraph>Selected fruit: {selectedFruit}</Paragraph>
    </Stack>
  );
};
Basic.args = {
  placeholder: 'Search your favorite fruit',
};

export const UsingObjectsAsItems = (args: AutocompleteProps<Fruit>) => {
  const [selectedFruit, setSelectedFruit] = useState<Fruit>();

  const handleFilter = (item: Fruit, inputValue: string) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase());

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
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
      />

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </Stack>
  );
};
UsingObjectsAsItems.args = {
  placeholder: 'Search your favorite fruit',
};

export const MultipleSelection = (args: AutocompleteProps<Fruit>) => {
  const [selectedFruits, setSelectedFruits] = useState<Fruit['name'][]>([]);

  const handleFilter = (item: Fruit, inputValue: string) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase());

  const handleSelectItem = (item: Fruit) => {
    setSelectedFruits((prevState) => [...prevState, item.name]);
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
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
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

export const WithFormControl = () => {
  const [selectedFruit, setSelectedFruit] = useState<Fruit>();

  const handleFilter = (item: Fruit, inputValue: string) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase());

  const handleSelectItem = (item: Fruit) => {
    setSelectedFruit(item);
  };

  return (
    <>
      <FormControl isInvalid>
        <FormControl.Label>Favorite fruit:</FormControl.Label>

        {/* It’s not necessary to pass "Fruit" (type of one item)  */}
        <Autocomplete<Fruit>
          items={fruits}
          onFilter={handleFilter}
          onSelectItem={handleSelectItem}
          itemToString={(item) => item.name}
          renderItem={(item) => item.name}
        />

        <FormControl.ValidationMessage>
          Error message
        </FormControl.ValidationMessage>
      </FormControl>

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </>
  );
};
