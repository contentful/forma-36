import React, { HTMLAttributes } from 'react';
import { getStringMatch } from '@contentful/f36-utils';
import { Text } from '@contentful/f36-typography';
import { Checkbox } from '@contentful/f36-forms';

import { getMultiselectStyles } from './Multiselect.styles';

interface MultiselectItemsProps<ItemType> {
  items: ItemType[];
  elementStartIndex: number;
  renderItem: (item: ItemType, inputValue: string) => React.ReactNode;
  onSelectItem: (item: ItemType) => void;
  listMaxHeight?: number;
  inputValue?: string;
}

export const MultiselectItems = <ItemType,>(
  props: MultiselectItemsProps<ItemType>,
) => {
  const {
    items,
    elementStartIndex,
    renderItem,
    inputValue,
    listMaxHeight = 180,
    onSelectItem,
  } = props;
  const styles = getMultiselectStyles(listMaxHeight);

  return (
    <ul className={styles.list} data-test-id="cf-multiselect-list">
      {items.map((item: ItemType, index: number) => {
        const itemIndex = elementStartIndex + index;
        return (
          <li key={itemIndex}>
            <Checkbox onClick={() => onSelectItem} />
            <Text
              className={styles.item}
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
          </li>
        );
      })}
    </ul>
  );
};

MultiselectItems.displayName = 'MultiselectItems';

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
