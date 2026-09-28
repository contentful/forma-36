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

export default function FolderListHandleRightExample() {
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
      '& [data-row-action]': {
        opacity: 0,
        transition: 'opacity 0.15s ease',
      },
      '&:hover [data-row-action], &:focus-within [data-row-action]': {
        opacity: 1,
      },
    }),
    rowActive: css({
      backgroundColor: tokens.gray100,
      '& [data-row-action]': {
        opacity: 1,
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
    dropIndicatorBefore: css({
      position: 'absolute',
      top: 0,
      left: tokens.spacingS,
      right: tokens.spacingS,
      height: '2px',
      transform: 'translateY(-50%)',
      backgroundColor: tokens.blue400,
      borderRadius: '1px',
      pointerEvents: 'none',
    }),
    dropIndicatorAfter: css({
      position: 'absolute',
      bottom: 0,
      left: tokens.spacingS,
      right: tokens.spacingS,
      height: '2px',
      transform: 'translateY(50%)',
      backgroundColor: tokens.blue400,
      borderRadius: '1px',
      pointerEvents: 'none',
    }),
  };

  const [folders, setFolders] = React.useState([
    { id: 'test', name: 'Fruits' },
    { id: 'bas', name: 'Vegetables' },
    { id: 'folder', name: 'Nuts' },
    { id: 'max', name: 'Seeds' },
  ]);

  const [activeMenuId, setActiveMenuId] = React.useState(null);
  const [activeId, setActiveId] = React.useState(null);
  const [overId, setOverId] = React.useState(null);

  function moveFolder(fromIndex, toIndex) {
    setFolders((current) => arrayMove(current, fromIndex, toIndex));
  }

  function deleteFolder(id) {
    setFolders((current) => current.filter((folder) => folder.id !== id));
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragOver(event) {
    setOverId(event.over ? event.over.id : null);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);
    setOverId(null);
    if (!over || active.id === over.id) return;
    const oldIndex = folders.findIndex((folder) => folder.id === active.id);
    const newIndex = folders.findIndex((folder) => folder.id === over.id);
    moveFolder(oldIndex, newIndex);
  }

  function handleDragCancel() {
    setActiveId(null);
    setOverId(null);
  }

  // FolderRow must keep a stable function identity across re-renders, or
  // React remounts every row (and its Menu) whenever activeMenuId changes.
  // Defining it once via useRef and passing all changing data as props
  // avoids that while still satisfying the single-top-level-declaration
  // constraint of this live example.
  const folderRowRef = React.useRef(function FolderRow({
    folder,
    isFirst,
    isLast,
    isMenuOpen,
    showIndicatorBefore,
    showIndicatorAfter,
    styles,
    onMenuOpen,
    onMenuClose,
    onRename,
    onDelete,
    onMoveUp,
    onMoveDown,
  }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: folder.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : undefined,
    };

    const rowClassName = [styles.row, isMenuOpen ? styles.rowActive : '']
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={setNodeRef} style={style} className={rowClassName}>
        {showIndicatorBefore && <div className={styles.dropIndicatorBefore} />}
        <span className={styles.icon}>
          <FolderSimpleIcon size="small" />
        </span>
        <span className={styles.label}>{folder.name}</span>
        <span data-row-action>
          <Menu onOpen={onMenuOpen} onClose={onMenuClose}>
            <Menu.Trigger>
              <IconButton
                variant="transparent"
                size="small"
                icon={<DotsThreeIcon />}
                aria-label={`${folder.name} folder actions`}
              />
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item onClick={onRename}>
                <PencilSimpleIcon size="tiny" />
                Rename
              </Menu.Item>
              <Menu.Item onClick={onDelete} className={styles.deleteMenuItem}>
                <TrashSimpleIcon size="tiny" />
                Delete
              </Menu.Item>
              <Menu.Divider />
              <Menu.SectionTitle>Reorder</Menu.SectionTitle>
              <Menu.Item onClick={onMoveUp} isDisabled={isFirst}>
                <ArrowUpIcon size="tiny" />
                Move up
              </Menu.Item>
              <Menu.Item onClick={onMoveDown} isDisabled={isLast}>
                <ArrowDownIcon size="tiny" />
                Move down
              </Menu.Item>
            </Menu.List>
          </Menu>
        </span>
        <DragHandle
          label={`Reorder ${folder.name}`}
          variant="transparent"
          {...attributes}
          {...listeners}
        />
        {showIndicatorAfter && <div className={styles.dropIndicatorAfter} />}
      </div>
    );
  });
  const FolderRow = folderRowRef.current;

  const activeIndex = folders.findIndex((folder) => folder.id === activeId);
  const overIndex = folders.findIndex((folder) => folder.id === overId);
  const isValidDrag = activeId != null && overId != null && activeId !== overId;

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
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
              showIndicatorBefore={
                isValidDrag && index === overIndex && overIndex < activeIndex
              }
              showIndicatorAfter={
                isValidDrag && index === overIndex && overIndex > activeIndex
              }
              styles={styles}
              onMenuOpen={() => setActiveMenuId(folder.id)}
              onMenuClose={() => setActiveMenuId(null)}
              onRename={() => console.log('Rename', folder.name)}
              onDelete={() => deleteFolder(folder.id)}
              onMoveUp={() => moveFolder(index, index - 1)}
              onMoveDown={() => moveFolder(index, index + 1)}
            />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}
