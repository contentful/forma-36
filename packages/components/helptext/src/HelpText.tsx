import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './HelpText.styles';
import {
  Box,
  FlexInternalProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';

export type HelpTextInternalProps = FlexInternalProps;

export type HelpTextProps = PolymorphicComponentProps<
  React.ElementType,
  HelpTextInternalProps
>;

const DEFAULT_TAG = 'p';

const _HelpText: PolymorphicComponentWithRef<
  HelpTextInternalProps,
  typeof DEFAULT_TAG
> = (
  { children, className, testId = 'cf-ui-help-text', ...otherProps },
  ref,
) => {
  const styles = getStyles();
  return (
    <Box
      as={DEFAULT_TAG}
      testId={testId}
      ref={ref}
      className={cx(styles.root, className)}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

/**
 * `HelpText` is a styled copy block with guidance, placed in the context of form components.
 */

export const HelpText: PolymorphicComponent<
  HelpTextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_HelpText);
