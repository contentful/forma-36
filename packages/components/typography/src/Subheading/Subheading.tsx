import React from 'react';
import { useTheme } from '@contentful/f36-core';
import type {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
  Theme,
} from '@contentful/f36-core';
import { css } from 'emotion';

import type { HeadingElement } from '../Heading';
import { Text } from '../Text';

const SUBHEADING_DEFAULT_TAG = 'h3';

const getStyles = ({ theme }: { theme: Theme }) => {
  return {
    subheading: css({
      color: theme.subheading.color,
    }),
  };
};

export interface SubheadingInternalProps extends CommonProps, MarginProps {
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type SubheadingProps<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG
> = PolymorphicProps<SubheadingInternalProps, E>;

function _Subheading<
  E extends React.ElementType = typeof SUBHEADING_DEFAULT_TAG
>(
  { children, testId = 'cf-ui-subheading', ...otherProps }: SubheadingProps<E>,
  ref: React.Ref<any>,
) {
  const theme: Theme = useTheme();
  const styles = getStyles({ theme });

  return (
    <Text
      as={SUBHEADING_DEFAULT_TAG}
      testId={testId}
      marginBottom="spacingM"
      fontSize="fontSizeL"
      lineHeight="lineHeightL"
      fontWeight="fontWeightDemiBold"
      className={styles.subheading}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_Subheading.displayName = 'Subheading';

export const Subheading: PolymorphicComponent<
  ExpandProps<SubheadingInternalProps>,
  typeof SUBHEADING_DEFAULT_TAG
> = React.forwardRef(_Subheading);
