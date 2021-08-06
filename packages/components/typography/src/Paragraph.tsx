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

export type ParagraphProps<E extends React.ElementType> = HeadingProps<E>;

const _Paragraph: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = (
  { children, className, testId = 'cf-ui-paragraph', ...otherProps },
  ref,
) => {
  const configuration = useContext(TypographyContext);
  return (
    <Heading
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom={configuration.paragraph}
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

export const Paragraph: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Paragraph);
