import React, { useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import {
  Box,
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { TypographyContext } from './Typography';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

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
> = ({ children, ...otherProps }, ref) => {
  const configuration = useContext(TypographyContext);

  return (
    <Box
      as={DEFAULT_TAG}
      display="block"
      margin="none"
      marginBottom={configuration.heading}
      testId="cf-ui-heading"
      css={{
        fontFamily: tokens.fontStackPrimary,
        fontWeight: tokens.fontWeightDemiBold,
        color: tokens.colorTextDark,
        fontSize: tokens.fontSizeXl,
        lineHeight: tokens.lineHeightXl,
        textRendering: 'optimizeLegibility',
      }}
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
