import React, { HTMLAttributes } from 'react';
import { cx } from 'emotion';
import { getStringMatch } from '@contentful/f36-utils';
import type { UseComboboxGetItemPropsOptions } from 'downshift';
import { Text } from '@contentful/f36-typography';

import { getAutocompleteStyles } from './Autocomplete.styles';

interface AutocompleteItemsProps<ItemType> {
  items: ItemType[];
  elementStartIndex: number;
  highlightedIndex: number;
  getItemProps: (
    options: UseComboboxGetItemPropsOptions<ItemType>,
  ) => HTMLAttributes<HTMLLIElement>;
  renderItem: (item: ItemType, inputValue: string) => React.ReactNode;
  inputValue: string;
  listMaxHeight?: number;
}

export const AutocompleteItems = <ItemType,>(
  props: AutocompleteItemsProps<ItemType>,
) => {
  const {
    items,
    elementStartIndex,
    highlightedIndex,
    getItemProps,
    renderItem,
    inputValue,
    listMaxHeight = 180,
  } = props;

  const styles = getAutocompleteStyles(listMaxHeight);

  return (
    <ul className={styles.list} data-test-id="cf-autocomplete-list">
      {items.map((item: ItemType, index: number) => {
        const itemIndex = elementStartIndex + index;
        const itemProps = getItemProps({ item, index: itemIndex });
        return (
          <Text
            {...itemProps}
            as="li"
            key={itemIndex}
            className={cx([
              styles.item({}),
              highlightedIndex === itemIndex && styles.highlighted,
            ])}
            data-test-id={`cf-autocomplete-list-item-${itemIndex}`}
          >
            {renderItem ? (
              renderItem(item, inputValue)
            ) : typeof item === 'string' ? (
              <HighlightedItem item={item} inputValue={inputValue} />
            ) : (
              item
            )}
          </Text>
        );
      })}
    </ul>
  );
};

AutocompleteItems.displayName = 'AutocompleteItems';

function HighlightedItem({
  item,
  inputValue,
}: {
  item: string;
  inputValue: string;
}) {
  const { before, match, after } = getStringMatch(item, inputValue);

  return (
    <>
      {before}
      <b>{match}</b>
      {after}
    </>
  );
}

HighlightedItem.displayName = 'HighlightedItem';
