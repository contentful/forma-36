import React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  size,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  autoPlacement,
} from '@floating-ui/react';
import type { OffsetOptions, Placement } from '@floating-ui/react';

export interface PopoverOptions {
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
  onClose?: (isOpen: boolean) => void;
}

export function usePopover({
  placement = 'bottom-start',
  isFullWidth = false,
  isAutoalignmentEnabled = true,
  isOpen = false,
  offset: offsetOption = 0,
  onClose,
  renderOnlyWhenOpen = true,
  usePortal = true,
  closeOnEsc = true,
  closeOnBlur = true,
  autoFocus = true,
}: PopoverOptions = {}) {
  const [labelId, setLabelId] = React.useState<string | undefined>();
  const [descriptionId, setDescriptionId] = React.useState<
    string | undefined
  >();

  /** Configure middleware based on placement and isAutoalignmentEnabled
   * If placement is "auto" it will use autoPlacement() in the middleware and not make use of flip and switch.
   * If isAutoalignmentEnabled is false, it will also not use flip and switch but only use the placement variable.
   */

  let sanitizedPlacement: Placement = 'bottom-start';
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

  const data = useFloating({
    placement: sanitizedPlacement,
    open: isOpen,
    onOpenChange: onClose,
    whileElementsMounted: autoUpdate,
    middleware,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: false,
  });
  const dismiss = useDismiss(context, {
    escapeKey: closeOnEsc,
    outsidePress: closeOnBlur,
    ancestorScroll: true,
  });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      isOpen,
      autoFocus,
      dismiss,
      onClose,
      ...interactions,
      ...data,
      renderOnlyWhenOpen,
      usePortal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
    }),
    [
      isOpen,
      autoFocus,
      dismiss,
      onClose,
      interactions,
      data,
      renderOnlyWhenOpen,
      usePortal,
      labelId,
      descriptionId,
    ],
  );
}
