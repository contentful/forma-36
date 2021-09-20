import { useState, useEffect, useCallback } from 'react';

export interface UseKeyboardProps {
  /**
   * @description defines which element is the event attached to
   * @default document
   */
  ref?: Document | Window | HTMLElement;
  /**
   * @description defines which key to look for i.e. `ArrowUp`, `Escape`, `Shift`
   */
  key: KeyboardEvent['key'];
  /**
   * @description defines the attached event type
   * @default 'keyup'
   */
  event?: 'keyup' | 'keypress' | 'keydown';
  /**
   * @description callback function to be called when key is matched
   */
  handler?: (e: KeyboardEvent) => void;
}

/**
 *
 * @description hook to attach a handler keyboard event listener with garbage collection
 * @example useKeyboard({key: 'ArrowUp', ref: document, handler: yourHandlerFunction})
 * @returns boolean
 */
export const useKeyboard = (props: UseKeyboardProps) => {
  const { ref = document, key, event = 'keyup', handler } = props;
  const [isKey, setIsKey] = useState(false);

  const handleKeyEvent = useCallback(
    (e) => {
      if (e.key === key) {
        setIsKey(true);
        if (handler) {
          handler(e);
        }
      }
      setIsKey(false);
    },
    [key, handler],
  );

  useEffect(() => {
    ref.addEventListener(event, handleKeyEvent);
    return () => {
      ref.removeEventListener(event, handleKeyEvent);
    };
  }, [ref, event, handleKeyEvent]);

  return isKey;
};
