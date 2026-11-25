import React from 'react';
import {
  autoUpdate,
  flip,
  hide,
  offset as offsetMiddleware,
  size,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  type Middleware,
  type OpenChangeReason,
  type Placement,
} from '@floating-ui/react';
import { useId, type ExpandProps } from '@contentful/f36-core';
import {
  InlineConfigurationPopoverContextProvider,
  type Offset,
  type InlineConfigurationPopoverContextType,
  type InlineConfigurationPopoverCloseReason,
} from './InlineConfigurationPopoverContext';
import { dragOffset, getFallbackPlacements } from './utils/middleware';
import { announce, mountAnnouncer } from './utils/announcer';
import { returnFocusAfterOutsidePress } from './utils/returnFocus';

const VIEWPORT_PADDING = 16;
const MIN_HEIGHT = 240;
const MAX_HEIGHT_RATIO = 0.7;
const NO_OFFSET: Offset = { x: 0, y: 0 };

export interface InlineConfigurationPopoverProps {
  children: React.ReactNode;

  /**
   * Controls whether the popover is open. Use it with `onOpen` and
   * `onClose`. Leave it out to let the popover manage its own state.
   */
  isOpen?: boolean;

  /**
   * Whether the popover is open on first render, when it's uncontrolled
   *
   * @default false
   */
  defaultIsOpen?: boolean;

  /**
   * Called when the popover asks to open: its trigger was clicked or
   * activated with Enter or Space. When controlled, set `isOpen` to `true`
   * here.
   */
  onOpen?: () => void;

  /**
   * Called when the popover asks to close, with the reason: the trigger,
   * Escape, an outside press, the close button or `close()`. When
   * controlled, set `isOpen` to `false` here. It isn't called when you close
   * the popover by changing `isOpen` yourself.
   */
  onClose?: (reason: InlineConfigurationPopoverCloseReason) => void;

  /**
   * Preferred position, relative to `InlineConfigurationPopover.Anchor` (or the trigger
   * when there is no anchor). The popover flips to the other alignment or side
   * when there isn't room, then keeps that placement while it's open so it
   * doesn't jump while the list scrolls.
   *
   * @default left-start
   */
  placement?: Placement;

  /**
   * Distance in pixels between the anchor and the popover
   *
   * @default 8
   */
  offset?: number;

  /**
   * Lets people move the popover by dragging its header or with the arrow
   * keys on the drag handle. The position resets when it closes.
   *
   * @default false
   */
  isDraggable?: boolean;

  /**
   * Close the popover when Escape is pressed
   *
   * @default true
   */
  closeOnEsc?: boolean;

  /**
   * Close the popover when people press outside it. Presses on the trigger,
   * the anchor and nested floating elements (Menu, Tooltip, Autocomplete)
   * don't count as outside. A Modal does: close the popover before opening
   * one from it.
   *
   * @default true
   */
  closeOnBlur?: boolean;

  /**
   * Element that receives focus when the popover opens. Defaults to the first
   * focusable element in `InlineConfigurationPopover.Body`, then the popover itself.
   */
  initialFocusRef?: React.RefObject<HTMLElement | null>;

  /**
   * Render the popover in a portal at the end of the document, so it isn't
   * clipped by an ancestor with `overflow: hidden`
   *
   * @default true
   */
  usePortal?: boolean;

  /**
   * Id of the dialog element, also used for `aria-controls` on the trigger
   */
  id?: string;
}

function toReason(
  reason?: OpenChangeReason,
): InlineConfigurationPopoverCloseReason {
  switch (reason) {
    case 'outside-press':
    case 'escape-key':
      return reason;
    default:
      return 'trigger';
  }
}

function isNodeInside(node: unknown, container?: Element | null) {
  return Boolean(container && node instanceof Node && container.contains(node));
}

/**
 * Whether `target` is inside a floating element nested in the popover, such
 * as an F36 Menu rendered with `usePortal={false}`. Those handle their own
 * Escape (and let it bubble).
 */
function isInsideNestedFloating(target: Element, floating: Element) {
  const nested = target.closest('[data-floating-ui-focusable], [role="menu"]');
  return Boolean(nested && nested !== floating && floating.contains(nested));
}

/**
 * An inline configuration popover lets people edit the settings of one item, such as a
 * row in a list, next to that item. Changes apply immediately: there is no
 * Save or Cancel. It's a modal dialog for assistive technology (focus is
 * trapped and the rest of the page is hidden) that closes on an outside press,
 * Escape, its close button or its trigger.
 */
export function InlineConfigurationPopover(
  props: ExpandProps<InlineConfigurationPopoverProps>,
) {
  const {
    children,
    isOpen: isOpenProp,
    defaultIsOpen = false,
    onOpen,
    onClose,
    placement = 'left-start',
    offset = 8,
    isDraggable = false,
    closeOnEsc = true,
    closeOnBlur = true,
    initialFocusRef,
    usePortal = true,
    id,
  } = props;

  const dialogId = useId(id, 'inline-configuration-popover');
  const [uncontrolledIsOpen, setUncontrolledIsOpen] =
    React.useState(defaultIsOpen);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : uncontrolledIsOpen;

  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<
    string | undefined
  >();
  const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(
    null,
  );
  const bodyRef = React.useRef<HTMLElement | null>(null);

  const [isDragging, setIsDraggingState] = React.useState(false);
  const isDraggingRef = React.useRef(false);
  const [dragOffsetValue, setDragOffset] = React.useState<Offset>(NO_OFFSET);
  const [lockedPlacement, setLockedPlacement] =
    React.useState<Placement | null>(null);

  const setIsDragging = React.useCallback((value: boolean) => {
    isDraggingRef.current = value;
    setIsDraggingState(value);
  }, []);

  const addDragOffset = React.useCallback((delta: Offset) => {
    setDragOffset((current) => ({
      x: current.x + delta.x,
      y: current.y + delta.y,
    }));
  }, []);

  const isOpenRef = React.useRef(isOpen);
  React.useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Like Menu: `onOpen` and `onClose` are requests. In controlled mode the
  // parent decides by changing `isOpen`.
  const setIsOpen = React.useCallback(
    (
      nextIsOpen: boolean,
      reason: InlineConfigurationPopoverCloseReason = 'api',
    ) => {
      if (nextIsOpen === isOpenRef.current) {
        return;
      }
      if (!isControlled) {
        isOpenRef.current = nextIsOpen;
        setUncontrolledIsOpen(nextIsOpen);
      }
      if (nextIsOpen) {
        onOpen?.();
      } else {
        onClose?.(reason);
      }
    },
    [isControlled, onClose, onOpen],
  );

  // Reset the dragged position and the chosen placement when it closes, so it
  // reopens next to its anchor.
  React.useEffect(() => {
    if (!isOpen) {
      setDragOffset(NO_OFFSET);
      setLockedPlacement(null);
      setIsDragging(false);
    }
  }, [isOpen, setIsDragging]);

  const middleware = [
    offsetMiddleware(offset),
    // No `shift()`: it pins the popover to the viewport while its anchor
    // scrolls away. `flip()` only runs until a placement has been chosen.
    lockedPlacement
      ? null
      : flip({
          padding: VIEWPORT_PADDING,
          fallbackPlacements: getFallbackPlacements(placement),
        }),
    // Before size(), so the height limit is measured where the popover was
    // dragged to, not where it opened.
    dragOffset(dragOffsetValue),
    size({
      padding: VIEWPORT_PADDING,
      apply({ availableHeight, elements }) {
        const maxHeight = Math.min(
          window.innerHeight * MAX_HEIGHT_RATIO,
          Math.max(MIN_HEIGHT, availableHeight),
        );
        elements.floating.style.maxHeight = `${Math.round(maxHeight)}px`;
      },
    }),
    // Replaces an IntersectionObserver: tells us when the anchor has scrolled
    // out of its scroll container.
    hide({ strategy: 'referenceHidden' }),
  ].filter((item): item is Middleware => Boolean(item));

  const handleFloatingOpenChange = (
    nextIsOpen: boolean,
    event?: Event,
    reason?: OpenChangeReason,
  ) => {
    if (!nextIsOpen && reason === 'escape-key') {
      // Escape cancels an active drag; it must not also close the popover.
      if (isDraggingRef.current) {
        return;
      }

      // Escape pressed in a nested floating element (e.g. an F36 Menu, which
      // lets Escape bubble) closes only that element, whether it's portaled
      // or rendered inline. Close the popover only when focus is in it, on
      // its trigger, or nowhere.
      const target = event?.target;
      const floating = data.elements.floating;
      const doc = floating?.ownerDocument;
      if (
        target instanceof Element &&
        target !== doc?.body &&
        ((!isNodeInside(target, floating) &&
          !isNodeInside(target, data.elements.domReference)) ||
          (floating && isInsideNestedFloating(target, floating)))
      ) {
        return;
      }
    }

    setIsOpen(nextIsOpen, toReason(reason));

    // A press on a blank area outside would otherwise leave focus on <body>
    if (!nextIsOpen && reason === 'outside-press') {
      returnFocusAfterOutsidePress(event, () =>
        isOpenRef.current ? null : data.elements.domReference,
      );
    }
  };

  const data = useFloating({
    open: isOpen,
    onOpenChange: handleFloatingOpenChange,
    placement: lockedPlacement ?? placement,
    // Fixed positioning keeps the popover out of its ancestors' scroll
    // calculations, including dnd-kit's keyboard scrolling.
    strategy: 'fixed',
    // Position with top/left so dnd-kit can use `transform` while dragging
    transform: false,
    middleware,
    whileElementsMounted: autoUpdate,
  });

  const { context: floatingContext, isPositioned } = data;
  const finalPlacement = data.placement;

  React.useEffect(() => {
    if (isOpen && isPositioned && lockedPlacement === null) {
      setLockedPlacement(finalPlacement);
    }
  }, [isOpen, isPositioned, finalPlacement, lockedPlacement]);

  const click = useClick(floatingContext);
  const dismiss = useDismiss(floatingContext, {
    // Off while dragging so Escape reaches dnd-kit and cancels the drag
    escapeKey: closeOnEsc && !isDragging,
    // Pressing the anchor (e.g. the row the trigger sits in) is not an
    // outside press: the popover belongs to it, and a row that opens the
    // popover on click would otherwise close and reopen it in one click.
    //
    // Nested F36 Menu, Tooltip, Autocomplete and Datepicker render in
    // portals that are React children of the popover, so Floating UI treats
    // presses inside them as "inside the React tree".
    //
    // An F36 Modal is different: react-modal mounts its portal before the
    // popover opens, so the focus manager hides it and a press in it counts
    // as outside. The modal also sits below the popover. Close the popover
    // before opening a modal from it.
    outsidePress: closeOnBlur
      ? (event) => !isNodeInside(event.target, anchorElement)
      : false,
    // Keep it attached while the list scrolls
    ancestorScroll: false,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  // Presses inside an iframe (e.g. a preview) never reach this document, so
  // useDismiss can't see them. The window loses focus to the iframe instead.
  React.useEffect(() => {
    if (!isOpen || !closeOnBlur) {
      return;
    }

    const handleWindowBlur = () => {
      // Wait for activeElement to update
      setTimeout(() => {
        const active = document.activeElement;
        if (
          active?.tagName === 'IFRAME' &&
          !isNodeInside(active, data.elements.floating)
        ) {
          setIsOpen(false, 'outside-press');
        }
      });
    };

    window.addEventListener('blur', handleWindowBlur);
    return () => window.removeEventListener('blur', handleWindowBlur);
  }, [isOpen, closeOnBlur, data.elements.floating, setIsOpen]);

  React.useEffect(() => mountAnnouncer(), []);

  const isReferenceHidden = Boolean(data.middlewareData.hide?.referenceHidden);
  const isDetached = isOpen && isReferenceHidden && !isDragging;

  // While the anchor is scrolled out of view, the popover is hidden and stops
  // being modal: focus goes back to the trigger and the page is exposed
  // again. If people then move focus elsewhere on the page, they have left
  // the popover, so close it instead of pulling focus back when the anchor
  // returns.
  React.useEffect(() => {
    const floating = data.elements.floating;
    if (!isDetached || !floating) {
      return;
    }

    const doc = floating.ownerDocument;
    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (
        target === doc.body ||
        isNodeInside(target, floating) ||
        isNodeInside(target, data.elements.domReference as Element | null)
      ) {
        return;
      }
      setIsOpen(false, 'focus-out');
    };

    doc.addEventListener('focusin', handleFocusIn);
    return () => doc.removeEventListener('focusin', handleFocusIn);
  }, [
    isDetached,
    data.elements.floating,
    data.elements.domReference,
    setIsOpen,
  ]);

  const contextValue: InlineConfigurationPopoverContextType = {
    isOpen,
    setIsOpen,
    dialogId,
    usePortal,
    isDraggable,
    initialFocusRef,
    floatingContext,
    floatingStyles: data.floatingStyles,
    setReference: data.refs.setReference,
    setPositionReference: data.refs.setPositionReference,
    setFloating: data.refs.setFloating,
    floatingElement: data.elements.floating,
    getReferenceProps,
    getFloatingProps,
    isDetached,
    setAnchorElement,
    bodyRef,
    labelId,
    descriptionId,
    setLabelId,
    setDescriptionId,
    isDragging,
    setIsDragging,
    addDragOffset,
    announce,
  };

  return (
    <InlineConfigurationPopoverContextProvider value={contextValue}>
      {children}
    </InlineConfigurationPopoverContextProvider>
  );
}

InlineConfigurationPopover.displayName = 'InlineConfigurationPopover';
