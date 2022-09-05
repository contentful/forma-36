import React from 'react';
import { Checkbox } from '@contentful/f36-forms';
import { Text } from '@contentful/f36-typography';
import { getMultiselectStyles } from './Multiselect.styles';
import { getStringMatch } from '@contentful/f36-utils';

export interface MulitselectOptionProps {
  label: string;
  value: string;
  itemIdentifier: string;
  searchValue?: string;
  onSelectItem: (event: React.ChangeEvent) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export const MultiselectOption = ({
  label,
  value,
  itemIdentifier,
  onSelectItem,
  searchValue,
  isChecked = false,
  isDisabled = false,
  ...rest
}: MulitselectOptionProps) => {
  const styles = getMultiselectStyles();

  return (
    <li {...rest}>
      <label htmlFor={itemIdentifier} className={styles.item(isDisabled)}>
        <Checkbox
          id={itemIdentifier}
          value={value}
          onChange={(event) => onSelectItem(event)}
          isChecked={isChecked}
          isDisabled={isDisabled}
        />
        <Text data-test-id={`cf-multiselect-list-item-${itemIdentifier}`}>
          <HighlightedItem item={label} inputValue={searchValue} />
        </Text>
      </label>
    </li>
  );
};

function HighlightedItem({
  item,
  inputValue = '',
}: {
  item: string;
  inputValue?: string;
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
