import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';

export default function AutocompleteWithGroupedItems() {
  const spaces = [
    {
      groupTitle: 'Blogs',
      options: [
        { name: 'Travel Blog', type: 'Community' },
        { name: 'Finnance Blog', type: 'Community' },
      ],
    },
    {
      groupTitle: 'Others',
      options: [
        { name: 'Fitness App', type: 'Medium' },
        { name: 'News Website', type: 'Medium' },
        { name: 'eCommerce Catalogue', type: 'Large' },
        { name: 'Photo Gallery', type: 'Large' },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = React.useState({ name: '' });
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  const handleInputValueChange = (value) => {
    // we have to make sure to filter each of the groups based on the items shape.
    // be aware this is just a basic example and you might need to apply a more advanced filter algorithm
    const newFilteredItems = spaces.map((group) => {
      return {
        ...group,
        options: group.options.filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        ),
      };
    });
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        // this is the important prop that tells the component to deal with grouped options
        isGrouped
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        itemToString={(item) => `${item.name} (${item.type})`}
        renderItem={(item) => `${item.name} (${item.type})`}
      />

      <Paragraph>
        Selected item from shopping list: {selectedItem.name}
      </Paragraph>
    </Stack>
  );
}
