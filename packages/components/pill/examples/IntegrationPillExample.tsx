import React from 'react';
import { Pill, Box, Flex } from '@contentful/f36-components';
import { DragIcon } from '@contentful/f36-icons';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';

export default function IntegrationPillExample() {
  const [items, updateItems] = React.useState([
    'Tech',
    'News',
    'CMS',
    'Contentful',
  ]);

  const removeItem = React.useCallback(
    (index) => {
      const newItems = items.filter((_, filterIndex) => index !== filterIndex);
      updateItems(newItems);
    },
    [items],
  );

  const swapItems = React.useCallback(
    ({ oldIndex, newIndex }) => {
      //  `arrayMove` is imported from 'array-move'
      const newItems = arrayMove(items, oldIndex, newIndex);
      updateItems(newItems);
    },
    [items],
  );

  // `SortableContainer`, `SortableElement` and `SortableHandle` are imported  from 'react-sortable-hoc'

  const SortablePillHandle = SortableHandle(() => (
    <Box marginTop="spacingXs">
      <DragIcon variant="muted" />
    </Box>
  ));

  const SortablePill = SortableElement(({ label, onRemove }) => (
    <Box marginRight="spacingS">
      <Pill
        label={label}
        onClose={() => {
          onRemove();
        }}
        onDrag={() => {}}
        dragHandleComponent={<SortablePillHandle />}
      />
    </Box>
  ));

  const SortableList = SortableContainer((props) => (
    <Flex>{props.children}</Flex>
  ));

  return (
    <SortableList
      useDragHandle
      axis="xy"
      distance={10}
      onSortEnd={({ oldIndex, newIndex }) => {
        swapItems({ oldIndex, newIndex });
      }}
    >
      {items.map((item, index) => (
        <SortablePill
          key={item + index}
          index={index}
          label={item}
          onRemove={() => removeItem(index)}
        />
      ))}
    </SortableList>
  );
}
