import React from 'react';
import { render } from '@testing-library/react';
import { Autocomplete } from '../src/Autocomplete';

interface Fruit {
  id: number;
  name: string;
}

const fruits: Fruit[] = [
  { id: 1, name: 'Apple 🍎' },
  { id: 2, name: 'Ananas 🍍' },
  { id: 3, name: 'Avocado 🥑' },
  { id: 4, name: 'Banana 🍌' },
  { id: 5, name: 'Coconut 🥥' },
];

const fruitStrings = fruits.reduce((acc, fruit) => [...acc, fruit.name], []);

const mockOnFilter = jest.fn();
const mockOnSelectItem = jest.fn();

describe('Autocomplete', function () {
  it('renders', () => {
    const tree = render(
      <Autocomplete<string>
        items={fruitStrings}
        onFilter={mockOnFilter}
        onSelectItem={mockOnSelectItem}
      />,
    );

    expect(tree).toBeTruthy();
  });
});
