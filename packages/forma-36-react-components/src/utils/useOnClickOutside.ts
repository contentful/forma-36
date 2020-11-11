import { RefObject, useEffect, useRef } from 'react';

/**
 * Runs the given handler when a click event is fired outside the HTMLElement
 * the given RefObject points to.
 *
 * @param refs - RefObject[] pointing to a HTMLElement to track clicks outside
 * @param handler - Event handler to run on click outside
 */
export function useOnClickOutside(
  refs: React.RefObject<HTMLElement>[],
  handler: (event: MouseEvent) => void | null,
) {
  const noHandler = !handler;
  const handlerRef = useRef(handler);

  useEffect(() => {
    if (noHandler) {
      return;
    }

    const refContains = (ref:RefObject<HTMLElement>, node: Node) =>
      ref.current && ref.current.contains(node)
    const listener = (event: MouseEvent) => {
      if (
        !handlerRef.current ||
        refs.some((ref) => refContains(ref, event.target as Node))
      ) {
        return;
      }

      handlerRef.current(event);
    };

    document.addEventListener('click', listener, {});

    return () => {
      document.removeEventListener('click', listener, {});
    };
  }, [noHandler, refs]);
}
