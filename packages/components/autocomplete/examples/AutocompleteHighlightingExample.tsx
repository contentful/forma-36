import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';
import { getStringMatch } from '@contentful/f36-utils';

export default function AutocompleteHighlightingExample() {
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

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={filteredItems}
        onInputValueChange={(value) => {
          const newFilteredItems = spaces.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()),
          );
          setFilteredItems(newFilteredItems);
        }}
        onSelectItem={(item) => setSelectedSpace(item)}
        itemToString={(item) => item.name}
        // Two arguments are provided to the `renderItem` prop: the item and the inputValue
        renderItem={(item, inputValue) => {
          // we pass `item.name` and the inputValue to getStringMatch
          // and it will return an object
          // for our example, for the "Travel Blog" item
          // this will return { before: 'T' , match: 'rav', after: 'el Blog' }
          const { before, match, after } = getStringMatch(
            item.name,
            inputValue,
          );

          // Finally, we return a ReactNode
          return (
            <>
              {before}
              <b>{match}</b>
              {after} ({item.type})
            </>
          );
        }}
      />

      <Paragraph>
        Selected fruit: <b>{selectedSpace.name}</b>
      </Paragraph>
    </Stack>
  );
}
