import React from 'react';
import { Box, type CommonProps, type ExpandProps } from '@contentful/f36-core';
import {
  FloatingArrow,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { useTooltipContext } from './TooltipContext';
import type { WithEnhancedContent } from './Tooltip';
import { getTooltipContentStyles } from './Tooltip.styles';
import { cx } from '@emotion/css';

type TooltipContentProps = CommonProps &
  WithEnhancedContent & { id?: string; as?: React.ElementType };

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  ExpandProps<TooltipContentProps>
>(({ content, label, style, className, id, ...otherProps }, propRef) => {
  const state = useTooltipContext();
  const ref = useMergeRefs([state.refs.setFloating, propRef]);
  const styles = getTooltipContentStyles(state.isOpen);

  if (!state.isOpen) {
    return null;
  }

  const wrappedTooltipContents = content ? (
    <Box
      {...state.getFloatingProps()}
      {...otherProps}
      className={cx(styles.tooltip, className)}
      style={{ ...style, ...state.floatingStyles }}
      ref={ref}
      id={id}
    >
      <span>{content}</span>
      <FloatingArrow ref={state.arrowRef} context={state.context} />
    </Box>
  ) : null;

  return state.usePortal ? (
    <FloatingPortal>{wrappedTooltipContents}</FloatingPortal>
  ) : (
    <>{wrappedTooltipContents}</>
  );
});
