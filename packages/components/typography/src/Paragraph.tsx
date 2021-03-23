import React from 'react';
import tokens from '@contentful/f36-tokens';
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
> = ({ children, ...otherProps }, ref) => {
  const configuration = React.useContext(TypographyContext);
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-paragraph"
      marginBottom={configuration.paragraph}
      css={{
        fontWeight: tokens.fontWeightNormal,
        color: tokens.colorTextMid,
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightM,
      }}
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
