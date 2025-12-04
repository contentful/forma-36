import { cx } from '@emotion/css';
import React from 'react';
import { getStyles } from './MissingContent.styles';
import type { CommonProps } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export interface MissingContentProps extends CommonProps {
  label?: string;
  className?: string;
  testId?: string;
}

export const MissingContent = ({
  className,
  testId = 'cf-ui-missing-content',
  label,
  ...otherProps
}: MissingContentProps) => {
  const styles = getStyles();

  return (
    <Text
      {...otherProps}
      testId={testId}
      className={cx(styles.missingContent, className)}
      aria-label={label}
      title={label}
    >
      &mdash;
    </Text>
  );
};

MissingContent.displayName = 'MissingContent';
