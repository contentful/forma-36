import { Modifier } from '@popperjs/core';

/**
 * Sets the popover width to the size of the trigger element.
 */
export const sameWidth: Modifier<'sameWidth', any> = {
  name: 'sameWidth',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => () => {
    const reference = state.elements.reference as HTMLElement;
    state.elements.popper.style.width = `${reference.offsetWidth}px`;
  },
};
