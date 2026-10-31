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
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconButton, Menu } from '@contentful/f36-components';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretDownIcon,
  CaretRightIcon,
  DotsSixVerticalIcon,
  DotsThreeIcon,
  FolderSimpleIcon,
  PencilSimpleIcon,
  TrashSimpleIcon,
} from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function ReparentingExample() {
  // Any folder can be nested in any other folder, at any level. Moving a
  // folder moves its complete subtree, so the only invalid destinations are
  // inside the moved folder itself or one of its descendants.
  const INDENT = 24;

  const styles = {
    list: css({
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }),
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
      // :focus-visible rather than :focus-within, so a handle that keeps focus
      // after a mouse drag doesn't hold the row in its hovered state.
      '&:hover [data-row-icon], &:has(:focus-visible) [data-row-icon]': {
        opacity: 0,
        pointerEvents: 'none',
      },
      '&:hover [data-row-handle], &:has(:focus-visible) [data-row-handle]': {
        opacity: 1,
        pointerEvents: 'auto',
      },
      '&:hover [data-row-action], &:has(:focus-visible) [data-row-action]': {
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
    // The parent the item will end up in, when that differs from where it
    // started, so reparenting reads differently from reordering.
    rowDropParent: css({
      backgroundColor: tokens.blue100,
      '&:hover': {
        backgroundColor: tokens.blue100,
      },
    }),
    // A parent-level destination: the item is dropped into the parent itself.
    rowIntoTarget: css({
      backgroundColor: tokens.blue100,
      boxShadow: `inset 0 0 0 2px ${tokens.blue400}`,
      '&:hover': {
        backgroundColor: tokens.blue100,
      },
    }),
    caretSlot: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      flexShrink: 0,
    }),
    caretButton: css({
      minWidth: '20px',
      minHeight: '20px',
      padding: 0,
    }),
    // The slot is the handle's pointer target: 24px wide (WCAG 2.2 target
    // size) and as tall as the row. Negative margins cancel the extra width
    // and the row's vertical padding, so the icons keep their 20px position.
    iconSwap: css({
      position: 'relative',
      alignSelf: 'stretch',
      width: '24px',
      minHeight: '20px',
      margin: `-${tokens.spacing2Xs} -2px`,
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
    dragHandleButton: css({
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
    dropIndicator: css({
      position: 'absolute',
      right: tokens.spacingS,
      height: '2px',
      backgroundColor: tokens.blue600,
      borderRadius: '1px',
      pointerEvents: 'none',
    }),
    hint: css({
      minHeight: '20px',
      marginTop: tokens.spacing2Xs,
      padding: `0 ${tokens.spacingS}`,
      fontFamily: tokens.fontStackPrimary,
      fontSize: tokens.fontSizeS,
      lineHeight: '20px',
      color: tokens.gray600,
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

  const [tree, setTree] = React.useState([
    {
      id: 'mammals',
      name: 'Mammals',
      children: [
        { id: 'primates', name: 'Primates', children: [] },
        { id: 'rodents', name: 'Rodents', children: [] },
        { id: 'marsupials', name: 'Marsupials', children: [] },
      ],
    },
    {
      id: 'birds',
      name: 'Birds',
      children: [
        { id: 'birds-of-prey', name: 'Birds of prey', children: [] },
        { id: 'waterfowl', name: 'Waterfowl', children: [] },
      ],
    },
    { id: 'reptiles', name: 'Reptiles', children: [] },
    { id: 'amphibians', name: 'Amphibians', children: [] },
  ]);
  // Birds starts collapsed to show a parent-level destination: its children
  // are hidden, so the whole folder is offered as a single destination.
  const [collapsedIds, setCollapsedIds] = React.useState(['birds']);
  const [activeMenuId, setActiveMenuId] = React.useState('');

  // { activeId, origin, destinations, index }. Kept in a ref as well, because
  // the keyboard sensor reads it from outside React's render cycle.
  const [drag, setDrag] = React.useState(null);
  const dragRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const pendingFocus = React.useRef(null);

  // dnd-kit's own announcements are turned off below, because keyboard
  // movement in this example doesn't go through dnd-kit's collision
  // detection. A single live region carries every announcement instead.
  const [announcement, setAnnouncement] = React.useState({ text: '', id: 0 });
  function announce(text) {
    setAnnouncement((current) => ({ text, id: current.id + 1 }));
  }

  // --- Hierarchy helpers -------------------------------------------------

  function findLocation(nodes, id, parentId = null, level = 0) {
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      if (node.id === id) return { node, parentId, index, level };
      const found = findLocation(node.children, id, node.id, level + 1);
      if (found) return found;
    }
    return null;
  }

  function getChildren(nodes, parentId) {
    if (parentId == null) return nodes;
    const location = findLocation(nodes, parentId);
    return location ? location.node.children : [];
  }

  function countDescendants(node) {
    return node.children.reduce(
      (total, child) => total + 1 + countDescendants(child),
      0,
    );
  }

  function isExpanded(node) {
    return node.children.length > 0 && !collapsedIds.includes(node.id);
  }

  function removeNode(nodes, id) {
    return nodes
      .filter((node) => node.id !== id)
      .map((node) => ({ ...node, children: removeNode(node.children, id) }));
  }

  function insertNode(nodes, parentId, index, newNode) {
    if (parentId == null) {
      const next = [...nodes];
      next.splice(index, 0, newNode);
      return next;
    }
    return nodes.map((node) =>
      node.id === parentId
        ? {
            ...node,
            children: insertNode(node.children, null, index, newNode),
          }
        : {
            ...node,
            children: insertNode(node.children, parentId, index, newNode),
          },
    );
  }

  // Indexes are positions among the siblings *without* the moved item, which
  // is how destinations are calculated.
  function moveNode(nodes, id, parentId, index) {
    const location = findLocation(nodes, id);
    return insertNode(removeNode(nodes, id), parentId, index, location.node);
  }

  // Every valid destination for `active`, in the order they appear on screen.
  // Up and Down Arrow step through this list one entry at a time.
  //
  // - `position`: an insertion point among the children of `parentId`.
  // - `into`: a parent-level destination. Offered for collapsed parents and
  //   folders without children, where exact positions aren't visible.
  //
  // The picked-up item and its subtree are skipped entirely, so a parent can
  // never be offered a destination inside its own descendants. The menu's
  // "Move to" options follow the same rule, so drag, keyboard, and menu
  // actions offer equivalent destinations.
  function getDestinations(nodes, active) {
    const destinations = [];
    let lastRowId = null;

    function lastVisibleRowId(node) {
      const children = node.children.filter((child) => child.id !== active.id);
      if (!isExpanded(node) || children.length === 0) return node.id;
      return lastVisibleRowId(children[children.length - 1]);
    }

    function visit(siblings, parentId, level) {
      const list = siblings.filter((node) => node.id !== active.id);
      list.forEach((node, index) => {
        destinations.push({
          type: 'position',
          parentId,
          index,
          level,
          anchor: lastRowId
            ? { rowId: lastRowId, edge: 'after' }
            : { rowId: node.id, edge: 'before' },
        });
        lastRowId = node.id;
        if (isExpanded(node)) {
          visit(node.children, node.id, level + 1);
        } else {
          destinations.push({
            type: 'into',
            parentId: node.id,
            index: node.children.filter((child) => child.id !== active.id)
              .length,
            level: level + 1,
            anchor: { rowId: node.id, edge: 'into' },
          });
        }
        lastRowId = lastVisibleRowId(node);
      });
      destinations.push({
        type: 'position',
        parentId,
        index: list.length,
        level,
        anchor: lastRowId ? { rowId: lastRowId, edge: 'after' } : null,
      });
    }

    visit(nodes, null, 0);
    return destinations;
  }

  // Parents the menu's "Move to" submenu can offer, using the same rule:
  // every folder except the moved one, its descendants, and its current
  // parent. Nested folders are labelled with their path, so folders with the
  // same name in different places stay distinguishable.
  function getMoveToParents(nodes, active, currentParentId) {
    const parents = [];
    function walk(list, path) {
      list.forEach((node) => {
        if (node.id === active.id) return;
        const label = [...path, node.name].join(' › ');
        if (node.id !== currentParentId) parents.push({ id: node.id, label });
        walk(node.children, [...path, node.name]);
      });
    }
    walk(nodes, []);
    return parents;
  }

  function isSameDestination(a, b) {
    return a.parentId === b.parentId && a.index === b.index;
  }

  // --- Announcement text ------------------------------------------------

  function containerLabel(parentId) {
    return parentId == null
      ? 'at top level'
      : `in ${findLocation(tree, parentId).node.name}`;
  }

  // Siblings at the destination once the moved item has been taken out.
  function destinationSiblings(activeId, destination) {
    return getChildren(removeNode(tree, activeId), destination.parentId);
  }

  function describeRelation(activeId, destination) {
    const siblings = destinationSiblings(activeId, destination);
    if (destination.index === 0) return 'at the start';
    return `after ${siblings[destination.index - 1].name}`;
  }

  function describePosition(activeId, destination) {
    const siblings = destinationSiblings(activeId, destination);
    return `Position ${destination.index + 1} of ${siblings.length + 1}.`;
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  // Concise movement feedback. The parent is only named when it changes.
  function describeMovement(activeId, destination, previous) {
    const parentName =
      destination.parentId != null &&
      findLocation(tree, destination.parentId).node.name;
    if (destination.type === 'into') {
      const siblings = destinationSiblings(activeId, destination);
      return siblings.length
        ? `Into ${parentName}, after ${siblings[siblings.length - 1].name}.`
        : `Into ${parentName}.`;
    }
    const relation = describeRelation(activeId, destination);
    if (previous && previous.parentId === destination.parentId) {
      return `${capitalize(relation)}.`;
    }
    return `${capitalize(containerLabel(destination.parentId))}, ${relation}.`;
  }

  function describeResult(activeId, destination) {
    const relation = describeRelation(activeId, destination);
    const where =
      relation === 'at the start'
        ? destination.parentId == null
          ? 'at the start of the top level'
          : `at the start of ${findLocation(tree, destination.parentId).node.name}`
        : `${containerLabel(destination.parentId)} ${relation}`;
    return `${where}. ${describePosition(activeId, destination)}`;
  }

  function describeNested(node, suffix) {
    const count = countDescendants(node);
    if (count === 0) return '';
    return ` ${count} nested ${count === 1 ? 'item' : 'items'} ${suffix}`;
  }

  // What the current destination means, shown under the tree while dragging.
  function describeHint(currentDrag) {
    const destination = currentDrag.destinations[currentDrag.index];
    if (isSameDestination(destination, currentDrag.origin)) return '';
    if (destination.parentId === currentDrag.origin.parentId) {
      return destination.parentId == null
        ? 'Reorder within the top level'
        : `Reorder within ${findLocation(tree, destination.parentId).node.name}`;
    }
    return destination.parentId == null
      ? 'Move to the top level'
      : `Move into ${findLocation(tree, destination.parentId).node.name}`;
  }

  // --- Drag handling ----------------------------------------------------

  function updateDrag(next) {
    dragRef.current = next;
    setDrag(next);
  }

  // Up and Down Arrow step through the precomputed destinations instead of
  // moving the item by pixel offsets. Left and Right Arrow are deliberately
  // left alone: in a tree they belong to expanding and collapsing, so they
  // aren't repurposed for changing an item's level.
  const coordinateGetter = React.useRef((event) => {
    if (event.code !== 'ArrowUp' && event.code !== 'ArrowDown') {
      return undefined;
    }
    event.preventDefault();
    const current = dragRef.current;
    if (!current) return undefined;
    const nextIndex = current.index + (event.code === 'ArrowDown' ? 1 : -1);
    if (nextIndex < 0) {
      announceRef.current('At the start of the tree.');
      return undefined;
    }
    if (nextIndex >= current.destinations.length) {
      announceRef.current('At the end of the tree.');
      return undefined;
    }
    updateDragRef.current({ ...current, index: nextIndex });
    announceRef.current(
      describeMovementRef.current(
        current.activeId,
        current.destinations[nextIndex],
        current.destinations[current.index],
      ),
    );
    // Returning nothing keeps dnd-kit from moving the item by coordinates.
    return undefined;
  }).current;
  // The coordinate getter is created once, so it reaches the latest helpers
  // through refs.
  const announceRef = React.useRef(announce);
  const updateDragRef = React.useRef(updateDrag);
  const describeMovementRef = React.useRef(describeMovement);
  announceRef.current = announce;
  updateDragRef.current = updateDrag;
  describeMovementRef.current = describeMovement;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter }),
  );

  function rowElement(id) {
    return containerRef.current?.querySelector(`[data-row-id="${id}"]`);
  }

  const handleDragStart = (event) => {
    const location = findLocation(tree, event.active.id);
    const destinations = getDestinations(tree, location.node);
    const origin = { parentId: location.parentId, index: location.index };
    const isKeyboard = event.activatorEvent instanceof KeyboardEvent;
    updateDrag({
      activeId: location.node.id,
      level: location.level,
      origin,
      destinations,
      index: destinations.findIndex((destination) =>
        isSameDestination(destination, origin),
      ),
      isKeyboard,
    });
    if (isKeyboard) {
      const siblings = getChildren(tree, location.parentId);
      const nestedCount = countDescendants(location.node);
      announce(
        `${location.node.name} picked up` +
          (nestedCount
            ? ` with ${nestedCount} nested ${nestedCount === 1 ? 'item' : 'items'}`
            : '') +
          '. ' +
          `Position ${location.index + 1} of ${siblings.length} ${containerLabel(location.parentId)}. ` +
          'Use Up and Down Arrow keys to move. Press Space or Enter to drop. Press Escape to cancel.',
      );
    }
  };

  // Pointer dragging picks the destination closest to the pointer. Where
  // several levels share the same gap (for example the end of Mammals and the
  // top level right after it), horizontal movement chooses between them.
  const handleDragMove = (event) => {
    const current = dragRef.current;
    if (!current || current.isKeyboard) return;
    const pointerY = event.activatorEvent.clientY + event.delta.y;
    const projectedLevel = current.level + Math.round(event.delta.x / INDENT);

    let best = current.index;
    let bestDistance = Infinity;
    let bestLevelDistance = Infinity;
    current.destinations.forEach((destination, index) => {
      if (!destination.anchor) return;
      const element = rowElement(destination.anchor.rowId);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const anchorY =
        destination.anchor.edge === 'before'
          ? rect.top
          : destination.anchor.edge === 'after'
            ? rect.bottom
            : rect.top + rect.height / 2;
      const distance = Math.abs(pointerY - anchorY);
      const levelDistance = Math.abs(destination.level - projectedLevel);
      if (
        distance < bestDistance - 1 ||
        (Math.abs(distance - bestDistance) <= 1 &&
          levelDistance < bestLevelDistance)
      ) {
        best = index;
        bestDistance = distance;
        bestLevelDistance = levelDistance;
      }
    });
    if (best !== current.index) updateDrag({ ...current, index: best });
  };

  const handleDragEnd = () => {
    const current = dragRef.current;
    updateDrag(null);
    if (!current) return;
    const destination = current.destinations[current.index];
    const node = findLocation(tree, current.activeId).node;
    const isUnchanged = isSameDestination(destination, current.origin);
    if (!isUnchanged || current.isKeyboard) {
      announce(
        `${node.name} dropped ${describeResult(current.activeId, destination)}` +
          describeNested(node, 'moved with it.'),
      );
    }
    if (isUnchanged) return;
    commitMove(current.activeId, destination, 'handle');
  };

  const handleDragCancel = () => {
    const current = dragRef.current;
    updateDrag(null);
    if (!current || !current.isKeyboard) return;
    const node = findLocation(tree, current.activeId).node;
    const siblings = getChildren(tree, current.origin.parentId);
    announce(
      `Move cancelled. ${node.name} returned to position ${current.origin.index + 1} ` +
        `of ${siblings.length} ${containerLabel(current.origin.parentId)}.`,
    );
  };

  function commitMove(id, destination, focusTarget) {
    setTree((current) =>
      moveNode(current, id, destination.parentId, destination.index),
    );
    // Expand the new parent so the moved item, and focus, stay visible.
    if (destination.parentId != null) {
      setCollapsedIds((current) =>
        current.filter((collapsedId) => collapsedId !== destination.parentId),
      );
    }
    pendingFocus.current = { id, target: focusTarget };
  }

  // Moving an item to another parent remounts its row, so focus is returned
  // to the moved item explicitly. The timeout lets the closing menu restore
  // focus first, so this call wins.
  React.useEffect(() => {
    const target = pendingFocus.current;
    if (!target) return undefined;
    pendingFocus.current = null;
    const timeout = setTimeout(() => {
      const element = containerRef.current?.querySelector(
        target.target === 'menu'
          ? `[data-menu-trigger-id="${target.id}"]`
          : `[data-handle-id="${target.id}"]`,
      );
      element?.focus();
    });
    return () => clearTimeout(timeout);
  }, [tree]);

  // --- Menu actions -----------------------------------------------------

  function moveFromMenu(id, destination) {
    const node = findLocation(tree, id).node;
    announce(
      `${node.name} moved ${describeResult(id, destination)}` +
        describeNested(node, 'moved with it.'),
    );
    commitMove(id, destination, 'menu');
  }

  function deleteFolder(id) {
    setTree((current) => removeNode(current, id));
  }

  function toggleFolder(id) {
    setCollapsedIds((current) =>
      current.includes(id)
        ? current.filter((collapsedId) => collapsedId !== id)
        : [...current, id],
    );
  }

  // Describes what the replaced icon meant. Referenced by every drag handle.
  const folderDescriptionId = 'reparenting-folder-description';

  // FolderRow must keep a stable function identity across re-renders, or
  // React remounts every row (and its Menu) whenever state changes. Defining
  // it once via useRef and passing all changing data as props avoids that
  // while still satisfying the single-top-level-declaration constraint of
  // this live example.
  const folderRowRef = React.useRef(function FolderRow({
    folder,
    level,
    isExpandable,
    isOpen,
    isMenuOpen,
    isDropParent,
    isIntoTarget,
    indicator,
    canMoveUp,
    canMoveDown,
    moveToOptions,
    styles,
    indent,
    descriptionId,
    onToggle,
    onMenuOpen,
    onMenuClose,
    onRename,
    onDelete,
    onMoveUp,
    onMoveDown,
    onMoveTo,
    children,
  }) {
    const {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef,
      transform,
      isDragging,
    } = useSortable({ id: folder.id });

    const rowClassName = [
      styles.row,
      isMenuOpen || isDragging ? styles.rowActive : '',
      isDropParent ? styles.rowDropParent : '',
      isIntoTarget ? styles.rowIntoTarget : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      // The item and its nested list move together, because moving a parent
      // moves its complete subtree.
      <li
        ref={setNodeRef}
        style={{
          transform: CSS.Translate.toString(transform),
          opacity: isDragging ? 0.6 : undefined,
          position: 'relative',
          zIndex: isDragging ? 1 : undefined,
        }}
      >
        <div
          data-row-id={folder.id}
          className={rowClassName}
          style={{
            paddingLeft: `calc(${tokens.spacingS} + ${level * indent}px)`,
            boxShadow: isDragging ? tokens.boxShadowDefault : undefined,
          }}
        >
          {indicator && (
            <div
              className={styles.dropIndicator}
              style={{
                left: `calc(${tokens.spacingS} + ${indicator.level * indent}px)`,
                ...(indicator.edge === 'before'
                  ? { top: 0, transform: 'translateY(-50%)' }
                  : { bottom: 0, transform: 'translateY(50%)' }),
              }}
            />
          )}
          <span className={styles.caretSlot}>
            {isExpandable && (
              <IconButton
                variant="transparent"
                size="small"
                className={styles.caretButton}
                icon={
                  isOpen ? (
                    <CaretDownIcon size="tiny" />
                  ) : (
                    <CaretRightIcon size="tiny" />
                  )
                }
                aria-label={folder.name}
                aria-expanded={isOpen}
                onClick={onToggle}
              />
            )}
          </span>
          <span className={styles.iconSwap}>
            <span data-row-icon className={styles.iconLayer}>
              <FolderSimpleIcon size="small" />
            </span>
            <span data-row-handle className={styles.iconLayer}>
              {/*
                A plain button with an aria-label, as in the folder list
                example, so the accessible name describes the action. "Move"
                rather than "Reorder", because the item can also change parent.
              */}
              <button
                ref={setActivatorNodeRef}
                type="button"
                data-handle-id={folder.id}
                className={styles.dragHandleButton}
                aria-label={`Move ${folder.name}`}
                {...attributes}
                {...listeners}
                aria-describedby={`${descriptionId} ${attributes['aria-describedby']}`}
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
                  data-menu-trigger-id={folder.id}
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
                <Menu.SectionTitle>Move</Menu.SectionTitle>
                <Menu.Item onClick={onMoveUp} isDisabled={!canMoveUp}>
                  <ArrowUpIcon size="tiny" />
                  Move up
                </Menu.Item>
                <Menu.Item onClick={onMoveDown} isDisabled={!canMoveDown}>
                  <ArrowDownIcon size="tiny" />
                  Move down
                </Menu.Item>
                {moveToOptions.length > 0 ? (
                  <Menu>
                    <Menu.SubmenuTrigger>Move to</Menu.SubmenuTrigger>
                    <Menu.List>
                      {moveToOptions.map((option) => (
                        <Menu.Item
                          key={option.id}
                          onClick={() => onMoveTo(option.id)}
                        >
                          {option.label}
                        </Menu.Item>
                      ))}
                    </Menu.List>
                  </Menu>
                ) : (
                  <Menu.Item isDisabled>Move to</Menu.Item>
                )}
              </Menu.List>
            </Menu>
          </span>
        </div>
        {children}
      </li>
    );
  });
  const FolderRow = folderRowRef.current;

  // --- Rendering --------------------------------------------------------

  const destination = drag ? drag.destinations[drag.index] : null;
  const showDestination =
    destination && !isSameDestination(destination, drag.origin);

  const visibleIds = [];
  function collectVisible(nodes) {
    nodes.forEach((node) => {
      visibleIds.push(node.id);
      if (isExpanded(node)) collectVisible(node.children);
    });
  }
  collectVisible(tree);

  function renderFolders(nodes, parentId, level) {
    return (
      <ul
        className={styles.list}
        aria-label={level === 0 ? 'Folders' : undefined}
      >
        {nodes.map((node, index) => {
          const moveToOptions = [
            ...(parentId != null ? [{ id: null, label: 'Top level' }] : []),
            ...getMoveToParents(tree, node, parentId),
          ];
          const anchor = showDestination && destination.anchor;
          return (
            <FolderRow
              key={node.id}
              folder={node}
              level={level}
              isExpandable={node.children.length > 0}
              isOpen={isExpanded(node)}
              isMenuOpen={activeMenuId === node.id}
              isDropParent={
                showDestination &&
                destination.type === 'position' &&
                destination.parentId === node.id &&
                destination.parentId !== drag.origin.parentId
              }
              isIntoTarget={
                showDestination &&
                destination.type === 'into' &&
                destination.parentId === node.id
              }
              indicator={
                anchor && anchor.rowId === node.id && anchor.edge !== 'into'
                  ? { edge: anchor.edge, level: destination.level }
                  : null
              }
              canMoveUp={index > 0}
              canMoveDown={index < nodes.length - 1}
              moveToOptions={moveToOptions}
              styles={styles}
              indent={INDENT}
              descriptionId={folderDescriptionId}
              onToggle={() => toggleFolder(node.id)}
              onMenuOpen={() => setActiveMenuId(node.id)}
              onMenuClose={() => setActiveMenuId('')}
              onRename={() => console.log('Rename', node.name)}
              onDelete={() => deleteFolder(node.id)}
              onMoveUp={() =>
                moveFromMenu(node.id, {
                  type: 'position',
                  parentId,
                  index: index - 1,
                })
              }
              onMoveDown={() =>
                moveFromMenu(node.id, {
                  type: 'position',
                  parentId,
                  index: index + 1,
                })
              }
              onMoveTo={(targetId) => {
                if (targetId == null) {
                  // To the top level: right after the top-level folder it
                  // currently sits in.
                  const parentIndex = tree.findIndex(
                    (rootNode) =>
                      rootNode.id === parentId ||
                      findLocation(rootNode.children, parentId),
                  );
                  moveFromMenu(node.id, {
                    type: 'position',
                    parentId: null,
                    index: parentIndex + 1,
                  });
                } else {
                  moveFromMenu(node.id, {
                    type: 'into',
                    parentId: targetId,
                    index: getChildren(removeNode(tree, node.id), targetId)
                      .length,
                  });
                }
              }}
            >
              {isExpanded(node) &&
                renderFolders(node.children, node.id, level + 1)}
            </FolderRow>
          );
        })}
      </ul>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      accessibility={{
        announcements: {
          onDragStart: () => undefined,
          onDragOver: () => undefined,
          onDragEnd: () => undefined,
          onDragCancel: () => undefined,
        },
        screenReaderInstructions: {
          draggable: 'Press Space or Enter to start moving.',
        },
      }}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div
        aria-live="assertive"
        aria-atomic="true"
        className={styles.visuallyHidden}
      >
        <span key={announcement.id}>{announcement.text}</span>
      </div>
      <span id={folderDescriptionId} className={styles.visuallyHidden}>
        Folder
      </span>
      {/* Other items stay in place while dragging; the indicator shows the
          destination instead of items shifting around it. */}
      <SortableContext items={visibleIds} strategy={() => null}>
        <div
          ref={containerRef}
          style={{
            boxSizing: 'border-box',
            width: '272px',
            padding: tokens.spacingS,
            backgroundColor: tokens.colorWhite,
            marginTop: tokens.spacingXs,
            borderRadius: '12px',
            boxShadow:
              '0 0 0 1px rgba(25, 37, 50, 0.1), 0 3px 7px -3px rgba(25, 37, 50, 0.1), 0 6px 12px -2px rgba(25, 37, 50, 0.1)',
          }}
        >
          {renderFolders(tree, null, 0)}
          {/* Visual counterpart of the movement announcements: says whether
              the drop reorders or reparents before the user commits. */}
          <div className={styles.hint} aria-hidden="true">
            {drag ? describeHint(drag) : ''}
          </div>
        </div>
      </SortableContext>
    </DndContext>
  );
}
