import React from 'react';
import {
  render,
  screen,
  within,
  fireEvent,
  waitFor,
  cleanup,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Multiselect } from './CompoundMultiselect';
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
const mockOnSelectAll = jest.fn();

const renderComponent = (
  customProps?: Partial<MultiselectProps>,
  elements = fruits,
  renderSelectAll = false,
) => {
  const props = {
    ...customProps,
  };
  const user = userEvent.setup();
  render(
    <Multiselect {...props} triggerButtonProps={{ testId: 'triggerButton' }}>
      <h2>Fruits</h2>
      {renderSelectAll && (
        <Multiselect.SelectAll isChecked onSelectItem={mockOnSelectAll} />
      )}
      <div data-test-id="wrapper-component">
        {elements.map((fruit, index) => {
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
      </div>
    </Multiselect>,
  );
  return [{ user }] as [{ user: typeof user }];
};

describe('Multiselect basic usage', () => {
  jest.setTimeout(13000); // Set a longer timeout
  it('opens and closes the drawer', async () => {
    const [{ user }] = renderComponent();

    const toggleButton = screen.getByRole('button', {
      name: 'Toggle Multiselect',
    });
    await user.click(toggleButton);
    expect(screen.queryByRole('list')).toBeInTheDocument();
    await user.click(toggleButton);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    renderComponent();
    const results = await waitFor(() =>
      axe(screen.getByTestId('cf-multiselect')),
    );
    expect(results).toHaveNoViolations();
  });

  it('renders the placeholder text', () => {
    renderComponent({ placeholder: 'My Placeholder Text' });
    expect(screen.getByText('My Placeholder Text')).toBeInTheDocument();
  });

  it('renders all child elements in the correct hierarchy', async () => {
    const [{ user }] = renderComponent();
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Fruits',
    );
    const wrapperDiv = screen.getByTestId('wrapper-component');
    expect(wrapperDiv).toBeInTheDocument();
    expect(within(wrapperDiv).getAllByRole('listitem')).toHaveLength(12);
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
    expect(
      screen.getByTestId('cf-multiselect-current-selection'),
    ).toHaveTextContent('Tomato 🍅 and 3 more');
  });
});

describe('Options', () => {
  afterEach(cleanup);
  it('renders all available options', async () => {
    const [{ user }] = renderComponent();
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(12);
  });

  it('calls the callbackfunction on option selection', async () => {
    const [{ user }] = renderComponent();

    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    await user.click(screen.getByRole('checkbox', { name: 'Coconut 🥥' }));
    expect(mockOnSelectItem).toHaveBeenCalled();
  });

  it('can disable the option selection', async () => {
    const [{ user }] = renderComponent();
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    fireEvent.click(screen.getByText('Lemon 🍋'));
    expect(mockOnSelectItem).not.toHaveBeenCalled();
  });

  it('renders a default selected option', async () => {
    const [{ user }] = renderComponent();
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(screen.getByRole('checkbox', { name: 'Banana 🍌' })).toBeChecked();
  });

  it('allows you to render React children', async () => {
    const user = userEvent.setup();
    render(
      <Multiselect triggerButtonProps={{ testId: 'triggerButton' }}>
        <h2>Fruits</h2>
        <div data-test-id="wrapper-component">
          {fruits.map((fruit, index) => {
            return (
              <Multiselect.Option
                key={`key-${fruit.id}-${index}`}
                itemId={`${index}`}
                value={`${fruit.id}`}
                onSelectItem={mockOnSelectItem}
                isDisabled={fruit.isDisabled}
                isChecked={fruit.isChecked}
              >
                {fruit.name}
              </Multiselect.Option>
            );
          })}
        </div>
      </Multiselect>,
    );
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(12);
  });
});

describe('Multiselect with search', () => {
  it('renders a search field with placeholder', async () => {
    const [{ user }] = renderComponent({
      searchProps: {
        onSearchValueChange: mockOnSearchValueChange,
        searchPlaceholder: 'My Search Placeholder',
      },
    });

    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(
      screen.getByPlaceholderText('My Search Placeholder'),
    ).toBeInTheDocument();
  });

  it('calls the callback on search value change and highlights the search phrase', async () => {
    const [{ user }] = renderComponent({
      searchProps: {
        onSearchValueChange: mockOnSearchValueChange,
      },
    });
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    const listFirstItem = screen.getByTestId('cf-multiselect-list-item-0');

    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'pp');

    expect(mockOnSearchValueChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'pp',
        }),
      }),
    );
    expect(listFirstItem).toHaveTextContent('Apple');
    expect(
      within(listFirstItem).getByTestId('cf-multiselect-item-match'),
    ).toHaveTextContent('pp');
    expect(screen.queryByText('No matches found')).not.toBeInTheDocument();
  });

  it('trims search value', async () => {
    const [{ user }] = renderComponent({
      searchProps: {
        onSearchValueChange: mockOnSearchValueChange,
      },
    });
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    const listFirstItem = screen.getByTestId('cf-multiselect-list-item-0');
    await user.type(screen.getByRole('textbox', { name: 'Search' }), ' pp ');
    expect(listFirstItem).toHaveTextContent('Apple');
    expect(
      within(listFirstItem).getByTestId('cf-multiselect-item-match'),
    ).toHaveTextContent('pp');
    expect(screen.queryByText('No matches found')).not.toBeInTheDocument();
  });

  it("renders option label without highlight, if search value doesn't match", async () => {
    const [{ user }] = renderComponent({
      searchProps: {
        onSearchValueChange: mockOnSearchValueChange,
      },
    });
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    const listFirstItem = screen.getByTestId('cf-multiselect-list-item-0');

    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'Lemon');

    expect(listFirstItem).toHaveTextContent('Apple');
    expect(
      within(listFirstItem).queryByTestId('cf-multiselect-item-match'),
    ).not.toBeInTheDocument();
    expect(screen.queryByText('No matches found')).not.toBeInTheDocument();
  });

  it('shows the no matches found message when there are no elements', async () => {
    const [{ user }] = renderComponent(
      {
        searchProps: { onSearchValueChange: mockOnSearchValueChange },
      },
      [],
    );
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(screen.queryByText('No matches found')).toBeInTheDocument();
  });

  it('clears the search value and triggers the callback function', async () => {
    const [{ user }] = renderComponent({
      searchProps: { onSearchValueChange: mockOnSearchValueChange },
    });
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );

    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();

    await user.type(screen.getByRole('textbox', { name: 'Search' }), 'a');

    expect(
      screen.getByRole('button', { name: 'Clear search' }),
    ).not.toBeDisabled();
    await user.click(screen.getByRole('button', { name: 'Clear search' }));

    expect(mockOnSearchValueChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: '',
        }),
      }),
    );
  });
});

describe('Multiselect with select all', () => {
  it('renders a select all checkbox', async () => {
    const produce: Fruit[] = [
      { id: 1, name: 'Apple 🍎', isChecked: true, isDisabled: false },
      { id: 2, name: 'Ananas 🍍', isChecked: true, isDisabled: false },
      { id: 3, name: 'Avocado 🥑', isChecked: true, isDisabled: false },
    ];
    const [{ user }] = renderComponent({}, produce, true);
    await user.click(
      screen.getByRole('button', {
        name: 'Toggle Multiselect',
      }),
    );
    expect(
      screen.getByRole('checkbox', { name: 'Deselect all' }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole('checkbox', { name: 'Deselect all' }));
    expect(mockOnSelectAll).toHaveBeenCalled();
  });
});

describe('Multiselect with clear selection', () => {
  it('does not render the button when there is no selection', async () => {
    const onClear = jest.fn();

    const produce: Fruit[] = [
      { id: 1, name: 'Apple 🍎', isChecked: false, isDisabled: false },
      { id: 2, name: 'Ananas 🍍', isChecked: false, isDisabled: false },
      { id: 3, name: 'Avocado 🥑', isChecked: false, isDisabled: false },
    ];
    renderComponent({ onClearSelection: onClear }, produce, true);

    expect(screen.getByText('Select one or more Items')).toBeInTheDocument();
    expect(screen.queryByLabelText('Clear selection')).not.toBeInTheDocument();
  });
  it('renders the button only when there is more than one element selected', async () => {
    const onClear = jest.fn();

    const produce: Fruit[] = [
      { id: 1, name: 'Apple 🍎', isChecked: false, isDisabled: false },
      { id: 2, name: 'Ananas 🍍', isChecked: false, isDisabled: false },
      { id: 3, name: 'Avocado 🥑', isChecked: true, isDisabled: false },
    ];
    renderComponent(
      { onClearSelection: onClear, currentSelection: ['Avocado 🥑'] },
      produce,
      true,
    );

    expect(
      within(screen.getByTestId('cf-multiselect-current-selection')).getByText(
        'Avocado 🥑',
      ),
    ).toBeInTheDocument();
    expect(screen.queryByLabelText('Clear selection')).not.toBeInTheDocument();
  });

  it('offers a shortcut to a clear the current selection', async () => {
    const onClear = jest.fn();

    const produce: Fruit[] = [
      { id: 1, name: 'Apple 🍎', isChecked: false, isDisabled: false },
      { id: 2, name: 'Ananas 🍍', isChecked: false, isDisabled: false },
      { id: 3, name: 'Avocado 🥑', isChecked: false, isDisabled: false },
    ];
    const [{ user }] = renderComponent(
      {
        onClearSelection: onClear,
        currentSelection: ['Avocado 🥑', 'Ananas 🍍'],
      },
      produce,
      true,
    );

    expect(screen.getByLabelText('Clear selection')).toBeInTheDocument();
    await user.click(screen.getByLabelText('Clear selection'));
    expect(onClear).toHaveBeenCalled();
  });
});
