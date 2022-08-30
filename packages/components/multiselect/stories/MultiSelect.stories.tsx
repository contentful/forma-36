import React, { useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Stack } from '@contentful/f36-core';
import { Paragraph } from '@contentful/f36-typography';

import { Multiselect } from '../src/Multiselect';
import type { MultiselectProps } from '../src/Multiselect';

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
} as Meta;

interface Produce {
  id: number;
  name: string;
}

const fruits: Produce[] = [
  { id: 1, name: 'Apple 🍎' },
  { id: 2, name: 'Pineapple 🍍' },
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

export const Basic = (args: MultiselectProps<string>) => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);
  const [filteredItems, setFilteredItems] = useState(fruitStrings);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    const newFilteredItems = fruitStrings.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: string) => {
    setSelectedFruits((prevState) => [...prevState, item]);
  };

  return (
    <Stack
      style={{ width: '150px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Multiselect<string>
        {...args}
        items={filteredItems}
        hasSearch
        onSearchValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        listWidth="full"
        defaultSelectedItems={selectedFruits}
      />
    </Stack>
  );
};

Basic.args = {
  placeholder: 'Search your favorite fruit',
};
