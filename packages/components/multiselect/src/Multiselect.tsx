import React, { useRef, useState } from 'react';
import { cx } from 'emotion';

import { mergeRefs, type CommonProps } from '@contentful/f36-core';
import { Button, IconButton } from '@contentful/f36-button';
import { TextInput, type TextInputProps } from '@contentful/f36-forms';
import { CloseIcon, ChevronDownIcon, SearchIcon } from '@contentful/f36-icons';
import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover } from '@contentful/f36-popover';
import { MultiselectOption, MulitselectOptionProps } from './MultiselectOption';

import { getMultiselectStyles } from './Multiselect.styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface MultiselectProps
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
   * Set a custom icon for the text input
   */
  startIcon?: React.ReactElement;

  children?: React.ReactNode;
  /**
   * Placeholder shown before selecting any elements. Defaults to 'Select one or more items'
   */
  placeholder?: string;

  currentSelection?: Array<string>;

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

  hasNoMatches?: boolean;

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

function _Multiselect(props: MultiselectProps, ref: React.Ref<HTMLDivElement>) {
  const {
    id,
    className,
    startIcon,
    placeholder = 'Select one or more Items',
    currentSelection = [],
    hasSearch = false,
    defaultValue = '',
    onSearchValueChange,
    hasNoMatches = false,
    searchPlaceholder = 'Search',
    inputRef,
    noMatchesMessage = 'No matches found',
    toggleRef,
    listRef,
    listWidth = 'auto',
    listMaxHeight = 180,
    isLoading = false,
    usePortal = false,
    testId = 'cf-multiselect',
    children,
  } = props;

  const styles = getMultiselectStyles();

  const [searchValue, setSearchValue] = useState(defaultValue);
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

  const renderMultiselectLabel = React.useCallback(() => {
    if (currentSelection.length === 0) {
      return <>{placeholder}</>;
    }
    const leftoverCount = currentSelection.length - 1;
    if (leftoverCount === 0) {
      return (
        <span className={styles.currentSelection}>{currentSelection[0]}</span>
      );
    }
    return (
      <div>
        <span className={styles.currentSelection}>{currentSelection[0]}</span>{' '}
        and {leftoverCount} more
      </div>
    );
  }, [currentSelection, placeholder, styles.currentSelection]);

  return (
    <div
      data-test-id={testId}
      className={cx(styles.multiselect, className)}
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
            {renderMultiselectLabel()}
          </Button>
        </Popover.Trigger>
        <Popover.Content
          ref={listRef}
          className={styles.content(listMaxHeight)}
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
                  icon={
                    searchValue ? (
                      <CloseIcon variant="muted" />
                    ) : (
                      <SearchIcon variant="muted" />
                    )
                  }
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
            {isLoading && <ListItemLoadingState />}

            {!isLoading && children && (
              <ul className={styles.list} data-test-id="cf-multiselect-items">
                {React.Children.map(children, (child) => {
                  if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                      searchValue,
                    });
                  }
                  return child;
                })}
              </ul>
            )}

            {!isLoading && hasNoMatches && <div>{noMatchesMessage}</div>}
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

/**
 * The Multiselect is a component that will allow a user to select multiple items.
 * It has an optional
 */
export const Multiselect = React.forwardRef(_Multiselect);
