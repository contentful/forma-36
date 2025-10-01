import React from 'react';
import { Autocomplete, Stack, Paragraph } from '@contentful/f36-components';

export default function AutocompleteFetchingAsyncDataExample() {
  const spaces = React.useMemo(
    () => [
      'Travel Blog',
      'Finnance Blog',
      'Fitness App',
      'News Website',
      'eCommerce Catalogue',
      'Photo Gallery',
    ],
    [],
  );

  const [selectedFruit, setSelectedFruit] = React.useState();

  const [isLoading, setIsLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);

    // We will use a timeout to simulate async data
    // this function will filter our options after 800ms
    const fetchSpaces = setTimeout(() => {
      const filteredSpaces = spaces.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setItems(filteredSpaces);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(fetchSpaces);
  }, [inputValue, spaces]);

  // fetching data on each input value change
  // NOTE: Consider using throttle/debounce here for better performance
  const handleInputValueChange = (value) => {
    setInputValue(value);
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
        defaultValue={inputValue}
      />

      <Paragraph>
        Selected fruit: <b>{selectedFruit}</b>
      </Paragraph>
    </Stack>
  );
}
