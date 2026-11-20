import React from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';
import { getElementRef } from '../utils/getElementRef';

export interface InlineConfigurationPopoverAnchorProps {
  /**
   * A single element that accepts a `ref`, usually the row that contains the
   * trigger. The popover lines up with it instead of the trigger.
   */
  children: React.ReactElement;
}

/**
 * Positions the popover next to an element other than the trigger, such as
 * the whole row of a list, while the trigger button keeps focus handling and
 * ARIA. Pressing the anchor doesn't count as an outside press.
 */
export const InlineConfigurationPopoverAnchor = React.forwardRef<
  HTMLElement,
  InlineConfigurationPopoverAnchorProps
>(function InlineConfigurationPopoverAnchor({ children }, forwardedRef) {
  const { setPositionReference, setAnchorElement } =
    useInlineConfigurationPopoverContext('InlineConfigurationPopover.Anchor');
  const isValidChild = React.isValidElement(children);
  const childRef = isValidChild ? getElementRef(children) : undefined;
  const ref = useMergeRefs([
    setPositionReference,
    setAnchorElement,
    forwardedRef,
    childRef,
  ]);

  if (!isValidChild) {
    // eslint-disable-next-line no-console
    console.error(
      'InlineConfigurationPopover.Anchor expects a single React element as its child.',
    );
    return null;
  }

  return React.cloneElement(children as React.ReactElement<{ ref?: unknown }>, {
    ref,
  });
});
