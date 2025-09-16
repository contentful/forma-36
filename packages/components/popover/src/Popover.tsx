import React from 'react';
import { OffsetOptions, type Placement } from '@floating-ui/react';
import { ExpandProps } from '@contentful/f36-core';
import { PopoverContextProvider } from './PopoverContext';
import { usePopover } from './usePopover';

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
  placement?: Placement | 'auto';

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
   * Single number as short hand for `mainAxis`
   *  Or object which can contain `mainAxis`, `crossAxis` or `alignmentAxis`
   *
   * @default 0
   */
  offset?: OffsetOptions;

  /**
   * Defines if popover should be rendered in the DOM only when it's open
   * or all the time (after the component has been mounted)
   *
   * @default true
   */
  renderOnlyWhenOpen?: boolean;
}

export function Popover(props: ExpandProps<PopoverProps>) {
  const { children, ...otherOptions } = props;
  const popover = usePopover({ ...otherOptions });

  return (
    <PopoverContextProvider value={popover}>{children}</PopoverContextProvider>
  );
}
