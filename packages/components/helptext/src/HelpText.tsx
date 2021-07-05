import { cx } from 'emotion';
import React from 'react';
import { styles } from './HelpText.styles';
import {
  Box,
  CommonProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';

export interface HelpTextInternalProps extends CommonProps {
  children: React.ReactNode;
}

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
  return (
    <Box
      as={DEFAULT_TAG}
      testId={testId}
      ref={ref}
      className={cx(styles.helpText, className)}
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
