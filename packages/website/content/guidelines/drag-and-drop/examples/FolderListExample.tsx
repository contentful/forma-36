import React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragHandle, Flex, IconButton, Menu } from '@contentful/f36-components';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DotsThreeIcon,
  FolderSimpleIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function FolderListExample() {
  const styles = {
    row: css({
      position: 'relative',
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
    deleteMenuItem: css({
      color: tokens.red600,
    }),
  };

  const [folders, setFolders] = React.useState([
    { id: 'test', name: 'Fruits' },
    { id: 'bas', name: 'Vegetables' },
    { id: 'folder', name: 'Nuts' },
    { id: 'max', name: 'Seeds' },
  ]);

  const [activeMenuId, setActiveMenuId] = React.useState<string | null>(null);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  function moveFolder(fromIndex: number, toIndex: number) {
    setFolders((current) => arrayMove(current, fromIndex, toIndex));
  }

  function deleteFolder(id: string) {
    setFolders((current) => current.filter((folder) => folder.id !== id));
  }

  function handleDragStart(event: { active: { id: string } }) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: { active: { id: string }; over?: { id: string } }) {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    const oldIndex = folders.findIndex((folder) => folder.id === active.id);
    const newIndex = folders.findIndex((folder) => folder.id === over.id);
    moveFolder(oldIndex, newIndex);
  }

  const FolderRow = ({
    folder,
    isFirst,
    isLast,
    isMenuOpen,
  }: {
    folder: { id: string; name: string };
    isFirst: boolean;
    isLast: boolean;
    isMenuOpen: boolean;
  }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
      useSortable({ id: folder.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : undefined,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        className={styles.row}
        data-row-active={isMenuOpen ? 'true' : 'false'}
      >
        <span className={styles.icon}>
          <FolderSimpleIcon size="small" />
        </span>
        <span className={styles.label}>{folder.name}</span>
        <span>
          <Menu onOpen={() => setActiveMenuId(folder.id)} onClose={() => setActiveMenuId(null)}>
            <Menu.Trigger>
              <IconButton
                variant="transparent"
                size="small"
                icon={<DotsThreeIcon />}
                aria-label={`${folder.name} folder actions`}
              />
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item onClick={() => console.log('Rename', folder.name)}>
                <PencilSimpleIcon size="tiny" />
                Rename
              </Menu.Item>
              <Menu.Item onClick={() => deleteFolder(folder.id)} className={styles.deleteMenuItem}>
                <TrashSimpleIcon size="tiny" />
                Delete
              </Menu.Item>
              <Menu.Divider />
              <Menu.SectionTitle>Reorder</Menu.SectionTitle>
              <Menu.Item onClick={() => moveFolder(folders.findIndex((item) => item.id === folder.id), folders.findIndex((item) => item.id === folder.id) - 1)} isDisabled={isFirst}>
                <ArrowUpIcon size="tiny" />
                Move up
              </Menu.Item>
              <Menu.Item onClick={() => moveFolder(folders.findIndex((item) => item.id === folder.id), folders.findIndex((item) => item.id === folder.id) + 1)} isDisabled={isLast}>
                <ArrowDownIcon size="tiny" />
                Move down
              </Menu.Item>
            </Menu.List>
          </Menu>
        </span>
        <span>
          <DragHandle
            label={`Reorder ${folder.name}`}
            variant="transparent"
            {...attributes}
            {...listeners}
          />
        </span>
      </div>
    );
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext
        items={folders.map((folder) => folder.id)}
        strategy={verticalListSortingStrategy}
      >
        <Flex flexDirection="column">
          {folders.map((folder, index) => (
            <FolderRow
              key={folder.id}
              folder={folder}
              isFirst={index === 0}
              isLast={index === folders.length - 1}
              isMenuOpen={activeMenuId === folder.id}
            />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}

