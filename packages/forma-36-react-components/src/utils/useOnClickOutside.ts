import { useEffect, useRef } from 'react';

/**
 * Runs the given handler when a click event is fired outside the HTMLElement
 * the given RefObject points to.
 *
 * @param ref - RefObject pointing to a HTMLElement to track clicks outside
 * @param handler - Event handler to run on click outside
 */
export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void | null,
) {
  const noHandler = !handler;
  const handlerRef = useRef(handler);

  useEffect(() => {
    if (noHandler) {
      return;
    }

    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        !handlerRef.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      handlerRef.current(event);
    };

    document.addEventListener('click', listener, {});

    return () => {
      document.removeEventListener('click', listener, {});
    };
  }, [noHandler, ref]);
}
