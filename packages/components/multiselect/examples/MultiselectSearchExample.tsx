import React from 'react';
import { Stack, Multiselect } from '@contentful/f36-components';

export default function MultiselectSearchExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  const [selectedItems, setSelectedItems] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState(spaces);

  const handleSearchValueChange = (event) => {
    const value = event.target.value;
    const newFilteredItems = spaces.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedItems((prevState) => [...prevState, value]);
    } else {
      const newSelectedItems = selectedItems.filter((space) => space !== value);
      setSelectedItems(newSelectedItems);
    }
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Multiselect
        searchProps={{
          searchPlaceholder: 'Search spaces',
          onSearchValueChange: handleSearchValueChange,
        }}
        popoverProps={{ isFullWidth: true }}
        currentSelection={selectedItems}
      >
        {filteredItems.map((item, index) => {
          return (
            <Multiselect.Option
              value={item}
              label={item}
              onSelectItem={handleSelectItem}
              key={`${item}-${index}`}
              itemId={`${item}-${index}`}
              isChecked={selectedItems.includes(item)}
              isDisabled={item === 'eCommerce Catalogue'}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
}
