import React, { useMemo, useReducer, useRef, ChangeEvent } from 'react';
import { CloseIcon, ChevronDownIcon } from '@contentful/f36-icons';
import cx from 'classnames';

import { TextInput } from '@contentful/f36-forms';
import {
  Dropdown,
  DropdownList,
  DropdownListItem,
  DropdownProps,
} from '../Dropdown';
import { SkeletonBodyText, SkeletonContainer } from '@contentful/f36-skeleton';
import { Button } from '@contentful/f36-button';
import { ValidationMessage } from '@contentful/f36-forms';
import { KEY_CODE } from './utils';
import styles from './Autocomplete.css';

const TOGGLED_LIST = 'TOGGLED_LIST';
const NAVIGATED_ITEMS = 'NAVIGATED_ITEMS';
const QUERY_CHANGED = 'QUERY_CHANGED';
const ITEM_SELECTED = 'ITEM_SELECTED';

interface RenderToggleElementProps {
  query?: string;
  onChange: (value: string) => void;
  onFocus: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  onToggle: () => void;
  disabled?: boolean;
  placeholder?: string;
  selectedItem?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  inputRef: React.RefObject<HTMLInputElement>;
  name?: string;
}

export interface AutocompleteProps<T extends {}> {
  children: (items: T[]) => React.ReactNode[];
  items: T[];
  onChange: (item: T) => void;
  onQueryChange: (query: string) => void;
  disabled?: boolean;
  placeholder?: string;
  selectedItem?: string;
  name?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
  maxHeight?: number;
  isLoading?: boolean;
  emptyListMessage?: string;
  noMatchesMessage?: string;
  willClearQueryOnClose?: boolean;
  dropdownProps?: DropdownProps;
  renderToggleElement?: (props: RenderToggleElementProps) => React.ReactElement;
  validationMessage?: string;
}

interface State {
  isOpen: boolean;
  query: string;
  highlightedItemIndex: number | null;
}

type Action =
  | { type: typeof TOGGLED_LIST; payload?: boolean }
  | { type: typeof NAVIGATED_ITEMS; payload: number | null }
  | { type: typeof QUERY_CHANGED; payload: string }
  | { type: typeof ITEM_SELECTED; payload: State };

enum Direction {
  DOWN = 1,
  UP = -1,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case TOGGLED_LIST:
      return {
        ...state,
        isOpen: action.payload ? action.payload : !state.isOpen,
        highlightedItemIndex: null,
      };
    case NAVIGATED_ITEMS:
      return {
        ...state,
        isOpen: true,
        highlightedItemIndex: action.payload,
      };
    case QUERY_CHANGED:
      return {
        ...state,
        highlightedItemIndex: null,
        isOpen: true,
        query: action.payload,
      };
    case ITEM_SELECTED:
      return { ...action.payload };
    default:
      return state;
  }
};

export const Autocomplete = <T extends {}>({
  children,
  items = [],
  disabled,
  onChange,
  onQueryChange,
  placeholder = 'Search',
  selectedItem = '',
  name = 'Search',
  width,
  className,
  maxHeight,
  isLoading,
  emptyListMessage = 'No options',
  noMatchesMessage = 'No matches',
  willClearQueryOnClose,
  dropdownProps,
  renderToggleElement,
  validationMessage,
}: AutocompleteProps<T>) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const initialState: State = {
    isOpen: dropdownProps?.isOpen ?? false,
    query: '',
    highlightedItemIndex: null,
  };

  const [{ isOpen, query, highlightedItemIndex }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const toggleList = (isOpen?: boolean): void => {
    dispatch({ type: TOGGLED_LIST, payload: isOpen });
  };

  const selectItem = (item: T) => {
    dispatch({ type: ITEM_SELECTED, payload: initialState });
    onQueryChange('');
    onChange(item);
  };

  const updateQuery = (value: string) => {
    dispatch({ type: QUERY_CHANGED, payload: value });
    onQueryChange(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const isEnter = event.keyCode === KEY_CODE.ENTER;
    const isTab =
      event.keyCode === KEY_CODE.TAB ||
      (event.keyCode === KEY_CODE.TAB && event.shiftKey);

    const hasUserSelection = highlightedItemIndex !== null;
    const lastIndex = items.length ? items.length - 1 : 0;
    const direction = getNavigationDirection(event);

    if (isEnter) {
      event.preventDefault();
    }

    if (direction) {
      const newIndex = getNewIndex(
        highlightedItemIndex as number,
        direction,
        lastIndex,
      );
      if (listRef.current) {
        scrollToItem(listRef.current, newIndex);
      }
      dispatch({ type: NAVIGATED_ITEMS, payload: newIndex });
    } else if (isEnter && hasUserSelection) {
      const selected = items[highlightedItemIndex as number];
      selectItem(selected);
    } else if (isTab) {
      toggleList(false);
    }
  };

  const handleInputButtonClick = () => {
    query ? updateQuery('') : toggleList();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const options = useMemo(
    () =>
      children(items).map((child, index) => ({
        child,
        option: items[index],
      })),
    [children, items],
  );

  const dropdownClassNames = cx(styles.autocompleteDropdown, className);
  const autocompleteClassNames = cx(styles.autocompleteInput, {
    [styles.autocompleteInputNegative]: validationMessage,
  });

  function renderDefaultToggleElement(props: RenderToggleElementProps) {
    return (
      <div className={autocompleteClassNames}>
        <TextInput
          value={toggleProps.selectedItem || toggleProps.query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            props.onChange(e.target.value)
          }
          onFocus={props.onFocus}
          onKeyDown={props.onKeyDown}
          isDisabled={props.disabled}
          placeholder={props.placeholder}
          ref={props.inputRef}
          testId="autocomplete.input"
          type="search"
          aria-label={props.name}
        />
        <div className={styles.inputIconButton}>
          <Button
            variant="transparent"
            tabIndex={-1}
            icon={
              props.query ? (
                <CloseIcon aria-label="Clear" />
              ) : (
                <ChevronDownIcon aria-label="Show list" />
              )
            }
            isDisabled={props.disabled}
            onClick={props.onToggle}
            size="small"
          />
        </div>
      </div>
    );
  }

  const toggleProps = {
    name,
    query,
    selectedItem,
    disabled,
    placeholder,
    width,
    onChange: updateQuery,
    onFocus: () => toggleList(true),
    onKeyDown: handleKeyDown,
    onToggle: handleInputButtonClick,
    inputRef: inputRef as React.RefObject<HTMLInputElement>,
  };
  let nonClosingRefs: DropdownProps['nonClosingRefs'] = [];

  if (dropdownProps && dropdownProps.nonClosingRefs) {
    nonClosingRefs = dropdownProps.nonClosingRefs;

    delete dropdownProps.nonClosingRefs;
  }

  const renderToggleElementFunction =
    renderToggleElement || renderDefaultToggleElement;

  return (
    <>
      <Dropdown
        nonClosingRefs={[inputRef, ...nonClosingRefs]}
        className={dropdownClassNames}
        onClose={() => {
          willClearQueryOnClose && updateQuery('');
          dispatch({ type: TOGGLED_LIST, payload: false });
        }}
        toggleElement={renderToggleElementFunction(toggleProps)}
        focusContainerOnOpen={false}
        {...dropdownProps}
        isOpen={isOpen}
      >
        <DropdownList testId="autocomplete.dropdown-list" maxHeight={maxHeight}>
          <div ref={listRef as React.RefObject<HTMLDivElement>}>
            {!options.length && !isLoading && (
              <DropdownListItem
                isDisabled
                testId="autocomplete.empty-list-message"
              >
                {query ? noMatchesMessage : emptyListMessage}
              </DropdownListItem>
            )}
            {isLoading ? (
              <OptionSkeleton />
            ) : (
              options.map(({ child, option }, index) => {
                const isActive = index === highlightedItemIndex;
                return (
                  <DropdownListItem
                    key={index}
                    isActive={isActive}
                    data-selected={isActive} // this should be coming from the component library
                    onClick={() => selectItem(option)}
                    testId="autocomplete.dropdown-list-item"
                  >
                    {child}
                  </DropdownListItem>
                );
              })
            )}
          </div>
        </DropdownList>
      </Dropdown>
      {validationMessage && (
        <ValidationMessage className={styles.validationMessage}>
          {validationMessage}
        </ValidationMessage>
      )}
    </>
  );
};

function OptionSkeleton() {
  return (
    <>
      <DropdownListItem>
        <SkeletonContainer svgWidth="200" svgHeight={20}>
          <SkeletonBodyText numberOfLines={1} />
        </SkeletonContainer>
      </DropdownListItem>
      <DropdownListItem>
        <SkeletonContainer svgWidth="100" svgHeight={20}>
          <SkeletonBodyText numberOfLines={1} />
        </SkeletonContainer>
      </DropdownListItem>
      <DropdownListItem>
        <SkeletonContainer svgWidth="150" svgHeight={20}>
          <SkeletonBodyText numberOfLines={1} />
        </SkeletonContainer>
      </DropdownListItem>
    </>
  );
}

function getNavigationDirection(event: React.KeyboardEvent): Direction | null {
  if (event.keyCode === KEY_CODE.ARROW_DOWN) {
    return Direction.DOWN;
  }

  if (event.keyCode === KEY_CODE.ARROW_UP) {
    return Direction.UP;
  }

  return null;
}

// Get next navigation index based on current index and navigation direction
function getNewIndex(
  currentIndex: number,
  direction: Direction,
  lastIndex: number,
): number {
  const isDown = direction === Direction.DOWN;
  const isUp = direction === Direction.UP;
  const hasNoUserSelection = currentIndex === null;
  const isLast = currentIndex === lastIndex;
  const isFirst = currentIndex === 0;

  if (isDown && (hasNoUserSelection || isLast)) {
    return 0;
  }

  if (isUp && (hasNoUserSelection || isFirst)) {
    return lastIndex;
  }

  return currentIndex + direction;
}

// Find the DOM node at index and scroll if necessary
function scrollToItem(list: HTMLElement, index: number): void {
  if (!list || !list.children.length) {
    return;
  }

  const item = list.children[index as number];
  item.scrollIntoView({ block: 'nearest' });
}
