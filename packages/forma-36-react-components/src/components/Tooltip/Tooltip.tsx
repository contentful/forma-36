import React, { useEffect, useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';

import styles from './Tooltip.css';

export type TooltipPlace = 'top' | 'bottom' | 'right' | 'left';

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerElement?: any;
  /**
   * Content of the Tooltip
   */
  content: React.ReactNode;
  id?: string;
  /**
   * It controls the initial visibility of the Tooltip
   */
  isVisible?: boolean;
  /**
   * It sets a max-width for the Tooltip
   */
  maxWidth?: number | string;
  onBlur?: Function;
  onFocus?: Function;
  onMouseLeave?: Function;
  onMouseOver?: Function;
  /**
   * (deprecated) Old prop used to control the position of the Tooltip
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
  containerElement: ContainerElement,
  content,
  id,
  isVisible,
  maxWidth,
  targetWrapperClassName,
  testId,
}: TooltipProps) => {
  const [show, setShow] = useState(isVisible);
  const [arrowPosition, setArrowPosition] = useState<ArrowPositionState>(
    getArrowPosition('bottom'),
  );

  const elementRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);
  const { styles: popperStyles, attributes, forceUpdate } = usePopper(
    elementRef.current,
    popperRef.current,
    {
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

  const arrowStyles = {
    ...popperStyles.arrow,
    ...arrowPosition,
    transform: 'rotate(45deg)',
  };

  const widthStyle = maxWidth
    ? {
        maxWidth: typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`,
      }
    : {};

  return (
    <>
      <ContainerElement
        ref={elementRef}
        className={targetWrapperClassName}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </ContainerElement>

      {show && (
        <div
          id={id}
          ref={popperRef}
          aria-hidden={show ? 'true' : 'false'}
          role="tooltip"
          style={{ ...popperStyles.popper, ...widthStyle }}
          className={cn(styles.Tooltip, className, {
            [styles['Tooltip--hidden']]: !show,
          })}
          data-test-id={testId}
          {...attributes.popper}
        >
          {content}
          <div
            ref={setArrowRef}
            style={arrowStyles}
            className={styles.Tooltip__arrow}
          />
        </div>
      )}
    </>
  );
};
Tooltip.defaultProps = {
  containerElement: 'span',
  isVisible: false,
  maxWidth: 360,
  testId: 'cf-ui-tooltip',
};

function getArrowPosition(popperPlacement: string) {
  // the arrow is 10x10, that's why we need the -5px to correct its center
  switch (popperPlacement) {
    case 'top':
      return { top: 'calc(100% - 5px)', left: 'calc(50% - 5px)' }; // arrow will be V
    case 'right':
      return { top: 'calc(50% - 5px)', left: '-5px' }; // arrow will be <
    case 'left':
      return { top: 'calc(50% - 5px)', left: 'calc(100% - 5px)' }; // arrow will be >
    default:
      return { top: '-5px', left: 'calc(50% - 5px)' }; // arrow will be ^
  }
}

export default Tooltip;
