import React from 'react';
import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { useMergeRefs } from '@floating-ui/react';
import type {
  CommonProps,
  ExpandProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import { useInlineConfigurationPopoverContext } from '../InlineConfigurationPopoverContext';

const getStyles = () => ({
  root: css({
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingS,
    flex: '1 1 auto',
    minHeight: 0,
    padding: tokens.spacingM,
    overflowY: 'auto',
  }),
});

export type InlineConfigurationPopoverBodyProps = PropsWithHTMLElement<
  CommonProps & { children?: React.ReactNode },
  'div'
>;

/**
 * The settings. It scrolls when the popover reaches its maximum height.
 * Its first focusable element receives focus when the popover opens.
 */
export const InlineConfigurationPopoverBody = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverBodyProps>
>(function InlineConfigurationPopoverBody(
  {
    children,
    className,
    testId = 'cf-ui-inline-configuration-popover-body',
    ...otherProps
  },
  forwardedRef,
) {
  const { bodyRef } = useInlineConfigurationPopoverContext(
    'InlineConfigurationPopover.Body',
  );
  const ref = useMergeRefs([bodyRef, forwardedRef]);
  const styles = getStyles();

  return (
    <div
      {...otherProps}
      ref={ref}
      className={cx(styles.root, className)}
      data-test-id={testId}
    >
      {children}
    </div>
  );
});
