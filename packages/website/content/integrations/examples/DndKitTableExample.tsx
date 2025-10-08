import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { DragHandle, Table, Text } from '@contentful/f36-components';
import { CSS } from '@dnd-kit/utilities';
import { css } from 'emotion';

export default function DndKitExample() {
  const styles = {
    row: css({
      // This lets us change z-index when dragging
      position: 'relative',
    }),
  };
  const [items, setItems] = React.useState([
    'Tech',
    'News',
    'CMS',
    'Contentful',
  ]);

  function DraggableTableRow({ id }) {
    const { active, attributes, listeners, setNodeRef, transform, transition } =
      useSortable({
        id,
      });
    const zIndex = active && active.id === id ? 1 : 0;
    const style = {
      zIndex,
      transform: CSS.Translate.toString(transform),
      transition,
    };

    return (
      <Table.Row className={styles.row} ref={setNodeRef} style={style}>
        <Table.Cell>
          <DragHandle
            label="Reorder item"
            variant="transparent"
            {...attributes}
            {...listeners}
          />
        </Table.Cell>
        <Table.Cell width="95%">
          <Text fontWeight="fontWeightMedium">{id}</Text>
        </Table.Cell>
      </Table.Row>
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
        <Table>
          {items.map((item) => (
            <DraggableTableRow id={item} key={item} />
          ))}
        </Table>
      </SortableContext>
    </DndContext>
  );
}
