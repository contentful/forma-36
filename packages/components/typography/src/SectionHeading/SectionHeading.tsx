import React from 'react';
import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
} from '@contentful/f36-core';
import type { HeadingElement } from '../Heading';
import { Text } from '../Text';
import { useDensity } from '@contentful/f36-utils';

const SECTION_HEADING_DEFAULT_TAG = 'h2';

export interface SectionHeadingInternalProps extends CommonProps, MarginProps {
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
    ...otherProps
  }: SectionHeadingProps<E>,
  ref: React.Ref<any>,
) {
  const density = useDensity();

  return (
    <Text
      as={SECTION_HEADING_DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingL"
      fontWeight="fontWeightDemiBold"
      fontColor="gray900"
      fontSize={density === 'high' ? 'fontSizeSHigh' : 'fontSizeS'}
      lineHeight={density === 'high' ? 'lineHeightSHigh' : 'lineHeightS'}
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
}

_SectionHeading.displayName = 'SectionHeading';

export const SectionHeading: PolymorphicComponent<
  ExpandProps<SectionHeadingInternalProps>,
  typeof SECTION_HEADING_DEFAULT_TAG
> = React.forwardRef(_SectionHeading);
