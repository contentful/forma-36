import React, { forwardRef } from 'react';
import { Flex } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import { ErrorCircleOutline } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';
import { getStyles } from './ValidationMessage.styles';

export type ValidationMessageProps = PolymorphicComponentProps<
  'div',
  CommonProps
>;

export const ValidationMessage = forwardRef<
  HTMLDivElement,
  ValidationMessageProps
>(({ children, testId = 'cf-ui-validation-message', ...otherProps }, ref) => {
  const styles = getStyles();
  return (
    <Flex {...otherProps} ref={ref} testId={testId}>
      <ErrorCircleOutline className={styles.icon} variant="negative" />
      <Text className={styles.text} marginBottom="none">
        {children}
      </Text>
    </Flex>
  );
});

ValidationMessage.displayName = 'ValidationMessage';
