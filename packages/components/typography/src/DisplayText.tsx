import React from 'react';
import tokens from '@contentful/f36-tokens';
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps } from './Heading';
import { Heading } from './Heading';
import { Interpolation } from 'create-emotion';

const DEFAULT_TAG = 'h1';

export type DisplayTextInternalProps = HeadingInternalProps & {
  size?: 'default' | 'large' | 'huge';
};

export type DisplayTextProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, DisplayTextInternalProps>;

const DisplayText: PolymorphicComponentWithRef<
  DisplayTextInternalProps,
  typeof DEFAULT_TAG
> = (
  { children, size = 'default', ...otherProps },
  ref: typeof otherProps.ref,
) => {
  let css: Interpolation = {};

  if (size === 'huge') {
    css = {
      fontSize: tokens.fontSize4Xl,
      lineHeight: tokens.lineHeight4Xl,
      marginBottom: tokens.spacingXl,
    };
  } else if (size === 'large') {
    css = {
      fontSize: tokens.fontSize3Xl,
      lineHeight: tokens.lineHeight3Xl,
      marginBottom: tokens.spacingXl,
    };
  } else {
    css = {
      fontSize: tokens.fontSize2Xl,
      lineHeight: tokens.lineHeight2Xl,
      marginBottom: tokens.spacingL,
    };
  }

  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-display-text"
      css={css}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const _DisplayText: PolymorphicComponent<
  DisplayTextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(DisplayText);

export { _DisplayText as DisplayText };
