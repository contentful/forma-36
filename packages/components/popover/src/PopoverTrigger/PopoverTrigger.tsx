import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { usePopoverContext } from '../PopoverContext';

// Make the component generic over the kind of HTMLElement the ref will point to.
// We accept any ReactElement whose props are an object (default in React) and may contain a ref.
export interface PopoverTriggerProps<E extends HTMLElement = HTMLElement> {
  children: React.ReactElement<
    Record<string, unknown> & {
      ref?: React.Ref<E>;
      'aria-haspopup'?: React.AriaAttributes['aria-haspopup'];
    },
    React.ElementType
  >;
}

/**
 * PopoverTrigger opens the popover. It must be an interactive element.
 */
export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  PopoverTriggerProps
>(function PopoverTrigger({ children, ...otherProps }, propRef) {
  const context = usePopoverContext();

  // Existing ref on the child (if any) so we can merge it.
  const childRef: React.Ref<HTMLElement> | undefined = (
    children as unknown as { ref?: React.Ref<HTMLElement> }
  ).ref;

  const ref = useMergeRefs([context?.refs.setReference, propRef, childRef]);

  if (!React.isValidElement(children)) {
    console.error(
      'Only valid React elements are supported - https://react.dev/reference/react/isValidElement',
    );
    return null;
  }

  // Ensure TypeScript understands this is an object so spreading is allowed.
  const childProps = children.props as Record<string, unknown>;

  const ariaHasPopup = (childProps['aria-haspopup'] ??
    'dialog') as React.AriaAttributes['aria-haspopup'];

  const mergedProps = context.getReferenceProps({
    ref,
    ...otherProps,
    ...childProps,
    'aria-haspopup': ariaHasPopup,
    'aria-expanded': context.isOpen,
  });

  return React.cloneElement(children, mergedProps);
});
