import React from 'react';
import { cx } from 'emotion';
import { getStringMatch } from '@contentful/f36-utils';
import { getAutocompleteStyles } from './Autocomplete.styles';

interface AutocompleteItemsProps<ItemType = any> {
  items: ItemType[];
  elementStartIndex: number;
  highlightedIndex: number;
  getItemProps: (...options: any[]) => void;
  renderItem: (item: ItemType, inputValue: string) => React.ReactNode;
  inputValue: string;
  listMaxHeight?: number;
}

export function AutocompleteItems<ItemType>(
  props: AutocompleteItemsProps<ItemType>,
) {
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
    <ul className={styles.list}>
      {items.map((item: ItemType, index: number) => {
        const itemIndex = elementStartIndex + index;
        const itemProps = getItemProps({ item, index: itemIndex });
        return (
          <li
            {...itemProps}
            key={itemIndex}
            className={cx([
              styles.item,
              highlightedIndex === itemIndex && styles.highlighted,
            ])}
            testId={`cf-autocomplete-list-item-${itemIndex}`}
          >
            {renderItem ? (
              renderItem(item, inputValue)
            ) : typeof item === 'string' ? (
              <HighlightedItem item={item} inputValue={inputValue} />
            ) : (
              item
            )}
          </li>
        );
      })}
    </ul>
  );
}

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
