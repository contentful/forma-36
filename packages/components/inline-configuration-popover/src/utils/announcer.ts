/**
 * A single polite live region shared by every InlineConfigurationPopover on the page.
 *
 * It lives at the end of `document.body`, outside the popover, so that:
 * - it exists before the first message is written (screen readers ignore
 *   live regions that are inserted together with their content),
 * - a message written right before the popover closes (e.g. after "Reset")
 *   is still read, because the region is not unmounted with the popover,
 * - it stays exposed while the popover is open: Floating UI's modal focus
 *   manager hides everything outside the dialog from assistive technology
 *   but skips `[aria-live]` elements.
 */

export const ANNOUNCER_TEST_ID = 'cf-ui-inline-configuration-popover-announcer';

const ANNOUNCE_DELAY = 100;
const CLEAR_DELAY = 5000;

let region: HTMLElement | null = null;
let consumers = 0;
let isBusy = false;
let announceTimeout: ReturnType<typeof setTimeout> | undefined;
let clearTimeoutId: ReturnType<typeof setTimeout> | undefined;

function createRegion(doc: Document) {
  const element = doc.createElement('div');
  element.setAttribute('role', 'status');
  element.setAttribute('aria-live', 'polite');
  element.setAttribute('aria-atomic', 'true');
  element.setAttribute('data-test-id', ANNOUNCER_TEST_ID);
  // Same rules as ScreenReaderOnly from @contentful/f36-core
  Object.assign(element.style, {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  });
  doc.body.appendChild(element);
  return element;
}

function getRegion(doc: Document = document) {
  if (!region || !region.isConnected) {
    region = createRegion(doc);
  }
  return region;
}

/** Removes the region once nothing uses it and no message is pending */
function removeRegionWhenIdle() {
  if (consumers > 0 || isBusy) {
    return;
  }
  region?.remove();
  region = null;
}

/**
 * Registers a consumer of the live region and creates it when needed.
 * Returns a cleanup function. The region is removed after its last consumer
 * unmounts, but not before a pending message has been read and cleared, so
 * an action that announces and then removes its own row is still heard.
 */
export function mountAnnouncer(doc: Document = document) {
  consumers += 1;
  getRegion(doc);

  return () => {
    consumers = Math.max(0, consumers - 1);
    removeRegionWhenIdle();
  };
}

/**
 * Writes a message to the live region. The region is emptied first and the
 * message is written on the next tick, so repeating the same message is read
 * again. The message is cleared after a few seconds so it isn't found later
 * when people browse the page.
 */
export function announce(message: string) {
  // Normally the region already exists. If it doesn't (e.g. the last popover
  // unmounted before this call), it's created now, ahead of the delayed
  // write, which screen readers still pick up.
  const target = getRegion(region?.ownerDocument);
  isBusy = true;
  clearTimeout(announceTimeout);
  clearTimeout(clearTimeoutId);
  target.textContent = '';

  announceTimeout = setTimeout(() => {
    target.textContent = message;
    clearTimeoutId = setTimeout(() => {
      target.textContent = '';
      isBusy = false;
      removeRegionWhenIdle();
    }, CLEAR_DELAY);
  }, ANNOUNCE_DELAY);
}
