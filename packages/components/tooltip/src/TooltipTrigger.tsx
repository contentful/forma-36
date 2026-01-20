import React, { HTMLAttributes, ReactNode } from 'react';
import { useTooltipContext } from './TooltipContext';
import { useMergeRefs } from '@floating-ui/react';

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & {
    tooltipId: string;
  }
>(function TooltipTrigger(
  { children, className, tooltipId, ...otherProps },
  propRef,
) {
  const context = useTooltipContext();
  const baseRef = useMergeRefs([propRef, context.refs.setReference]);

  if (React.isValidElement(children)) {
    return (
      <span
        {...context.getReferenceProps({
          ...otherProps,
          ref: baseRef,
        })}
        className={className}
      >
        {React.cloneElement<HTMLAttributes<ReactNode>>(children, {
          'aria-describedby': tooltipId,
        })}
      </span>
    );
  }

  return (
    <span
      {...context.getReferenceProps({
        ...otherProps,
        ref: baseRef,
        'aria-describedby': tooltipId,
      })}
      className={className}
    >
      {children}
    </span>
  );
});
