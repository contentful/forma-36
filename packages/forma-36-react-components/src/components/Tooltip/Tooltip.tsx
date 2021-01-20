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
import cn from 'classnames';
import type * as CSS from 'csstype';

import styles from './Tooltip.css';
import tokens from '@contentful/forma-36-tokens';
import Portal from '../Portal';

export type TooltipPlace = Placement;

export interface TooltipProps {
  /**
   * Child nodes to be rendered in the component and that will show the tooltip when they are hovered
   */
  children: React.ReactNode;
  /**
   * Class names to be appended to the className prop of the Tooltip wrapper
   */
  className?: string;
  /**
   * HTML element used to wrap the target of the Tooltip
   */
  containerElement?: React.ElementType;
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
   * It sets the "preferred" position of the Tooltip
   */
  place?: TooltipPlace;
  /**
   * Class names to be appended to the className prop of the Tooltip’s target
   */
  targetWrapperClassName?: string;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
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
  containerElement: ContainerElement = 'span',
  content,
  id,
  isVisible = false,
  hideDelay = 0,
  onBlur,
  onFocus,
  onMouseLeave,
  onMouseOver,
  targetWrapperClassName,
  maxWidth = 360,
  testId = 'cf-ui-tooltip',
  place = 'auto',
  usePortal = false,
  ...otherProps
}: TooltipProps) => {
  const [show, setShow] = useState(false);

  const elementRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);
  const { styles: popperStyles, attributes, forceUpdate } = usePopper(
    elementRef.current,
    popperRef.current,
    {
      placement: place,
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

  useEffect(() => {
    if (isVisible) setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contentMaxWidth =
    typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`;

  const contentStyles: CSSProperties = {
    zIndex: tokens.zIndexTooltip,
    maxWidth: contentMaxWidth,
    ...popperStyles.popper,
  };

  if (!content) {
    return (
      <ContainerElement className={targetWrapperClassName}>
        {children}
      </ContainerElement>
    );
  }

  const tooltip = (
    <span
      id={id}
      ref={popperRef}
      role="tooltip"
      style={contentStyles}
      className={cn(styles.Tooltip, className)}
      data-test-id={testId}
      onMouseEnter={() => {
        setIsHoveringContent(true);
      }}
      onMouseLeave={() => {
        setIsHoveringContent(false);
      }}
      {...attributes.popper}
    >
      <span>{content}</span>
      <span
        className={styles['Tooltip__arrow']}
        data-placement={
          attributes.popper && attributes.popper['data-popper-placement']
        }
        ref={setArrowRef}
        style={popperStyles.arrow}
      />
    </span>
  );

  return (
    <>
      <ContainerElement
        ref={elementRef}
        className={targetWrapperClassName}
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
        {...otherProps}
      >
        {children}
      </ContainerElement>

      {show ? <>{usePortal ? <Portal>{tooltip}</Portal> : tooltip}</> : null}
    </>
  );
};

export default Tooltip;
