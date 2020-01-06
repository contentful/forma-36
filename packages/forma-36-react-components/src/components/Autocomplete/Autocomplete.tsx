import React, { useReducer, useMemo, useRef, FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import isHotKey from 'is-hotkey';

import TextInput from '../TextInput';
import Dropdown from '../Dropdown/Dropdown';
import DropdownList from '../Dropdown/DropdownList';
import DropdownListItem from '../Dropdown/DropdownListItem';
import SkeletonBodyText from '../Skeleton/SkeletonBodyText';
import SkeletonContainer from '../Skeleton/SkeletonContainer';
import IconButton from '../IconButton';

import styles from './Autocomplete.css';

const TOGGLED_LIST = 'TOGGLED_LIST';
const NAVIGATED_ITEMS = 'NAVIGATED_ITEMS';
const QUERY_CHANGED = 'QUERY_CHANGED';
const ITEM_SELECTED = 'ITEM_SELECTED';

export interface AutocompleteProps {
  children: (items: any[]) => any[];
  items: any[];
  onChange: (item: {}) => void;
  onQueryChange: (query: string) => void;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  width?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
  maxHeight?: number;
  isLoading?: boolean;
  emptyListMessage?: string;
  noMatchesMessage?: string;
  willClearQueryOnClose?: boolean;
  isFullWidth?: boolean;
}

interface State {
  isOpen?: boolean;
  query: string;
  highlightedItemIndex: number | null;
}

type Action =
  | { type: typeof TOGGLED_LIST; payload?: boolean }
  | { type: typeof NAVIGATED_ITEMS; payload: number | null }
  | { type: typeof QUERY_CHANGED; payload: string }
  | { type: typeof ITEM_SELECTED };

enum Direction {
  DOWN = 1,
  UP = -1,
}

const initialState: State = {
  isOpen: false,
  query: '',
  highlightedItemIndex: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case TOGGLED_LIST:
      return {
        ...state,
        isOpen: action.payload,
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
      return { ...initialState };
    default:
      return state;
  }
};

export const Autocomplete: FunctionComponent<AutocompleteProps> = ({
  children,
  items = [],
  disabled,
  onChange,
  onQueryChange,
  placeholder = 'Search',
  name = 'Search',
  width,
  className,
  maxHeight,
  isLoading,
  emptyListMessage = 'No options',
  noMatchesMessage = 'No matches',
  isFullWidth,
  willClearQueryOnClose,
}) => {
  const listRef: any = useRef();
  const inputRef: any = useRef();

  const [{ isOpen, query, highlightedItemIndex }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const toggleList = (isOpen?: boolean): void => {
    dispatch({ type: TOGGLED_LIST, payload: isOpen });
  };

  const selectItem = (item: {}) => {
    dispatch({ type: ITEM_SELECTED });
    onQueryChange('');
    onChange(item);
  };

  const updateQuery = (value: string) => {
    dispatch({ type: QUERY_CHANGED, payload: value });
    onQueryChange(value);
  };

  const handleKeyDown = (event: any) => {
    const isEnter = isHotKey('enter', event);
    const isTab =
      isHotKey('tab', event as KeyboardEvent) ||
      isHotKey('shift+tab', event as KeyboardEvent);

    const hasUserSelection = highlightedItemIndex !== null;
    const lastIndex = items.length ? items.length - 1 : 0;
    const direction = getNavigationDirection(event);

    if (direction) {
      const newIndex = getNewIndex(
        highlightedItemIndex as number,
        direction,
        lastIndex,
      );
      scrollToItem(listRef.current, newIndex);
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
    inputRef.current.focus();
  };

  const options = useMemo(
    () =>
      children(items).map((child, index) => ({
        child,
        option: items[index],
      })),
    [children, items],
  );

  return (
    <Dropdown
      className={className}
      isOpen={isOpen}
      isFullWidth={isFullWidth}
      onClose={() => {
        willClearQueryOnClose && updateQuery('');
        dispatch({ type: TOGGLED_LIST });
      }}
      toggleElement={
        <div className={styles.autocompleteInput}>
          <TextInput
            value={query}
            onChange={e => updateQuery(e.target.value)}
            onFocus={() => toggleList(true)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder={placeholder}
            width={width}
            inputRef={inputRef}
            testId="autocomplete.input"
            type="search"
            name={name}
            autoComplete="off"
          />
          <IconButton
            className={styles.inputIconButton}
            tabIndex={-1}
            buttonType="muted"
            iconProps={{ icon: query ? 'Close' : 'ChevronDown' }}
            onClick={handleInputButtonClick}
            label={query ? 'Clear' : 'Show list'}
          />
        </div>
      }
    >
      <DropdownList testId="autocomplete.dropdown-list" maxHeight={maxHeight}>
        <div ref={listRef}>
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
  );
};

Autocomplete.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.oneOf(['medium', 'large', 'small', 'full', undefined]),
  className: PropTypes.string,
  maxHeight: PropTypes.number,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  emptyListMessage: PropTypes.string,
  noMatchesMessage: PropTypes.string,
  willClearQueryOnClose: PropTypes.bool,
  isFullWidth: PropTypes.bool,
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

function getNavigationDirection(event: KeyboardEvent): Direction | null {
  if (isHotKey('down', event)) {
    return Direction.DOWN;
  }

  if (isHotKey('up', event)) {
    return Direction.UP;
  }

  return null;
}

// Get next navigation index based on current index and
// navigation direction
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

export default Autocomplete;
