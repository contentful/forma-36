import React from 'react';
import { MultiselectOption, MultiselectOptionProps } from './MultiselectOption';
import { getMultiselectStyles } from './Multiselect.styles';
import { cx } from 'emotion';

/**
 * Labels for the select all option
 */
type SelectAllOptionLabel = {
  /**
   * Label for the select all option when it is checked
   * @default 'Deselect all'
   */
  checked: string;

  /**
   * Label for the select all option when it is unchecked
   * @default 'Select all'
   */
  unchecked: string;
};
export interface SelectAllOptionProps
  extends Omit<
    MultiselectOptionProps,
    'children' | 'value' | 'itemId' | 'label'
  > {
  label?: string;
  itemId?: string;
  selectAllOptionLabel?: SelectAllOptionLabel;
}

export const SelectAllOption = ({
  label,
  itemId = 'SelectAll',
  onSelectItem,
  isChecked = false,
  selectAllOptionLabel = {
    checked: 'Deselect all',
    unchecked: 'Select all',
  },
  className,
  ...otherProps
}: SelectAllOptionProps) => {
  const styles = getMultiselectStyles();
  const displayLabel =
    label || isChecked
      ? selectAllOptionLabel.checked
      : selectAllOptionLabel.unchecked;
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
