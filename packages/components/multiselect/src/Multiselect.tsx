import React, { useRef, useState, useCallback, useMemo } from 'react';
import { cx } from '@emotion/css';

import { mergeRefs, type CommonProps, Flex } from '@contentful/f36-core';
import { Button, IconButton, type ButtonProps } from '@contentful/f36-button';
import { CaretDownIcon, XIcon } from '@contentful/f36-icons';

import { SkeletonContainer, SkeletonBodyText } from '@contentful/f36-skeleton';
import { Popover, type PopoverProps } from '@contentful/f36-popover';
import { Subheading } from '@contentful/f36-typography';

import { getMultiselectStyles } from './Multiselect.styles';
import { MultiselectOption } from './MultiselectOption';

import type { MultiselectSearchProps as SearchProps } from './MultiselectSearch';
import { MultiselectSearch } from './MultiselectSearch';
import {
  MultiselectContextProvider,
  MultiselectContextType,
} from './MultiselectContext';

type ClearButtonProps = {
  /**
   * Aria label for the clear button
   * @default 'Clear selection'
   */
  ariaLabel?: string;

  /**
   * Tooltip for the clear button
   * @default 'Clear selection'
   */
  tooltip?: string;
};

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
   * Aria label for the toggle button that opens the list
   * @default 'Toggle Multiselect'
   */
  toggleButtonAriaLabel?: string;

  /**
   * Props to pass to the optional search field
   */
  searchProps?: SearchProps;

  /**
   * Props to pass to the trigger button
   */
  triggerButtonProps?: ButtonProps;

  /**
   * A message that will be shown when it is not possible to find any option that matches the search value
   * @default "No matches"
   */
  noMatchesMessage?: string;

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

  /**
   * Clear Button Props used for localization
   * @default { ariaLabel: 'Clear selection', tooltip: 'Clear selection' }
   */
  clearButtonProps?: ClearButtonProps;
}

// Scan through the whole hierachy to count the number of children where `filter` returns true
const countMatchingChildren = (
  children: React.ReactNode,
  filter: (child: React.ReactElement) => boolean,
): number => {
  let counter = 0;
  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    // Narrow props to include optional children for recursive descent
    const el = child as React.ReactElement<{ children?: React.ReactNode }>;
    if (!filter(el)) {
      counter += countMatchingChildren(el.props.children, filter);
    } else {
      counter += 1;
    }
  });
  return counter;
};

function MultiselectBase(
  props: MultiselectProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    className,
    startIcon,
    placeholder = 'Select one or more Items',
    currentSelection = [],
    toggleRef,
    toggleButtonAriaLabel = 'Toggle Multiselect',
    isLoading = false,
    testId = 'cf-multiselect',
    noMatchesMessage = 'No matches found',
    searchProps = {},
    popoverProps = {},
    children,
    onBlur,
    onClearSelection,
    clearButtonProps = {
      tooltip: 'Clear selection',
      ariaLabel: 'Clear selection',
    },
  } = props;

  const { listMaxHeight = 180, listRef, onClose } = popoverProps;

  const styles = getMultiselectStyles();

  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const internalListRef = useRef<HTMLUListElement>(null);

  const showClearButton =
    currentSelection.length > 1 && typeof onClearSelection === 'function';

  const hasSearch = typeof searchProps.onSearchValueChange === 'function';

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

  const contextValue: MultiselectContextType = useMemo(
    () => ({
      focusList,
      searchValue,
    }),
    [focusList, searchValue],
  );

  return (
    <MultiselectContextProvider value={contextValue}>
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
          <Flex alignItems="center">
            <Popover.Trigger ref={toggleRef}>
              <Button
                aria-label={toggleButtonAriaLabel}
                onClick={() => setIsOpen(!isOpen)}
                startIcon={startIcon}
                endIcon={<CaretDownIcon />}
                isFullWidth
                className={styles.triggerButton}
                {...props.triggerButtonProps}
              >
                {renderMultiselectLabel()}
              </Button>
            </Popover.Trigger>
            {showClearButton && (
              <div className={styles.clearSelectionButton}>
                <IconButton
                  onClick={handleClearSelection}
                  icon={<XIcon />}
                  aria-label={
                    clearButtonProps.ariaLabel
                      ? clearButtonProps.ariaLabel
                      : 'Clear selection'
                  }
                  size="small"
                  withTooltip
                  tooltipProps={{
                    content: clearButtonProps.tooltip
                      ? clearButtonProps.tooltip
                      : 'Clear selection',

                    showDelay: 800,
                    placement: 'top',
                    as: 'div',
                  }}
                />
              </div>
            )}
          </Flex>
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
            {hasSearch && (
              <MultiselectSearch
                {...searchProps}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                focusList={focusList}
              />
            )}
            {isLoading && <ListItemLoadingState />}

            {!isLoading && optionsLength > 0 && (
              <ul className={styles.list} data-test-id="cf-multiselect-items">
                {children}
              </ul>
            )}

            {!isLoading && optionsLength === 0 && (
              <Subheading className={styles.noMatchesTitle}>
                {noMatchesMessage}
              </Subheading>
            )}
          </Popover.Content>
        </Popover>
      </div>
    </MultiselectContextProvider>
  );
}

const ListItemLoadingState = () => {
  return (
    <SkeletonContainer svgHeight={16}>
      <SkeletonBodyText numberOfLines={1} />
    </SkeletonContainer>
  );
};

MultiselectBase.displayName = 'Multiselect';
export const Multiselect = React.forwardRef(MultiselectBase);
