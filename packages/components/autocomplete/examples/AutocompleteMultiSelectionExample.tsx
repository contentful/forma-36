import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';

export default function AutocompleteMultiSelectionExample() {
  const spaces = [
    { name: 'Travel Blog', type: 'Community' },
    { name: 'Finnance Blog', type: 'Community' },
    { name: 'Fitness App', type: 'Medium' },
    { name: 'News Website', type: 'Medium' },
    { name: 'eCommerce Catalogue', type: 'Large' },
    { name: 'Photo Gallery', type: 'Large' },
  ];

  // The state now stores an array of selected spaces, not just a string
  const [selectedFruits, setSelectedFruits] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  const handleInputValueChange = (value) => {
    const newFilteredItems = spaces.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item) => {
    // Every time an item is selected, the component will add the name of the fruit to the selectedFruits array
    setSelectedFruits((prevState) => [...prevState, item.name]);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
        // When `textOnAfterSelect` is `"clear"`, it will clean the TextInput after an option is selected
        textOnAfterSelect="clear"
        closeAfterSelect={false}
      />

      <span>
        <Paragraph>Selected spaces:</Paragraph>
        <ul>
          {selectedFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </span>
    </Stack>
  );
}
