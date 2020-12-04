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
}

interface ArrowPositionState {
  top: string;
  left: string;
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
  ...otherProps
}: TooltipProps) => {
  const [show, setShow] = useState(false);
  const [arrowPosition, setArrowPosition] = useState<ArrowPositionState>(
    getArrowPosition('bottom'),
  );

  const elementRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLSpanElement | null>(null);
  const { styles: popperStyles, attributes, forceUpdate } = usePopper(
    elementRef.current,
    popperRef.current,
    {
      placement: place,
      modifiers: [
        { name: 'arrow', options: { element: arrowRef } },
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

  useEffect(() => {
    if (attributes.popper) {
      const newPosition = getArrowPosition(
        attributes.popper['data-popper-placement'],
      );
      setArrowPosition(newPosition);
    }
  }, [attributes.popper]);

  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  const [isHoveringContent, setIsHoveringContent] = useState(false);
  useEffect(() => {
    setShow(isHoveringContent || isHoveringTarget);
  }, [isHoveringTarget, isHoveringContent]);

  useEffect(() => {
    if (isVisible) setShow(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const arrowStyles = {
    ...popperStyles.arrow,
    ...arrowPosition,
    transform: 'rotate(45deg)',
  };

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

  // const delay = !hideDelay ? (closeOnMouseLeave ? 0 : 300) : hideDelay;

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

      {show && (
        <span
          id={id}
          ref={popperRef}
          aria-hidden={show ? 'true' : 'false'}
          role="tooltip"
          style={contentStyles}
          className={cn(styles.Tooltip, className, {
            [styles['Tooltip--hidden']]: !show,
          })}
          data-test-id={testId}
          onMouseEnter={() => {
            setIsHoveringContent(true);
          }}
          onMouseLeave={() => {
            setIsHoveringContent(false);
          }}
          {...attributes.popper}
        >
          {content}
          <span
            ref={setArrowRef}
            style={arrowStyles}
            className={styles.Tooltip__arrow}
          />
        </span>
      )}
    </>
  );
};

function getArrowPosition(popperPlacement: string) {
  const centered = 'calc(50% - 5px)';
  const oppositeToThisSide = 'calc(100% - 5px)';
  const atThisSide = '-5px';
  const atStart = '10px';
  const atEnd = 'calc(100% - 20px)';

  // the arrow is 10x10, that's why we need the -5px to correct its center
  switch (popperPlacement) {
    case 'top':
      return { top: oppositeToThisSide, left: centered }; // arrow will be V
    case 'top-start':
      return { top: oppositeToThisSide, left: atStart };
    case 'top-end':
      return { top: oppositeToThisSide, left: atEnd };
    case 'right':
      return { top: centered, left: atThisSide }; // arrow will be <
    case 'right-start':
      return { top: atStart, left: atThisSide };
    case 'right-end':
      return { top: atEnd, left: atThisSide };
    case 'left':
      return { top: centered, left: oppositeToThisSide }; // arrow will be >
    case 'left-start':
      return { top: atStart, left: oppositeToThisSide };
    case 'left-end':
      return { top: atEnd, left: oppositeToThisSide };
    case 'bottom-start':
      return { top: atThisSide, left: atStart }; // arrow will be ^
    case 'bottom-end':
      return { top: atThisSide, left: atEnd };
    default:
      return { top: atThisSide, left: centered };
  }
}

export default Tooltip;
