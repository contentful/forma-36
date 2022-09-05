import React from 'react';
import { Multiselect, Stack, Paragraph } from '@contentful/f36-components';

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
        <Multiselect.Option
          value="travel-blog"
          label="Travel Blog"
          onSelectItem={handleSelectItem}
          itemId={0}
        />
        <Multiselect.Option
          value="finance-blog"
          label="Finance Blog"
          onSelectItem={handleSelectItem}
          itemId={1}
        />
        <Multiselect.Option
          value="fitness-app"
          label="Fitness Blog"
          onSelectItem={handleSelectItem}
          itemId={2}
        />
        <Multiselect.Option
          value="news-website"
          label="News Website"
          onSelectItem={handleSelectItem}
          itemId={3}
        />
      </Multiselect>
    </Stack>
  );
}
