import React, { forwardRef } from 'react';
import { Flex, Box } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicComponentProps,
} from '@contentful/f36-core';
import { ErrorCircleOutline } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

export type ValidationMessageInternalProps = CommonProps & {
  children: React.ReactNode;
};

export type ValidationMessageProps = PolymorphicComponentProps<
  'div',
  ValidationMessageInternalProps
>;

export const ValidationMessage = forwardRef<
  HTMLDivElement,
  ValidationMessageProps
>(({ children, testId = 'cf-ui-validation-message', ...otherProps }, ref) => {
  return (
    <Flex {...otherProps} ref={ref} testId={testId} alignItems="center">
      <Flex marginRight="spacing2Xs">
        <ErrorCircleOutline
          size="small"
          variant="negative"
          aria-label="Validation message"
        />
      </Flex>
      <Text as="p" fontColor="colorNegative">
        {children}
      </Text>
    </Flex>
  );
});

ValidationMessage.displayName = 'ValidationMessage';
