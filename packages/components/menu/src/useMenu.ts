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
} from '@floating-ui/react';
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
  elementsRef: React.MutableRefObject<Array<HTMLButtonElement | null>>;
  labelsRef: React.MutableRefObject<Array<string | null>>;

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
  item: any;
  parent: any;
}

export interface MenuOptions {
  isOpen?: boolean;
}

export function useMenu({
  isOpen: isDefaultOpen = false,
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

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: isNested ? 'right-start' : 'bottom-start',
    middleware: [
      offset({ mainAxis: isNested ? 0 : 4, alignmentAxis: isNested ? -4 : 0 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
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
  const dismiss = useDismiss(context, { bubbles: true });
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
    ],
  );
}
