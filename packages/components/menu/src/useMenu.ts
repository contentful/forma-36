import React from 'react';
import {
  autoUpdate,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useRole,
  useTypeahead,
  autoPlacement,
  size,
} from '@floating-ui/react';
import type { Placement, UseFloatingOptions } from '@floating-ui/react';
import type { MenuProps } from './Menu';
import { MenuContext } from './MenuContext';

export interface UseMenuReturn {
  // State
  isOpen: boolean;
  hasFocusInside: boolean;
  activeIndex: number | null;
  isNested: boolean;

  // Refs
  refs: {
    setReference: (node: HTMLButtonElement | null) => void;
    setFloating: (node: HTMLElement | null) => void;
  };
  elementsRef: React.RefObject<Array<HTMLButtonElement | null>>;
  labelsRef: React.RefObject<Array<string | null>>;

  // Floating UI
  floatingStyles: React.CSSProperties;
  context: ReturnType<typeof useFloating>['context'];
  renderOnlyWhenOpen: boolean;
  usePortal: boolean;
  autoFocus: boolean;

  // Props getters
  getReferenceProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;
  getItemProps: (
    userProps?: Record<string, unknown>,
  ) => Record<string, unknown>;

  // State setters
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;

  // Tree and item info
  nodeId: string;
  item: ReturnType<typeof useListItem>;
  parent: React.ContextType<typeof MenuContext>;
}

export function useMenu({
  placement,
  isFullWidth = false,
  isAutoalignmentEnabled = true,
  isOpen: controlledIsOpen,
  defaultIsOpen = false,
  onOpen,
  onClose,
  offset: offsetProp,
  renderOnlyWhenOpen = true,
  usePortal = true,
  closeOnEsc = true,
  closeOnBlur = true,
  closeOnSelect = true,
  autoFocus = true,
}: MenuProps): UseMenuReturn {
  const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = React.useRef<Array<string | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();
  const parent = React.useContext(MenuContext);

  const isNested = parentId != null;

  /**
   * Handle open and closed state
   * supports controlled and uncontrolled behavior
   * */
  const isControlled = controlledIsOpen !== undefined;
  const [uncontrolledIsOpen, setUncontrolledIsOpen] =
    React.useState(defaultIsOpen);
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  // Track previous open for transition detection
  const prevOpenRef = React.useRef(isOpen);
  React.useEffect(() => {
    prevOpenRef.current = isOpen;
  }, [isOpen]);

  const handleOpenChange = React.useCallback<
    UseFloatingOptions['onOpenChange']
  >(
    (nextOpen, _event, reason) => {
      // if the user made component controlled by providing isOpen prop
      // but onOpen callback is not provided, we won't add toggle logic
      // to the trigger component. So they can make any toggle logic on their own.
      const isFullyControlled = isControlled && !onOpen;
      if (isFullyControlled && reason === 'click') {
        return;
      }

      const wasOpen = prevOpenRef.current;
      if (nextOpen === wasOpen) {
        return;
      }

      if (!isControlled) {
        setUncontrolledIsOpen(nextOpen);
      }

      if (nextOpen) {
        onOpen?.();
      } else {
        onClose?.();
      }
    },
    [isControlled, onOpen, onClose],
  );

  // Focus Handling
  const [hasFocusInside, setHasFocusInside] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  /** Configure middleware based on placement with offset
   * and isAutoalignmentEnabled
   * If placement is "auto" it will use autoPlacement() in the middleware and not make use of flip and switch.
   * If isAutoalignmentEnabled is false, it will also not use flip and switch but only use the placement variable.
   */

  const offsetOption = offsetProp
    ? offsetProp
    : isNested
      ? { mainAxis: 4, alignmentAxis: -4 }
      : 5;

  const middleware = [offset(offsetOption)];

  // sanitize the placement to allow auto setting alongside with isAutoalignmentEnabled

  let sanitizedPlacement: Placement;

  if (placement !== 'auto' && isAutoalignmentEnabled) {
    sanitizedPlacement = placement;
    middleware.push(flip({ padding: 5 }), shift({ padding: 5 }));
  } else if (placement === 'auto') {
    middleware.push(autoPlacement());
  } else {
    sanitizedPlacement = placement;
  }

  /**
   * Set to same size as trigger reference element
   */
  if (isFullWidth) {
    middleware.push(
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
          });
        },
      }),
    );
  }

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: handleOpenChange,
    whileElementsMounted: autoUpdate,
    placement: sanitizedPlacement,
    middleware,
  });

  const hover = useHover(context, {
    enabled: isNested,
    delay: { open: 75 },
    handleClose: safePolygon({ blockPointerEvents: true }),
  });
  const click = useClick(context, {
    event: 'mousedown',
    toggle: !isNested,
    ignoreMouse: isNested,
  });
  const role = useRole(context, { role: 'menu' });

  const dismiss = useDismiss(context, {
    escapeKey: closeOnEsc,
    outsidePress: closeOnBlur,
    bubbles: true,
  });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  // Event emitter allows you to communicate across tree components.
  // This effect closes all menus when an item gets clicked anywhere
  // in the tree.
  React.useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      // Only close menus on item click if the consumer opted in via closeOnSelect
      if (closeOnSelect) {
        handleOpenChange(false);
      }
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        handleOpenChange(false);
      }
    }

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
    };
  }, [tree, nodeId, parentId, handleOpenChange, closeOnSelect]);

  React.useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  return React.useMemo(
    () => ({
      // State
      isOpen,
      hasFocusInside,
      activeIndex,
      isNested,

      // Refs
      refs,
      elementsRef,
      labelsRef,

      // Floating UI
      floatingStyles,
      context,
      renderOnlyWhenOpen,
      usePortal,
      autoFocus,

      // Props getters
      getReferenceProps,
      getFloatingProps,
      getItemProps,

      // State setters
      setHasFocusInside,
      setActiveIndex,

      // Tree and item info
      nodeId,
      item,
      parent,
    }),
    [
      activeIndex,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      hasFocusInside,
      isNested,
      isOpen,
      item,
      nodeId,
      parent,
      refs,
      renderOnlyWhenOpen,
      usePortal,
      autoFocus,
    ],
  );
}
