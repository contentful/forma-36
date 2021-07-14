import React, {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  FocusEvent,
  CSSProperties,
} from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import { cx } from 'emotion';
import type * as CSS from 'csstype';

import { styles } from './Tooltip.styles';

import tokens from '@contentful/f36-tokens';

import { Portal } from '@contentful/f36-utils';
import type { CommonProps } from '@contentful/f36-core';
import { Primitive } from '@contentful/f36-core';

export type TooltipPlace = Placement;

export interface TooltipProps extends CommonProps {
  /**
   * Child nodes to be rendered in the component and that will show the tooltip when they are hovered
   */
  children: React.ReactNode;
  /**
   * HTML element used to wrap the target of the Tooltip
   */
  as?: React.ElementType;
  /**
   * Content of the Tooltip
   */
  content?: React.ReactNode;
  id?: string;
  /**
   * It controls the initial visibility of the Tooltip
   */
  isVisible?: boolean;
  /**
   * It sets a max-width for the Tooltip
   */
  maxWidth?: number | CSS.Property.MaxWidth;
  /**
   * It sets a delay period for the Tooltip
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
   * It sets the "preferred" position of the Tooltip
   */
  placement?: TooltipPlace;
  /**
   * Class names to be appended to the className prop of the Tooltip’s target
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
}

export const Tooltip = ({
  children,
  className,
  as: HtmlTag = 'span',
  content,
  id = 'cf-ui-tooltip',
  isVisible = false,
  hideDelay = 0,
  onBlur,
  onFocus,
  onMouseLeave,
  onMouseOver,
  onKeyDown,
  targetWrapperClassName,
  maxWidth = 360,
  testId = 'cf-ui-tooltip',
  placement = 'auto',
  usePortal = false,
  ...otherProps
}: TooltipProps) => {
  const [show, setShow] = useState(isVisible);

  const elementRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);
  const { styles: popperStyles, attributes, forceUpdate } = usePopper(
    elementRef.current,
    popperRef.current,
    {
      placement: placement,
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: arrowRef,
            padding: parseFloat(tokens.borderRadiusSmall),
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  );

  // necessary to update tooltip position in case the content is being updated
  useEffect(() => {
    if (forceUpdate !== null) {
      forceUpdate();
    }
  }, [content, forceUpdate]);

  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const [isHoveringContent, setIsHoveringContent] = useState(false);
  useEffect(() => {
    setShow(isHoveringContent || isHoveringTarget);
  }, [isHoveringTarget, isHoveringContent]);

  const contentMaxWidth =
    typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`;

  const contentStyles: CSSProperties = {
    zIndex: tokens.zIndexTooltip,
    maxWidth: contentMaxWidth,
    ...popperStyles.popper,
  };

  if (!content) {
    return <HtmlTag className={targetWrapperClassName}>{children}</HtmlTag>;
  }

  const tooltip = (
    <Primitive
      as="span"
      id={id}
      ref={popperRef}
      role="tooltip"
      style={contentStyles}
      className={cx(styles.tooltip, className)}
      testId={testId}
      onMouseEnter={() => {
        setIsHoveringContent(true);
      }}
      onMouseLeave={() => {
        setIsHoveringContent(false);
      }}
      {...attributes.popper}
    >
      <Primitive as="span">{content}</Primitive>
      <Primitive
        as="span"
        className={styles.tooltipArrow}
        data-placement={
          attributes.popper && attributes.popper['data-popper-placement']
        }
        ref={setArrowRef}
        style={popperStyles.arrow}
      />
    </Primitive>
  );

  return (
    <>
      {show ? <>{usePortal ? <Portal>{tooltip}</Portal> : tooltip}</> : null}
      <HtmlTag
        ref={elementRef}
        className={cx(styles.tooltipContainer, targetWrapperClassName)}
        onMouseEnter={(evt: MouseEvent) => {
          setIsHoveringTarget(true);
          if (onMouseOver) onMouseOver(evt);
        }}
        onMouseLeave={(evt: MouseEvent) => {
          setTimeout(() => setIsHoveringTarget(false), hideDelay);
          if (onMouseLeave) onMouseLeave(evt);
        }}
        onFocus={(evt: FocusEvent) => {
          setIsHoveringTarget(true);
          if (onFocus) onFocus(evt);
        }}
        onBlur={(evt: FocusEvent) => {
          setTimeout(() => setIsHoveringTarget(false), hideDelay);
          if (onBlur) onBlur(evt);
        }}
        onKeyDown={(evt: KeyboardEvent) => {
          if (evt.key === 'Escape') {
            setTimeout(() => setIsHoveringTarget(false), hideDelay);
          }
          if (onKeyDown) onKeyDown(evt);
        }}
        {...otherProps}
      >
        {React.Children.map<React.ReactNode, React.ReactNode>(
          children,
          (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                'aria-describedby': id,
              });
            }
          },
        )}
      </HtmlTag>
    </>
  );
};
