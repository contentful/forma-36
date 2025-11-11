import { type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
  type Ref,
} from 'react';
import { getStyles } from './Slider.styles';

function isContentEqual(
  a: { key: string; children: React.ReactNode } | null,
  b: { key: string; children: React.ReactNode } | null,
): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.key === b.key;
}

export type SliderDirection = 'left' | 'right';
export type SliderState = 'idle' | 'transitioning';

export interface SliderProps extends CommonProps {
  /**
   * The content to display
   */
  children?: React.ReactNode;
  /**
   * Unique key to track content changes and trigger transitions
   */
  slideKey: string;
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
    children,
    slideKey,
    direction = 'left',
    duration = 1000,
    className,
    testId = 'cf-ui-slider',
    ...otherProps
  } = props;

  type ContentState = { key: string; children: React.ReactNode } | null;

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] =
    useState<SliderDirection | null>(null);
  const [previousState, setPreviousState] = useState<ContentState>(null);
  const [currentState, setCurrentState] = useState<ContentState>(
    slideKey !== undefined ? { key: slideKey, children } : null,
  );

  const newContentState = useMemo(
    () => (slideKey !== undefined ? { key: slideKey, children } : null),
    [children, slideKey],
  );

  useEffect(() => {
    if (
      newContentState &&
      currentState &&
      !isContentEqual(newContentState, currentState)
    ) {
      setTransitionDirection(direction);
      setIsTransitioning(true);
      setPreviousState(currentState);
      setCurrentState(newContentState);
    } else {
      setCurrentState(newContentState);
    }
  }, [newContentState, currentState, direction]);

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
      {...{ ['data-test-id']: testId }}
      {...otherProps}
    >
      {isTransitioning && previousState ? (
        <div className={styles.slideContainer}>
          <div className={styles.contentSlot}>{previousState.children}</div>
          <div className={styles.contentSlot}>{currentState.children}</div>
        </div>
      ) : (
        <div className={styles.staticContent}>{currentState.children}</div>
      )}
    </div>
  );
}

/**
 * Slider provides smooth sliding transitions between different content states.
 *
 * It manages the transition animations when the slideKey prop changes, sliding
 * the new content in from the specified direction while sliding the old content out.
 *
 * Usage:
 * ```tsx
 * const [slideKey, setSlideKey] = useState('view1');
 * <Slider
 *   slideKey={slideKey}
 *   direction="right"
 * >
 *   {content}
 * </Slider>
 * ```
 */
export const Slider = forwardRef(_Slider);
