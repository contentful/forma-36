import { cx, css } from 'emotion';
import React from 'react';
import tokens from '@contentful/f36-tokens';
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

export type HelpTextProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HelpTextInternalProps>;

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
      data-test-id={testId}
      ref={ref}
      className={cx(
        css({
          margin: 0,
          fontFamily: tokens.fontStackPrimary,
          color: tokens.colorTextLight,
          fontSize: tokens.fontSizeM,
          lineHeight: tokens.lineHeightDefault,
          textRendering: 'optimizeLegibility',
        }),
        className,
      )}
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
