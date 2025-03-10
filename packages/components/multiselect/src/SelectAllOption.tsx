import React from 'react';
import { MultiselectOption, MultiselectOptionProps } from './MultiselectOption';
import { getMultiselectStyles } from './Multiselect.styles';
import { cx } from 'emotion';

export interface SelectAllOptionProps
  extends Omit<
    MultiselectOptionProps,
    'children' | 'value' | 'itemId' | 'label'
  > {
  label?: string;
  itemId?: string;
}

export const SelectAllOption = ({
  label,
  itemId = 'SelectAll',
  onSelectItem,
  isChecked = false,
  className,
  ...otherProps
}: SelectAllOptionProps) => {
  const styles = getMultiselectStyles();
  const displayLabel = label || isChecked ? 'Deselect all' : 'Select all';
  return (
    <MultiselectOption
      value="all"
      label={displayLabel}
      itemId={itemId}
      onSelectItem={onSelectItem}
      isChecked={isChecked}
      className={cx(styles.selectAll, className)}
      {...otherProps}
    />
  );
};
