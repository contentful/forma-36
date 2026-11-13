import React from 'react';
import { css, cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type {
  CommonProps,
  ExpandProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';

const getStyles = () => ({
  root: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
    flexShrink: 0,
    padding: `${tokens.spacingXs} ${tokens.spacingS}`,
    borderTop: `1px solid ${tokens.gray200}`,
  }),
});

export type InlineConfigurationPopoverFooterProps = PropsWithHTMLElement<
  CommonProps & { children?: React.ReactNode },
  'div'
>;

/**
 * Secondary actions, such as Reset. Show it only once something is set.
 * Don't add Save or Cancel: changes apply immediately.
 */
export const InlineConfigurationPopoverFooter = React.forwardRef<
  HTMLDivElement,
  ExpandProps<InlineConfigurationPopoverFooterProps>
>(function InlineConfigurationPopoverFooter(
  {
    children,
    className,
    testId = 'cf-ui-inline-configuration-popover-footer',
    ...otherProps
  },
  forwardedRef,
) {
  const styles = getStyles();

  return (
    <div
      {...otherProps}
      ref={forwardedRef}
      className={cx(styles.root, className)}
      data-test-id={testId}
    >
      {children}
    </div>
  );
});
