// Plain JavaScript on purpose: the docs run this file through react-live, which cannot parse TypeScript.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
import { IconButton, Menu, DragHandle } from '@contentful/f36-components';
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

export default (function () {
  const swap = '&:hover, &:has(:focus-visible)';
  const styles = {
    list: css({
      boxSizing: 'border-box',
      width: 272,
      marginTop: tokens.spacingXs,
      padding: tokens.spacingS,
      backgroundColor: tokens.colorWhite,
      borderRadius: 12,
      boxShadow: tokens.boxShadowDefault,
    }),
    row: css({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacingXs,
      padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
      borderRadius: tokens.borderRadiusMedium,
      fontSize: tokens.fontSizeM,
      '&:hover, &[data-menu-open]': { backgroundColor: tokens.gray100 },
      // Folder icon and drag handle share one 24px slot (WCAG 2.2 target size)
      // and swap on hover or keyboard focus. :focus-visible, not :focus-within,
      // so a handle that keeps focus after a mouse drag doesn't pin the swap.
      '& .icon, & .action': { transition: 'opacity 0.15s' },
      '& .handle, & .action': { opacity: 0 },
      [`${swap}, &[data-menu-open]`]: {
        '& .icon': { opacity: 0 },
        '& .handle, & .action': { opacity: 1 },
      },
    }),
    slot: css({
      position: 'relative',
      alignSelf: 'stretch',
      width: 24,
      margin: `-${tokens.spacing2Xs} -2px`,
      color: tokens.gray600,
      '& > *': {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .handle': {
        border: 0,
        background: 'none',
        padding: 0,
        cursor: 'grab',
        height: '40px',
      },
    }),
    label: css({ flex: 1 }),
    delete: css({ color: tokens.red600 }),
    indicator: css({
      position: 'absolute',
      left: tokens.spacingS,
      right: tokens.spacingS,
      height: 2,
      backgroundColor: tokens.blue600,
    }),
    hidden: css({
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
    }),
  };

  // Where an item sits, named by its neighbour.
  const place = (list, i) =>
    i === 0
      ? 'at the start of the list'
      : i === list.length - 1
        ? 'at the end of the list'
        : `after ${list[i - 1].name}`;

  function FolderRow({ folder, isFirst, isLast, onMove, onDelete }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef,
      transform,
      transition,
      isDragging,
      isOver,
      index,
      activeIndex,
    } = useSortable({ id: folder.id });

    return (
      <div
        ref={setNodeRef}
        className={styles.row}
        data-menu-open={isMenuOpen || undefined}
        style={{
          transform: CSS.Translate.toString(transform),
          transition,
          opacity: isDragging ? 0.6 : undefined,
          zIndex: isDragging ? 1 : undefined,
        }}
      >
        {isOver && !isDragging && (
          <div
            className={styles.indicator}
            style={index < activeIndex ? { top: 0 } : { bottom: 0 }}
          />
        )}
        <span className={styles.slot}>
          <span className="icon">
            <FolderSimpleIcon size="small" />
          </span>

          <DragHandle
            className="handle"
            variant="transparent"
            ref={setActivatorNodeRef}
            aria-label={`Reorder ${folder.name}`}
            {...attributes}
            {...listeners}
          />
        </span>
        <span className={styles.label}>{folder.name}</span>
        <span className="action">
          <Menu
            onOpen={() => setIsMenuOpen(true)}
            onClose={() => setIsMenuOpen(false)}
          >
            <Menu.Trigger>
              <IconButton
                variant="transparent"
                size="small"
                icon={<DotsThreeIcon />}
                aria-label={`${folder.name} folder actions`}
              />
            </Menu.Trigger>
            <Menu.List>
              <Menu.Item>
                <PencilSimpleIcon size="tiny" /> Rename
              </Menu.Item>
              <Menu.Item onClick={onDelete} className={styles.delete}>
                <TrashSimpleIcon size="tiny" /> Delete
              </Menu.Item>
              <Menu.Divider />
              <Menu.SectionTitle>Reorder</Menu.SectionTitle>
              <Menu.Item onClick={() => onMove(-1)} isDisabled={isFirst}>
                <ArrowUpIcon size="tiny" /> Move up
              </Menu.Item>
              <Menu.Item onClick={() => onMove(1)} isDisabled={isLast}>
                <ArrowDownIcon size="tiny" /> Move down
              </Menu.Item>
            </Menu.List>
          </Menu>
        </span>
      </div>
    );
  }

  function FolderList() {
    const [folders, setFolders] = React.useState([
      { id: 'fruits', name: 'Fruits' },
      { id: 'vegetables', name: 'Vegetables' },
      { id: 'nuts', name: 'Nuts' },
      { id: 'seeds', name: 'Seeds' },
    ]);
    // dnd-kit announces drags only; Move up / Move down need a live region of their own.
    const [menuAnnouncement, setMenuAnnouncement] = React.useState('');
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      }),
    );

    const indexOf = (id) => folders.findIndex((f) => f.id === id);
    // The list as it would be after dropping `id` where `overId` is.
    const after = (id, overId) =>
      arrayMove(folders, indexOf(id), indexOf(overId));
    const describe = (list, id) => {
      const i = list.findIndex((f) => f.id === id);
      return `${list[i].name} ${place(list, i)}. Position ${i + 1} of ${list.length}.`;
    };

    const moveFromMenu = (id, offset) => {
      const list = arrayMove(folders, indexOf(id), indexOf(id) + offset);
      setFolders(list);
      setMenuAnnouncement(`Moved ${describe(list, id)}`);
    };

    // Names instead of dnd-kit's default raw ids.
    const announcements = {
      onDragStart: ({ active }) =>
        `${folders[indexOf(active.id)].name} picked up. Position ${indexOf(active.id) + 1} of ${folders.length}. Use Up and Down Arrow keys to move. Press Space or Enter to drop. Press Escape to cancel.`,
      onDragOver: ({ active, over }) =>
        over && over.id !== active.id
          ? `Moved ${place(after(active.id, over.id), indexOf(over.id))}.`
          : undefined,
      onDragEnd: ({ active, over }) =>
        `Dropped ${describe(over ? after(active.id, over.id) : folders, active.id)}`,
      onDragCancel: ({ active }) =>
        `Reorder cancelled. ${folders[indexOf(active.id)].name} returned to position ${indexOf(active.id) + 1} of ${folders.length}.`,
    };

    return (
      <DndContext
        sensors={sensors}
        accessibility={{
          announcements,
          screenReaderInstructions: {
            draggable: 'Press Space or Enter to start reordering.',
          },
        }}
        onDragEnd={({ active, over }) =>
          over && setFolders(after(active.id, over.id))
        }
      >
        <SortableContext items={folders} strategy={verticalListSortingStrategy}>
          <div className={styles.list}>
            {folders.map((folder, i) => (
              <FolderRow
                key={folder.id}
                folder={folder}
                isFirst={i === 0}
                isLast={i === folders.length - 1}
                onMove={(offset) => moveFromMenu(folder.id, offset)}
                onDelete={() =>
                  setFolders(folders.filter((f) => f.id !== folder.id))
                }
              />
            ))}
          </div>
        </SortableContext>
        <div role="status" className={styles.hidden}>
          {menuAnnouncement}
        </div>
      </DndContext>
    );
  }

  return FolderList;
})();
