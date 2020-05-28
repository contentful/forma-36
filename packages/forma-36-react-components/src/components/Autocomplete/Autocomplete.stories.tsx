import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, number, object, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Autocomplete from './Autocomplete';
import CheckboxField from '../CheckboxField';

interface Item {
  value: number;
  label: string;
}

const items: Item[] = [
  { value: 1, label: 'entry foo' },
  { value: 2, label: 'entry bar' },
  { value: 3, label: 'entry baz' },
  { value: 4, label: 'entry fooBar' },
  { value: 5, label: 'entry out of viewport' },
];

const AutocompleteMultiStory = ({ items }: { items: Item[] }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const handleQueryChange = useCallback((query: string) => {
    setFilteredItems(
      query ? items.filter(item => item.label.includes(query)) : items,
    );
  }, []);

  const handleOnChange = useCallback((item: Item) => {
    setSelectedItems(prevState => {
      const oldIndex = prevState.findIndex(
        prevItem => prevItem.value === item.value,
      );
      if (oldIndex >= 0) {
        prevState.splice(oldIndex, 1);
        return [...prevState];
      } else {
        return [...prevState, item];
      }
    });
  }, []);

  return (
    <Autocomplete<Item>
      multiselect={true}
      maxHeight={number('maxHeight', 100)}
      items={filteredItems}
      onQueryChange={handleQueryChange}
      onChange={handleOnChange}
      placeholder={text(
        'placeholder',
        'Choose from spaces in your organization',
      )}
      isLoading={boolean('isLoading', false)}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
      disabled={boolean('disabled', false)}
      emptyListMessage={text(
        'emptyListMessage',
        'There are no items to choose from',
      )}
      noMatchesMessage={text('noMatchesMessage', 'No matches')}
      dropdownProps={object('dropdownProps', { isFullWidth: true })}
    >
      {(options: Item[]) =>
        options.map((option: Item) => (
          <CheckboxField
            checked={
              selectedItems.find(value => value.value === option.value) !==
              undefined
            }
            labelText={option.label}
            key={option.value.toString()}
            id={option.value.toString()}
          />
        ))
      }
    </Autocomplete>
  );
};

const AutocompleteDefaultStory = ({ items }: { items: Item[] }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleQueryChange = useCallback((query: string) => {
    setFilteredItems(
      query ? items.filter(item => item.label.includes(query)) : items,
    );
  }, []);

  return (
    <Autocomplete<Item>
      maxHeight={number('maxHeight', 100)}
      items={filteredItems}
      onQueryChange={handleQueryChange}
      onChange={action('onChange')}
      placeholder={text(
        'placeholder',
        'Choose from spaces in your organization',
      )}
      isLoading={boolean('isLoading', false)}
      width={select(
        'width',
        {
          'Full (default)': 'full',
          large: 'large',
          medium: 'medium',
          small: 'small',
        },
        'full',
      )}
      disabled={boolean('disabled', false)}
      emptyListMessage={text(
        'emptyListMessage',
        'There are no items to choose from',
      )}
      noMatchesMessage={text('noMatchesMessage', 'No matches')}
      dropdownProps={object('dropdownProps', { isFullWidth: true })}
    >
      {(options: Item[]) =>
        options.map((option: Item) => (
          <span key={option.value}>{option.label}</span>
        ))
      }
    </Autocomplete>
  );
};

storiesOf('(alpha)|Autocomplete', module)
  .addParameters({
    propTypes: Autocomplete['__docgenInfo'],
  })
  .add('default', () => (
    <AutocompleteDefaultStory items={object('items', items)} />
  ))
  .add('multiselect', () => (
    <AutocompleteMultiStory items={object('items', items)} />
  ));
