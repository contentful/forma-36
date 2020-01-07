import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  cleanup,
  fireEvent,
  within,
  configure,
} from '@testing-library/react';

import Autocomplete from '../Autocomplete';

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

configure({ testIdAttribute: 'data-test-id' });

describe('Autocomplete', () => {
  let onChangeFn: any;
  let onQueryChangeFn: any;

  afterEach(cleanup);

  const build = ({ placeholder = '', width = 'large' }: any) => {
    onChangeFn = jest.fn();
    onQueryChangeFn = jest.fn();

    return render(
      <Autocomplete
        items={items}
        onChange={onChangeFn}
        onQueryChange={onQueryChangeFn}
        placeholder={placeholder}
        width={width}
      >
        {(options: Item[]) =>
          options.map(option => (
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

    it('calls the onQueryChange callback', () => {
      const { getByTestId } = build({});
      const input = getByTestId('autocomplete.input');
      fireEvent.change(input, { target: { value: 'foo' } });
      expect(onQueryChangeFn).toHaveBeenCalledWith('foo');
    });

    it('displays the placeholder text', () => {
      const { getByTestId } = build({ placeholder: 'Search' });
      const input = getByTestId('autocomplete.input');
      expect(input).toHaveAttribute('placeholder', 'Search');
    });

    it('shows the dropdown', () => {
      const { getByTestId } = build({});
      const input = getByTestId('autocomplete.input');
      fireEvent.keyDown(input, { keyCode: 40 });
      const dropdown = getByTestId('autocomplete.dropdown-list');
      expect(dropdown).toBeVisible();
    });
  });

  describe('dropdown', () => {
    let input: any, dropdown, options: any;

    beforeEach(() => {
      const { getByTestId } = build({});
      input = getByTestId('autocomplete.input');
      fireEvent.keyDown(input, { keyCode: 40 });
      dropdown = getByTestId('autocomplete.dropdown-list');
      options = within(dropdown).getAllByTestId(
        'autocomplete.dropdown-list-item',
      );
    });

    it('displays the list of items', () => {
      expect(options).toHaveLength(items.length);
    });

    it('calls the onChange and onQueryChange callbacks when the selecting an item with the enter key', () => {
      fireEvent.keyDown(input, { keyCode: 13 }); // select the first item
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
      fireEvent.keyDown(input, { keyCode: 13 });
      const dropdown = within(document as any).queryByTestId(
        'autocomplete.dropdown-list',
      );
      expect(dropdown).toBeNull();
    });
  });
});
