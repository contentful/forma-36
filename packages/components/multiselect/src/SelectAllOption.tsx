import React from 'react';
import { MultiselectOption, MultiselectOptionProps } from './MultiselectOption';
import { getMultiselectStyles } from './Multiselect.styles';
import { cx } from 'emotion';

export interface SelectAllOptionProps
  extends Omit<MultiselectOptionProps, 'value' | 'itemId' | 'label'> {
  label?: string;
}

export const SelectAllOption = ({
  label,
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
      itemId="SelectAll"
      onSelectItem={onSelectItem}
      isChecked={isChecked}
      className={cx(styles.selectAll, className)}
      {...otherProps}
    />
  );
};
