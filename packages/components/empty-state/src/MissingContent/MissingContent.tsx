import { cx } from 'emotion';
import React from 'react';
import { getStyles } from './MissingContent.styles';
import type { CommonProps } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export interface MissingContentProps extends CommonProps {
  title?: string;
}

export const MissingContent = ({
  className,
  testId = 'cf-ui-missing-content',
  title,
  ...otherProps
}: MissingContentProps) => {
  const styles = getStyles();

  return (
    <Text
      {...otherProps}
      data-test-id={testId}
      className={cx(styles.missingContent, className)}
      title={title}
    >
      &mdash;
    </Text>
  );
};
