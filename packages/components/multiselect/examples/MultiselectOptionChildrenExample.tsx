import React from 'react';
import { Stack, Multiselect } from '@contentful/f36-components';
import { QuestionIcon } from '@contentful/f36-icons';

export default function MultiselectSearchExample() {
  const spaces = [
    'Travel Blog',
    'Finance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  const [searchValue, setSearchValue] = React.useState('');
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleSearchValueChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
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
        {spaces
          .filter((item) =>
            item.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((item, index) => {
            return (
              <Multiselect.Option
                value={item}
                onSelectItem={handleSelectItem}
                key={`${item}-${index}`}
                itemId={`${item}-${index}`}
                isChecked={selectedItems.includes(item)}
                isDisabled={item === 'eCommerce Catalogue'}
              >
                <Multiselect.HighlightedItem
                  item={item}
                  inputValue={searchValue}
                />{' '}
                <QuestionIcon size="tiny" />
              </Multiselect.Option>
            );
          })}
      </Multiselect>
    </Stack>
  );
}
