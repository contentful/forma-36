import React, { useState } from 'react';
import { cx } from 'emotion';
import { useCombobox } from 'downshift';

import type { CommonProps } from '@contentful/f36-core';
import { TextInput } from '@contentful/f36-forms';
import { Button } from '@contentful/f36-button';
import { CloseIcon, ChevronDownIcon } from '@contentful/f36-icons';
import { Popover } from '@contentful/f36-popover';

import { getAutocompleteStyles } from './Autocomplete.styles';

export interface AutocompleteProps<ItemType = any> extends CommonProps {
  /**
   * It’s an array of data to be used as "options" by the autocomplete component.
   */
  items: ItemType[];
  /**
   * This is the function that will tell the component how the `items` should be filtered when the input value changes.
   * It will be used in the `filter()` method of the array passed in the `items` prop and it needs two arguments: an item and the inputValue.
   */
  onFilter: (item: ItemType, inputValue: string) => void;
  /**
   * This is the function that will be called when the user selects one of the "options" in the list.
   * It receives the selected item as an argument and it needs to return a string that will be set as the value of `TextInput`.
   */
  onSelectItem: (item: ItemType) => string;
  /**
   * This is the function that will be called for each "item" passed in the `items` prop.
   * It receives the "item" as an argument and returns a ReactNode.
   */
  renderItem: (item: ItemType) => React.ReactElement;
  /**
   * This is the value will be passed to the `placeholder` prop of the input.
   * @default "Search"
   */
  placeholder?: string;
  /**
   * A message that will be shown when it is not possible to find any option that matches the input value
   * @default "No matches"
   */
  noMatchesMessage?: string;
  /**
   * Sets the Autocomplete to disabled state
   */
  isDisabled?: boolean;
}

function _Autocomplete<ItemTtype>(
  props: AutocompleteProps<ItemTtype>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    className,
    isDisabled = false,
    items,
    onFilter,
    onSelectItem,
    renderItem,
    noMatchesMessage = 'No Matches',
    placeholder = 'Search',
    testId = 'cf-autocomplete',
  } = props;
  const styles = getAutocompleteStyles();

  const [inputItems, setInputItems] = useState(items);
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    setInputValue,
    inputValue,
    toggleMenu,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(items.filter((item) => onFilter(item, inputValue)));
    },
    onSelectedItemChange: ({ selectedItem }) => {
      const inputValue = onSelectItem(selectedItem);
      setInputValue(inputValue);
    },
  });

  const comboboxProps = getComboboxProps();
  const inputProps = getInputProps();
  const toggleProps = getToggleButtonProps();
  const menuProps = getMenuProps();

  return (
    <div data-test-id={testId} className={cx(styles.autocomplete, className)}>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <Popover usePortal={false} autoFocus={false} isOpen={isOpen}>
        <Popover.Trigger>
          <div {...comboboxProps} className={styles.combobox}>
            <TextInput
              {...inputProps}
              testId="cf-autocomplete-input"
              placeholder={placeholder}
              isDisabled={isDisabled}
            />
            <Button
              {...toggleProps}
              aria-label="toggle menu"
              className={styles.toggleButton}
              variant="transparent"
              icon={
                inputValue ? (
                  <CloseIcon aria-label="Clear" />
                ) : (
                  <ChevronDownIcon aria-label="Show list" />
                )
              }
              onClick={() => (inputValue ? setInputValue('') : toggleMenu())}
              isDisabled={isDisabled}
              size="small"
            />
          </div>
        </Popover.Trigger>

        <Popover.Content>
          <ul
            {...menuProps}
            className={styles.list}
            data-test-id="cf-autocomplete-list"
          >
            {inputItems.length === 0 && (
              <li className={cx(styles.item, styles.disabled)}>
                {noMatchesMessage}
              </li>
            )}

            {inputItems.map((item, index) => {
              const itemProps = getItemProps({ item, index });
              return (
                <li
                  {...itemProps}
                  key={index}
                  className={cx([
                    styles.item,
                    highlightedIndex === index && styles.highlighted,
                  ])}
                  data-test-id="cf-autocomplete-list-item"
                >
                  {renderItem(item)}
                </li>
              );
            })}
          </ul>
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
