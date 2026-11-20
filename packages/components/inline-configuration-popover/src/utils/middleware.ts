import type { Middleware, Placement } from '@floating-ui/react';
import type { Offset } from '../InlineConfigurationPopoverContext';

/**
 * Adds the offset people dragged the popover by to the computed position.
 *
 * Because the drag offset is part of the position Floating UI computes (and
 * not a second transform on an inner element), `autoUpdate` keeps a dragged
 * popover moving with its anchor while the list scrolls, and `size()` and
 * `hide()` keep working.
 *
 * The offset is passed as `options` so that `useFloating` notices the change:
 * it compares middleware deeply, and treats two functions with the same
 * source as equal.
 */
export function dragOffset(offset: Offset): Middleware {
  return {
    name: 'dragOffset',
    options: offset,
    fn: ({ x, y }) => ({ x: x + offset.x, y: y + offset.y }),
  };
}

const OPPOSITE_SIDE = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
} as const;

/**
 * Fallbacks for `flip()`: first the other alignment on the same side (so
 * `left-start` becomes `left-end` near the bottom of the viewport, level with
 * the row), then the opposite side.
 */
export function getFallbackPlacements(placement: Placement): Placement[] {
  const [side, alignment] = placement.split('-') as [
    keyof typeof OPPOSITE_SIDE,
    'start' | 'end' | undefined,
  ];
  const opposite = OPPOSITE_SIDE[side];
  const otherAlignment =
    alignment === 'start' ? 'end' : alignment === 'end' ? 'start' : undefined;

  const placements: Placement[] = [];

  if (otherAlignment) {
    placements.push(`${side}-${otherAlignment}`);
  }
  placements.push(alignment ? `${opposite}-${alignment}` : opposite);
  if (otherAlignment) {
    placements.push(`${opposite}-${otherAlignment}`);
  }

  return placements;
}
