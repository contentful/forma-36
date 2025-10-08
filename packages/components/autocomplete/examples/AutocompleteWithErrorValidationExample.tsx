import React from 'react';
import {
  Autocomplete,
  Stack,
  Paragraph,
  FormControl,
  Button,
} from '@contentful/f36-components';

export default function AutocompleteWithErrorValidationExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  const [selectedFruit, setSelectedFruit] = React.useState();
  const [filteredItems, setFilteredItems] = React.useState(spaces);
  const [isInvalid, setIsInvalid] = React.useState(false);

  const handleInputValueChange = (value) => {
    const newFilteredItems = spaces.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item) => {
    setSelectedFruit(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <FormControl isInvalid={isInvalid}>
        <FormControl.Label>Space:</FormControl.Label>

        <Autocomplete
          items={filteredItems}
          onInputValueChange={handleInputValueChange}
          onSelectItem={handleSelectItem}
        />

        {isInvalid && (
          <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
        )}
      </FormControl>

      <Button onClick={() => setIsInvalid((prevState) => !prevState)}>
        Toggle error message
      </Button>

      <Paragraph>
        Selected space: <b>{selectedFruit}</b>
      </Paragraph>
    </Stack>
  );
}
