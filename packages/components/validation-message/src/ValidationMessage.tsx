import React, { forwardRef } from 'react';
import { Flex } from '@contentful/f36-core';
import type {
  FlexInternalProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { ErrorCircleOutline } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';
import { getStyles } from './ValidationMessage.styles';

const DEFAULT_TAG = 'div';

export type ValidationMessageInternalProps = FlexInternalProps;

export type ValidationMessageProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  ValidationMessageInternalProps
>;

const _ValidationMessage: PolymorphicComponentWithRef<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = (
  { children, testId = 'cf-ui-validation-message', ...otherProps },
  forwardedRef,
) => {
  const styles = getStyles();
  return (
    <Flex {...otherProps} ref={forwardedRef} testId={testId}>
      <ErrorCircleOutline className={styles.icon} variant="negative" />
      <Text className={styles.text} marginBottom="none">
        {children}
      </Text>
    </Flex>
  );
};

export const ValidationMessage: PolymorphicComponent<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_ValidationMessage);
