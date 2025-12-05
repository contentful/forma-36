import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      const user = userEvent.setup();
      renderComponent({});

      const list = screen.queryByRole('list', { hidden: true });

      // list is initially closed
      expect(list).not.toBeVisible();
      expect(list.childElementCount).toBe(12);

      // Type one letter in the input to open the list
      await user.type(screen.getByRole('combobox'), 'a');

      // checks that onInputValueChange was called with the value we typed
      expect(mockOnInputValueChange).toHaveBeenCalledWith('a');

      // checks if the list is visible and it only shows the filtered options
      expect(screen.queryByRole('listbox')).toBeVisible();

      // go to the list first item
      await user.keyboard('[ArrowDown]');

      // checks if the first item of the list gets selected
      const listFirstItem = screen.getAllByRole('option')[0];
      expect(listFirstItem.getAttribute('aria-selected')).toBe('true');
      expect(listFirstItem.getAttribute('data-highlighted')).toBeTruthy();

      // press Enter to select the item
      await user.keyboard('[Enter]');

      // checks if the list got closed and the value of the input is the one we selected
      expect(list).not.toBeVisible();
      expect(screen.getByRole('combobox')).toHaveValue('Apple 🍎');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('clears the input after item is selected when "textOnAfterSelect" is "clear"', async () => {
      const user = userEvent.setup();

      renderComponent({ textOnAfterSelect: 'clear' });

      // Type one letter in the input to open the list
      await user.type(screen.getByRole('combobox'), 'a');

      // checks if the list is visible
      expect(screen.queryByRole('listbox')).toBeVisible();

      // go to the list first item
      await user.keyboard('[ArrowDown]');

      // press Enter to select the item
      await user.keyboard('[Enter]');

      // checks if the list got closed and the value of the input is an empty string
      expect(screen.queryByRole('listbox', { hidden: true })).not.toBeVisible();
      expect(screen.getByRole('combobox')).toHaveValue('');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('preserves the same input value after item is selected when "textOnAfterSelect" is "preserve"', async () => {
      const user = userEvent.setup();

      renderComponent({ textOnAfterSelect: 'preserve' });

      // Type one letter in the input to open the list
      await user.type(screen.getByRole('combobox'), 'a');

      // checks if the list is visible
      expect(screen.getByRole('listbox')).toBeVisible();

      // go to the list first item
      await user.keyboard('[ArrowDown]');

      // press Enter to select the item
      await user.keyboard('[Enter]');

      // checks if the list got closed and the value of the input is an empty string
      expect(screen.getByRole('listbox', { hidden: true })).not.toBeVisible();
      expect(screen.getByRole('combobox')).toHaveValue('a');
      expect(mockOnSelectItem).toHaveBeenCalledWith('Apple 🍎');
    });

    it('shows the value of the "noMatchesMessage" when the list has 0 items', async () => {
      const noMatchesMessage = 'There is no Broccoli in the list';

      const user = userEvent.setup();
      renderComponent({ noMatchesMessage, items: [] });

      // type anything to open the list
      await user.type(screen.getByRole('combobox'), 'tesst');

      // checks if the list is visible and it only shows the "No matches" message
      expect(screen.getByRole('listbox')).toBeVisible();
      expect(screen.getByText(noMatchesMessage)).toBeVisible();
    });

    it('should show the empty list if showEmptyList is true', async () => {
      const noMatchesMessage = 'No matches found';
      const user = userEvent.setup();

      renderComponent({ items: [], showEmptyList: true, noMatchesMessage });
      // Container should exist but not visible
      expect(screen.queryByRole('listbox', { hidden: true })).not.toBeVisible();

      // focus on input to open the list
      await user.type(screen.getByRole('combobox'), 'a');

      // Should be visible after clicking on the input
      expect(screen.queryByRole('listbox')).toBeVisible();
      expect(screen.getByText(noMatchesMessage)).toBeVisible();
    });

    it('is not showing the container when the list has 0 items and there is no input value', async () => {
      const user = userEvent.setup();
      renderComponent({ items: [] });

      await user.click(screen.getByRole('combobox'));

      // checks if the list is not visible
      expect(screen.getByRole('combobox')).toHaveFocus();
      expect(screen.getByRole('listbox', { hidden: true })).not.toBeVisible();
    });

    it('shows loading state when "isLoading" is true', async () => {
      const user = userEvent.setup();
      renderComponent({ isLoading: true });

      // type anything to open the list
      await user.type(screen.getByRole('combobox'), 'broccoli');

      // checks if the list is visible and it shows the loading state
      expect(screen.getByRole('listbox')).toBeVisible();
      expect(screen.getAllByLabelText('Loading component...')).toHaveLength(3);
    });

    it('hides the clear button when "showClearButton" is false', async () => {
      const user = userEvent.setup();

      renderComponent({ showClearButton: false });

      // Type one letter in the input which would show "Clear" button if not explicitly hidden
      await user.type(screen.getByRole('combobox'), 'a');

      // checks if the "Show list" button is visible which means the "Clear" button is hidden
      expect(screen.getByLabelText('Show list')).toBeVisible();
    });
  });

  describe('items is an array of objects', () => {
    const getItemName = (item: Fruit) => item.name;

    it('selects the first item', async () => {
      const user = userEvent.setup();
      renderComponent({
        items: fruits,
        itemToString: getItemName,
        renderItem: getItemName,
      });

      const list = screen.getByRole('list', { hidden: true });
      const listFirstItem = screen.getAllByRole('option', { hidden: true })[0];

      // list is initially closed
      expect(list).not.toBeVisible();
      expect(list.childElementCount).toBe(12);

      // Type one letter in the input to open the list
      await user.type(screen.getByRole('combobox'), 'a');

      // checks if the list is visible
      expect(list).toBeVisible();

      // press the ArrowDown key
      await user.keyboard('[ArrowDown]');

      // checks if the first item of the list gets selected
      expect(listFirstItem.getAttribute('aria-selected')).toBe('true');
      expect(listFirstItem.getAttribute('data-highlighted')).toBeTruthy();

      // press Enter to select the item
      await user.keyboard('[Enter]');

      // checks if the list got closed and the value of the input is the one we selected
      expect(list).not.toBeVisible();
      expect(screen.getByRole('combobox')).toHaveValue('Apple 🍎');
      expect(mockOnSelectItem).toHaveBeenCalledWith({
        id: 1,
        name: 'Apple 🍎',
      });
    });

    it('when used with `getStringMatch`, it will render each item with the matched text wrapped in <b> tag', async () => {
      const user = userEvent.setup();
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
          );
        },
      });

      // Type a text to be matched and open the list of suggestions
      await user.type(screen.getByRole('combobox'), 'ana');

      // checks if the list is visible and it only shows the filtered options
      expect(screen.getByRole('list')).toBeVisible();

      // go to the list first item
      await user.keyboard('[ArrowDown]');

      // checks if there are two highlighted children
      expect(screen.queryAllByText(/ana/i)).toHaveLength(2);
    });
  });

  describe('items is a nested object with groups', () => {
    const openDropdown = async () => {
      const user = userEvent.setup();

      const input = screen.getByRole('combobox');
      const container = screen.getByRole('listbox', { hidden: true });
      // list is initially closed
      expect(container).not.toBeVisible();

      // Type one letter in the input to open the list
      await user.type(input, 'a');

      // checks if the list is visible
      expect(container).toBeVisible();
      return { input, container, user };
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
      expect(screen.getAllByRole('heading')).toHaveLength(2);
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
        .getAllByRole('heading')
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

      const { container, input, user } = await openDropdown();

      expect(container.childElementCount).toBe(2);

      const firstItem = screen.getAllByRole('option')[0];

      // press the ArrowDown key
      await user.keyboard('[ArrowDown]');
      expect(firstItem.getAttribute('aria-selected')).toBe('true');

      // press Enter to select the item
      await user.keyboard('[Enter]');

      // checks if the list got closed and the value of the input is the one we selected
      expect(container).not.toBeVisible();
      expect(input).toHaveValue('Apple 🍎');
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
      expect(screen.getByText(noMatchesMessage)).toBeVisible();
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
