import React, { useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Stack } from '@contentful/f36-core';
import { Multiselect, MultiselectProps } from '../src';

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

export const Basic = (args: MultiselectProps) => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);

  const handleSelectItem = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, value]);
    } else {
      const newSelectedFruits = selectedFruits.filter(
        (fruit) => fruit !== value,
      );
      setSelectedFruits(newSelectedFruits);
    }
  };

  return (
    <Stack
      style={{ width: '150px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Multiselect {...args} currentSelection={selectedFruits}>
        {fruitStrings.map((item, index) => {
          return (
            <Multiselect.Option
              value={item}
              label={item}
              onSelectItem={handleSelectItem}
              key={`${item}-${index}`}
              itemId={`${item}-${index}`}
              isChecked={selectedFruits.includes(item)}
              isDisabled={item === 'Avocado 🥑'}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
};

Basic.args = {
  placeholder: 'Select many fruits',
};

export const WithSearch = (args: MultiselectProps) => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);
  const [filteredItems, setFilteredItems] = useState(fruitStrings);

  const handleSearchValueChange = (event) => {
    const value = event.target.value;
    const newFilteredItems = fruitStrings.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, value]);
    } else {
      const newSelectedFruits = selectedFruits.filter(
        (fruit) => fruit !== value,
      );
      setSelectedFruits(newSelectedFruits);
    }
  };

  return (
    <Stack
      style={{ width: '150px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Multiselect
        {...args}
        hasSearch={true}
        onSearchValueChange={handleSearchValueChange}
        popoverProps={{ isFullWidth: true, listMaxHeight: 250 }}
        currentSelection={selectedFruits}
      >
        {filteredItems.map((item, index) => {
          return (
            <Multiselect.Option
              value={item}
              label={item}
              onSelectItem={handleSelectItem}
              key={`${item}-${index}`}
              itemId={`${item}-${index}`}
              isChecked={selectedFruits.includes(item)}
              isDisabled={item === 'Avocado 🥑'}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
};

WithSearch.args = {
  placeholder: 'Search your favorite fruit',
};
