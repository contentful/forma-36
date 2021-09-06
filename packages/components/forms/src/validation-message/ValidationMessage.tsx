import React, { forwardRef } from 'react';
import { Flex } from '@contentful/f36-core';
import type {
  CommonProps,
  MarginProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import { ErrorCircleOutlineIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

export interface ValidationMessageInternalProps
  extends CommonProps,
    MarginProps {
  children: React.ReactNode;
}

export type ValidationMessageProps = PropsWithHTMLElement<
  ValidationMessageInternalProps,
  'div'
>;

export const ValidationMessage = forwardRef<
  HTMLDivElement,
  ValidationMessageProps
>(({ children, testId = 'cf-ui-validation-message', ...otherProps }, ref) => {
  return (
    <Flex
      marginTop="spacingXs"
      {...otherProps}
      ref={ref}
      testId={testId}
      alignItems="center"
      aria-live="polite"
    >
      <Flex marginRight="spacing2Xs">
        <ErrorCircleOutlineIcon
          size="small"
          variant="negative"
          aria-hidden="true"
        />
      </Flex>
      <Text as="p" fontColor="colorNegative">
        {children}
      </Text>
    </Flex>
  );
});

ValidationMessage.displayName = 'ValidationMessage';
