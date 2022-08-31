import React, { useCallback, useRef, useState } from 'react';
import { cx } from 'emotion';

import {
  mergeRefs,
  type CommonProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { Button, IconButton } from '@contentful/f36-button';
import { TextInput, type TextInputProps } from '@contentful/f36-forms';
import { CloseIcon, ChevronDownIcon } from '@contentful/f36-icons';
import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover } from '@contentful/f36-popover';
import { Subheading, SectionHeading } from '@contentful/f36-typography';

import { MultiselectItems } from './MultiselectItems';
import { getMultiselectStyles } from './Multiselect.styles';

export interface GenericGroupType<ItemType> {
  groupTitle: string;
  options: ItemType[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface MultiselectProps<ItemType>
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
  startIcon?: React.ReactElement;

  /**
   * Tells if the item is a object with groups
   */
  isGrouped?: boolean;

  /**
   * This is the function that will be called when the user selects one of the "options" in the list.
   * The component will pass the selected "item" as an argument to the function..
   */
  onSelectItem: (item: ItemType) => void;

  /**
   * currently selectedItems
   */
  defaultSelectedItems?: ItemType[];

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
   * If this is set to `true` there will be a search input inside the drawer
   * @default false
   */
  hasSearch?: boolean;

  /**
   * Function called whenever the search input value changes
   */
  onSearchValueChange?: (event: React.ChangeEvent) => void;

  /**
   * This is the value will be passed to the `placeholder` prop of the input.
   * @default "Search"
   */
  searchPlaceholder?: string;

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

function _Multiselect<ItemType>(
  props: MultiselectProps<ItemType>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    id,
    className,
    startIcon,
    items,
    defaultSelectedItems = [],
    itemToString = (item: ItemType) => item as unknown as string,
    onSelectItem,
    renderItem,
    hasSearch = false,
    defaultValue = '',
    onSearchValueChange,
    searchPlaceholder = 'Search',
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    inputRef,
    noMatchesMessage = 'No matches found',
    toggleRef,
    listRef,
    listWidth = 'auto',
    listMaxHeight = 180,
    isGrouped = false,
    isLoading = false,
    usePortal = false,
    testId = 'cf-multiselect',
  } = props;

  type GroupType = GenericGroupType<ItemType>;

  const styles = getMultiselectStyles(listMaxHeight);

  const [searchValue, setSearchValue] = useState(defaultValue);
  //const [selectedItems] = useState(defaultSelectedItems);
  const [isOpen, setIsOpen] = useState(false);

  const searchInputRef = useRef(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearchValueChange(event);
  };

  const resetSearch = () => {
    // this looks a bit hacky, but is the official way of externally triggering the onChange handler for an input
    // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js/46012210#46012210

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    nativeInputValueSetter.call(searchInputRef.current, '');
    const forcedEvent = new Event('change', { bubbles: true });
    searchInputRef.current.dispatchEvent(forcedEvent);
  };

  // const flattenItems = isUsingGroups(isGrouped, items)
  //   ? items.reduce(
  //       (acc: ItemType[], group: GroupType) => [...acc, ...group.options],
  //       [],
  //     )
  //   : items;

  const isShowingNoMatches = isUsingGroups(isGrouped, items)
    ? items.every((group: GroupType) => group.options.length === 0)
    : items.length === 0;

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
      >
        <Popover.Trigger>
          <>
            <Button
              aria-label="open Select"
              ref={toggleRef}
              onClick={() => setIsOpen(!isOpen)}
              onFocus={() => {
                if (!isOpen) {
                  setIsOpen(!isOpen);
                }
              }}
              startIcon={startIcon}
              endIcon={<ChevronDownIcon />}
            >
              Multiselect
            </Button>
          </>
        </Popover.Trigger>

        <Popover.Content
          ref={listRef}
          className={styles.content}
          testId="cf-multiselect-container"
        >
          <>
            {hasSearch && (
              <>
                <TextInput
                  type="text"
                  value={searchValue}
                  className={styles.inputField}
                  id={id}
                  data-test-id="cf-multiselect-search"
                  placeholder={searchPlaceholder}
                  onChange={(event) => {
                    handleSearchChange(event);
                  }}
                  ref={mergeRefs(searchInputRef, inputRef)}
                />
                <IconButton
                  aria-label="Clear"
                  className={styles.toggleButton}
                  variant="transparent"
                  icon={<CloseIcon variant="muted" />}
                  onClick={() => {
                    if (searchValue) {
                      resetSearch();
                    }
                  }}
                  isDisabled={searchValue === ''}
                  size="small"
                />
              </>
            )}

            {items.length > 0 && (
              <>
                {isLoading &&
                  [...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className={cx(styles.item, styles.disabled)}
                    >
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
                          data-test-id="cf-multiselect-grouptitle"
                          marginBottom="none"
                          className={styles.groupTitle}
                        >
                          {group.groupTitle}
                        </SectionHeading>
                        <MultiselectItems<ItemType>
                          items={group.options}
                          renderItem={renderItem}
                          elementStartIndex={elementStartIndex}
                          onSelectItem={onSelectItem}
                        />
                      </div>
                    );
                    elementStartIndex += group.options.length;
                    return render;
                  })}

                {!isLoading &&
                  !isUsingGroups(isGrouped, items) &&
                  items.length > 0 && (
                    <MultiselectItems<ItemType>
                      items={items}
                      elementStartIndex={elementStartIndex}
                      renderItem={renderItem}
                      onSelectItem={onSelectItem}
                    />
                  )}
              </>
            )}
          </>
        </Popover.Content>
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
 * The Multiselect is a component that will allow a user to select multiple items.
 * It has an optional
 */
export const Multiselect = React.forwardRef(_Multiselect) as <T>(
  props: ExpandProps<MultiselectProps<T>> & {
    ref?: React.Ref<HTMLDivElement>;
  },
) => ReturnType<typeof _Multiselect>;
