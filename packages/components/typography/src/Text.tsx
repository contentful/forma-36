import React, { useContext } from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps, HeadingProps } from './Heading';
import { Heading } from './Heading';
import { TypographyContext } from './Typography';

const DEFAULT_TAG = 'p';

export type TextProps<E extends React.ElementType> = HeadingProps<E>;

const _Text: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, className, ...otherProps }, ref) => {
  const configuration = useContext(TypographyContext);
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-text"
      marginBottom={configuration.text}
      className={cx(
        css({
          fontWeight: tokens.fontWeightNormal,
          color: tokens.gray700,
          fontSize: tokens.fontSizeM,
          lineHeight: tokens.lineHeightM,
        }),
        className,
      )}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const Text: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Text);
