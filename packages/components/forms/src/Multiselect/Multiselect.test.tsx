import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getStringMatch } from '@contentful/f36-utils';
import { Multiselect } from './CompundMultiselect';
import { MultiselectProps } from './Multiselect';

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
  { id: 6, name: 'Lemon 🍋' },
  { id: 7, name: 'Orange 🍊' },
  { id: 8, name: 'Peach 🍑' },
  { id: 9, name: 'Pear 🍐' },
  { id: 10, name: 'Strawberry 🍓' },
  { id: 11, name: 'Tangerine 🍊' },
  { id: 12, name: 'Tomato 🍅' },
];

const mockOnInputValueChange = jest.fn();
const mockOnSelectItem = jest.fn();

function renderComponent(customProps: Partial<MultiselectProps>) {
  const props = {
    onInputValueChange: mockOnInputValueChange,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };
  render(
    <Multiselect {...props}>
      {fruits.map((fruit, index) => {
        <Multiselect.Option
          itemIdentifier={`identifier-${fruit.id}-${index}`}
          value={`${fruit.id}`}
          label={fruit.name}
          onSelectItem={mockOnSelectItem}
        />;
      })}
    </Multiselect>,
  );
}

describe('Multiselect', () => {
  it('renders', () => {
    renderComponent({});
    expect(screen.getByTestId('cf-multiselect')).toBeInTheDocument();
  });
});
