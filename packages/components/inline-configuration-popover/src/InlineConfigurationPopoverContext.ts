import React from 'react';
import type {
  FloatingContext,
  ReferenceType,
  useInteractions,
} from '@floating-ui/react';

export type InlineConfigurationPopoverCloseReason =
  /** The trigger was clicked, or activated with Enter or Space */
  | 'trigger'
  /** A press outside the popover, its trigger and its anchor */
  | 'outside-press'
  /** Escape was pressed while focus was in the popover or on its trigger */
  | 'escape-key'
  /** The close button in `InlineConfigurationPopover.Header` */
  | 'close-button'
  /** `close()` from `useInlineConfigurationPopover()` */
  | 'api'
  /**
   * Focus moved to another element on the page while the anchor was
   * scrolled out of view and the popover was hidden
   */
  | 'focus-out';

export type Offset = { x: number; y: number };

type Interactions = ReturnType<typeof useInteractions>;

export interface InlineConfigurationPopoverContextType {
  isOpen: boolean;
  setIsOpen: (
    isOpen: boolean,
    reason?: InlineConfigurationPopoverCloseReason,
  ) => void;
  dialogId: string;
  usePortal: boolean;
  isDraggable: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;

  // Floating UI
  floatingContext: FloatingContext<ReferenceType>;
  floatingStyles: React.CSSProperties;
  setReference: (node: ReferenceType | null) => void;
  setPositionReference: (node: ReferenceType | null) => void;
  setFloating: (node: HTMLElement | null) => void;
  floatingElement: HTMLElement | null;
  getReferenceProps: Interactions['getReferenceProps'];
  getFloatingProps: Interactions['getFloatingProps'];
  /**
   * The anchor is scrolled out of view (and nothing is being dragged): the
   * popover is hidden and its focus manager is off until the anchor returns
   */
  isDetached: boolean;

  // Anchor (position reference) element, exempt from outside-press dismissal
  setAnchorElement: (node: HTMLElement | null) => void;

  // Body element, used to find the default initial focus target
  bodyRef: React.MutableRefObject<HTMLElement | null>;

  // Accessible name and description of the dialog
  labelId?: string;
  descriptionId?: string;
  setLabelId: (id: string | undefined) => void;
  setDescriptionId: (id: string | undefined) => void;

  // Dragging
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
  addDragOffset: (delta: Offset) => void;

  announce: (message: string) => void;
}

const InlineConfigurationPopoverContext =
  React.createContext<InlineConfigurationPopoverContextType | null>(null);

export const InlineConfigurationPopoverContextProvider =
  InlineConfigurationPopoverContext.Provider;

export function useInlineConfigurationPopoverContext(componentName: string) {
  const context = React.useContext(InlineConfigurationPopoverContext);

  if (!context) {
    throw new Error(
      `${componentName} must be used within a InlineConfigurationPopover`,
    );
  }

  return context;
}

export interface UseInlineConfigurationPopoverReturn {
  /** Whether the popover is open */
  isOpen: boolean;
  /**
   * Asks the popover to close, with the reason `'api'`. Focus returns to the
   * trigger. Does nothing when it's already closed.
   */
  close: () => void;
  /**
   * Announces a short message to screen readers through a polite live region,
   * e.g. "Blog post added to path". Use it for changes that apply immediately
   * and aren't otherwise announced. The live region outlives the popover, so a
   * message sent right before closing is still read.
   */
  announce: (message: string) => void;
}

/**
 * Gives components rendered inside `InlineConfigurationPopover` access to its state, a
 * `close` function and an `announce` function for immediate-apply feedback.
 */
export function useInlineConfigurationPopover(): UseInlineConfigurationPopoverReturn {
  const context = useInlineConfigurationPopoverContext(
    'useInlineConfigurationPopover',
  );
  const { isOpen, setIsOpen, announce } = context;

  return React.useMemo(
    () => ({
      isOpen,
      close: () => setIsOpen(false, 'api'),
      announce,
    }),
    [isOpen, setIsOpen, announce],
  );
}
