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

const DEFAULT_TAG = 'h3';

export type SectionHeadingProps<E extends React.ElementType> = HeadingProps<E>;

const _SectionHeading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, className, ...otherProps }, ref) => {
  const configuration = useContext(TypographyContext);
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-section-heading"
      marginBottom={configuration.sectionHeading}
      className={cx(
        css({
          fontSize: tokens.fontSizeS,
          lineHeight: tokens.lineHeightS,
          letterSpacing: tokens.letterSpacingWide,
          textTransform: 'uppercase',
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

export const SectionHeading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_SectionHeading);
