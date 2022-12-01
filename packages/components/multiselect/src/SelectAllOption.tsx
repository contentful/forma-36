import React from 'react';
import { MultiselectOption } from './MultiselectOption';
import { getMultiselectStyles } from './Multiselect.styles';

type SelectAllOptionProps = {
  childNodes: React.ReactNode;
  iterateOverChildren: (
    children: React.ReactNode,
    filter: (child: React.ReactElement) => boolean,
    callback: (child: React.ReactElement) => void,
  ) => void;
};

const callChildEventHandler = (
  child: React.ReactElement,
  event: React.ChangeEvent<HTMLInputElement>,
  checked: boolean,
) => {
  if (child.props?.isChecked !== checked && !child.props?.isDisabled) {
    event.target.value = child.props?.value;
    event.target.checked = checked;
    child.props?.onSelectItem(event);
  }
};

const areChildrenAllSelected = (
  children: React.ReactNode,
  filter: (child: React.ReactElement) => boolean,
): boolean => {
  let allSelected = true;
  React.Children.forEach(children, (child) => {
    // equal to (if (child == null || typeof child == 'string'))
    if (!React.isValidElement(child)) return;
    if (!filter(child)) {
      allSelected = areChildrenAllSelected(child.props.children, filter);
    } else {
      if (child.props.isChecked) {
        return;
      }
      allSelected = false;
    }
  });
  return allSelected;
};

export const SelectAllOption = ({
  childNodes,
  iterateOverChildren,
}: SelectAllOptionProps) => {
  const styles = getMultiselectStyles();

  const [allSelected, setAllSelected] = React.useState(
    areChildrenAllSelected(
      childNodes,
      (child) => child.type === MultiselectOption,
    ),
  );

  // checks if all children are true
  React.useEffect(() => {
    const allTrue = areChildrenAllSelected(
      childNodes,
      (child) => child.type === MultiselectOption,
    );
    setAllSelected(allTrue);
  }, [childNodes]);

  const selectAll = (
    event: React.ChangeEvent<HTMLInputElement>,
    children: React.ReactNode,
  ) => {
    const newChecked = !allSelected;
    setAllSelected(newChecked);
    return iterateOverChildren(
      children,
      (child) => child.type === MultiselectOption,
      (child) => callChildEventHandler(child, event, newChecked),
    );
  };

  return (
    <MultiselectOption
      value="all"
      label={allSelected ? 'Deselect all' : 'Select all'}
      itemId="SelectAll"
      onSelectItem={(event) => selectAll(event, childNodes)}
      isChecked={allSelected}
      className={styles.selectAll}
    />
  );
};
