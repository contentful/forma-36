import React, { useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import {
  Box,
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { TypographyContext } from './Typography';

export type HeadingElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'div'
  | 'span';

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  children?: React.ReactNode;
}

export type HeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HeadingInternalProps>;

const DEFAULT_TAG = 'h1';

const _Heading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, className, ...otherProps }, ref) => {
  const configuration = useContext(TypographyContext);

  return (
    <Box
      as={DEFAULT_TAG}
      display="block"
      margin="none"
      marginBottom={configuration.heading}
      testId="cf-ui-heading"
      className={cx(
        css({
          fontFamily: tokens.fontStackPrimary,
          fontWeight: tokens.fontWeightDemiBold,
          color: tokens.gray900,
          fontSize: tokens.fontSizeXl,
          lineHeight: tokens.lineHeightXl,
          textRendering: 'optimizeLegibility',
        }),
        className,
      )}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export const Heading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Heading);
