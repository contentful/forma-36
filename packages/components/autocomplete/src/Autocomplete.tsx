import React, { useCallback, useState } from 'react';
import { cx } from 'emotion';
import { useCombobox } from 'downshift';

import { CommonProps, mergeRefs } from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { TextInput, TextInputProps } from '@contentful/f36-forms';
import { CloseIcon, ChevronDownIcon } from '@contentful/f36-icons';
import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Menu } from '@contentful/f36-menu';

import { getAutocompleteStyles } from './Autocomplete.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AutocompleteProps<ItemType = any>
  extends CommonProps,
    Pick<
      TextInputProps,
      'isDisabled' | 'isInvalid' | 'isReadOnly' | 'isRequired' | 'id'
    > {
  /**
   * It’s an array of data to be used as "options" by the autocomplete component.
   */
  items: ItemType[];
  /**
   * Function called whenever the input value changes
   */
  onInputValueChange?: (value: string) => void;
  /**
   * This is the function that will be called when the user selects one of the "options" in the list.
   * It receives the selected item as an argument and it needs to return a string that will be set as the value of `TextInput`.
   */
  onSelectItem: (item: ItemType) => void;
  /**
   * This is the function that will be called for each "item" passed in the `items` prop.
   * It receives the "item" as an argument and returns a ReactNode.
   */
  renderItem?: (item: ItemType) => React.ReactNode;
  /**
   * When using objects as `items`, we recommend passing a function that tells Downshift how to extract a string
   * from those objetcs to be used as inputValue
   */
  itemToString?: (item: ItemType) => string;
  /**
   * If this is set to `true` the text input will be cleared after an item is selected
   * @default false
   */
  clearAfterSelect?: boolean;
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
   * Use this prop to get a ref to the input element of the component
   */
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Use this prop to get a ref to the toggle button of the component
   */
  toggleRef?: React.Ref<HTMLButtonElement>;
  /**
   * Use this prop to get a ref to the list of items of the component
   */
  listRef?: React.Ref<HTMLUListElement>;
  /**
   * It sets the width of the list
   * @default "auto"
   */
  listWidth?: 'auto' | 'full';
  /**
   * It sets the max-height, in pixels, of the list
   * The default value is the height of 5 single line items
   * @default 180
   */
  listMaxHeight?: number;
  /**
   * Sets the list to show its loading state
   * @default false
   */
  isLoading?: boolean;
}

function _Autocomplete<ItemType>(
  props: AutocompleteProps<ItemType>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    id,
    className,
    clearAfterSelect = false,
    items,
    onInputValueChange,
    onSelectItem,
    renderItem,
    itemToString = (item: ItemType) => (item as unknown) as string,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    noMatchesMessage = 'No matches',
    placeholder = 'Search',
    inputRef,
    toggleRef,
    listRef,
    listWidth = 'auto',
    listMaxHeight = 180,
    isLoading = false,
    testId = 'cf-autocomplete',
  } = props;

  const styles = getAutocompleteStyles(listMaxHeight);

  const [inputValue, setInputValue] = useState('');

  const handleInputValueChange = useCallback(
    (value) => {
      setInputValue(value);

      onInputValueChange?.(value);
    },
    [onInputValueChange],
  );

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    toggleMenu,
  } = useCombobox({
    items,
    inputValue,
    itemToString,
    onInputValueChange: ({ inputValue }) => {
      handleInputValueChange(inputValue);
    },
    onStateChange: ({ type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (selectedItem) {
            onSelectItem(selectedItem);
          }

          if (clearAfterSelect) {
            handleInputValueChange('');
          }

          break;
        default:
          break;
      }
    },
  });

  const {
    'aria-labelledby': _labelledby,
    id: _inputId,
    ...inputProps
  } = getInputProps();
  const comboboxProps = getComboboxProps();
  const toggleProps = getToggleButtonProps();
  const menuProps = getMenuProps();

  return (
    <div
      data-test-id={testId}
      className={cx(styles.autocomplete, className)}
      ref={ref}
    >
      <Menu
        usePortal={false}
        defaultIsOpen={isOpen}
        isFullWidth={listWidth === 'full'}
      >
        <Menu.Trigger>
          <div {...comboboxProps} className={styles.combobox}>
            <TextInput
              {...inputProps}
              id={id}
              isInvalid={isInvalid}
              isDisabled={isDisabled}
              isRequired={isRequired}
              isReadOnly={isReadOnly}
              ref={mergeRefs(inputProps.ref, inputRef)}
              testId="cf-autocomplete-input"
              placeholder={placeholder}
              onFocus={() => {
                console.log('focus');
                toggleMenu();
              }}
            />
            <IconButton
              {...toggleProps}
              ref={mergeRefs(toggleProps.ref, toggleRef)}
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
              onClick={() => {
                if (inputValue) {
                  handleInputValueChange('');
                } else {
                  toggleMenu();
                }
              }}
              isDisabled={isDisabled}
              size="small"
            />
          </div>
        </Menu.Trigger>

        <Menu.List
          {...menuProps}
          ref={mergeRefs(menuProps.ref, listRef)}
          className={styles.list}
          data-test-id="cf-autocomplete-list"
        >
          {isLoading &&
            [...Array(3)].map((_, index) => (
              <Menu.Item
                key={index}
                className={cx(styles.item, styles.disabled)}
              >
                <ListItemLoadingState />
              </Menu.Item>
            ))}

          {!isLoading && items.length === 0 && (
            <Menu.Item className={cx(styles.item, styles.disabled)}>
              {noMatchesMessage}
            </Menu.Item>
          )}

          {!isLoading &&
            items.map((item, index) => {
              const itemProps = getItemProps({ item, index });
              return (
                <Menu.Item
                  {...itemProps}
                  key={index}
                  className={cx([
                    styles.item,
                    highlightedIndex === index && styles.highlighted,
                  ])}
                  data-test-id={`cf-autocomplete-list-item-${index}`}
                >
                  {renderItem ? renderItem(item) : item}
                </Menu.Item>
              );
            })}
        </Menu.List>
      </Menu>
    </div>
  );
}

function ListItemLoadingState() {
  return (
    <SkeletonContainer svgHeight={16}>
      <SkeletonBodyText numberOfLines={1} />
    </SkeletonContainer>
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
