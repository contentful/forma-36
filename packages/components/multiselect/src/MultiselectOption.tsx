import React from 'react';
import { Checkbox } from '@contentful/f36-forms';
import { Text } from '@contentful/f36-typography';
import { getMultiselectStyles } from './Multiselect.styles';
import { getStringMatch } from '@contentful/f36-utils';
import { cx } from 'emotion';

export interface MulitselectOptionProps {
  label: string;
  value: string;
  itemId: string;
  searchValue?: string;
  onSelectItem: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
}

export const MultiselectOption = ({
  label,
  value,
  itemId,
  onSelectItem,
  searchValue,
  isChecked = false,
  isDisabled = false,
  ...rest
}: MulitselectOptionProps) => {
  const styles = getMultiselectStyles();

  return (
    <li {...rest}>
      <Checkbox
        id={itemId}
        value={value}
        onChange={(event) => onSelectItem(event)}
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={cx(styles.item, isDisabled && styles.disabled)}
      >
        <Text data-test-id={`cf-multiselect-list-item-${itemId}`}>
          <HighlightedItem item={label} inputValue={searchValue} />
        </Text>
      </Checkbox>
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
      <b data-test-id="cf-multiselect-item-match">{match}</b>
      {after}
    </>
  );
}

HighlightedItem.displayName = 'HighlightedItem';
