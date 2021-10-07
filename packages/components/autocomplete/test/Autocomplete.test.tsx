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

const mockOnInputValueChange = jest.fn();
const mockOnSelectItem = jest.fn();

describe('Autocomplete', () => {
  describe('items is an array of strings', () => {
    it('calls the callback on input value change and selects the first item', async () => {
      renderComponent({});

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

      // checks that onInputValueChange was called with the value we typed
      expect(mockOnInputValueChange).toHaveBeenCalledWith('a');

      // checks if the list is visible and it only shows the filtered options
      await waitFor(() => {
        expect(list).toBeVisible();
      });

      // go to the list first item
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
      renderComponent({ clearAfterSelect: true });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

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

      // go to the list first item
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

    it('shows the value of the "noMatchesMessage" when the list has 0 items', async () => {
      const noMatchesMessage = 'There is no Broccoli in the list';

      renderComponent({ noMatchesMessage, items: [] });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // type anything to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible and it only shows the "No matches" message
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(screen.getByText(noMatchesMessage)).toBeVisible();
      });
    });

    it('shows loading state when "isLoading" is true', async () => {
      renderComponent({ isLoading: true });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // type anything to open the list
      fireEvent.input(input, {
        target: {
          value: 'broccoli',
        },
      });

      // checks if the list is visible and it shows the loading state
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(screen.queryAllByTestId('cf-ui-skeleton-form')).toHaveLength(3);
      });
    });
  });

  describe('items is an array of objects', () => {
    const getItemName = (item: Fruit) => item.name;

    it('selects the first item', async () => {
      renderComponent({
        items: fruits,
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
    onInputValueChange: mockOnInputValueChange,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };

  render(<Autocomplete {...props} />);
}
