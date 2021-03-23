import React from 'react';
import tokens from '@contentful/f36-tokens';
import {
  Box,
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  children?: React.ReactNode;
}

export type HeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, HeadingInternalProps>;

const DEFAULT_TAG = 'h1';

const Heading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, ...otherProps }, ref: typeof otherProps.ref) => {
  return (
    <Box
      as={DEFAULT_TAG}
      css={{
        display: 'block',
        fontFamily: tokens.fontStackPrimary,
        fontWeight: tokens.fontWeightDemiBold,
        color: tokens.colorTextDark,
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        textRendering: 'optimizeLegibility',
      }}
      margin="none"
      testId="cf-ui-heading"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Box>
  );
};

export const _Heading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Heading);

export { _Heading as Heading };
