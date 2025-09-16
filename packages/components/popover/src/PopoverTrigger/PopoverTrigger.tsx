import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopoverContext } from '../PopoverContext';

export interface PopoverTriggerProps {
  children: React.ReactElement;
}

/**
 * PopoverTrigger opens the popover. It must be an interactive element.
 */
export const PopoverTrigger = React.forwardRef<any, PopoverTriggerProps>(
  function PopoverTrigger({ children, ...otherProps }, propRef) {
    const context = usePopoverContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    if (React.isValidElement(children)) {
      const childProps = (children as React.ReactElement).props as Record<
        string,
        any
      >;
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ...childProps,
          ...otherProps,
          ref,
          'aria-haspopup': childProps.props['aria-haspopup'] ?? 'dialog',
          'aria-expanded': context.isOpen ? true : false,
        }),
      );
    }
    return null;
  },
);
