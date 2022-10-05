import React, { useRef, useState, useCallback, useMemo } from 'react';
import { cx } from 'emotion';

import { mergeRefs, type CommonProps } from '@contentful/f36-core';
import { Button, IconButton } from '@contentful/f36-button';
import { TextInput } from '@contentful/f36-forms';
import { CloseIcon, ChevronDownIcon, SearchIcon } from '@contentful/f36-icons';
import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover, type PopoverProps } from '@contentful/f36-popover';
import { Subheading } from '@contentful/f36-typography';

import { getMultiselectStyles } from './Multiselect.styles';
import { MultiselectOption, MultiselectOptionProps } from './MultiselectOption';

export interface MultiselectProps extends CommonProps {
  /** Select Options */
  children?: React.ReactNode;

  /**
   * Set a custom icon for the text input
   */
  startIcon?: React.ReactElement;

  /**
   * Placeholder shown before selecting any elements. Defaults to 'Select one or more items'
   */
  placeholder?: string;

  /**
   * current Selected items, to be shown on the trigger button
   */
  currentSelection?: Array<string>;

  /**
   * Function called whenever the search input value changes
   */
  onSearchValueChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void | undefined;

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
  searchInputRef?: React.Ref<HTMLInputElement>;

  /**
   * Pass a form name to the search text input
   */
  searchInputName?: string;

  /**
   * Sets the list to show its loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Use this prop to get a ref to the toggle button of the component
   */
  toggleRef?: React.Ref<HTMLButtonElement>;

  /**
   * Props to pass to the Popover (Dropdown) component
   */
  popoverProps?: Partial<PopoverProps> & {
    /**
     * It sets the max-height, in pixels, of the list
     * The default value is the height of 5 single line items
     * @default 180
     */
    listMaxHeight?: number;

    /**
     * Use this prop to get a ref to the list of items of the component
     */
    listRef?: React.Ref<HTMLUListElement>;
  };

  /**
   * Function called when the popover loses its focus.
   */
  onBlur?: () => void;
}

function _Multiselect(props: MultiselectProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    startIcon,
    placeholder = 'Select one or more Items',
    currentSelection = [],
    onSearchValueChange,
    searchPlaceholder = 'Search',
    searchInputRef,
    searchInputName,
    noMatchesMessage = 'No matches found',
    toggleRef,
    isLoading = false,
    testId = 'cf-multiselect',
    popoverProps = {},
    children,
    onBlur,
  } = props;

  const { listMaxHeight = 180, listRef } = popoverProps;

  const styles = getMultiselectStyles();

  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const internalSearchInputRef = useRef<HTMLInputElement>(null);
  const internalListRef = useRef<HTMLUListElement>(null);

  const hasSearch = typeof onSearchValueChange === 'function';

  const handleSearchChange = useCallback(
    (event) => {
      setSearchValue(event.target.value);
      onSearchValueChange?.(event);
    },
    [onSearchValueChange, setSearchValue],
  );

  const resetSearch = () => {
    // this looks a bit hacky, but is the official way of externally triggering the onChange handler for an input
    // https://stackoverflow.com/a/46012210/17269164

    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    nativeInputValueSetter.call(internalSearchInputRef.current, '');
    const forcedEvent = new Event('change', { bubbles: true });
    internalSearchInputRef.current.dispatchEvent(forcedEvent);
  };

  const renderMultiselectLabel = useCallback(() => {
    if (currentSelection.length === 0) {
      return <>{placeholder}</>;
    }
    const leftoverCount = currentSelection.length - 1;
    if (leftoverCount === 0) {
      return (
        <span
          data-test-id="cf-multiselect-current-selection"
          className={styles.currentSelection}
        >
          {currentSelection[0]}
        </span>
      );
    }
    return (
      <span
        data-test-id="cf-multiselect-current-selection"
        className={styles.currentSelection}
      >
        {currentSelection[0]} and {leftoverCount} more{' '}
      </span>
    );
  }, [currentSelection, placeholder, styles.currentSelection]);

  const childrenLength = useMemo(
    () => React.Children.count(children),
    [children],
  );

  // clones and enriches the multiselect options
  const enrichOptions = React.useCallback(
    (children: React.ReactNode): React.ReactNode => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (
            child.type === React.Fragment ||
            child.type === 'div' ||
            child.type === 'ul'
          ) {
            return enrichOptions(child.props.children);
          }
          if (child.type === MultiselectOption) {
            const onSelectItem = (
              even: React.ChangeEvent<HTMLInputElement>,
            ) => {
              // Selecting an item triggers a rerendering and thereby losing the
              // focus on the clicked element. To avoid having the focus on the document body
              // (which breaks `closeOnBlur`), we force it back to the list in the popup.
              internalListRef.current?.focus();
              child.props?.onSelectItem(even);
            };
            return React.cloneElement(child, {
              searchValue,
              onSelectItem,
            } as Partial<MultiselectOptionProps>);
          }
          return child;
        }
        return child;
      });
    },
    [searchValue],
  );

  return (
    <div
      data-test-id={testId}
      className={cx(styles.multiselect, className)}
      ref={ref}
    >
      <Popover
        renderOnlyWhenOpen={false}
        {...popoverProps}
        // popoverProps should never overwrite the internal opening logic
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Popover.Trigger>
          <Button
            aria-label="Toggle Multiselect"
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            startIcon={startIcon}
            endIcon={<ChevronDownIcon />}
          >
            {renderMultiselectLabel()}
          </Button>
        </Popover.Trigger>
        <Popover.Content
          ref={mergeRefs(listRef, internalListRef)}
          className={styles.content(listMaxHeight)}
          testId="cf-multiselect-container"
          onBlur={() => onBlur?.()}
        >
          <>
            {hasSearch && (
              <>
                <TextInput
                  aria-label="Search"
                  type="text"
                  value={searchValue}
                  className={styles.inputField}
                  testId="cf-multiselect-search"
                  placeholder={searchPlaceholder}
                  onChange={handleSearchChange}
                  ref={mergeRefs(searchInputRef, internalSearchInputRef)}
                  name={searchInputName}
                />
                <IconButton
                  aria-label={searchValue ? 'Clear search' : 'Search'}
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
                  isDisabled={!searchValue}
                  size="small"
                />
              </>
            )}
            {isLoading && <ListItemLoadingState />}

            {!isLoading && childrenLength > 0 && (
              <ul className={styles.list} data-test-id="cf-multiselect-items">
                {hasSearch ? enrichOptions(children) : children}
              </ul>
            )}

            {!isLoading && childrenLength === 0 && (
              <Subheading className={styles.noMatchesTitle}>
                {noMatchesMessage}
              </Subheading>
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

/**
 * The Multiselect is a component that will allow a user to select multiple items.
 * It has an optional
 */
export const Multiselect = React.forwardRef(_Multiselect);
