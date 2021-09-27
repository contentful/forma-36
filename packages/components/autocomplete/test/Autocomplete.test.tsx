import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Autocomplete, AutocompleteProps } from '../src/Autocomplete';

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
    const onFilter = (item: string, inputValue: string) =>
      item.toLowerCase().includes(inputValue.toLowerCase());

    it('filters the list and selects the first item', async () => {
      renderComponent({ onFilter });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');
      const listFirstItem = screen.getByTestId('cf-autocomplete-list-item-0');

      // list is initially closed
      expect(list).not.toBeVisible();
      expect(list.childElementCount).toBe(12);

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible and it only shows the filtered options
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(list.childElementCount).toBe(10);
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
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('clears the input after item is selected when "clearAfterSelect" is true', async () => {
      renderComponent({ onFilter, clearAfterSelect: true });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible and it only shows the filtered options
      await waitFor(() => {
        expect(list).toBeVisible();
      });

      // press the ArrowDown key
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });

      // press Enter to select the item
      fireEvent.keyDown(input, {
        key: 'Enter',
      });

      // checks if the list got closed and the value of the input is an empty string
      expect(list).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('shows the value of the "noMatchesMessage" when the list has 0 filtered items', async () => {
      const noMatchesMessage = 'There is no Broccoli in the list';

      renderComponent({ onFilter, noMatchesMessage });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // type an item that does not exist in the list
      fireEvent.input(input, {
        target: {
          value: 'broccoli',
        },
      });

      // checks if the list is visible and it only shows the "No matches" message
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(screen.getByText(noMatchesMessage)).toBeVisible();
      });
    });

    it('shows loading state when "isLoading" is true', async () => {
      renderComponent({ onFilter, isLoading: true });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // type an item that does not exist in the list
      fireEvent.input(input, {
        target: {
          value: 'broccoli',
        },
      });

      // checks if the list is visible and it shows the loading skeletons
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(screen.queryAllByTestId('cf-ui-skeleton-form')).toHaveLength(3);
      });
    });
  });

  describe('items is an array of objects', () => {
    const onFilter = (item: Fruit, inputValue: string) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase());
    const getItemName = (item: Fruit) => item.name;

    it('filters the list and selects the first item', async () => {
      renderComponent({
        items: fruits,
        onFilter,
        itemToString: getItemName,
        renderItem: getItemName,
      });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');
      const listFirstItem = screen.getByTestId('cf-autocomplete-list-item-0');

      // list is initially closed
      expect(list).not.toBeVisible();
      expect(list.childElementCount).toBe(12);

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible and it only shows the filtered options
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(list.childElementCount).toBe(10);
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
      expect(mockOnSelectItem).toHaveBeenCalledWith({
        id: 1,
        name: 'Apple 🍎',
      });
    });
  });
});

function renderComponent(customProps: Partial<AutocompleteProps>) {
  const props = {
    items: fruitStrings,
    onFilter: mockOnFilter,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };

  render(<Autocomplete {...props} />);
}
