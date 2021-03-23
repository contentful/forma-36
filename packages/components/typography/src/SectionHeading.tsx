import React from 'react';
import tokens from '@contentful/f36-tokens';
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps, HeadingProps } from './Heading';
import { Heading } from './Heading';

const DEFAULT_TAG = 'h3';

export type SectionHeadingProps<E extends React.ElementType> = HeadingProps<E>;

const _SectionHeading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, ...otherProps }, ref) => {
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-section-heading"
      css={{
        fontSize: tokens.fontSizeS,
        lineHeight: tokens.lineHeightS,
        letterSpacing: tokens.letterSpacingWide,
        textTransform: 'uppercase',
      }}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const SectionHeading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_SectionHeading);
