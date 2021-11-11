import React from 'react';
import { Autocomplete, Paragraph, Stack } from '@contentful/f36-components';

export function AutocompleteExample() {
  const fruits = [
    'Apple 🍎',
    'Ananas 🍍',
    'Avocado 🥑',
    'Banana 🍌',
    'Coconut 🥥',
  ];

  // This `useState` is going to store the selected fruit so we can show it in the UI
  const [selectedFruit, setSelectedFruit] = React.useState();

  const [filteredItems, setFilteredItems] = React.useState(fruits);

  // We filter the "fruits" array by the inputValue
  // we use 'toLowerCase()' to make the search case insensitive
  const handleInputValueChange = (value) => {
    const newFilteredItems = fruits.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (item) => {
    setSelectedFruit(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
      />

      <Paragraph>Selected fruit: {selectedFruit}</Paragraph>
    </Stack>
  );
}
