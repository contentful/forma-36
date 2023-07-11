import { useEffect, useCallback, MutableRefObject, useRef } from 'react';

export interface UseKeyboardProps {
  /**
   * Object of key names and handlers defines which key to look for i.e. `ArrowUp`, `Escape`, `Shift`
   * value is a callback function to be called when key matches
   */
  keys: {
    [key: string]: (e: KeyboardEvent) => void;
  };
  /**
   * Defines the attached event type
   * @default 'keydown'
   */
  event?: 'keyup' | 'keypress' | 'keydown';

  /**
   * React reference to attach the event to its current element
   */
  ref?: MutableRefObject<HTMLElement>;
}

/**
 *
 * @description hook to attach a handler keyboard event listener to `document` or `HTMLElements` with garbage collection
 * @example
 * useKeyboard({
 *  event: 'keydown', // Optional, default is `keydown`
 *  ref: yourReactRef, // Optional, by default event is attached to document
 *  keys: {
 *    ArrowUp: (e) => handleArrowUp(e),
 *    Tab: (e) => handleTab(e)
 *  }
 * })
 */
export const useKeyboard = (props: UseKeyboardProps) => {
  const { ref, keys, event = 'keydown' } = props;
  const element = useRef<HTMLElement | Document>(document);

  const handleKeyEvent = useCallback(
    (e) => {
      const isKey = Object.prototype.hasOwnProperty.call(keys, e.key);
      if (isKey) {
        keys[e.key](e);
      }
    },
    [keys],
  );

  useEffect(() => {
    if (ref && ref.current) {
      element.current = ref.current;
    }

    element.current.addEventListener(event, handleKeyEvent);

    return () => {
      element.current.removeEventListener(event, handleKeyEvent);
    };
  }, [event, handleKeyEvent, ref]);
};
