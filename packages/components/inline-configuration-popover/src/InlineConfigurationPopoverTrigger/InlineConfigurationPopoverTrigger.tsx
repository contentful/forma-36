import React from 'react';
import { cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { useMergeRefs } from '@floating-ui/react';
import { ToggleButton, type ToggleButtonProps } from '@contentful/f36-button';
import type {
  CommonProps,
  ExpandProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';
import { registerTrigger, warnAboutTriggerName } from '../utils/accessibleName';
import { getStyles } from './InlineConfigurationPopoverTrigger.styles';

interface InlineConfigurationPopoverTriggerInternalProps extends CommonProps {
  /**
   * Visible label, e.g. "Set", "Override" or "Edit". Leave it out for an
   * icon-only trigger.
   */
  children?: React.ReactNode;
  /**
   * Accessible name. It must start with the visible label and say which item
   * it opens, e.g. "Edit parameter Blog post" for a trigger that reads "Edit".
   */
  'aria-label': string;
  /**
   * Icon before the label, or the only content of an icon-only trigger
   */
  icon?: React.ReactElement;
  /**
   * Size of the button
   *
   * @default small
   */
  size?: ToggleButtonProps['size'];
  /**
   * Disables the trigger, so the popover can't be opened. It doesn't close
   * an open popover: close it before you disable its trigger, or focus can't
   * return to the trigger.
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Id of an element that describes the trigger, e.g. the row's summary
   * line, so the current setting is read with it. Unlike `aria-describedby`,
   * it's kept when a `Tooltip` around the trigger adds its own description.
   */
  describedBy?: string;
}

export type InlineConfigurationPopoverTriggerProps = PropsWithHTMLElement<
  InlineConfigurationPopoverTriggerInternalProps,
  'button',
  | 'type'
  | 'disabled'
  // The popover owns the open state: use onOpen and onClose on it
  | 'onToggle'
  | 'aria-pressed'
  | 'aria-expanded'
  | 'aria-haspopup'
  | 'aria-controls'
>;

/**
 * A transparent `ToggleButton` that opens and closes the popover on click,
 * and on Enter or Space when it has focus. It shows as active while the
 * popover is open; the row around it doesn't change.
 *
 * It's a disclosure: it gets `aria-haspopup="dialog"`, `aria-expanded` and
 * `aria-controls`, and no `aria-pressed`. Use `onOpen` and `onClose` on
 * `InlineConfigurationPopover` to follow the open state.
 *
 * Other props, e.g. from a `Tooltip` around it, are passed to the button:
 * event handlers are chained with the popover's own.
 */
export const InlineConfigurationPopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  ExpandProps<InlineConfigurationPopoverTriggerProps>
>(function InlineConfigurationPopoverTrigger(props, forwardedRef) {
  const {
    children,
    icon,
    size = 'small',
    isDisabled = false,
    describedBy,
    className,
    testId = 'cf-ui-inline-configuration-popover-trigger',
    ...otherProps
  } = props;
  const { isOpen, dialogId, setReference, getReferenceProps } =
    useInlineConfigurationPopoverContext('InlineConfigurationPopover.Trigger');
  const [element, setElement] = React.useState<HTMLButtonElement | null>(null);
  const ref = useMergeRefs<HTMLButtonElement>([
    setReference,
    setElement,
    forwardedRef,
  ]);
  const styles = getStyles();

  React.useEffect(() => registerTrigger(element), [element]);

  // Checked after every render, because the name often changes with the
  // state ("Set" becomes "Edit"). Each name is reported once.
  React.useEffect(() => {
    warnAboutTriggerName(element);
  });

  // Without a border, the active icon carries the open state in the primary
  // color, as in ToggleButton's transparent variant. An explicit color is kept.
  const startIcon =
    isOpen &&
    React.isValidElement<{ color?: string }>(icon) &&
    !icon.props.color
      ? React.cloneElement(icon, { color: tokens.colorPrimary })
      : icon;

  // A Tooltip around the trigger replaces aria-describedby with its own id,
  // so describedBy is joined with it here
  const ariaDescribedBy =
    [describedBy, otherProps['aria-describedby']].filter(Boolean).join(' ') ||
    undefined;

  const referenceProps = getReferenceProps({
    ...otherProps,
    ref,
    'aria-describedby': ariaDescribedBy,
    'aria-haspopup': 'dialog',
    'aria-expanded': isOpen,
    'aria-controls': isOpen ? dialogId : undefined,
    // ToggleButton sets aria-pressed; a disclosure must not have it
    'aria-pressed': undefined,
  } as React.HTMLProps<Element>);

  return (
    <ToggleButton
      {...(referenceProps as Record<string, unknown>)}
      size={size}
      icon={startIcon}
      isActive={isOpen}
      isDisabled={isDisabled}
      // The popover owns the open state: its click handler replaces this one
      onToggle={noop}
      className={cx(styles.root, className)}
      testId={testId}
    >
      {children}
    </ToggleButton>
  );
});

InlineConfigurationPopoverTrigger.displayName =
  'InlineConfigurationPopoverTrigger';

function noop() {}
