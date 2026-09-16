import React from 'react';
import type { ReactNode } from 'react';
import { Flex, Heading, Text } from '@contentful/f36-components';

export interface AIChatConversationEmptyStateProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  testId?: string;
}

export const AIChatConversationEmptyState = ({
  title,
  description,
  children,
  testId,
}: AIChatConversationEmptyStateProps) => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="spacingXl"
      padding="spacing2Xs"
      fullHeight
      fullWidth
      testId={testId}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        gap="spacing2Xs"
        fullWidth
      >
        {title && <Heading marginBottom="none">{title}</Heading>}
        {description && <Text fontColor="gray600">{description}</Text>}
      </Flex>
      {children}
    </Flex>
  );
};
