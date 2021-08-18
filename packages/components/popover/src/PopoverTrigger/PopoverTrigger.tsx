import React from 'react';
import { usePopoverContext } from '../PopoverContext';

/**
 * PopoverTrigger opens the popover. It must be an interactive element.
 */
export const PopoverTrigger: React.FC = (props) => {
  const child = React.Children.only(props.children) as any;
  const { getTriggerProps } = usePopoverContext();

  return React.cloneElement(child, {
    ...child.props,
    ...getTriggerProps(child.props.ref),
    ['aria-haspopup']: 'dialog',
  });
};
