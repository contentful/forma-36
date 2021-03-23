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
import { TypographyContext } from './Typography';

const DEFAULT_TAG = 'h1';

export interface DisplayTextInternalProps extends HeadingInternalProps {
  size?: 'default' | 'large' | 'huge';
}

export type DisplayTextProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, DisplayTextInternalProps>;

const _DisplayText: PolymorphicComponentWithRef<
  DisplayTextInternalProps,
  typeof DEFAULT_TAG
> = ({ children, size = 'default', ...otherProps }, ref) => {
  const configuration = React.useContext(TypographyContext);

  let css: Interpolation = {};

  if (size === 'huge') {
    css = {
      fontSize: tokens.fontSize4Xl,
      lineHeight: tokens.lineHeight4Xl,
    };
  } else if (size === 'large') {
    css = {
      fontSize: tokens.fontSize3Xl,
      lineHeight: tokens.lineHeight3Xl,
    };
  } else {
    css = {
      fontSize: tokens.fontSize2Xl,
      lineHeight: tokens.lineHeight2Xl,
    };
  }

  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-display-text"
      marginBottom={
        size === 'default'
          ? configuration.displayText
          : configuration.displayTextLarge
      }
      css={css}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const DisplayText: PolymorphicComponent<
  DisplayTextInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_DisplayText);
