import React from 'react';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import {
  FloatingArrow,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { useTooltipContext } from './TooltipContext';
import { WithEnhancedContent } from './Tooltip';
import { getTooltipContentStyles } from './Tooltip.styles';

type TooltipContentProps = CommonProps & WithEnhancedContent;

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  ExpandProps<TooltipContentProps>
>(({ content, label, style, ...otherProps }, propRef) => {
  const state = useTooltipContext();
  const ref = useMergeRefs([state.refs.setFloating, propRef]);
  const styles = getTooltipContentStyles(state.isOpen);
  if (!state.isOpen) {
    return null;
  }

  const wrappedTooltipContents = content ? (
    <div
      {...otherProps}
      className={styles.tooltip}
      style={{ ...style, ...state.floatingStyles }}
      {...state.getFloatingProps()}
      ref={ref}
    >
      <span aria-label={label}>{content}</span>
      <FloatingArrow ref={state.arrowRef} context={state.context} />
    </div>
  ) : null;

  return state.usePortal ? (
    <FloatingPortal>{wrappedTooltipContents}</FloatingPortal>
  ) : (
    <>{wrappedTooltipContents}</>
  );
});
