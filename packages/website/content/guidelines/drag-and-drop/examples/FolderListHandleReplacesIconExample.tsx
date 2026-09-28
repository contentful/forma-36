import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragHandle, Flex } from '@contentful/f36-components';
import { FolderSimpleIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function FolderListHandleReplacesIconExample() {
  const styles = {
    row: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacingXs,
      padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
      borderRadius: tokens.borderRadiusMedium,
      '&:hover': {
        backgroundColor: tokens.gray100,
      },
    }),
    icon: css({
      display: 'flex',
      color: tokens.gray600,
    }),
    label: css({
      flex: 1,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeM,
      color: tokens.gray900,
    }),
  };

  const [folders, setFolders] = React.useState([
    { id: 'test', name: 'Fruits' },
    { id: 'bas', name: 'Vegetables' },
    { id: 'folder', name: 'Nuts' },
    { id: 'max', name: 'Seeds' },
  ]);

  function moveFolder(fromIndex: number, toIndex: number) {
    setFolders((current) => arrayMove(current, fromIndex, toIndex));
  }

  function handleDragEnd(event: { active: { id: string }; over?: { id: string } }) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = folders.findIndex((folder) => folder.id === active.id);
    const newIndex = folders.findIndex((folder) => folder.id === over.id);
    moveFolder(oldIndex, newIndex);
  }

  const FolderRow = ({ folder }: { folder: { id: string; name: string } }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
      useSortable({ id: folder.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : undefined,
    };

    return (
      <div ref={setNodeRef} style={style} className={styles.row}>
        <span className={styles.icon}>
          <FolderSimpleIcon size="small" />
        </span>
        <span className={styles.label}>{folder.name}</span>
        <DragHandle
          label={`Reorder ${folder.name}`}
          variant="transparent"
          {...attributes}
          {...listeners}
        />
      </div>
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext
        items={folders.map((folder) => folder.id)}
        strategy={verticalListSortingStrategy}
      >
        <Flex flexDirection="column">
          {folders.map((folder) => (
            <FolderRow key={folder.id} folder={folder} />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}

