import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { getStringMatch } from '@contentful/f36-utils';
import { Autocomplete, AutocompleteProps } from './Autocomplete';

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

    it('clears the input after item is selected when "textOnAfterSelect" is "clear"', async () => {
      renderComponent({ textOnAfterSelect: 'clear' });

      const input = screen.getByTestId('cf-autocomplete-input');
      const container = screen.getByTestId('cf-autocomplete-container');

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible
      await waitFor(() => {
        expect(container).toBeVisible();
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
      expect(container).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('preserves the same input value after item is selected when "textOnAfterSelect" is "preserve"', async () => {
      renderComponent({ textOnAfterSelect: 'preserve' });

      const input = screen.getByTestId('cf-autocomplete-input');
      const container = screen.getByTestId('cf-autocomplete-container');

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible
      await waitFor(() => {
        expect(container).toBeVisible();
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
      expect(container).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('a');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('shows the value of the "noMatchesMessage" when the list has 0 items', async () => {
      const noMatchesMessage = 'There is no Broccoli in the list';

      renderComponent({ noMatchesMessage, items: [] });

      const input = screen.getByTestId('cf-autocomplete-input');

      // type anything to open the list
      fireEvent.input(input, {
        target: {
          value: 'tesst',
        },
      });

      const list = screen.getByTestId('cf-autocomplete-container');

      // checks if the list is visible and it only shows the "No matches" message
      await waitFor(() => {
        expect(list).toBeVisible();
        expect(screen.getByText(noMatchesMessage)).toBeVisible();
      });
    });

    it('should show the empty list if showEmptyList is true', async () => {
      const noMatchesMessage = 'No matches found';

      renderComponent({ items: [], showEmptyList: true, noMatchesMessage });
      const input = screen.getByTestId('cf-autocomplete-input');
      // Container should exist but not visible
      expect(screen.getByTestId('cf-autocomplete-container')).not.toBeVisible();

      // focus on input to open the list
      fireEvent.focus(input);

      // Should be visible after clicking on the input
      await waitFor(() => {
        expect(screen.getByTestId('cf-autocomplete-container')).toBeVisible();
        expect(screen.getByText(noMatchesMessage)).toBeVisible();
      });
    });

    it('is not showing the container when the list has 0 items and there is no input value', async () => {
      renderComponent({ items: [] });

      const input = screen.getByTestId('cf-autocomplete-input');

      fireEvent.click(input);

      // type anything to open the list
      fireEvent.input(input, {
        target: {
          value: '',
        },
      });

      const list = screen.queryByTestId('cf-autocomplete-list');

      // checks if the list is not visible
      expect(list).toBeNull();
    });

    it('shows loading state when "isLoading" is true', async () => {
      renderComponent({ isLoading: true });

      const input = screen.getByTestId('cf-autocomplete-input');
      const container = screen.getByTestId('cf-autocomplete-container');

      // type anything to open the list
      fireEvent.input(input, {
        target: {
          value: 'broccoli',
        },
      });

      // checks if the list is visible and it shows the loading state
      await waitFor(() => {
        expect(container).toBeVisible();
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

    it('when used with `getStringMatch`, it will render each item with the matched text wrapped in <b> tag', async () => {
      renderComponent({
        items: fruits,
        itemToString: (item: Fruit) => item.name,
        renderItem: (item, inputValue) => {
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
          ) as JSX.Element;
        },
      });

      const input = screen.getByTestId('cf-autocomplete-input');
      const list = screen.getByTestId('cf-autocomplete-list');

      // Type a text to be matched and open the list of suggestions
      fireEvent.input(input, {
        target: {
          value: 'ana',
        },
      });

      // checks if the list is visible and it only shows the filtered options
      await waitFor(() => {
        expect(list).toBeVisible();
      });

      // go to the list first item
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });

      // checks if there are two highlighted children
      expect(screen.queryAllByText(/ana/i)).toHaveLength(2);
    });
  });

  describe('items is a nested object with groups', () => {
    const openDropdown = async () => {
      const input = screen.getByTestId('cf-autocomplete-input');
      const container = screen.getByTestId('cf-autocomplete-container');
      // list is initially closed
      expect(container).not.toBeVisible();

      // Type one letter in the input to open the list
      fireEvent.input(input, {
        target: {
          value: 'a',
        },
      });

      // checks if the list is visible
      await waitFor(() => {
        expect(container).toBeVisible();
      });
      return { input, container };
    };

    it('renders the group titles', async () => {
      renderComponent<Fruit>({
        isGrouped: true,
        items: groceryList,
        itemToString: (item: Fruit) => item.name,
        renderItem: (item: Fruit) => item.name,
      });

      const { container } = await openDropdown();

      expect(container.childElementCount).toBe(2);
      expect(
        screen.queryAllByTestId('cf-autocomplete-grouptitle'),
      ).toHaveLength(2);
    });
    it("doesn't render an empty group", async () => {
      renderComponent<Fruit>({
        isGrouped: true,
        items: groceryList,
        itemToString: (item: Fruit) => item.name,
        renderItem: (item: Fruit) => item.name,
      });

      await openDropdown();

      const renderedGroupTitles = screen
        .getAllByTestId('cf-autocomplete-grouptitle')
        .map((node) => node.textContent);

      expect(renderedGroupTitles).toContain('Fruit');
      expect(renderedGroupTitles).toContain('Vegetable');
      expect(renderedGroupTitles).not.toContain('Sweet');
    });
    it('selects the first item', async () => {
      renderComponent<Fruit>({
        isGrouped: true,
        items: groceryList,
        itemToString: (item: Fruit) => item.name,
        renderItem: (item: Fruit) => item.name,
      });

      const firstItem = screen.getByTestId('cf-autocomplete-list-item-0');

      const { container, input } = await openDropdown();

      expect(container.childElementCount).toBe(2);

      // press the ArrowDown key
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(firstItem.getAttribute('aria-selected')).toBe('true');

      // press Enter to select the item
      fireEvent.keyDown(input, {
        key: 'Enter',
      });

      // checks if the list got closed and the value of the input is the one we selected
      expect(container).not.toBeVisible();
      expect(input.getAttribute('value')).toBe('Apple 🍎');
      expect(mockOnSelectItem).toHaveBeenCalledWith({
        id: 1,
        name: 'Apple 🍎',
      });
    });
    it('shows the value of the "noMatchesMessage" when every group is empty', async () => {
      const noMatchesMessage = 'There is no Broccoli in the list';
      const emptyGroup = {
        groupTitle: 'Fruit',
        options: [],
      };

      renderComponent<Fruit>({
        isGrouped: true,
        items: [emptyGroup],
        noMatchesMessage,
      });

      await openDropdown();

      // checks if the list is visible and it only shows the "No matches" message
      await waitFor(() => {
        expect(screen.getByText(noMatchesMessage)).toBeVisible();
      });
    });
  });
});

function renderComponent<ItemType>(
  customProps: Partial<AutocompleteProps<ItemType>>,
) {
  const props = {
    items: (fruitStrings || customProps.items) as ItemType[],
    onInputValueChange: mockOnInputValueChange,
    onSelectItem: mockOnSelectItem,
    ...customProps,
  };
  render(<Autocomplete {...props} />);
}
