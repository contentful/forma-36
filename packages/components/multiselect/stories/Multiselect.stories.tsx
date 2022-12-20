import React, { useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Stack } from '@contentful/f36-core';
import { Multiselect } from '../src';
import { SectionHeading } from '@contentful/f36-typography';

export default {
  title: 'Components/Multiselect',
  component: Multiselect,
} as Meta;

interface Fruit {
  id: number;
  name: string;
  value: string;
  isDisabled: boolean;
}

const fruits: Fruit[] = [
  {
    id: 1,
    value: 'apple',
    name: 'Apple 🍎',
    isDisabled: false,
  },
  {
    id: 2,
    value: 'ananas',
    name: 'Ananas 🍍',

    isDisabled: false,
  },
  {
    id: 3,
    value: 'avocado',
    name: 'Avocado 🥑',

    isDisabled: false,
  },
  {
    id: 4,
    value: 'banana',
    name: 'Banana 🍌',
    isDisabled: false,
  },
  {
    id: 5,
    value: 'coconut',
    name: 'Coconut 🥥',

    isDisabled: false,
  },
  {
    id: 6,
    value: 'lemon',
    name: 'Lemon 🍋',
    isDisabled: true,
  },
  {
    id: 7,
    value: 'orange',
    name: 'Orange 🍊',
    isDisabled: false,
  },
  {
    id: 8,
    value: 'peach',
    name: 'Peach 🍑',
    isDisabled: false,
  },
  {
    id: 9,
    value: 'pear',
    name: 'Pear 🍐',
    isDisabled: false,
  },
  {
    id: 10,
    value: 'strawberry',
    name: 'Strawberry 🍓',
    isDisabled: false,
  },
  {
    id: 11,
    value: 'tangerine',
    name: 'Tangerine 🍊',
    isDisabled: false,
  },
  { id: 12, value: 'tomato', name: 'Tomato 🍅', isDisabled: false },
];

export const Basic = () => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);

  const handleSelectItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const currentFruit = fruits.find((fruit) => fruit.value === value);
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, currentFruit.name]);
    } else {
      //its important to use prevState to avoid race conditions when using the state variable as reference.
      setSelectedFruits((prevState) => {
        return prevState.filter((fruit) => fruit !== currentFruit.name);
      });
    }
  };

  return (
    <Stack
      style={{ width: '180px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Multiselect
        placeholder="Select many fruits"
        currentSelection={selectedFruits}
      >
        {fruits.map((item) => {
          return (
            <Multiselect.Option
              value={item.value}
              label={item.name}
              onSelectItem={handleSelectItem}
              key={`key-${item.id}`}
              itemId={`id-${item.id}`}
              isChecked={selectedFruits.includes(item.name)}
              isDisabled={item.isDisabled}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
};

export const WithTitle = () => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleSelectItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    const currentFruit = fruits.find((fruit) => fruit.value === value);
    if (!currentFruit) return;
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, currentFruit.name]);
    } else {
      setSelectedFruits((prevState) => {
        return prevState.filter((fruit) => fruit !== currentFruit.name);
      });
    }
  };

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const newFilteredItems = fruits.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  return (
    <Stack
      style={{ width: '200px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Multiselect
        placeholder="Select many fruits"
        currentSelection={selectedFruits}
        onSearchValueChange={handleSearchValueChange}
      >
        <>
          <SectionHeading marginBottom="none"> Fruits </SectionHeading>
          <div>
            <Multiselect.Option
              value=""
              label="do not select me"
              onSelectItem={handleSelectItem}
              key={`key-00`}
              itemId={`id-00`}
              isDisabled={true}
            />
          </div>
          <ul>
            {filteredItems.map((item) => {
              return (
                <Multiselect.Option
                  value={item.value}
                  label={item.name}
                  onSelectItem={handleSelectItem}
                  key={`key-${item.id}`}
                  itemId={`id-${item.id}`}
                  isChecked={selectedFruits.includes(item.name)}
                  isDisabled={item.isDisabled}
                />
              );
            })}
          </ul>
        </>
      </Multiselect>
    </Stack>
  );
};

export const WithSearch = () => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);
  const [filteredItems, setFilteredItems] = useState(fruits);

  const handleSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const newFilteredItems = fruits.filter((item) =>
      item.value.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredItems(newFilteredItems);
  };

  const handleSelectItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    const currentFruit = fruits.find((fruit) => fruit.value === value);
    if (!currentFruit) return;
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, currentFruit.name]);
    } else {
      setSelectedFruits((prevState) => {
        return prevState.filter((fruit) => fruit !== currentFruit.name);
      });
    }
  };

  return (
    <Stack
      style={{ width: '250px' }}
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
    >
      <Multiselect
        placeholder="Search your favorite fruit"
        onSearchValueChange={handleSearchValueChange}
        popoverProps={{ isFullWidth: true, listMaxHeight: 250 }}
        currentSelection={selectedFruits}
      >
        {filteredItems.map((item) => {
          return (
            <Multiselect.Option
              value={item.value}
              label={item.name}
              onSelectItem={handleSelectItem}
              key={`key-${item.id}`}
              itemId={`id-${item.id}`}
              isChecked={selectedFruits.includes(item.name)}
              isDisabled={item.isDisabled}
            />
          );
        })}
      </Multiselect>
    </Stack>
  );
};

const produce: Fruit[] = [
  {
    id: 1,
    value: 'apple',
    name: 'Apple 🍎',
    isDisabled: false,
  },
  {
    id: 2,
    value: 'ananas',
    name: 'Ananas 🍍',

    isDisabled: false,
  },
  {
    id: 3,
    value: 'avocado',
    name: 'Avocado 🥑',

    isDisabled: false,
  },
];

export const WithSelectAll = () => {
  const [selectedFruits, setSelectedFruits] = useState<Array<string>>([]);

  const handleSelectItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const currentFruit = produce.find((fruit) => fruit.value === value);
    if (checked) {
      setSelectedFruits((prevState) => [...prevState, currentFruit.name]);
    } else {
      //its important to use prevState to avoid race conditions when using the state variable as reference.
      setSelectedFruits((prevState) => {
        return prevState.filter((fruit) => fruit !== currentFruit.name);
      });
    }
  };

  const toggleAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    if (checked) {
      const newSelection = produce.map((fruit) => fruit.name);
      setSelectedFruits(newSelection);
    } else {
      setSelectedFruits([]);
    }
  };

  const areAllSelected = React.useMemo(() => {
    return produce.every((element) => selectedFruits.includes(element.name));
  }, [selectedFruits]);

  return (
    <Stack
      flexDirection="column"
      spacing="spacingM"
      alignItems="start"
      style={{ width: '180px' }}
    >
      <Multiselect
        placeholder="Select many fruits"
        currentSelection={selectedFruits}
      >
        <div>
          <SectionHeading
            marginLeft="spacingM"
            marginBottom="spacingXs"
            marginTop="spacingS"
          >
            Shopping List
          </SectionHeading>
          <Multiselect.SelectAll
            onSelectItem={toggleAll}
            isChecked={areAllSelected}
          />
          {produce.map((item) => {
            return (
              <Multiselect.Option
                value={item.value}
                label={item.name}
                onSelectItem={handleSelectItem}
                key={`key-${item.id}`}
                itemId={`id-${item.id}`}
                isChecked={selectedFruits.includes(item.name)}
                isDisabled={item.isDisabled}
              />
            );
          })}
        </div>
      </Multiselect>
    </Stack>
  );
};
