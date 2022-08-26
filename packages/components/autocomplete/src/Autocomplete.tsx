import React, { useCallback, useState } from 'react';
import { cx } from 'emotion';
import { useCombobox } from 'downshift';

import { mergeRefs } from '@contentful/f36-core';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { IconButton } from '@contentful/f36-button';
import { TextInput } from '@contentful/f36-forms';
import type { TextInputProps } from '@contentful/f36-forms';
import { CloseIcon, ChevronDownIcon } from '@contentful/f36-icons';
import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover } from '@contentful/f36-popover';
import { Subheading, SectionHeading } from '@contentful/f36-typography';

import { AutocompleteItems } from './AutocompleteItems';
import { getAutocompleteStyles } from './Autocomplete.styles';

export interface GenericGroupType<ItemType> {
  groupTitle: string;
  options: ItemType[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AutocompleteProps<ItemType>
  extends CommonProps,
    Pick<
      TextInputProps,
      | 'isDisabled'
      | 'isInvalid'
      | 'isReadOnly'
      | 'isRequired'
      | 'id'
      | 'defaultValue'
    > {
  /**
   * It’s an array of data to be used as "options" by the autocomplete component.
   * This can either be a plain list of items or a list of groups of items.
   */
  items: ItemType[] | GenericGroupType<ItemType>[];

  /**
   * Set a custom icon for the text input
   */
  icon?: React.ReactElement;

  /**
   * Tells if the item is a object with groups
   */
  isGrouped?: boolean;

  /**
   * Function called whenever the input value changes
   */
  onInputValueChange?: (value: string) => void;
  /**
   * This is the function that will be called when the user selects one of the "options" in the list.
   * The component will pass the selected "item" as an argument to the function..
   */
  onSelectItem: (item: ItemType) => void;

  /**
   * Applying the selectedItem property turns autocomplete into a controlled component.
   * Can be used to display e.g. previously selected element. If it is an object the itemToString function will apply to it.
   */
  selectedItem?: ItemType;

  /**
   * This is the function that will be called for each "item" passed in the `items` prop.
   * It receives the "item" and "inputValue" as arguments and returns a ReactNode.
   * The inputValue is passed in case you want to highlight the match on the render.
   */
  renderItem?: (item: ItemType, inputValue: string) => React.ReactNode;
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
   * If this is set to `false` the dropdown menu will stay open after selecting an item
   * @default true
   */
  closeAfterSelect?: boolean;
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
  /**
   * Boolean to control whether or not to render the suggestions box in a React Portal.
   * Rendering content inside a Portal allows the suggestions box to escape the bounds
   * of its parent while still being positioned correctly.
   * Defaults to `false`
   */
  usePortal?: boolean;
}

function _Autocomplete<ItemType>(
  props: AutocompleteProps<ItemType>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    id,
    className,
    clearAfterSelect = false,
    closeAfterSelect = true,
    defaultValue = '',
    selectedItem,
    items,
    onInputValueChange,
    onSelectItem,
    renderItem,
    icon = <ChevronDownIcon variant="muted" />,
    itemToString = (item: ItemType) => item as unknown as string,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    noMatchesMessage = 'No matches found',
    placeholder = 'Search',
    inputRef,
    toggleRef,
    listRef,
    listWidth = 'auto',
    listMaxHeight = 180,
    isGrouped = false,
    isLoading = false,
    usePortal = false,
    testId = 'cf-autocomplete',
  } = props;

  type GroupType = GenericGroupType<ItemType>;

  const styles = getAutocompleteStyles(listMaxHeight);

  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputValueChange = useCallback(
    (value: string) => {
      setInputValue(value);

      onInputValueChange?.(value);
    },
    [onInputValueChange],
  );

  // Handle manually to avoid a jumping cursor, see https://github.com/downshift-js/downshift/issues/1108#issuecomment-842407759
  const handleNativeChangeEvent = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      handleInputValueChange(value);
    },
    [handleInputValueChange],
  );

  const flattenItems = isUsingGroups(isGrouped, items)
    ? items.reduce(
        (acc: ItemType[], group: GroupType) => [...acc, ...group.options],
        [],
      )
    : items;

  const isShowingNoMatches = isUsingGroups(isGrouped, items)
    ? items.every((group: GroupType) => group.options.length === 0)
    : items.length === 0;

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
    items: flattenItems,
    selectedItem,
    inputValue,
    itemToString,
    onInputValueChange: ({ type, inputValue }) => {
      if (type !== '__input_change__') {
        handleInputValueChange(inputValue);
      }
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
          if (!closeAfterSelect) {
            toggleMenu();
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
  let elementStartIndex = 0;

  return (
    <div
      data-test-id={testId}
      className={cx(styles.autocomplete, className)}
      ref={ref}
    >
      <Popover
        usePortal={usePortal}
        isOpen={isOpen}
        isFullWidth={listWidth === 'full'}
        renderOnlyWhenOpen={false}
        // This is necessary, otherwise the focus will change from the input to the Popover
        // and the user won't be able to type in the input
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={false}
        id={menuProps.id}
      >
        <Popover.Trigger>
          <div {...comboboxProps} className={styles.combobox}>
            <TextInput
              className={styles.inputField}
              {...inputProps}
              onFocus={() => {
                if (!isOpen) {
                  toggleMenu();
                }
              }}
              id={id}
              isInvalid={isInvalid}
              isDisabled={isDisabled}
              isRequired={isRequired}
              isReadOnly={isReadOnly}
              ref={mergeRefs(inputProps.ref, inputRef)}
              testId="cf-autocomplete-input"
              placeholder={placeholder}
              onChange={(event) => {
                inputProps.onChange(event);
                handleNativeChangeEvent(event);
              }}
            />
            <IconButton
              {...toggleProps}
              ref={mergeRefs(toggleProps.ref, toggleRef)}
              aria-label={inputValue ? 'Clear' : 'Show list'}
              className={styles.toggleButton}
              variant="transparent"
              icon={inputValue ? <CloseIcon variant="muted" /> : icon}
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
        </Popover.Trigger>

        {(items.length > 0 || inputValue.length > 0) && (
          <Popover.Content
            {...menuProps}
            ref={mergeRefs(menuProps.ref, listRef)}
            className={styles.content}
            testId="cf-autocomplete-container"
          >
            {isLoading &&
              [...Array(3)].map((_, index) => (
                <div key={index} className={cx(styles.item, styles.disabled)}>
                  <ListItemLoadingState />
                </div>
              ))}

            {!isLoading && isShowingNoMatches && (
              <div className={styles.item}>
                <Subheading className={styles.noMatchesTitle}>
                  {noMatchesMessage}
                </Subheading>
              </div>
            )}

            {!isLoading &&
              isUsingGroups(isGrouped, items) &&
              items.map((group: GroupType, index: number) => {
                if (group.options.length < 1) {
                  return;
                }
                const render = (
                  <div key={index}>
                    <SectionHeading
                      key={index}
                      data-test-id="cf-autocomplete-grouptitle"
                      marginBottom="none"
                      className={styles.groupTitle}
                    >
                      {group.groupTitle}
                    </SectionHeading>
                    <AutocompleteItems<ItemType>
                      items={group.options}
                      highlightedIndex={highlightedIndex}
                      getItemProps={getItemProps}
                      renderItem={renderItem}
                      inputValue={inputValue}
                      elementStartIndex={elementStartIndex}
                    />
                  </div>
                );
                elementStartIndex += group.options.length;
                return render;
              })}

            {!isLoading &&
              !isUsingGroups(isGrouped, items) &&
              items.length > 0 && (
                <AutocompleteItems<ItemType>
                  items={items}
                  elementStartIndex={elementStartIndex}
                  highlightedIndex={highlightedIndex}
                  getItemProps={getItemProps}
                  renderItem={renderItem}
                  inputValue={inputValue}
                />
              )}
          </Popover.Content>
        )}
      </Popover>
    </div>
  );
}

const ListItemLoadingState = () => {
  return (
    <SkeletonContainer svgHeight={16}>
      <SkeletonBodyText numberOfLines={1} />
    </SkeletonContainer>
  );
};

// This is required to infer correct typings when differentiating groups and items
function isUsingGroups<ItemType>(
  isGrouped: boolean,
  items: ItemType[] | GenericGroupType<ItemType>[],
): items is GenericGroupType<ItemType>[] {
  return isGrouped;
}

/**
 * The Autocomplete is a component that will show a `TextInput` where a user can type any word which will be used
 * to filter a list of items. That list of filtered items will be shown to the user as possible options for the input.
 * Once one of the options is selected, that option becomes the value of the `TextInput`.
 */
export const Autocomplete = React.forwardRef(_Autocomplete) as <T>(
  props: ExpandProps<AutocompleteProps<T>> & {
    ref?: React.Ref<HTMLDivElement>;
  },
) => ReturnType<typeof _Autocomplete>;
