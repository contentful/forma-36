import { isFocusable, tabbable, type CheckOptions } from 'tabbable';

/**
 * Same options Floating UI's focus manager uses. Layout-based visibility
 * checks need a real browser: jsdom has no layout, so it would report every
 * element as hidden.
 */
function getOptions(): CheckOptions {
  return {
    getShadowRoot: true,
    displayCheck:
      typeof ResizeObserver === 'function' &&
      ResizeObserver.toString().includes('[native code]')
        ? 'full'
        : 'none',
  };
}

/**
 * Whether `element` can receive focus: it's connected and not disabled
 * (including by a disabled fieldset), inert, hidden or collapsed.
 */
export function canFocus(element: Element | null | undefined) {
  return Boolean(
    element && element.isConnected && isFocusable(element, getOptions()),
  );
}

/**
 * Returns the first element in `container` that can be reached with Tab.
 */
export function getFirstTabbable(container: HTMLElement | null) {
  if (!container) {
    return null;
  }

  return (tabbable(container, getOptions())[0] as HTMLElement) ?? null;
}
