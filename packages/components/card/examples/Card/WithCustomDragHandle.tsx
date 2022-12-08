import React from 'react';
import { Box, Card, DragHandle, Flex } from '@contentful/f36-components';
import { css } from 'emotion';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

export default function WithCustomDragHandle() {
  const styles = {
    dragHandle: css({
      alignSelf: 'stretch',
    }),
  };
  const [items, updateItems] = React.useState([
    'Tech',
    'News',
    'CMS',
    'Contentful',
  ]);

  const swapItems = React.useCallback(
    ({ oldIndex, newIndex }) => {
      // `arrayMoveImmutable` is imported from 'array-move'
      const newItems = arrayMoveImmutable(items, oldIndex, newIndex);
      updateItems(newItems);
    },
    [items],
  );

  const SortableList = SortableContainer((props) => (
    <Flex flexDirection="column">{props.children}</Flex>
  ));

  const SortableDragHandle = SortableHandle(() => (
    <DragHandle as="button" className={styles.dragHandle} label="Move card" />
  ));

  const SortableCard = SortableElement(({ label }) => {
    return (
      <Card
        dragHandleRender={() => <SortableDragHandle />}
        padding="none"
        withDragHandle
      >
        <Box padding="spacingM">{label}</Box>
      </Card>
    );
  });

  return (
    <SortableList
      useDragHandle
      axis="y"
      distance={10}
      onSortEnd={({ oldIndex, newIndex }) => {
        swapItems({ oldIndex, newIndex });
      }}
      shouldCancelStart={(event) => {
        const interactiveElements = ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'];

        if (interactiveElements.indexOf(event.target.tagName) !== -1) {
          return true;
        }

        return false;
      }}
    >
      {items.map((item, index) => (
        <SortableCard key={item} index={index} label={item} />
      ))}
    </SortableList>
  );
}
