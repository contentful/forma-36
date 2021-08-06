import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import type { HeadingElement } from './Heading';
import { Text } from './Text';

const DEFAULT_TAG = 'h3';

export interface SectionHeadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
}

export type SectionHeadingProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, SectionHeadingInternalProps>;

const _SectionHeading: PolymorphicComponentWithRef<
  SectionHeadingInternalProps,
  typeof DEFAULT_TAG
> = (
  { children, className, testId = 'cf-ui-section-heading', ...otherProps },
  ref,
) => {
  return (
    <Text
      as={DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingL"
      fontSize="fontSizeS"
      lineHeight="lineHeightS"
      className={cx(
        css({
          letterSpacing: tokens.letterSpacingWide,
          textTransform: 'uppercase',
        }),
        className,
      )}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
};

export const SectionHeading: PolymorphicComponent<
  SectionHeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_SectionHeading);
