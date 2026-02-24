import React, { HTMLAttributes, ReactNode } from 'react';
import { useTooltipContext } from './TooltipContext';
import { useMergeRefs } from '@floating-ui/react';
import { TooltipInternalProps } from './Tooltip';
import { cx } from '@emotion/css';

function getChildRef(
  child: React.ReactNode,
): React.Ref<HTMLElement> | undefined {
  if (!React.isValidElement(child)) {
    return undefined;
  }

  return (child as unknown as { ref?: React.Ref<HTMLElement> }).ref;
}

export const TooltipTrigger = React.forwardRef<
  HTMLElement,
  Omit<React.HTMLProps<HTMLElement>, 'as'> & {
    tooltipId: string;
    as: TooltipInternalProps['as'];
    asChild?: boolean;
  }
>(function TooltipTrigger(
  {
    children,
    className,
    tooltipId,
    as: Element,
    asChild = false,
    ...otherProps
  },
  propRef,
) {
  const context = useTooltipContext();
  const baseRef = useMergeRefs([propRef, context.refs.setReference]);
  const childRef = getChildRef(children);
  const baseWithChildRef = useMergeRefs([baseRef, childRef]);

  if (asChild) {
    const child = children as React.ReactElement;
    const childProps = child.props as Record<string, unknown>;
    const mergedProps = context.getReferenceProps({
      ...childProps,
      ...otherProps,
      ref: baseWithChildRef,
      className: cx(childProps.className as string, className),
      'aria-describedby': tooltipId,
    });

    return React.cloneElement(child, mergedProps);
  }

  if (React.isValidElement(children)) {
    return (
      <Element
        {...context.getReferenceProps({
          ...otherProps,
          ref: baseRef,
        })}
        className={className}
      >
        {React.cloneElement<HTMLAttributes<ReactNode>>(children, {
          'aria-describedby': tooltipId,
        })}
      </Element>
    );
  }

  return (
    <Element
      {...context.getReferenceProps({
        ...otherProps,
        ref: baseRef,
        'aria-describedby': tooltipId,
      })}
      className={className}
    >
      {children}
    </Element>
  );
});
