import { type CommonProps } from '@contentful/f36-core';
import { cx } from 'emotion';
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  type Ref,
} from 'react';
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
  /**
   * Callback fired when a transition starts
   */
  onTransitionStart?: (newState: SliderContentState) => void;
  /**
   * Callback fired when a transition completes
   */
  onTransitionEnd?: (newState: SliderContentState) => void;
  /**
   * Test ID for the component
   */
  testId?: string;
  /**
   * Custom styles for the container
   */
  containerStyle?: React.CSSProperties;
}

function _Slider(props: SliderProps, ref: Ref<HTMLDivElement>) {
  const {
    contentState,
    direction = 'left',
    duration = 1000,
    onTransitionStart,
    onTransitionEnd,
    className,
    testId = 'cf-ui-slider',
    containerStyle,
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

  // Use refs to store latest callbacks to avoid effect re-runs
  const onTransitionStartRef = useRef(onTransitionStart);
  const onTransitionEndRef = useRef(onTransitionEnd);

  // Update refs when callbacks change
  useEffect(() => {
    onTransitionStartRef.current = onTransitionStart;
    onTransitionEndRef.current = onTransitionEnd;
  });

  // Handle content state changes and trigger transitions
  useEffect(() => {
    if (
      contentState &&
      currentState &&
      !isContentStateEqual(contentState, currentState) // TODO: this fixes the button issue because it's causing a "transition", this isn't the permanent fix but it shows the way - it's this area of the code that's controlling the memoisation and causing the issue (perhaps introduce a means to invalidate the memoisation externally?)
    ) {
      // Start transition
      setTransitionDirection(direction);
      setIsTransitioning(true);
      setPreviousState(currentState);
      setCurrentState(contentState);

      onTransitionStartRef.current?.(contentState);
    } else if (contentState && !currentState) {
      // Initial state - no transition needed
      setCurrentState(contentState);
    }
  }, [contentState, currentState, direction]);

  // Separate effect to handle the timeout cleanup
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setTransitionDirection(null);
        setIsTransitioning(false);
        setPreviousState(null);
        // Get the current state from the current state value
        if (currentState) {
          onTransitionEndRef.current?.(currentState);
        }
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
      style={containerStyle}
      {...otherProps}
    >
      {isTransitioning && previousState ? (
        /* Sliding container with both old and new content */
        <div className={styles.slideContainer}>
          {/* Previous content (first position) */}
          <div className={styles.contentSlot}>{previousState.content}</div>
          {/* New content (second position) */}
          <div className={styles.contentSlot}>{currentState.content}</div>
        </div>
      ) : (
        /* Normal static content */
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
 *   onTransitionEnd={() => console.log('Transition complete')}
 * />
 * ```
 */
export const Slider = forwardRef(_Slider);
