import React from 'react';
import { Multiselect, Stack } from '@contentful/f36-components';

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
  const [selectedSpace, setSelectedSpace] = React.useState<Array<string>>([]);

  // This function will be called once the user selects an item in the list of options
  const handleSelectItem = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedSpace((prevState) => [...prevState, value]);
    } else {
      const newSelectedSpaces = spaces.filter((space) => space !== value);
      setSelectedSpace(newSelectedSpaces);
    }
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
              isChecked={selectedSpace.includes(space)}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
}
