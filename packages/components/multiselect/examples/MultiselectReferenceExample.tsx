import React from 'react';
import { Button, Stack } from '@contentful/f36-components';
import { Multiselect } from '@contentful/f36-multiselect';

export default function MultiselectReferenceExample() {
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
  const togglePopOverRef = React.useRef(null);
  const clearSearchFieldRef = React.useRef(null);

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

  const handleExtToggle = () => {
    togglePopOverRef.current.click();
  };

  const handleExtClearSearch = () => {
    clearSearchFieldRef.current.click();
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Button onClick={handleExtToggle}>Toggle Popover</Button>
      <Button onClick={handleExtClearSearch}>Clear Search Field</Button>
      <Multiselect
        searchPlaceholder="Search spaces"
        onSearchValueChange={handleSearchValueChange}
        popoverProps={{ isFullWidth: true, closeOnBlur: false }}
        currentSelection={selectedItems}
        toggleRef={togglePopOverRef}
        resetSearchRef={clearSearchFieldRef}
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
