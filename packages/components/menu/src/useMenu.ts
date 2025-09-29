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
import type { OffsetOptions, Placement } from '@floating-ui/react';
import { MenuContext } from './MenuContext';

interface UseMenuReturn {
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
  context: any;

  // Props getters
  getReferenceProps: (userProps?: any) => Record<string, unknown>;
  getFloatingProps: () => Record<string, unknown>;
  getItemProps: (userProps?: any) => Record<string, unknown>;

  // State setters
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;

  // Tree and item info
  nodeId: string;
  item: ReturnType<typeof useListItem>;
  parent: React.ContextType<typeof MenuContext>;
}
export interface MenuOptions {
  placement?: Placement | 'auto';
  isFullWidth?: boolean;
  isAutoalignmentEnabled?: boolean;
  isOpen?: boolean;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  /**
   * If true the floating content will auto-focus on open. Defaults to true.
   */
  autoFocus?: boolean;
  offset?: OffsetOptions;
  renderOnlyWhenOpen?: boolean;
  usePortal?: boolean;
}

export function useMenu({
  placement = 'bottom-start',
  isFullWidth = false,
  isAutoalignmentEnabled = true,
  isOpen: isDefaultOpen = false,
  offset: offsetProp,
  renderOnlyWhenOpen = true,
  usePortal = true,
  closeOnEsc = true,
  closeOnBlur = true,
  autoFocus = true,
}: MenuOptions): UseMenuReturn {
  const [isOpen, setIsOpen] = React.useState(isDefaultOpen);
  const [hasFocusInside, setHasFocusInside] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const elementsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = React.useRef<Array<string | null>>([]);

  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();
  const parent = React.useContext(MenuContext);

  const isNested = parentId != null;

  const offsetOption = offsetProp
    ? offsetProp
    : { mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? +4 : 0 };

  /** Configure middleware based on placement and isAutoalignmentEnabled
   * If placement is "auto" it will use autoPlacement() in the middleware and not make use of flip and switch.
   * If isAutoalignmentEnabled is false, it will also not use flip and switch but only use the placement variable.
   */
  let sanitizedPlacement: Placement = isNested ? 'right-start' : 'bottom-start';
  const middleware = [offset(offsetOption)];

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
    onOpenChange: setIsOpen,
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
    ancestorScroll: true,
    bubbles: true,
  });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: isNested,
    onNavigate: setActiveIndex,
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
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

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

      // Props getters
      getReferenceProps,
      getFloatingProps,
      getItemProps,

      // State setters
      setHasFocusInside,
      setActiveIndex,
      renderOnlyWhenOpen,
      usePortal,
      autoFocus,

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
