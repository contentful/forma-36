import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta } from '@storybook/react-vite';

import { Stack } from '@contentful/f36-core';
import { FormControl } from '@contentful/f36-forms';
import { Paragraph } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { getStringMatch } from '@contentful/f36-utils';

import { Autocomplete } from '../src/Autocomplete';
import type { AutocompleteProps } from '../src/Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

interface Produce {
  id: number;
  name: string;
}

interface GroceryList {
  groupTitle: string;
  options: any;
}

const fruits: Produce[] = [
  { id: 1, name: 'Apple 🍎' },
  { id: 2, name: 'Pineapple 🍍' },
  { id: 3, name: 'Avocado 🥑' },
  { id: 4, name: 'Banana 🍌' },
  { id: 5, name: 'Coconut 🥥' },
  { id: 6, name: 'Lemon 🍋' },
  { id: 7, name: 'Orange 🍊' },
  { id: 8, name: 'Peach 🍑' },
  { id: 9, name: 'Pear 🍐' },
  { id: 10, name: 'Strawberry 🍓' },
  { id: 11, name: 'Tangerine 🍊' },
  { id: 12, name: 'Tomato 🍅' },
];

const veggies: Produce[] = [
  { id: 1, name: 'Cucumber 🥒' },
  { id: 2, name: 'Pumpkin 🎃' },
  { id: 3, name: 'Broccoli 🥦' },
  { id: 4, name: 'Pepper 🫑' },
];

const groceryList: GroceryList[] = [
  {
    groupTitle: 'Fruit',
    options: fruits,
  },
  {
    groupTitle: 'Vegetables',
    options: veggies,
  },
  /* Empty groups are not rendered  */
  {
    groupTitle: 'Sweet',
    options: [],
  },
];

const fruitStrings = fruits.reduce((acc, fruit) => [...acc, fruit.name], []);

export const Basic = (args: AutocompleteProps<string>) => {
  const [selectedFruit, setSelectedFruit] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState(fruitStrings);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = fruitStrings.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
    action('onInputValueChange')(value);
  };

  const handleSelectItem = (item: string) => {
    setSelectedFruit(item);
    action('onSelectItem')(item);
  };

  return (
    <Stack
      style={{ width: '180px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<string>
        placeholder="select your favorite fruit"
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        listWidth="full"
      />

      <Paragraph>Selected fruit: {selectedFruit}</Paragraph>
    </Stack>
  );
};
Basic.args = {
  placeholder: 'Search your favorite fruit',
};

export const UsingObjectsAsItems = (args: AutocompleteProps<Produce>) => {
  const [selectedFruit, setSelectedFruit] = useState<Produce>({
    id: undefined,
    name: '',
  });
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = fruits.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedFruit(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Produce>
        {...args}
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
      />

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </Stack>
  );
};
UsingObjectsAsItems.args = {
  placeholder: 'Search your favorite fruit',
};

export const ControlledFromOutside = (args: AutocompleteProps<Produce>) => {
  const [selectedFruit, setSelectedFruit] = useState<Produce>({
    id: 9,
    name: 'Pear 🍐',
  });
  const [inputValue, setInputValue] = useState(selectedFruit.name);
  const [isOpen, setIsOpen] = useState(false);

  const filteredItems = fruits.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const handleSelectItem = (item: Produce) => {
    setSelectedFruit(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Autocomplete<Produce>
        placeholder="select your favorite fruit"
        listMaxHeight={120}
        textOnAfterSelect="preserve"
        items={filteredItems}
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        inputValue={inputValue}
        onInputValueChange={setInputValue}
        onSelectItem={handleSelectItem}
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        selectedItem={selectedFruit}
      />
      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
      <Paragraph>Input value: {inputValue}</Paragraph>
      <Button onClick={() => setSelectedFruit({ id: undefined, name: '' })}>
        clear selection
      </Button>
      <Button onClick={() => setInputValue('')}>clear input value</Button>
      <Button onClick={() => setIsOpen(!isOpen)}>toggle menu</Button>
    </Stack>
  );
};
ControlledFromOutside.args = {
  placeholder: 'Search your favorite fruit',
};

export const UsingGroupedItems = (args: AutocompleteProps<Produce>) => {
  const [selectedItem, setSelectedItem] = useState<Produce>({} as Produce);
  const [filteredItems, setFilteredItems] = useState(groceryList);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = groceryList.map((group) => {
      return {
        ...group,
        options: group.options.filter((item: Produce) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        ),
      };
    });
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedItem(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Produce>
        placeholder="select your favorite fruit"
        selectedItem={selectedItem}
        items={filteredItems}
        isGrouped
        renderItem={(item) => item.name}
        itemToString={(item) => item.name}
        onInputValueChange={handleInputValueChange}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        onSelectItem={handleSelectItem}
        listWidth="full"
      />

      <Paragraph>Selected Item: {selectedItem?.name}</Paragraph>
    </Stack>
  );
};
UsingGroupedItems.args = {
  placeholder: 'Search your favorite fruit',
};

export const MultipleSelection = (args: AutocompleteProps<Produce>) => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = fruits.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedFruits((prevState) => [...prevState, item.name]);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Produce>
        {...args}
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
        textOnAfterSelect="clear"
        closeAfterSelect={false}
      />

      <span>
        <Paragraph>Selected fruits:</Paragraph>
        <ul>
          {selectedFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </span>
    </Stack>
  );
};

export const WithFormControl = () => {
  const [selectedFruit, setSelectedFruit] = useState<Produce>();
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = fruits.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedFruit(item);
  };

  return (
    <>
      <FormControl isInvalid>
        <FormControl.Label>Favorite fruit:</FormControl.Label>

        {/* It’s not necessary to pass "Fruit" (type of one item)  */}
        <Autocomplete<Produce>
          items={filteredItems}
          onInputValueChange={handleInputValueChange}
          onSelectItem={handleSelectItem}
          onFocus={(e) => action('onFocus')(e)}
          onBlur={(e) => action('onBlur')(e)}
          itemToString={(item) => item.name}
          renderItem={(item) => item.name}
        />

        <FormControl.ValidationMessage>
          Error message
        </FormControl.ValidationMessage>
      </FormControl>

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </>
  );
};

export const HighlightingItems = () => {
  const [selectedFruit, setSelectedFruit] = useState<Produce>();
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleInputValueChange = (value: string) => {
    const newFilteredItems = fruits.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedFruit(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Produce>
        items={filteredItems}
        onInputValueChange={handleInputValueChange}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        onSelectItem={handleSelectItem}
        itemToString={(item) => item.name}
        renderItem={(item, inputValue) => {
          const { before, match, after } = getStringMatch(
            item.name,
            inputValue,
          );

          return (
            <>
              {before}
              <b>{match}</b>
              {after}
            </>
          );
        }}
      />

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </Stack>
  );
};

const fetchFruits = (filterBy?: string) =>
  new Promise<typeof fruits>((resolve) => {
    let result = fruits;
    if (filterBy) {
      result = fruits.filter((item) =>
        item.name.toLowerCase().includes(filterBy.toLowerCase()),
      );
    }

    setTimeout(() => {
      resolve(result);
    }, 800);
  });

export const WithAsyncData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState<Produce>();
  const [items, setItems] = useState<Produce[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetchFruits().then((fruits) => {
      setItems(fruits);
      setIsLoading(false);
    });
  }, []);

  // NOTE: Consider using throttle/debounce here for better performance
  const handleInputValueChange = (value: string) => {
    setIsLoading(true);
    fetchFruits(value).then((fruits) => {
      setItems(fruits);
      setIsLoading(false);
    });
  };

  const handleSelectItem = (item: Produce) => {
    setSelectedFruit(item);
  };

  return (
    <Stack
      style={{ minWidth: '300px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      {/* It’s not necessary to pass "Fruit" (type of one item)  */}
      <Autocomplete<Produce>
        items={items}
        onInputValueChange={handleInputValueChange}
        onSelectItem={handleSelectItem}
        onFocus={(e) => action('onFocus')(e)}
        onBlur={(e) => action('onBlur')(e)}
        itemToString={(item) => item.name}
        renderItem={(item) => item.name}
        isLoading={isLoading}
      />

      <Paragraph>Selected fruit: {selectedFruit?.name}</Paragraph>
    </Stack>
  );
};
WithAsyncData.args = {
  placeholder: 'Search your favorite fruit',
};
