import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './HelpText.styles';
import {
  Box,
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';

export type HelpTextProps = PolymorphicComponentProps<'p', CommonProps>;

/**
 * `HelpText` is a styled copy block with guidance, placed in the context of form components.
 */

export const HelpText = React.forwardRef<HTMLParagraphElement, HelpTextProps>(
  ({ children, className, testId = 'cf-ui-help-text', ...otherProps }, ref) => {
    const styles = getStyles();
    return (
      <Box
        as="p"
        testId={testId}
        className={cx(styles.root, className)}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);

HelpText.displayName = 'HelpText';
