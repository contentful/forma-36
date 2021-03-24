import React, { useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps } from './Heading';
import { Heading } from './Heading';
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
> = ({ children, className, size = 'default', ...otherProps }, ref) => {
  const configuration = useContext(TypographyContext);

  let styles = '';

  if (size === 'huge') {
    styles = css({
      fontSize: tokens.fontSize4Xl,
      lineHeight: tokens.lineHeight4Xl,
    });
  } else if (size === 'large') {
    styles = css({
      fontSize: tokens.fontSize3Xl,
      lineHeight: tokens.lineHeight3Xl,
    });
  } else {
    styles = css({
      fontSize: tokens.fontSize2Xl,
      lineHeight: tokens.lineHeight2Xl,
    });
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
      className={cx(styles, className)}
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
