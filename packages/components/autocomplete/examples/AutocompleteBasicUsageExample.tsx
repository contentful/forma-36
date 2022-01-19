import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';

export default function AutocompleteBasicUsageExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  // This `useState` is going to store the selected "space" so we can show it in the UI
  const [selectedSpace, setSelectedSpace] = React.useState();
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  // We filter the "spaces" array by the inputValue
  // we use 'toLowerCase()' to make the search case insensitive
  const handleInputValueChange = (value) => {
    const newFilteredItems = spaces.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (item) => {
    setSelectedSpace(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
      />

      <Paragraph>
        Selected space: <b>{selectedSpace}</b>
      </Paragraph>
    </Stack>
  );
}
