import React from 'react';
import { Multiselect, Stack } from '@contentful/f36-components';

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

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (item) => {
    setSelectedSpace(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Multiselect currentSelection={selectedSpace}>
        {spaces.map((space, index) => {
          const val = space.toLowerCase().replace(/\s/g, '-');
          return (
            <Multiselect.Option
              value={val}
              label={space}
              onSelectItem={handleSelectItem}
              itemId={`space-${val}-${index}`}
              key={`space-${val}-${index}`}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
}
