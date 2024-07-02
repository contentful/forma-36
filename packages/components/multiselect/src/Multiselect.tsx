import React, { useRef, useState, useCallback, useMemo } from 'react';
import { cx } from 'emotion';

import { mergeRefs, type CommonProps } from '@contentful/f36-core';
import { Button, IconButton } from '@contentful/f36-button';
import { ChevronDownIcon, CloseIcon } from '@contentful/f36-icons';

import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover, type PopoverProps } from '@contentful/f36-popover';
import { Subheading } from '@contentful/f36-typography';

import { getMultiselectStyles } from './Multiselect.styles';
import { MultiselectOption, MultiselectOptionProps } from './MultiselectOption';
import FocusLock from 'react-focus-lock';

import type { MultiselectSearchProps as SearchProps } from './MultiselectSearch';
import { MultiselectSearch } from './MultiselectSearch';

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
   * Sets the list to show its loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Use this prop to get a ref to the toggle button of the component
   */
  toggleRef?: React.Ref<HTMLButtonElement>;

  /**
   * Props to pass to the optional search field
   */
  searchProps?: SearchProps;

  /**
   * Function called whenever the search input value changes
   * @deprecated Handover this prop in the searchProps subcomponent properties
   */
  onSearchValueChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void | undefined;

  /**
   * This is the value will be passed to the `placeholder` prop of the input.
   * @deprecated Handover this prop in the searchProps subcomponent properties
   * @default "Search"
   */
  searchPlaceholder?: string;

  /**
   * A message that will be shown when it is not possible to find any option that matches the search value
   * @default "No matches"
   */
  noMatchesMessage?: string;

  /**
   * Pass a form name to the search text input
   * @deprecated Handover this prop in the searchProps subcomponent properties
   */
  searchInputName?: string;

  /**
   * Use this prop to get a ref to the search input element of the component
   * @deprecated Handover this prop in the searchProps subcomponent properties
   */
  searchInputRef?: React.Ref<HTMLInputElement>;

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
  } & Pick<CommonProps, 'className'>;

  /**
   * Function called when the popover loses its focus.
   */
  onBlur?: () => void;

  /**
   * Function called when the clear all button is clicked
   * If no function is provided the clear button is not shown
   */
  onClearSelection?: () => void;
}

// Scan through the whole hierachy until `filter` returns true and apply `transform`
// Inspired from https://stackoverflow.com/a/70676868/17269164
const iterateOverChildren = (
  children: React.ReactNode,
  filter: (child: React.ReactElement) => boolean,
  callback: (child: React.ReactElement) => React.ReactElement | void,
): React.ReactNode => {
  return React.Children.map(children, (child) => {
    // equal to (if (child == null || typeof child == 'string'))
    if (!React.isValidElement(child)) return child;
    if (filter(child)) {
      return callback(child);
    }
    const childChildren = iterateOverChildren(
      child.props.children,
      filter,
      callback,
    );
    return React.cloneElement(child, { children: childChildren } as unknown);
  });
};

// Scan through the whole hierachy to count the number of children where `filter` returns true
const countMatchingChildren = (
  children: React.ReactNode,
  filter: (child: React.ReactElement) => boolean,
): number => {
  let counter = 0;
  React.Children.forEach(children, (child) => {
    // equal to (if (child == null || typeof child == 'string'))
    if (!React.isValidElement(child)) return;
    if (!filter(child)) {
      counter += countMatchingChildren(child.props.children, filter);
    } else {
      counter += 1;
    }
  });
  return counter;
};

function _Multiselect(props: MultiselectProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    startIcon,
    placeholder = 'Select one or more Items',
    currentSelection = [],
    toggleRef,
    isLoading = false,
    testId = 'cf-multiselect',
    noMatchesMessage = 'No matches found',
    searchProps = {},
    popoverProps = {},
    children,
    onBlur,
    onClearSelection,
  } = props;

  const { listMaxHeight = 180, listRef, onClose } = popoverProps;

  const styles = getMultiselectStyles();

  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const internalListRef = useRef<HTMLUListElement>(null);

  const showClearButton = useMemo(
    () => currentSelection.length > 1 && typeof onClearSelection === 'function',
    [currentSelection.length, onClearSelection],
  );

  const hasSearch =
    typeof props.onSearchValueChange === 'function' ||
    typeof searchProps.onSearchValueChange === 'function';

  const handoverSearchProps =
    Object.keys(searchProps).length > 0
      ? searchProps
      : {
          onSearchValueChange: props.onSearchValueChange,
          searchPlaceholder: props.searchPlaceholder,
          searchInputName: props.searchInputName,
          searchInputRef: props.searchInputRef,
        };

  const focusList = useCallback(() => {
    // Clearing the search input or selecting an item triggers a rerendering and
    // thereby the client loses the focus on the clicked element. To avoid having
    // the focus on the document body (which breaks `closeOnBlur`), we force it
    // back to the list in the popup.
    internalListRef.current?.focus();
  }, []);

  const handleClearSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClearSelection?.();
    e.stopPropagation();
  };

  const renderMultiselectLabel = useCallback(() => {
    if (currentSelection.length === 0) {
      return <>{placeholder}</>;
    }
    const leftoverCount = currentSelection.length - 1;
    const currentSelectionClassName = cx(
      styles.currentSelection,
      showClearButton && styles.currentSelectionWithClearButton,
    );
    if (leftoverCount === 0) {
      return (
        <span
          data-test-id="cf-multiselect-current-selection"
          className={currentSelectionClassName}
        >
          {currentSelection[0]}
        </span>
      );
    }
    return (
      <span
        data-test-id="cf-multiselect-current-selection"
        className={currentSelectionClassName}
      >
        {currentSelection[0]}{' '}
        <span className={styles.currentSelectionAddition}>
          and {leftoverCount} more
        </span>
      </span>
    );
  }, [
    currentSelection,
    placeholder,
    showClearButton,
    styles.currentSelection,
    styles.currentSelectionAddition,
    styles.currentSelectionWithClearButton,
  ]);

  const optionsLength = useMemo(
    () =>
      countMatchingChildren(
        children,
        (child) => child.type === MultiselectOption,
      ),
    [children],
  );

  // clones and enriches the multiselect options
  const enrichOptions = React.useCallback(
    (children: React.ReactNode): React.ReactNode => {
      return iterateOverChildren(
        children,
        (child) => child.type === MultiselectOption,
        (child) => {
          const onSelectItem = (event: React.ChangeEvent<HTMLInputElement>) => {
            focusList();
            child.props?.onSelectItem(event);
          };
          return React.cloneElement(child, {
            searchValue,
            onSelectItem,
          } as Partial<MultiselectOptionProps>);
        },
      );
    },
    [searchValue, focusList],
  );

  return (
    <div
      data-test-id={testId}
      className={cx(styles.multiselect, className)}
      ref={ref}
    >
      <Popover
        renderOnlyWhenOpen={false}
        isFullWidth
        {...popoverProps}
        // popoverProps should never overwrite the internal opening logic
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          if (onClose) {
            onClose();
          }
        }}
      >
        <Popover.Trigger>
          <Button
            aria-label="Toggle Multiselect"
            ref={toggleRef}
            onClick={() => setIsOpen(!isOpen)}
            startIcon={startIcon}
            endIcon={<ChevronDownIcon />}
            isFullWidth
            className={styles.triggerButton}
          >
            {renderMultiselectLabel()}
          </Button>
        </Popover.Trigger>
        <Popover.Content
          ref={mergeRefs(listRef, internalListRef)}
          className={cx(
            styles.content(listMaxHeight),
            popoverProps.className,
            styles.container,
          )}
          testId="cf-multiselect-container"
          onBlur={() => onBlur?.()}
        >
          <FocusLock focusOptions={{ preventScroll: true }} returnFocus={true}>
            {hasSearch && (
              <MultiselectSearch
                {...handoverSearchProps}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                focusList={focusList}
              />
            )}
            {isLoading && <ListItemLoadingState />}

            {!isLoading && optionsLength > 0 && (
              <ul className={styles.list} data-test-id="cf-multiselect-items">
                {hasSearch ? enrichOptions(children) : children}
              </ul>
            )}

            {!isLoading && optionsLength === 0 && (
              <Subheading className={styles.noMatchesTitle}>
                {noMatchesMessage}
              </Subheading>
            )}
          </FocusLock>
        </Popover.Content>
      </Popover>
      {showClearButton && (
        <IconButton
          className={styles.clearSelectionButton}
          onClick={handleClearSelection}
          icon={<CloseIcon />}
          aria-label="Clear selection"
        />
      )}
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
