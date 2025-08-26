import React, { useCallback, useRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { TextInput } from '@contentful/f36-forms';
import { XIcon, MagnifyingGlassIcon } from '@contentful/f36-icons';
import { IconButton } from '@contentful/f36-button';
import { getMultiselectStyles } from './Multiselect.styles';
import { mergeRefs } from '@contentful/f36-core';

export interface MultiselectSearchProps {
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
   * Pass a form name to the search text input
   */
  searchInputName?: string;

  /**
   * Use this prop to get a ref to the search input element of the component
   */
  searchInputRef?: React.Ref<HTMLInputElement>;

  /**
   * Use this prop to get a ref to the reset search button of the component
   */
  resetSearchRef?: React.Ref<HTMLButtonElement>;

  /**
   * State from the parent component
   */
  searchValue?: string;

  /**
   * State setter of the parent
   */
  setSearchValue?: React.Dispatch<React.SetStateAction<string>>;

  /**
   *  List helper function
   */
  focusList?: () => void;
}

export const MultiselectSearch = ({
  searchValue,
  setSearchValue,
  onSearchValueChange,
  searchInputName,
  searchInputRef,
  resetSearchRef,
  searchPlaceholder = 'Search',
  focusList,
}: MultiselectSearchProps) => {
  const styles = getMultiselectStyles();
  const internalSearchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = useCallback(
    (event) => {
      setSearchValue(event.target.value);
      onSearchValueChange?.(event);
    },
    [onSearchValueChange, setSearchValue],
  );

  const resetSearchInput = useCallback(() => {
    if (!searchValue) return;
    focusList();
    // this looks a bit hacky, but is the official way of externally triggering the onChange handler for an input
    // https://stackoverflow.com/a/46012210/17269164
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    ).set;
    nativeInputValueSetter.call(internalSearchInputRef.current, '');
    const forcedEvent = new Event('change', { bubbles: true });
    internalSearchInputRef.current.dispatchEvent(forcedEvent);
  }, [searchValue, focusList]);

  return (
    <div className={styles.searchBar}>
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
        size="small"
      />
      <IconButton
        ref={resetSearchRef}
        aria-label={searchValue ? 'Clear search' : 'Search'}
        className={styles.toggleButton}
        variant="transparent"
        icon={
          searchValue ? (
            <XIcon color={tokens.gray600} />
          ) : (
            <MagnifyingGlassIcon color={tokens.gray600} />
          )
        }
        onClick={resetSearchInput}
        isDisabled={!searchValue}
        size="small"
      />
    </div>
  );
};
