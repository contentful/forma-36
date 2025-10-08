import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { DragHandle, Flex, Pill } from '@contentful/f36-components';
import { CSS } from '@dnd-kit/utilities';

export default function DndKitExample() {
  const [items, setItems] = React.useState([
    'Tech',
    'News',
    'CMS',
    'Contentful',
  ]);

  function DraggablePill({ id }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id,
      });
    const style = {
      transform: CSS.Translate.toString(transform),
      transition,
    };

    return (
      <Pill
        dragHandleComponent={
          <DragHandle
            label="Reorder item"
            variant="transparent"
            {...attributes}
            {...listeners}
          />
        }
        isDraggable
        label={id}
        ref={setNodeRef}
        style={style}
      />
    );
  }

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <Flex gap="spacingS">
          {items.map((item) => (
            <DraggablePill id={item} key={item} />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}
