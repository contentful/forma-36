import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from '@emotion/css';
import type {
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import type { HeadingElement } from '../Heading';
import { Text, type TextProps } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const SECTION_HEADING_DEFAULT_TAG = 'h2';

export interface SectionHeadingInternalProps extends Omit<TextProps, 'as'> {
  children?: React.ReactNode;
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type SectionHeadingProps<
  E extends React.ElementType = typeof SECTION_HEADING_DEFAULT_TAG,
> = PolymorphicProps<SectionHeadingInternalProps, E>;

function _SectionHeading<
  E extends React.ElementType = typeof SECTION_HEADING_DEFAULT_TAG,
>(
  {
    children,
    className,
    testId = 'cf-ui-section-heading',
    as,
    fontColor = 'gray600',
    marginBottom = 'spacingL',
    ...otherProps
  }: SectionHeadingProps<E>,
  ref: React.Ref<HTMLHeadingElement>,
) {
  const density = useDensity();
  const Element: React.ElementType = as || SECTION_HEADING_DEFAULT_TAG;

  return (
    <Text
      as={Element}
      testId={testId}
      marginBottom={marginBottom}
      fontWeight="fontWeightMedium"
      fontColor={fontColor}
      fontSize={density === 'high' ? 'fontSizeSHigh' : 'fontSizeS'}
      lineHeight={density === 'high' ? 'lineHeightSHigh' : 'lineHeightS'}
      className={cx(
        css({
          letterSpacing: tokens.letterSpacingDefault,
        }),
        className,
      )}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_SectionHeading.displayName = 'SectionHeading';

export const SectionHeading = React.forwardRef(
  _SectionHeading,
) as PolymorphicComponent<
  ExpandProps<SectionHeadingInternalProps>,
  typeof SECTION_HEADING_DEFAULT_TAG
>;
