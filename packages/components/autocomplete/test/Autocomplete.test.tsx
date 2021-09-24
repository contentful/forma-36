import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
  { id: 6, name: 'Lemon 🍋' },
  { id: 7, name: 'Orange 🍊' },
  { id: 8, name: 'Peach 🍑' },
  { id: 9, name: 'Pear 🍐' },
  { id: 10, name: 'Strawberry 🍓' },
  { id: 11, name: 'Tangerine 🍊' },
  { id: 12, name: 'Tomato 🍅' },
];

const fruitStrings = fruits.reduce((acc, fruit) => [...acc, fruit.name], []);

const mockOnFilter = jest.fn();
const mockOnSelectItem = jest.fn();

describe('Autocomplete', () => {
  describe('items is an array of strings', () => {
    it('filters the list and selects the first item', async () => {
      const handleFilter = (item: string, inputValue: string) =>
        item.toLowerCase().includes(inputValue.toLowerCase());

      renderComponent({ onFilter: handleFilter });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');
      const listFirstItem = screen.getByTestId('cf-autocomplete-list-item-0');

      expect(list).not.toBeVisible();

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible
      await waitFor(() => {
        expect(list).toBeVisible();
      });

      // press the ArrowDown key
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });

      // checks if the first item of the list gets selected
      expect(listFirstItem.getAttribute('aria-selected')).toBe('true');
      expect(listFirstItem.getAttribute('class')).toContain('highlighted');

      // press Enter to select the item
      fireEvent.keyDown(input, {
        key: 'Enter',
      });

      // checks if the list got closed and the value of the input is the one we selected
      expect(list).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('Apple 🍎');
      expect(mockOnSelectItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('items is an array of objects', () => {
    it('filters the list and selects the first item', async () => {
      const handleFilter = (item: Fruit, inputValue: string) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase());

      renderComponent({
        items: fruits,
        onFilter: handleFilter,
        itemToString: (item: Fruit) => item.name,
        renderItem: (item: Fruit) => item.name,
      });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');
      const listFirstItem = screen.getByTestId('cf-autocomplete-list-item-0');

      expect(list).not.toBeVisible();

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible
      await waitFor(() => {
        expect(list).toBeVisible();
      });

      // press the ArrowDown key
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });

      // checks if the first item of the list gets selected
      expect(listFirstItem.getAttribute('aria-selected')).toBe('true');
      expect(listFirstItem.getAttribute('class')).toContain('highlighted');

      // press Enter to select the item
      fireEvent.keyDown(input, {
        key: 'Enter',
      });

      // checks if the list got closed and the value of the input is the one we selected
      expect(list).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('Apple 🍎');
      expect(mockOnSelectItem).toHaveBeenCalledTimes(1);
    });
  });
});

function renderComponent(customProps) {
  const props = {
    items: fruitStrings,
    onFilter: mockOnFilter,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };

  render(<Autocomplete {...props} />);
}
