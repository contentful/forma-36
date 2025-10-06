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

  const ref = useMergeRefs([childRef, propRef, context.refs.setReference]);

  if (React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    const ariaHasPopup = (childProps['aria-haspopup'] ??
      'dialog') as React.AriaAttributes['aria-haspopup'];
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
});
