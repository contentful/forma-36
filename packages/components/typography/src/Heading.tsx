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

export interface HeadingInternalProps extends CommonProps, MarginProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
      css={{
        display: 'block',
        fontFamily: tokens.fontStackPrimary,
        fontWeight: tokens.fontWeightDemiBold,
        color: tokens.colorTextDark,
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        textRendering: 'optimizeLegibility',
      }}
      marginBottom="spacingM"
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
