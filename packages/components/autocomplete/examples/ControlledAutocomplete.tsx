import React from 'react';
import {
  Autocomplete,
  Stack,
  Paragraph,
  Button,
} from '@contentful/f36-components';

export default function ControlledAutocomplete() {
  const spaces = [
    { name: 'Travel Blog', type: 'Community' },
    { name: 'Finnance Blog', type: 'Community' },
    { name: 'Fitness App', type: 'Medium' },
    { name: 'News Website', type: 'Medium' },
    { name: 'eCommerce Catalogue', type: 'Large' },
    { name: 'Photo Gallery', type: 'Large' },
  ];

  const [selectedSpace, setSelectedSpace] = React.useState({ name: '' });
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  const handleInputValueChange = (value) => {
    // This time, we tell the component to compare the property "name" to the inputValue
    const newFilteredItems = spaces.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item) => {
    setSelectedSpace(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        // handing selectedItem over as property make the autocomplete a controlled input
        selectedItem={selectedSpace}
        // This prop is the function that will tell the component
        // how to extract a string that will be used as inputValue
        itemToString={(item) => item.name}
        // This prop is the function that will tell the component
        // how to render each item in the options list
        // In this example the first item will render "Travel Blog (Community)"
        renderItem={(item) => `${item.name} (${item.type})`}
      />

      <Paragraph>
        Selected Space: <b>{selectedSpace.name}</b>
        <Button onClick={() => setSelectedSpace({ name: '' })}>
          clear selection
        </Button>
      </Paragraph>
    </Stack>
  );
}
