import React from 'react';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Flex, IconButton, Menu } from '@contentful/f36-components';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DotsSixVerticalIcon,
  DotsThreeIcon,
  FolderSimpleIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function FolderListHandleReplacesIconExample() {
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
      '& [data-row-icon]': {
        opacity: 1,
        transition: 'opacity 0.15s ease',
      },
      '& [data-row-handle]': {
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.15s ease',
      },
      '& [data-row-action]': {
        opacity: 0,
        transition: 'opacity 0.15s ease',
      },
      '&:hover [data-row-icon], &:focus-within [data-row-icon]': {
        opacity: 0,
        pointerEvents: 'none',
      },
      '&:hover [data-row-handle], &:focus-within [data-row-handle]': {
        opacity: 1,
        pointerEvents: 'auto',
      },
      '&:hover [data-row-action], &:focus-within [data-row-action]': {
        opacity: 1,
      },
    }),
    rowActive: css({
      backgroundColor: tokens.gray100,
      '& [data-row-icon]': {
        opacity: 0,
        pointerEvents: 'none',
      },
      '& [data-row-handle]': {
        opacity: 1,
        pointerEvents: 'auto',
      },
      '& [data-row-action]': {
        opacity: 1,
      },
    }),
    iconSwap: css({
      position: 'relative',
      width: '20px',
      height: '20px',
      flexShrink: 0,
    }),
    iconLayer: css({
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: tokens.gray600,
    }),
    dragButton: css({
      alignItems: 'center',
      background: 'transparent',
      border: 0,
      boxSizing: 'border-box',
      cursor: 'grab',
      display: 'flex',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
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
    visuallyHidden: css({
      position: 'fixed',
      top: 0,
      left: 0,
      width: 1,
      height: 1,
      margin: -1,
      border: 0,
      padding: 0,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(100%)',
      whiteSpace: 'nowrap',
    }),
  };

  const [folders, setFolders] = React.useState([
    { id: 'test', name: 'Fruits' },
    { id: 'bas', name: 'Vegetables' },
    { id: 'folder', name: 'Nuts' },
    { id: 'max', name: 'Seeds' },
  ]);

  const [activeMenuId, setActiveMenuId] = React.useState('');
  const [activeId, setActiveId] = React.useState(null);
  const [overId, setOverId] = React.useState(null);

  // dnd-kit's own live region only announces drag-initiated moves (it's
  // wired to DndContext's onDragStart/onDragOver/onDragEnd/onDragCancel).
  // Move up/Move down bypass dragging entirely, so without a live region
  // of our own, screen reader users get a silent reorder: the DOM updates
  // but nothing is announced.
  const [menuMoveAnnouncement, setMenuMoveAnnouncement] = React.useState('');

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function moveFolder(fromIndex, toIndex) {
    setFolders((current) => arrayMove(current, fromIndex, toIndex));
  }

  function moveFolderFromMenu(fromIndex, toIndex) {
    const activeFolder = folders[fromIndex];
    const preview = arrayMove(folders, fromIndex, toIndex);
    const newIndex = preview.findIndex(
      (folder) => folder.id === activeFolder.id,
    );
    moveFolder(fromIndex, toIndex);
    if (newIndex === 0) {
      setMenuMoveAnnouncement(
        `${activeFolder.name} moved to position 1 of ${preview.length}.`,
      );
    } else if (newIndex === preview.length - 1) {
      setMenuMoveAnnouncement(
        `${activeFolder.name} moved to position ${preview.length} of ${preview.length}.`,
      );
    } else {
      setMenuMoveAnnouncement(
        `${activeFolder.name} moved after ${preview[newIndex - 1].name}. ` +
          `Position ${newIndex + 1} of ${preview.length}.`,
      );
    }
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
      setActivatorNodeRef,
      transform,
      transition,
      isDragging,
    } = useSortable({ id: folder.id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      opacity: isDragging ? 0.6 : undefined,
    };

    const rowClassName = [
      styles.row,
      isMenuOpen || isDragging ? styles.rowActive : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={setNodeRef} style={style} className={rowClassName}>
        {showIndicatorBefore && <div className={styles.dropIndicatorBefore} />}
        <span className={styles.iconSwap}>
          <span data-row-icon className={styles.iconLayer}>
            <FolderSimpleIcon size="small" />
          </span>
          <span data-row-handle className={styles.iconLayer}>
            <button
              ref={setActivatorNodeRef}
              type="button"
              className={styles.dragButton}
              aria-label={`Reorder ${folder.name}`}
              {...attributes}
              {...listeners}
            >
              <DotsSixVerticalIcon color={tokens.gray600} />
            </button>
          </span>
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
        {showIndicatorAfter && <div className={styles.dropIndicatorAfter} />}
      </div>
    );
  });
  const FolderRow = folderRowRef.current;

  const activeIndex = folders.findIndex((folder) => folder.id === activeId);
  const overIndex = folders.findIndex((folder) => folder.id === overId);
  const isValidDrag = activeId != null && overId != null && activeId !== overId;

  const screenReaderInstructions = {
    draggable: 'Press Space or Enter to start reordering.',
  };

  const announcements = {
    onDragStart({ active }) {
      const activeFolder = folders.find((folder) => folder.id === active.id);
      if (!activeFolder) return undefined;
      const index = folders.findIndex((folder) => folder.id === active.id);
      return (
        `${activeFolder.name} picked up. Position ${index + 1} of ${folders.length}. ` +
        'Use Up and Down Arrow keys to move. Press Space or Enter to drop. Press Escape to cancel.'
      );
    },
    onDragOver({ active, over }) {
      if (!over) return undefined;
      const fromIndex = folders.findIndex((folder) => folder.id === active.id);
      const toIndex = folders.findIndex((folder) => folder.id === over.id);
      if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
        return undefined;
      }
      const preview = arrayMove(folders, fromIndex, toIndex);
      const newIndex = preview.findIndex((folder) => folder.id === active.id);
      if (newIndex === 0) return 'At the start of the list.';
      if (newIndex === preview.length - 1) return 'At the end of the list.';
      return `After ${preview[newIndex - 1].name}.`;
    },
    onDragEnd({ active, over }) {
      const activeFolder = folders.find((folder) => folder.id === active.id);
      if (!activeFolder) return undefined;
      if (!over) return `${activeFolder.name} dropped.`;
      const fromIndex = folders.findIndex((folder) => folder.id === active.id);
      const toIndex = folders.findIndex((folder) => folder.id === over.id);
      if (fromIndex === -1 || toIndex === -1) {
        return `${activeFolder.name} dropped.`;
      }
      const preview =
        fromIndex === toIndex
          ? folders
          : arrayMove(folders, fromIndex, toIndex);
      const newIndex = preview.findIndex((folder) => folder.id === active.id);
      if (newIndex === 0) {
        return `${activeFolder.name} dropped at position 1 of ${preview.length}.`;
      }
      if (newIndex === preview.length - 1) {
        return `${activeFolder.name} dropped at position ${preview.length} of ${preview.length}.`;
      }
      return (
        `${activeFolder.name} dropped after ${preview[newIndex - 1].name}. ` +
        `Position ${newIndex + 1} of ${preview.length}.`
      );
    },
    onDragCancel({ active }) {
      const activeFolder = folders.find((folder) => folder.id === active.id);
      if (!activeFolder) return undefined;
      const index = folders.findIndex((folder) => folder.id === active.id);
      return `Reorder canceled. ${activeFolder.name} returned to position ${index + 1} of ${folders.length}.`;
    },
  };

  const dndContextProps = {
    sensors,
    accessibility: { announcements, screenReaderInstructions },
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragEnd: handleDragEnd,
    onDragCancel: handleDragCancel,
  };

  return (
    <DndContext {...dndContextProps}>
      <div
        role="status"
        aria-live="assertive"
        aria-atomic="true"
        className={styles.visuallyHidden}
      >
        {menuMoveAnnouncement}
      </div>
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
              onMenuClose={() => setActiveMenuId('')}
              onRename={() => console.log('Rename', folder.name)}
              onDelete={() => deleteFolder(folder.id)}
              onMoveUp={() => moveFolderFromMenu(index, index - 1)}
              onMoveDown={() => moveFolderFromMenu(index, index + 1)}
            />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  );
}
