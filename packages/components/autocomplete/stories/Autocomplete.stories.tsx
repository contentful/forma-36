import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Autocomplete } from '../src/Autocomplete';
import type { AutocompleteProps } from '../src/Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

interface Fruit {
  id: number;
  label: string;
}

const fruits: Fruit[] = [
  { id: 1, label: 'Apple 🍎' },
  { id: 2, label: 'Ananas 🍍' },
  { id: 3, label: 'Avocado 🥑' },
  { id: 4, label: 'Banana 🍌' },
  { id: 5, label: 'Coconut 🥥' },
];

// NEW WAY

export const Basic = (args: AutocompleteProps<Fruit>) => {
  const [filteredItems, setFilteredItems] = React.useState(fruits);
  const [selectedItem, setSelectedItem] = React.useState<Fruit>();

  const handleQueryChange = (query: string) => {
    const filteredFruits = fruits.filter((fruit) =>
      fruit.label.includes(query),
    );

    setFilteredItems(filteredFruits);
  };

  const handleSelectItem = (item: Fruit) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Autocomplete<Fruit>
        {...args}
        items={filteredItems}
        onQueryChange={handleQueryChange}
        onSelectItem={handleSelectItem}
        renderItem={(item: Fruit) => <span>{item.label}</span>}
      />
      <div>Selected fruit: {selectedItem?.label}</div>
    </>
  );
};

// OLD WAY
// export const Basic = (args: AutocompleteProps<Fruit>) => {
//   const [filteredItems, setFilteredItems] = React.useState(fruits);
//   const [selectedItem, setSelectedItem] = React.useState<Fruit>();

//   const handleQueryChange = (query: string) => {
//     const filteredFruits = fruits.filter((fruit) =>
//       fruit.label.includes(query),
//     );

//     setFilteredItems(filteredFruits);
//   };

//   const handleSelectItem = (item: Fruit) => {
//     setSelectedItem(item);
//   };

//   return (
//     <>
//       <Autocomplete<Fruit>
//         {...args}
//         items={filteredItems}
//         onQueryChange={handleQueryChange}
//         onSelectItem={handleSelectItem}
//       >
//         {(options: Fruit[]) =>
//           options.map((option) => <span key={option.id}>{option.label}</span>)
//         }
//       </Autocomplete>
//       <div>Selected fruit: {selectedItem?.label}</div>
//     </>
//   );
// };

Basic.args = {
  placeholder: 'Search your favorite fruit',
};
