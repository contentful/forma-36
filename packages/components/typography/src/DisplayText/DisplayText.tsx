import React from 'react';
import { FontSizeTokens, LineHeightTokens } from '@contentful/f36-tokens';
import {
  CommonProps,
  MarginProps,
  PolymorphicComponent,
  PolymorphicProps,
  ExpandProps,
  useTheme,
  type Theme,
} from '@contentful/f36-core';
import { Text } from '../Text';
import type { HeadingElement } from '../Heading';
import { css } from 'emotion';

const DISPLAY_TEXT_DEFAULT_TAG = 'h2';

const getStyles = ({ theme }: { theme: Theme }) => {
  return {
    displayText: css({
      color: theme.displayText.color,
    }),
  };
};

export interface DisplayTextInternalProps extends CommonProps, MarginProps {
  size?: 'default' | 'large';
  as?: HeadingElement;
  isTruncated?: boolean;
  isWordBreak?: boolean;
}

export type DisplayTextProps<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG,
> = PolymorphicProps<DisplayTextInternalProps, E>;

function _DisplayText<
  E extends React.ElementType = typeof DISPLAY_TEXT_DEFAULT_TAG,
>(
  {
    children,
    size = 'default',
    testId = 'cf-ui-display-text',
    ...otherProps
  }: DisplayTextProps<E>,
  ref: React.Ref<any>,
) {
  const theme = useTheme();
  const styles = getStyles({ theme });
  let fontSize: FontSizeTokens = 'fontSize2Xl';
  let lineHeight: LineHeightTokens = 'lineHeight2Xl';

  if (size === 'large') {
    fontSize = 'fontSize3Xl';
    lineHeight = 'lineHeight3Xl';
  }

  return (
    <Text
      as={DISPLAY_TEXT_DEFAULT_TAG}
      className={styles.displayText}
      testId={testId}
      marginBottom={size === 'default' ? 'spacingL' : 'spacingXl'}
      fontSize={fontSize}
      lineHeight={lineHeight}
      fontWeight="fontWeightDemiBold"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
}

_DisplayText.displayName = 'DisplayText';

export const DisplayText: PolymorphicComponent<
  ExpandProps<DisplayTextInternalProps>,
  typeof DISPLAY_TEXT_DEFAULT_TAG
> = React.forwardRef(_DisplayText);
