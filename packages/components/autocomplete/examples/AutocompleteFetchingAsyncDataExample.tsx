import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';

export default function AutocompleteFetchingAsyncDataExample() {
  const spaces = [
    'Travel Blog',
    'Finnance Blog',
    'Fitness App',
    'News Website',
    'eCommerce Catalogue',
    'Photo Gallery',
  ];

  const fetchSpaces = (filterBy = '') =>
    new Promise((resolve) => {
      let result = spaces;
      if (filterBy) {
        result = spaces.filter((item) =>
          item.toLowerCase().includes(filterBy.toLowerCase()),
        );
      }

      setTimeout(() => {
        resolve(result);
      }, 800);
    });

  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedFruit, setSelectedFruit] = React.useState();
  const [items, setItems] = React.useState([]);

  // fetching data when component mounted
  React.useEffect(() => {
    setIsLoading(true);
    fetchSpaces().then((result) => {
      setItems(result);
      setIsLoading(false);
    });
  }, []);

  // fetching data on each input value change
  // NOTE: Consider using throttle/debounce here for better performance
  const handleInputValueChange = (value) => {
    setIsLoading(true);
    fetchSpaces(value).then((result) => {
      setItems(result);
      setIsLoading(false);
    });
  };

  const handleSelectItem = (item) => {
    setSelectedFruit(item);
  };

  return (
    <Stack flexDirection="column" alignItems="start">
      <Autocomplete
        items={items}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        isLoading={isLoading}
      />

      <Paragraph>
        Selected fruit: <b>{selectedFruit}</b>
      </Paragraph>
    </Stack>
  );
}
