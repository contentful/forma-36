import React, { HTMLAttributes, ReactNode } from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { useTooltipContext } from './TooltipContext';
import { useMergeRefs } from '@floating-ui/react';

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & {
    testId: CommonProps['testId'];
    tooltipId: string;
  }
>(function TooltipTrigger(
  { children, className, testId, tooltipId, ...otherProps },
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
        data-test-id={testId}
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
      data-test-id={testId}
      className={className}
    >
      {children}
    </span>
  );
});
