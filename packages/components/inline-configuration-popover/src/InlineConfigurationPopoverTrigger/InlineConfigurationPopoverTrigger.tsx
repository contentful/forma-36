import React from 'react';
import { cx } from '@emotion/css';
import { useMergeRefs } from '@floating-ui/react';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';
import { getElementRef } from '../utils/getElementRef';
import { registerTrigger, warnAboutTriggerName } from '../utils/accessibleName';

export interface InlineConfigurationPopoverTriggerProps {
  /**
   * A single interactive element that accepts a `ref`, such as `Button`,
   * `ToggleButton` or `IconButton`. Pass a function to style it by state,
   * e.g. `({ isOpen }) => <ToggleButton isActive={isOpen} … />`.
   *
   * Its accessible name must say which item it opens, for example
   * `aria-label="Edit parameter Blog post"` on a button that reads "Edit".
   *
   * Pass the button itself, not a wrapper: to add a `Tooltip`, put it
   * outside, as in `<Tooltip><InlineConfigurationPopover.Trigger><IconButton />`.
   */
  children:
    React.ReactElement | ((state: { isOpen: boolean }) => React.ReactElement);
}

/**
 * Opens and closes the popover on click, and on Enter or Space when it has
 * focus. It gets `aria-haspopup="dialog"`, `aria-expanded` and
 * `aria-controls`. It's a disclosure, so `aria-pressed` is removed.
 *
 * The popover owns the open state: `onToggle` of a `ToggleButton` isn't
 * called. Use `onOpen` and `onClose` on `InlineConfigurationPopover` instead.
 *
 * Props passed to the trigger itself, e.g. by a `Tooltip` around it, are
 * forwarded to the child: event handlers are chained, `className` and
 * `aria-describedby` are combined.
 */
export const InlineConfigurationPopoverTrigger = React.forwardRef<
  HTMLElement,
  InlineConfigurationPopoverTriggerProps
>(function InlineConfigurationPopoverTrigger(
  { children, ...forwardedProps },
  forwardedRef,
) {
  const { isOpen, dialogId, setReference, getReferenceProps } =
    useInlineConfigurationPopoverContext('InlineConfigurationPopover.Trigger');
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  const child =
    typeof children === 'function' ? children({ isOpen }) : children;
  const isValidChild = React.isValidElement(child);
  const childRef = isValidChild ? getElementRef(child) : undefined;
  const ref = useMergeRefs<HTMLElement>([
    setReference,
    setElement,
    forwardedRef,
    childRef,
  ]);

  React.useEffect(() => registerTrigger(element), [element]);

  // Checked after every render, because the name often changes with the
  // state ("Set" becomes "Edit"). Each name is reported once.
  React.useEffect(() => {
    warnAboutTriggerName(element);
  });

  if (!isValidChild) {
    // eslint-disable-next-line no-console
    console.error(
      'InlineConfigurationPopover.Trigger expects a single React element as its child.',
    );
    return null;
  }

  const childProps = mergeProps(
    child.props as Record<string, unknown>,
    forwardedProps as Record<string, unknown>,
  );

  return React.cloneElement(
    child,
    getReferenceProps({
      ...childProps,
      ref,
      'aria-haspopup': 'dialog',
      'aria-expanded': isOpen,
      'aria-controls': isOpen ? dialogId : undefined,
      'aria-pressed': undefined,
    } as React.HTMLProps<Element>) as Record<string, unknown>,
  );
});

/**
 * Merges props given to the trigger (e.g. by a Tooltip around it) into the
 * child's own props.
 */
function mergeProps(
  childProps: Record<string, unknown>,
  extraProps: Record<string, unknown>,
) {
  const merged: Record<string, unknown> = { ...childProps };

  Object.entries(extraProps).forEach(([key, value]) => {
    const own = childProps[key];

    if (
      /^on[A-Z]/.test(key) &&
      typeof own === 'function' &&
      typeof value === 'function'
    ) {
      merged[key] = (...args: unknown[]) => {
        own(...args);
        value(...args);
      };
    } else if (key === 'className' && own && value) {
      merged[key] = cx(own as string, value as string);
    } else if (key === 'aria-describedby' && own && value) {
      merged[key] = `${own} ${value}`;
    } else if (value !== undefined) {
      merged[key] = value;
    }
  });

  return merged;
}
