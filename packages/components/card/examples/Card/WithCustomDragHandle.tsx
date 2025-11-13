import React from 'react';
import { Box, Card, DragHandle, Flex } from '@contentful/f36-components';
import { css } from '@emotion/css';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function WithCustomDragHandle() {
  const styles = {
    card: css({
      // This lets us change z-index when dragging
      position: 'relative',
    }),
    dragHandle: css({
      alignSelf: 'stretch',
    }),
  };
  const [items, setItems] = React.useState([
    'Tech',
    'News',
    'CMS',
    'Contentful',
  ]);

  function SortableCard({ id }) {
    const { attributes, listeners, setNodeRef, transform, transition, active } =
      useSortable({
        id,
      });
    const zIndex = active && active.id === id ? 1 : 0;
    const style = {
      transform: CSS.Translate.toString(transform),
      transition,
      zIndex,
    };

    return (
      <Card
        className={styles.card}
        dragHandleRender={() => (
          <DragHandle
            as="button"
            className={styles.dragHandle}
            label="Move card"
            {...attributes}
            {...listeners}
          />
        )}
        padding="none"
        withDragHandle
        ref={setNodeRef}
        style={style}
      >
        <Box padding="spacingM">{id}</Box>
      </Card>
    );
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <Flex flexDirection="column" gap="spacingS">
          {items.map((item) => (
            <SortableCard key={item} id={item} />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}
