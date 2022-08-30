import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getStringMatch } from '@contentful/f36-utils';
import { Multiselect, MultiselectProps } from './Multiselect';

interface Fruit {
  id: number;
  name: string;
}

interface GroceryList {
  groupTitle: string;
  options: Fruit[];
}

const fruits: Fruit[] = [
  { id: 1, name: 'Apple 🍎' },
  { id: 2, name: 'Ananas 🍍' },
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

const vegetables: Fruit[] = [
  { id: 1, name: 'Cucumber 🥒' },
  { id: 2, name: 'Pumpkin 🎃' },
  { id: 3, name: 'Brokkolie 🥦' },
  { id: 4, name: 'Pepper 🫑' },
];

const groceryList: GroceryList[] = [
  {
    groupTitle: 'Fruit',
    options: fruits,
  },
  {
    groupTitle: 'Vegetable',
    options: vegetables,
  },
  {
    groupTitle: 'Sweet',
    options: [],
  },
];

const fruitStrings = fruits.reduce(
  (acc, fruit) => [...acc, fruit.name],
  [] as string[],
);

const mockOnInputValueChange = jest.fn();
const mockOnSelectItem = jest.fn();

function renderComponent<ItemType>(
  customProps: Partial<MultiselectProps<ItemType>>,
) {
  const props = {
    items: (fruitStrings || customProps.items) as ItemType[],
    onInputValueChange: mockOnInputValueChange,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };
  render(<Multiselect {...props} />);
}

describe('Multiselect', () => {
  it('renders', () => {
    renderComponent({});
    expect(screen.getByTestId('cf-multiselect')).toBeInTheDocument();
  });
});
