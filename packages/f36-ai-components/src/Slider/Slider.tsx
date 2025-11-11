import { type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, { forwardRef, useEffect, useState, type Ref } from 'react';
import { getStyles } from './Slider.styles';

// Simple deep comparison function for SliderContentState
function isContentStateEqual(
  a: SliderContentState | null,
  b: SliderContentState | null,
): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.id !== b.id) return false;

  // For React nodes, we compare by reference since deep comparison
  // of React elements is complex and not reliable
  return a.content === b.content;
}

export type SliderDirection = 'left' | 'right';
export type SliderState = 'idle' | 'transitioning';

export interface SliderContentState {
  /**
   * Unique identifier for this content state
   */
  id: string;
  /**
   * The content to render
   */
  content: React.ReactNode;
}

export interface SliderProps extends CommonProps {
  /**
   * Current content state to display
   */
  contentState?: SliderContentState;
  /**
   * Direction to slide when transitioning between content states
   * - 'left': New content slides in from the left
   * - 'right': New content slides in from the right
   * @default 'left'
   */
  direction?: SliderDirection;
  /**
   * Duration of the transition animation in milliseconds
   * @default 1000
   */
  duration?: number;
}

function _Slider(props: SliderProps, ref: Ref<HTMLDivElement>) {
  const {
    contentState,
    direction = 'left',
    duration = 1000,
    className,
    testId = 'cf-ui-slider',
    ...otherProps
  } = props;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] =
    useState<SliderDirection | null>(null);
  const [previousState, setPreviousState] = useState<SliderContentState | null>(
    null,
  );
  const [currentState, setCurrentState] = useState<SliderContentState | null>(
    contentState || null,
  );

  useEffect(() => {
    if (
      contentState &&
      currentState &&
      !isContentStateEqual(contentState, currentState)
    ) {
      setTransitionDirection(direction);
      setIsTransitioning(true);
      setPreviousState(currentState);
      setCurrentState(contentState);
    } else if (contentState && !currentState) {
      setCurrentState(contentState);
    }
  }, [contentState, currentState, direction]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setTransitionDirection(null);
        setIsTransitioning(false);
        setPreviousState(null);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isTransitioning, duration, currentState]);

  const styles = getStyles({
    isTransitioning,
    transitionDirection,
    duration,
  });

  if (!currentState) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cx(styles.root, className)}
      data-testid={testId}
      {...otherProps}
    >
      {isTransitioning && previousState ? (
        <div className={styles.slideContainer}>
          <div className={styles.contentSlot}>{previousState.content}</div>
          <div className={styles.contentSlot}>{currentState.content}</div>
        </div>
      ) : (
        <div className={styles.staticContent}>{currentState.content}</div>
      )}
    </div>
  );
}

/**
 * Slider provides smooth sliding transitions between different content states.
 *
 * It manages the transition animations when the contentState changes, sliding
 * the new content in from the specified direction while sliding the old content out.
 *
 * Usage:
 * ```tsx
 * const [state, setState] = useState({
 *   id: 'view1',
 *   content: <div>View 1 Content</div>
 * });
 *
 * <Slider
 *   contentState={state}
 *   direction="right"
 * />
 * ```
 */
export const Slider = forwardRef(_Slider);
