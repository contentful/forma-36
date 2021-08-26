import React from 'react';
import {
  render,
  fireEvent,
  within,
  screen,
  waitFor,
} from '@testing-library/react';

import { KEY_CODE } from './utils';
import { Autocomplete, AutocompleteProps } from '../Autocomplete';
import { positionType } from '../Dropdown';

interface Item {
  value: number;
  label: string;
}

const items: Item[] = [
  { value: 1, label: 'Jalapeno' },
  { value: 2, label: 'Lime' },
  { value: 3, label: 'Avocado' },
  { value: 4, label: 'Coriander' },
];

describe('Autocomplete', () => {
  let onChangeFn: (value: Item) => void;
  let onQueryChangeFn: (query: string) => void;

  const build = ({
    placeholder = '',
    width = 'large',
    selectedItem = '',
    error = false,
    validationMessage = '',
    dropdownProps = {
      isOpen: false,
      children: null,
      position: 'top',
    },
  }: Partial<AutocompleteProps<Item>>) => {
    onChangeFn = jest.fn();
    onQueryChangeFn = jest.fn();

    return render(
      <Autocomplete<Item>
        items={items}
        onChange={onChangeFn}
        onQueryChange={onQueryChangeFn}
        placeholder={placeholder}
        selectedItem={selectedItem}
        width={width}
        dropdownProps={dropdownProps}
        error={error}
        validationMessage={validationMessage}
      >
        {(options: Item[]) =>
          options.map((option) => (
            <span key={option.value} data-testid="option-content">
              {option.label}
            </span>
          ))
        }
      </Autocomplete>,
    );
  };

  describe('search input', () => {
    it('displays the input field', () => {
      const { getByTestId } = build({});
      const input = getByTestId('autocomplete.input');
      expect(input).toBeInTheDocument();
    });

    it('calls the onQueryChange callback', async () => {
      const { getByTestId } = build({});
      const input = getByTestId('autocomplete.input');
      fireEvent.change(input, { target: { value: 'foo' } });
      await waitFor(() => {
        expect(onQueryChangeFn).toHaveBeenCalledWith('foo');
      });
    });

    it('displays the placeholder text', () => {
      const { getByTestId } = build({ placeholder: 'Search' });
      const input = getByTestId('autocomplete.input');
      expect(input).toHaveAttribute('placeholder', 'Search');
    });

    it('displays the selectedItem text', () => {
      const { getByTestId } = build({ selectedItem: 'Coriander' });
      const input = getByTestId('autocomplete.input');
      expect(input).toHaveAttribute('value', 'Coriander');
    });

    it('shows an error state', () => {
      const { getByTestId } = build({
        error: true,
        validationMessage: 'This field is required',
      });
      const validationMessageComponent = getByTestId(
        'cf-ui-validation-message',
      );
      const autocompleteComp = getByTestId('cf-ui-dropdown');
      expect(autocompleteComp.firstChild).toHaveClass(
        'autocompleteInputNegative',
      );
      expect(validationMessageComponent).toBeDefined();
    });

    it('shows the dropdown', async () => {
      const { getByTestId } = build({});
      const input = getByTestId('autocomplete.input');
      fireEvent.keyDown(input, { keyCode: KEY_CODE.ARROW_DOWN });
      const dropdown = getByTestId('autocomplete.dropdown-list');
      await waitFor(() => {
        expect(dropdown).toBeVisible();
      });
    });
  });

  describe('dropdown', () => {
    it('is closed by default', () => {
      build({});
      const dropdown = screen.queryByTestId('autocomplete.dropdown-list');
      expect(dropdown).not.toBeInTheDocument();
    });

    it('opens when the isOpen prop is set to true', async () => {
      const dropdownProps = {
        usePortal: false,
        isOpen: true,
        children: null,
        position: 'top' as positionType,
      };
      await waitFor(() => {
        build({ dropdownProps });
      });
      const dropdown = screen.getByTestId('autocomplete.dropdown-list');
      expect(dropdown).toBeInTheDocument();
    });

    it('closes the dropdown when an item is clicked [isOpen = false]', () => {
      build({});
      const input = screen.getByTestId('autocomplete.input');
      expect(
        screen.queryByTestId('autocomplete.dropdown-list'),
      ).not.toBeInTheDocument();
      fireEvent.keyDown(input, { keyCode: KEY_CODE.ARROW_DOWN });

      expect(
        screen.getByTestId('autocomplete.dropdown-list'),
      ).toBeInTheDocument();

      const firstItem = screen.getAllByTestId(
        'cf-ui-dropdown-list-item-button',
      )[0];
      fireEvent.click(firstItem);
      expect(
        screen.queryByTestId('autocomplete.dropdown-list'),
      ).not.toBeInTheDocument();
    });

    it('keeps the dropdown open when an item is clicked [isOpen = true]', async () => {
      const dropdownProps = {
        usePortal: false,
        isOpen: true,
        children: null,
        position: 'top' as positionType,
      };
      await waitFor(() => {
        build({ dropdownProps });
      });
      expect(
        screen.getByTestId('autocomplete.dropdown-list'),
      ).toBeInTheDocument();
      const firstItem = screen.getAllByTestId(
        'cf-ui-dropdown-list-item-button',
      )[0];
      fireEvent.click(firstItem);
      expect(
        screen.queryByTestId('autocomplete.dropdown-list'),
      ).toBeInTheDocument();
    });
  });

  describe('dropdown with focus', () => {
    let input: HTMLElement;
    let dropdown: HTMLElement;
    let options: HTMLElement[];

    beforeEach(async () => {
      const { getByTestId } = build({});
      input = getByTestId('autocomplete.input');
      fireEvent.keyDown(input, { keyCode: KEY_CODE.ARROW_DOWN });
      await waitFor(() => {
        dropdown = getByTestId('autocomplete.dropdown-list');
        options = within(dropdown).getAllByTestId(
          'autocomplete.dropdown-list-item',
        );
      });
    });

    it('displays the list of items', () => {
      expect(options).toHaveLength(items.length);
    });

    it('calls the onChange and onQueryChange callbacks when the selecting an item with the enter key', () => {
      fireEvent.keyDown(input, { keyCode: KEY_CODE.ENTER });
      expect(onChangeFn).toHaveBeenCalledWith(items[0]);
      expect(onQueryChangeFn).toHaveBeenCalledWith('');
    });

    it('calls the onChange and onQueryChange callbacks when selecting an item with a mouse click', () => {
      const button = within(options[1]).getByTestId(
        'cf-ui-dropdown-list-item-button',
      );
      fireEvent.click(button); // select the second item
      expect(onChangeFn).toHaveBeenCalledWith(items[1]);
      expect(onQueryChangeFn).toHaveBeenCalledWith('');
    });

    it('dismisses the dropdown when selecting with the enter key', () => {
      fireEvent.keyDown(input, { keyCode: KEY_CODE.ENTER });
      const dropdown = within(
        (document as unknown) as HTMLElement,
      ).queryByTestId('autocomplete.dropdown-list');
      expect(dropdown).toBeNull();
    });
  });
});
