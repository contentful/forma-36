import React, { forwardRef } from 'react';
import { Flex } from '@contentful/f36-core';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { ErrorCircleOutlineIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

export type ValidationMessageInternalProps = CommonProps & {
  children: React.ReactNode;
};

export type ValidationMessageProps = PropsWithHTMLElement<
  ValidationMessageInternalProps,
  'div'
>;

export const ValidationMessage = forwardRef<
  HTMLDivElement,
  ValidationMessageProps
>(({ children, testId = 'cf-ui-validation-message', ...otherProps }, ref) => {
  return (
    <Flex {...otherProps} ref={ref} testId={testId} alignItems="center">
      <Flex marginRight="spacing2Xs">
        <ErrorCircleOutlineIcon
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
