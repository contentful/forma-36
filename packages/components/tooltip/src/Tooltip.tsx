import React, {
  type MouseEvent,
  type FocusEvent,
  type CSSProperties,
  ReactElement,
} from 'react';

import type { Placement } from '@floating-ui/react';
import { cx } from '@emotion/css';
import type * as CSS from 'csstype';
import tokens from '@contentful/f36-tokens';
import { Box, useId, type CommonProps } from '@contentful/f36-core';

import { getStyles } from './Tooltip.styles';
import { TooltipTrigger } from './TooltipTrigger';
import { TooltipContent } from './TooltipContent';
import { TooltipContextProvider } from './TooltipContext';
import { useTooltip } from './useTooltip';

export type TooltipPlacement = Placement | 'auto';

export type WithEnhancedContent = {
  /**
   * Content of the tooltip
   */
  content?: ReactElement | string;
  /**
   * Accessible label property, only required when using ReactElement as content
   */
  label?: string;
};

export type TooltipInternalProps = {
  /**
   * Child nodes to be rendered in the component and that will show the tooltip when they are hovered
   */
  children: React.ReactNode;
  /**
   * HTML element used to wrap the target of the tooltip
   */
  as?: React.ElementType;
  /**
   * A unique id of the tooltip
   */
  id?: string;
  /**
   * It controls the initial visibility of the tooltip
   */
  isVisible?: boolean;
  /**
   * It sets a max-width for the tooltip
   */
  maxWidth?: number | CSS.Property.MaxWidth;
  /**
   * Set a delay period in milliseconds before hiding the tooltip
   */
  hideDelay?: number;
  /**
   * Function that will be called when target gets blurred
   */
  onBlur?: (evt: FocusEvent) => void;
  /**
   * Function that will be called when target gets focused
   */
  onFocus?: (evt: FocusEvent) => void;
  /**
   * Function that will be called when the user move the mouse out of the target
   */
  onMouseLeave?: (evt: MouseEvent) => void;
  /**
   * Function that will be called when the user move the mouse over of the target
   */
  onMouseOver?: (evt: MouseEvent) => void;
  /**
   * Function that will be called when the user uses a keyboard key on the target
   */
  onKeyDown?: (evt: KeyboardEvent) => void;

  /**
   * It sets the "preferred" position of the tooltip
   */
  placement?: TooltipPlacement;
  /**
   * Set a delay period in milliseconds before showing the tooltip
   */
  showDelay?: number;
  /**
   * Class names to be appended to the className prop of the tooltip’s target
   */
  targetWrapperClassName?: string;
  /**
   * Boolean to control whether or not to render the tooltip in a React Portal.
   * Rendering content inside a Portal allows the tooltip to escape the bounds
   * of its parent while still being positioned correctly. Using a Portal is
   * necessary if an ancestor of the tooltip hides overflow.
   *
   * Defaults to `false`
   */
  usePortal?: boolean;
  /**
   * Prevents showing the tooltip
   * @default false
   */
  isDisabled?: boolean;
};

export interface TooltipProps
  extends CommonProps,
    TooltipInternalProps,
    WithEnhancedContent {}

export const Tooltip = ({
  children,
  className,
  as: HtmlTag = 'span',
  content,
  label,
  id,
  isVisible = false,
  hideDelay = 0,
  onBlur,
  onFocus,
  onMouseLeave,
  onMouseOver,
  onKeyDown,
  showDelay = 375,
  targetWrapperClassName,
  maxWidth = 360,
  testId = 'cf-ui-tooltip',
  placement,
  usePortal = false,
  isDisabled = false,
  ...otherProps
}: TooltipProps) => {
  const tooltipId = useId(id, 'tooltip');
  const styles = getStyles();

  const context = useTooltip({
    hideDelay,
    showDelay,
    placement,
    usePortal,
    isVisible,
  });

  const contentMaxWidth =
    typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`;

  const contentStyles: CSSProperties = {
    zIndex: tokens.zIndexTooltip,
    maxWidth: contentMaxWidth,
  };

  if (!content || isDisabled) {
    return (
      <Box as={HtmlTag} className={targetWrapperClassName}>
        {children}
      </Box>
    );
  }

  return (
    <TooltipContextProvider value={context}>
      <Box
        testId={testId}
        className={cx(styles.tooltipContainer, targetWrapperClassName)}
        onMouseEnter={(evt: MouseEvent) => {
          if (onMouseOver) onMouseOver(evt);
        }}
        onMouseLeave={(evt: MouseEvent) => {
          if (onMouseLeave) onMouseLeave(evt);
        }}
        onFocus={(evt: FocusEvent) => {
          if (onFocus) onFocus(evt);
        }}
        onBlur={(evt: FocusEvent) => {
          if (onBlur) onBlur(evt);
        }}
        onKeyDown={(evt: KeyboardEvent) => {
          if (onKeyDown) onKeyDown(evt);
        }}
        {...otherProps}
      >
        <TooltipTrigger tooltipId={tooltipId}>{children}</TooltipTrigger>
        <TooltipContent
          content={content}
          label={label}
          style={contentStyles}
          className={className}
          id={id}
          as={HtmlTag}
        />
      </Box>
    </TooltipContextProvider>
  );
};
