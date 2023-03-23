import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { useId, mergeRefs, type ExpandProps } from '@contentful/f36-core';
import type { Placement, Modifier } from '@popperjs/core';
import { PopoverContextProvider, PopoverContextType } from './PopoverContext';
import { usePopper } from 'react-popper';

export interface PopoverProps {
  children: React.ReactNode;

  /**
   * Boolean to determine if the Popover should be the same width as
   * the trigger element
   *
   * @default false
   */
  isFullWidth?: boolean;

  /**
   * Boolean to control whether or not the Popover is open
   *
   * @default false
   */
  isOpen?: boolean;

  /**
   * Callback fired when the popover closes
   */
  onClose?: () => void;

  /**
   * Determines the preferred position of the Popover. This position is not
   * guaranteed, as the Popover might be moved to fit the viewport
   *
   * @default bottom-start
   */
  placement?: Placement;

  /**
   * Boolean to control if popover is allowed to change its placement automatically
   * based on available space in the viewport.
   *
   * For example:
   * If you set placement prop to bottom, but there isn't enough space to position the popover in that direction,
   * it will change the popper placement to top. As soon as enough space is detected, the placement will be reverted to the defined one.
   *
   * If you want the popover to strictly follow the placement prop you should set this prop to false.
   *
   * @default true
   */
  isAutoalignmentEnabled?: boolean;

  /**
   * Boolean to control whether or not to render the Popover in a React Portal.
   * Rendering content inside a Portal allows the Popover to escape the bounds
   * of its parent while still being positioned correctly. Using a Portal is
   * necessary if an ancestor of the Popover hides overflow.
   *
   * @default true
   */
  usePortal?: boolean;

  /**
   * If true, the popover will close when you blur out it by clicking outside or tabbing out
   *
   * @default true
   */
  closeOnBlur?: boolean;

  /**
   * If true, the popover will close when you hit the Esc key
   *
   * @default true
   */
  closeOnEsc?: boolean;

  /**
   * If true, the popover will be focused after opening
   *
   * @default true
   */
  autoFocus?: boolean;

  /**
   * Popover id. Will be used as an `id` attribute on popover
   * and as `aria-controls` attribute on trigger
   *
   * @default true
   */
  id?: string;

  /**
   * The `X-axis` and `Y-axis` offset to position popper element
   * from its trigger element. `[X, Y]`
   *
   * @default [1, 4]
   */
  offset?: [number, number];

  /**
   * Defines if popover should be rendered in the DOM only when it's open
   * or all the time (after the component has been mounted)
   *
   * @default true
   */
  renderOnlyWhenOpen?: boolean;
}

export function Popover(props: ExpandProps<PopoverProps>) {
  const {
    children,
    isOpen,
    placement = 'bottom-start',
    isFullWidth = false,
    isAutoalignmentEnabled = true,
    usePortal = true,
    closeOnBlur = true,
    closeOnEsc = true,
    onClose,
    autoFocus = true,
    id,
    offset = [1, 4],
    renderOnlyWhenOpen = true,
  } = props;

  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );
  const [popoverElement, setPopoverElement] = useState<HTMLElement | null>(
    null,
  );

  const {
    attributes: popperAttributes,
    update,
    styles: popperStyles,
  } = usePopper(triggerElement, popoverElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
      {
        ...sameWidth,
        enabled: isFullWidth,
      },
      {
        name: 'preventOverflow',
        enabled: isAutoalignmentEnabled,
        options: {
          mainAxis: true,
        },
      },
      {
        name: 'flip',
        enabled: isAutoalignmentEnabled,
      },
    ],
  });

  useEffect(() => {
    if (isOpen && autoFocus && popoverElement) {
      popoverElement.focus({ preventScroll: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, popoverElement]);

  useEffect(() => {
    const updatePosition = async () => {
      if (isOpen && update) {
        await update();
      }
    };
    updatePosition();
  }, [isOpen, update]);

  const popoverGeneratedId = useId(undefined, 'popover-content');
  const popoverId = id || popoverGeneratedId;

  const closeAndFocusTrigger = useCallback(() => {
    onClose?.();

    // setTimeout trick to make it work with focus-lock
    setTimeout(() => triggerElement?.focus({ preventScroll: true }), 0);
  }, [onClose, triggerElement]);

  // Safari has an issue with the relatedTarget that we use on the onBlur for getPopoverProps,
  // which was causing the popover to close and reopen when clicking on the trigger.
  // We will use the isMouseDown to prevent triggering blur in the cases where the user clicks on the trigger.
  const isMouseDown = useRef<Boolean>(false);

  const contextValue: PopoverContextType = useMemo(
    () => ({
      isOpen: Boolean(isOpen),
      usePortal,
      renderOnlyWhenOpen,
      getTriggerProps: (_props = {}, _ref = null) => ({
        onMouseDown: (event) => {
          isMouseDown.current = true;
          _props.onMouseDown?.(event);
        },
        onMouseUp: (event) => {
          isMouseDown.current = false;
          _props.onMouseUp?.(event);
        },
        ref: mergeRefs(setTriggerElement, _ref),
        ['aria-expanded']: Boolean(isOpen),
        ['aria-controls']: popoverId,
      }),
      getPopoverProps: (_props = {}, _ref = null) => ({
        ...popperAttributes.popper,
        style: {
          ...(_props.style || {}),
          ...popperStyles.popper,
        },
        ref: mergeRefs(setPopoverElement, _ref),
        id: popoverId,
        onBlur: (event: React.FocusEvent<HTMLDivElement>) => {
          if (_props.onBlur) {
            _props.onBlur(event);
          }

          if (!closeOnBlur) {
            return;
          }

          const activeElement = document.activeElement;
          const relatedTarget = event.relatedTarget || activeElement;

          const targetIsPopover =
            popoverElement === relatedTarget ||
            popoverElement?.contains(relatedTarget);
          const targetIsTrigger =
            triggerElement === relatedTarget ||
            triggerElement?.contains(relatedTarget) ||
            isMouseDown.current;

          if (targetIsPopover || targetIsTrigger) {
            return;
          }

          onClose?.();
        },
        onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
          if (_props.onKeyDown) {
            _props.onKeyDown(event);
          }

          if (closeOnEsc && event.key === 'Escape') {
            closeAndFocusTrigger();
          }
        },
      }),
    }),
    [
      isOpen,
      renderOnlyWhenOpen,
      popperAttributes,
      popperStyles,
      usePortal,
      popoverId,
      closeOnEsc,
      closeOnBlur,
      popoverElement,
      triggerElement,
      closeAndFocusTrigger,
      onClose,
    ],
  );

  return (
    <PopoverContextProvider value={contextValue}>
      {children}
    </PopoverContextProvider>
  );
}

/**
 * Sets the popover width to the size of the trigger element.
 */
const sameWidth: Modifier<'sameWidth', any> = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect:
    ({ state }) =>
    () => {
      const reference = state.elements.reference as HTMLElement;
      state.elements.popper.style.width = `${reference.offsetWidth}px`;
    },
};
