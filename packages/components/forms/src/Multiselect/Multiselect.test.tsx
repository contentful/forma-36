import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';
import { Multiselect } from './CompundMultiselect';
import { MultiselectProps } from './Multiselect';

interface Fruit {
  id: number;
  name: string;
  isChecked: boolean;
  isDisabled: boolean;
}

const fruits: Fruit[] = [
  { id: 1, name: 'Apple 🍎', isChecked: false, isDisabled: false },
  { id: 2, name: 'Ananas 🍍', isChecked: false, isDisabled: false },
  { id: 3, name: 'Avocado 🥑', isChecked: false, isDisabled: false },
  { id: 4, name: 'Banana 🍌', isChecked: true, isDisabled: false },
  { id: 5, name: 'Coconut 🥥', isChecked: false, isDisabled: false },
  { id: 6, name: 'Lemon 🍋', isDisabled: true, isChecked: false },
  { id: 7, name: 'Orange 🍊', isChecked: false, isDisabled: false },
  { id: 8, name: 'Peach 🍑', isChecked: false, isDisabled: false },
  { id: 9, name: 'Pear 🍐', isChecked: false, isDisabled: false },
  { id: 10, name: 'Strawberry 🍓', isChecked: false, isDisabled: false },
  { id: 11, name: 'Tangerine 🍊', isChecked: false, isDisabled: false },
  { id: 12, name: 'Tomato 🍅', isChecked: false, isDisabled: false },
];

const mockOnSearchValueChange = jest.fn();
const mockOnSelectItem = jest.fn();

function renderComponent(customProps: Partial<MultiselectProps>) {
  const props = {
    ...customProps,
  };
  render(
    <Multiselect {...props}>
      {fruits.map((fruit, index) => {
        return (
          <Multiselect.Option
            key={`key-${fruit.id}-${index}`}
            itemId={`${index}`}
            value={`${fruit.id}`}
            label={fruit.name}
            onSelectItem={mockOnSelectItem}
            isDisabled={fruit.isDisabled}
            isChecked={fruit.isChecked}
          />
        );
      })}
    </Multiselect>,
  );
}

describe('Multiselect basic usage', () => {
  it('opens and closes the drawer', () => {
    renderComponent({});
    userEvent.click(screen.getByRole('button', { name: 'Toggle Multiselect' }));
    expect(screen.getByRole('list')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Toggle Multiselect' }));
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    renderComponent({});
    const results = await axe(screen.getByTestId('cf-multiselect'));
    expect(results).toHaveNoViolations();
  });

  it('renders the placeholder text', () => {
    renderComponent({ placeholder: 'My Placeholder Text' });
    expect(screen.getByText('My Placeholder Text')).toBeInTheDocument();
  });
  it('renders the first selected item instead of placeholder text', () => {
    renderComponent({
      placeholder: 'My Placeholder Text',
      currentSelection: ['Tomato 🍅'],
    });
    expect(
      within(screen.getByTestId('cf-multiselect-current-selection')).getByText(
        'Tomato 🍅',
      ),
    ).toBeInTheDocument();
  });

  it('renders the first selected item and amount of other selections', () => {
    renderComponent({
      placeholder: 'My Placeholder Text',
      currentSelection: ['Tomato 🍅', 'Orange 🍊', 'Avocado 🥑', 'Banana 🍌'],
    });
    expect(screen.getByText('Tomato 🍅 and 3 more')).toBeInTheDocument();
  });

  describe('Options', () => {
    it('renders all available options', () => {
      renderComponent({});
      userEvent.click(
        screen.getByRole('button', { name: 'Toggle Multiselect' }),
      );
      expect(screen.getByRole('list')).toBeInTheDocument();
      expect(screen.getAllByRole('listitem')).toHaveLength(12);
    });

    it('calls the callbackfunction on option selection', async () => {
      renderComponent({});
      userEvent.click(
        screen.getByRole('button', { name: 'Toggle Multiselect' }),
      );
      userEvent.click(screen.getByRole('checkbox', { name: 'Coconut 🥥' }));
      expect(mockOnSelectItem).toHaveBeenCalled();
    });

    it('can disable the option selection', () => {
      renderComponent({});
      userEvent.click(
        screen.getByRole('button', { name: 'Toggle Multiselect' }),
      );
      userEvent.click(screen.getByText('Lemon 🍋'));
      expect(mockOnSelectItem).not.toHaveBeenCalled();
    });

    it('renders a default selected option', () => {
      renderComponent({});
      userEvent.click(
        screen.getByRole('button', { name: 'Toggle Multiselect' }),
      );
      expect(screen.getByRole('checkbox', { name: 'Banana 🍌' })).toBeChecked();
    });
  });
});

describe('Multiselect with search', () => {
  it('renders a search field with placeholder', () => {
    renderComponent({
      hasSearch: true,
      onSearchValueChange: mockOnSearchValueChange,
      searchPlaceholder: 'My Search Placeholder',
    });
    userEvent.click(screen.getByRole('button', { name: 'Toggle Multiselect' }));
    expect(
      screen.getByPlaceholderText('My Search Placeholder'),
    ).toBeInTheDocument();
  });

  it('calls the callback on search value change and highlights the search phrase', () => {
    renderComponent({
      hasSearch: true,
      onSearchValueChange: mockOnSearchValueChange,
    });
    userEvent.click(screen.getByRole('button', { name: 'Toggle Multiselect' }));
    const listFirstItem = screen.getByTestId('cf-multiselect-list-item-1');

    fireEvent.input(screen.getByRole('textbox', { name: 'Search' }), {
      target: {
        value: 'a',
      },
    });

    expect(mockOnSearchValueChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'a',
        }),
      }),
    );
    expect(
      within(listFirstItem).getByTestId('cf-multiselect-item-match'),
    ).toHaveTextContent('A');
  });
});
