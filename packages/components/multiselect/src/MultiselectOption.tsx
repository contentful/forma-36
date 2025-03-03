import React from 'react';
import { Checkbox } from '@contentful/f36-forms';
import { Text } from '@contentful/f36-typography';
import { getMultiselectStyles } from './Multiselect.styles';
import { getStringMatch } from '@contentful/f36-utils';
import { cx } from 'emotion';

type LabelOrChildren =
  | {
      children: React.ReactNode;
      label?: never;
    }
  | {
      children?: never;
      label: string;
    };

export type MultiselectOptionProps = {
  value: string;
  itemId: string;
  searchValue?: string;
  className?: string;
  onSelectItem: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  isDisabled?: boolean;
} & LabelOrChildren;

export const MultiselectOption = ({
  children,
  label,
  value,
  itemId,
  onSelectItem,
  searchValue,
  isChecked = false,
  isDisabled = false,
  className,
  ...rest
}: MultiselectOptionProps) => {
  const styles = getMultiselectStyles();

  return (
    <li className={cx(styles.option, className)} {...rest}>
      <Checkbox
        id={itemId}
        value={value}
        onChange={(event) => onSelectItem(event)}
        isChecked={isChecked}
        isDisabled={isDisabled}
        className={styles.optionCheck({ isActive: isChecked, isDisabled })}
      >
        <Text
          className={styles.optionText}
          data-test-id={`cf-multiselect-list-item-${itemId}`}
        >
          {typeof label === 'string' ? (
            <HighlightedItem item={label} inputValue={searchValue} />
          ) : (
            children
          )}
        </Text>
      </Checkbox>
    </li>
  );
};

export function HighlightedItem({
  item,
  inputValue = '',
}: {
  item: string;
  inputValue?: string;
}) {
  const { before, match, after } = getStringMatch(item, inputValue.trim());

  if (before.length + match.length + after.length === 0) {
    return <>{item}</>;
  }

  return (
    <>
      {before}
      <span data-test-id="cf-multiselect-item-match">{match}</span>
      {after}
    </>
  );
}

HighlightedItem.displayName = 'HighlightedItem';
