import React from 'react';
import type { ReactNode } from 'react';
import { Flex, Heading, Text } from '@contentful/f36-components';

interface AIChatConversationEmptyStateProps {
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
      gap="spacing2Xs"
      padding="spacing2Xs"
      fullHeight
      fullWidth
      testId={testId}
    >
      {title && <Heading>{title}</Heading>}
      {description && <Text>{description}</Text>}
      {children}
    </Flex>
  );
};
