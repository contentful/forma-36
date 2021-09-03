import React from 'react';
import { usePopoverContext } from '../PopoverContext';

export interface PopoverTriggerProps {
  children: React.ReactNode;
}

/**
 * PopoverTrigger opens the popover. It must be an interactive element.
 */
export const PopoverTrigger = (props: PopoverTriggerProps) => {
  const child = React.Children.only(props.children) as any;
  const { getTriggerProps } = usePopoverContext();

  return React.cloneElement(child, {
    ...child.props,
    ...getTriggerProps(child.ref),
    ['aria-haspopup']: 'dialog',
  });
};
