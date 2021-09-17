import React from 'react';
import { cx } from 'emotion';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';
import { TextInput } from '@contentful/f36-forms';
import { Popover } from '@contentful/f36-popover';

import { getAutocompleteStyles } from './Autocomplete.styles';

export interface AutocompleteProps<ItemType = any> extends CommonProps {
  /**
   * The children prop is a function that receives the value of the `items` prop as argument and returns on ReactNode for each item
   */
  children: (items: ItemType[]) => React.ReactNode[];
  /**
   * This is the function that will be called for each "item" passed in the `items` prop.
   * It receives the "item" as an argument and returns a ReactNode
   */
  renderItem: (item: ItemType) => React.ReactElement;
  /**
   * It’s an array of data to be used as "options" by the autocomplete component
   */
  items: ItemType[];
  /**
   * This is the function that will be called every time the value of the input changes
   */
  onQueryChange: (query: string) => void;
  /**
   * This is the function that will be called when the user selects one of the "options" in the list
   */
  onSelectItem: (item: ItemType) => void;
  /**
   * This is the value will be passed to the `placeholder` prop of the input
   * @default "Search"
   */
  placeholder?: string;
}

function _Autocomplete<ItemTtype>(
  props: AutocompleteProps<ItemTtype>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    // children,
    items,
    onSelectItem,
    onQueryChange,
    renderItem,
    placeholder = 'Search',
  } = props;
  const styles = getAutocompleteStyles();

  const [value, setValue] = React.useState('');
  const [showSuggestions, setShowSuggestions] = React.useState(false);

  // Generates a new array where each item has the child its associated data passed in "items" prop
  // const options = React.useMemo(
  //   () =>
  //     children(items).map((child, index) => ({
  //       child,
  //       data: items[index],
  //     })),
  //   [children, items],
  // );

  // console.log({ showSuggestions, value, items, options });

  return (
    <div
      data-test-id={props.testId}
      ref={ref}
      className={cx(styles.autocomplete, props.className)}
    >
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <Popover autoFocus={false} isOpen={showSuggestions}>
        <Popover.Trigger>
          <TextInput
            testId="cf-autocomplete-input"
            aria-autocomplete="list"
            aria-controls="autocomplete-list"
            placeholder={placeholder}
            value={value}
            onFocus={() => setShowSuggestions(true)}
            // onBlur={() => setShowSuggestions(false)}
            onChange={(e) => {
              setValue(e.target.value);
              onQueryChange(e.target.value);
            }}
          />
        </Popover.Trigger>

        <Popover.Content>
          <Box
            as="ul"
            id="autocomplete-list"
            role="listbox"
            className={styles.list}
          >
            {items.length === 0 && (
              <li className={styles.item}>No matching options</li>
            )}

            {items.map((item, index) => {
              return (
                <li
                  key={index}
                  className={styles.item}
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    onSelectItem(item);
                    setShowSuggestions(false);
                  }}
                  onKeyDown={() => {}}
                  data-test-id="cf-autocomplete-list-item"
                >
                  {renderItem(item)}
                </li>
              );
            })}

            {/* {options.map(({ child, data }, index) => {
              console.log('data: ', data);
              return (
                <li
                  key={index}
                  className={styles.item}
                  role="option"
                  onClick={() => {
                    onSelectItem(data);
                    setShowSuggestions(false);
                  }}
                  data-test-id="cf-autocomplete-list-item"
                >
                  {child}
                </li>
              );
            })} */}
          </Box>
        </Popover.Content>
      </Popover>
    </div>
  );
}

/**
 * The Autocomplete is a component that will show a `TextInput` where a user can type any word which will be used
 * to filter a list of items. That list of filtered items will be shown to the user as possible options for the input.
 * Once one of the options is selected, that option becomes the value of the `TextInput`.
 */
export const Autocomplete = React.forwardRef(_Autocomplete) as <T>(
  props: AutocompleteProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => ReturnType<typeof _Autocomplete>;
