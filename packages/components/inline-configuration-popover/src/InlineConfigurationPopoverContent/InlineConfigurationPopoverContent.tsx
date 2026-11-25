import React from 'react';
import { cx } from '@emotion/css';
import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import {
  DndContext,
  useDraggable,
  useSensor,
  useSensors,
  type DraggableAttributes,
  type DraggableSyntheticListeners,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import type {
  CommonProps,
  ExpandProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';
import { canFocus, getFirstTabbable } from '../utils/focus';
import {
  coordinateGetter,
  getDragAccessibility,
  restrictToWindow,
  InlineConfigurationPopoverKeyboardSensor,
  InlineConfigurationPopoverPointerSensor,
} from '../utils/dnd';
import { getStyles } from './InlineConfigurationPopoverContent.styles';

interface InlineConfigurationPopoverContentInternalProps extends CommonProps {
  children?: React.ReactNode;
}

export type InlineConfigurationPopoverContentProps = PropsWithHTMLElement<
  InlineConfigurationPopoverContentInternalProps,
  'div'
>;

type DragHandleContextType = {
  attributes: DraggableAttributes;
  listeners: DraggableSyntheticListeners;
  setActivatorNodeRef: (element: HTMLElement | null) => void;
  activatorNode: React.MutableRefObject<HTMLElement | null>;
  isDragging: boolean;
};

const DragHandleContext = React.createContext<DragHandleContextType | null>(
  null,
);

export const useInlineConfigurationPopoverDragHandle = () =>
  React.useContext(DragHandleContext);

type PanelProps = ExpandProps<InlineConfigurationPopoverContentProps> & {
  transform?: { x: number; y: number } | null;
  setDraggableNodeRef?: (element: HTMLElement | null) => void;
  setA11yContainer?: (element: HTMLElement | null) => void;
};

const Panel = React.forwardRef<HTMLDivElement, PanelProps>(function Panel(
  {
    children,
    className,
    style,
    testId = 'cf-ui-inline-configuration-popover',
    transform,
    setDraggableNodeRef,
    setA11yContainer,
    ...otherProps
  },
  forwardedRef,
) {
  const {
    dialogId,
    labelId,
    descriptionId,
    floatingStyles,
    setFloating,
    getFloatingProps,
    isDragging,
    isDetached,
  } = useInlineConfigurationPopoverContext(
    'InlineConfigurationPopover.Content',
  );
  const styles = getStyles();
  const ref = useMergeRefs([setFloating, setDraggableNodeRef, forwardedRef]);

  return (
    <div
      {...getFloatingProps(otherProps)}
      ref={ref}
      id={dialogId}
      role="dialog"
      // Focus is trapped and the rest of the page is hidden from assistive
      // technology while it's open, so this is a modal dialog.
      aria-modal="true"
      aria-labelledby={labelId ?? otherProps['aria-labelledby']}
      aria-describedby={descriptionId ?? otherProps['aria-describedby']}
      tabIndex={-1}
      data-test-id={testId}
      data-state={isDragging ? 'dragging' : undefined}
      data-anchor-hidden={isDetached ? 'true' : undefined}
      className={cx(
        styles.root,
        isDragging && styles.dragging,
        isDetached && styles.detached,
        className,
      )}
      style={{
        ...style,
        ...floatingStyles,
        transform: transform
          ? `translate3d(${Math.round(transform.x)}px, ${Math.round(transform.y)}px, 0)`
          : undefined,
      }}
    >
      {children}
      {setA11yContainer && (
        <div ref={setA11yContainer} className={styles.a11yContainer} />
      )}
    </div>
  );
});

const DraggablePanel = React.forwardRef<
  HTMLDivElement,
  PanelProps & { dragId: string }
>(function DraggablePanel({ children, dragId, ...otherProps }, forwardedRef) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef: setDndActivatorNodeRef,
    transform,
    isDragging,
  } = useDraggable({ id: dragId });
  const activatorNode = React.useRef<HTMLElement | null>(null);

  const setActivatorNodeRef = React.useCallback(
    (element: HTMLElement | null) => {
      activatorNode.current = element;
      setDndActivatorNodeRef(element);
    },
    [setDndActivatorNodeRef],
  );

  const dragHandle = React.useMemo(
    () => ({
      attributes,
      listeners,
      setActivatorNodeRef,
      activatorNode,
      isDragging,
    }),
    [attributes, listeners, setActivatorNodeRef, isDragging],
  );

  return (
    <DragHandleContext.Provider value={dragHandle}>
      <Panel
        {...otherProps}
        ref={forwardedRef}
        setDraggableNodeRef={setNodeRef}
        transform={transform}
      >
        {children}
      </Panel>
    </DragHandleContext.Provider>
  );
});

const DraggableContent = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverContentProps>
>(function DraggableContent(props, forwardedRef) {
  const { dialogId, labelId, setIsDragging, addDragOffset } =
    useInlineConfigurationPopoverContext('InlineConfigurationPopover.Content');
  const [a11yContainer, setA11yContainer] = React.useState<HTMLElement | null>(
    null,
  );

  const sensors = useSensors(
    useSensor(InlineConfigurationPopoverPointerSensor, {
      activationConstraint: { distance: 4 },
    }),
    useSensor(InlineConfigurationPopoverKeyboardSensor, { coordinateGetter }),
  );

  const isKeyboardDragRef = React.useRef(false);
  const labelIdRef = React.useRef(labelId);
  React.useEffect(() => {
    labelIdRef.current = labelId;
  }, [labelId]);

  const accessibility = React.useMemo(
    () => ({
      ...getDragAccessibility(
        () => {
          const doc = a11yContainer?.ownerDocument;
          const name = (labelIdRef.current ?? '')
            .split(/\s+/)
            .map((id) => (id && doc?.getElementById(id)?.textContent) || '')
            .join(' ')
            .trim();
          return name || 'Settings';
        },
        () => isKeyboardDragRef.current,
      ),
      // dnd-kit renders its instructions and its assertive live region here,
      // inside the dialog, so they stay exposed while the rest of the page is
      // hidden. They only describe dragging; settings changes go through the
      // polite region behind `announce()`, so the two don't repeat each other.
      container: a11yContainer ?? undefined,
    }),
    [a11yContainer],
  );

  // Runs before dnd-kit reads the start announcement
  const handleDragStart = ({ activatorEvent }: DragStartEvent) => {
    isKeyboardDragRef.current = Boolean(activatorEvent?.type.startsWith('key'));
    setIsDragging(true);
  };

  const handleDragEnd = ({ delta }: DragEndEvent) => {
    addDragOffset({ x: Math.round(delta.x), y: Math.round(delta.y) });
    setIsDragging(false);
  };

  return (
    // A DndContext of its own: it doesn't interact with a DndContext on the
    // page (e.g. a sortable list the popover's row belongs to). dnd-kit marks
    // events it handles, so an outer context ignores drags started here.
    <DndContext
      sensors={sensors}
      modifiers={[restrictToWindow]}
      autoScroll={false}
      accessibility={accessibility}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setIsDragging(false)}
    >
      <DraggablePanel
        {...props}
        ref={forwardedRef}
        dragId={dialogId}
        setA11yContainer={setA11yContainer}
      />
    </DndContext>
  );
});

const OpenContent = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverContentProps>
>(function OpenContent(props, forwardedRef) {
  const {
    floatingContext,
    floatingElement,
    usePortal,
    isDraggable,
    initialFocusRef,
    bodyRef,
    isDetached,
  } = useInlineConfigurationPopoverContext(
    'InlineConfigurationPopover.Content',
  );

  const floatingElementRef = React.useRef(floatingElement);
  React.useEffect(() => {
    floatingElementRef.current = floatingElement;
  }, [floatingElement]);

  // The element that last had focus in the popover, so focus goes back to it
  // when the popover reappears after its anchor was scrolled out of view
  const lastFocusedRef = React.useRef<HTMLElement | null>(null);
  React.useEffect(() => {
    if (!floatingElement) {
      return;
    }
    const handleFocusIn = (event: FocusEvent) => {
      if (event.target instanceof HTMLElement) {
        lastFocusedRef.current = event.target;
      }
    };
    floatingElement.addEventListener('focusin', handleFocusIn);
    return () => floatingElement.removeEventListener('focusin', handleFocusIn);
  }, [floatingElement]);

  // FloatingFocusManager reads `initialFocus.current` after the popover has
  // rendered, so a getter can pick the target at that moment. Floating UI
  // doesn't fall back when an element can't take focus, so only focusable
  // candidates are returned: the element focused before the popover was
  // hidden, the consumer's `initialFocusRef`, the first setting in the body
  // (not the drag handle or the close button in the header), else the dialog
  // itself, which always can.
  const initialFocus = React.useMemo(
    () =>
      ({
        get current() {
          const floating = floatingElementRef.current;
          const candidates = [
            lastFocusedRef.current,
            initialFocusRef?.current,
            getFirstTabbable(bodyRef.current),
          ];
          return (
            candidates.find(
              (element) =>
                element &&
                floating?.contains(element) !== false &&
                canFocus(element),
            ) ?? floating
          );
        },
      }) as React.MutableRefObject<HTMLElement | null>,
    [initialFocusRef, bodyRef],
  );

  // Every dialog needs a name. InlineConfigurationPopover.Header provides it; without a
  // header, pass `aria-label` or `aria-labelledby` to InlineConfigurationPopover.Content.
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      return;
    }
    // Wait for the header to register its title
    const timeout = setTimeout(() => {
      const floating = floatingElementRef.current;
      if (
        floating &&
        !floating.getAttribute('aria-label')?.trim() &&
        !floating.getAttribute('aria-labelledby')?.trim()
      ) {
        // eslint-disable-next-line no-console
        console.warn(
          'InlineConfigurationPopover.Content: the dialog has no accessible name. Add ' +
            'InlineConfigurationPopover.Header with a title, or pass aria-label or ' +
            'aria-labelledby to InlineConfigurationPopover.Content.',
        );
      }
    });
    return () => clearTimeout(timeout);
  }, []);

  const content = isDraggable ? (
    <DraggableContent {...props} ref={forwardedRef} />
  ) : (
    <Panel {...props} ref={forwardedRef} />
  );

  const managed = (
    <FloatingFocusManager
      context={floatingContext}
      // Trap focus and hide the rest of the page from assistive technology.
      // Pointer presses outside still reach useDismiss and close the popover,
      // because outside elements aren't made inert.
      modal
      // While the anchor is scrolled out of view the popover is hidden, so it
      // can't hold focus or hide the page. Turning the manager off returns
      // focus to the trigger and exposes the page again. When the anchor
      // comes back it turns on again and moves focus back in (see
      // `initialFocus`).
      disabled={isDetached}
      initialFocus={initialFocus}
      returnFocus
      // When the focused element is removed (e.g. a field disappears after
      // changing a setting), move focus to the nearest one instead of <body>.
      restoreFocus
    >
      {content}
    </FloatingFocusManager>
  );

  return usePortal ? <FloatingPortal>{managed}</FloatingPortal> : managed;
});

/**
 * The popover panel: a modal dialog positioned next to the anchor or
 * trigger. Compose it with `InlineConfigurationPopover.Header`, `InlineConfigurationPopover.Body`
 * and `InlineConfigurationPopover.Footer`. It's only rendered while open.
 */
export const InlineConfigurationPopoverContent = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverContentProps>
>(function InlineConfigurationPopoverContent(props, forwardedRef) {
  const { isOpen } = useInlineConfigurationPopoverContext(
    'InlineConfigurationPopover.Content',
  );

  if (!isOpen) {
    return null;
  }

  return <OpenContent {...props} ref={forwardedRef} />;
});
