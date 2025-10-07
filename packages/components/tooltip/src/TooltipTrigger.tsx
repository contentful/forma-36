import React from 'react';
import { useTooltipContext } from './TooltipContext';
import { useMergeRefs } from '@floating-ui/react';

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & { tooltipId: string }
>(function TooltipTrigger({ children, tooltipId, ...otherProps }, propRef) {
  const context = useTooltipContext();

  const childRef: React.Ref<HTMLElement> | undefined = (
    children as unknown as { ref?: React.Ref<HTMLElement> }
  ).ref;
  const baseRef = useMergeRefs([propRef, context.refs.setReference]);
  const ref = useMergeRefs([childRef, baseRef]);

  if (React.isValidElement(children)) {
    const childType = typeof children.type;
    const childProps = children.props as Record<string, unknown>;
    const ariaHasPopup = (childProps['aria-haspopup'] ??
      'dialog') as React.AriaAttributes['aria-haspopup'];
    if (childType !== 'function' && childType !== 'symbol') {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ...otherProps,
          ...childProps,
          ref: ref,
          role: 'button',
          'aria-expanded': context.isOpen,
          'aria-describedby': tooltipId,
          'aria-haspopup': ariaHasPopup,
        }),
      );
    }

    return (
      <span
        {...context.getReferenceProps({
          ...otherProps,
          ref: baseRef,
          role: 'button',
          'aria-expanded': context.isOpen,
          'aria-describedby': tooltipId,
          'aria-haspopup': ariaHasPopup,
        })}
      >
        {children}
      </span>
    );
  }
  return null;
});
