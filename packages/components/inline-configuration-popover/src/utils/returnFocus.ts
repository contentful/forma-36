/**
 * Keeps focus on the trigger after the popover closes on a press outside it
 * that lands on something that can't take focus, such as a blank area.
 *
 * Floating UI closes the popover on `pointerdown` and returns focus to the
 * trigger. The browser then runs the default action of the `mousedown` that
 * follows, which moves focus to the pressed element or, when it can't take
 * focus, to `<body>`. Once that has happened, move focus from `<body>` back
 * to the trigger. A press on something that can take focus, such as another
 * row's button, keeps focus there.
 *
 * `getReturnElement` is read after the press and returns `null` when focus
 * shouldn't move, e.g. because the popover stayed open.
 */
export function returnFocusAfterOutsidePress(
  event: Event | undefined,
  getReturnElement: () => Element | null,
) {
  const target = event?.target as Node | null | undefined;
  const doc = target?.ownerDocument;
  const win = doc?.defaultView;
  if (!event || !target || !doc || !win) {
    return;
  }

  const restore = () => {
    const element = getReturnElement() as HTMLElement | null;
    const active = doc.activeElement;
    if (
      element?.isConnected &&
      typeof element.focus === 'function' &&
      (!active || active === doc.body)
    ) {
      element.focus({ preventScroll: true });
    }
  };

  if (event.type !== 'pointerdown') {
    // A mousedown or click: its default action has run by the next task
    win.setTimeout(restore);
    return;
  }

  // With touch, the compatibility mousedown follows pointerup. It doesn't
  // come at all when the page cancels it or the press turns into a scroll;
  // then focus stays on the trigger and the next press stops the wait.
  const handleMouseDown = (mouseEvent: MouseEvent) => {
    stop();
    if (mouseEvent.target === target) {
      win.setTimeout(restore);
    }
  };
  const handleNextPointerDown = (pointerEvent: Event) => {
    if (pointerEvent !== event) {
      stop();
    }
  };
  function stop() {
    doc?.removeEventListener('mousedown', handleMouseDown, true);
    doc?.removeEventListener('pointerdown', handleNextPointerDown, true);
  }

  doc.addEventListener('mousedown', handleMouseDown, true);
  doc.addEventListener('pointerdown', handleNextPointerDown, true);
}
