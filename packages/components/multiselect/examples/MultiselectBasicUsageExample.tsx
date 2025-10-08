import React from 'react';
import { Stack } from '@contentful/f36-components';
import { Multiselect } from '@contentful/f36-multiselect';

export default function MultiselectBasicUsageExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  // This `useState` is going to store the selected "space" so we can show it in the UI
  const [selectedSpaces, setSelectedSpaces] = React.useState([]);

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedSpaces((prevState) => [...prevState, value]);
    } else {
      const newSelectedSpaces = selectedSpaces.filter(
        (space) => space !== value,
      );
      setSelectedSpaces(newSelectedSpaces);
    }
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Multiselect
        currentSelection={selectedSpaces}
        popoverProps={{ isFullWidth: true }}
      >
        {spaces.map((space) => {
          const val = space.toLowerCase().replace(/\s/g, '-');
          return (
            <Multiselect.Option
              key={`key-${val}}`}
              itemId={`space-${val}}`}
              value={space}
              label={space}
              onSelectItem={handleSelectItem}
              isChecked={selectedSpaces.includes(space)}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
}
