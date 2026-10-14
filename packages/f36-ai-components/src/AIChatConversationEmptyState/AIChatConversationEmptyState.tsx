import React from 'react';
import type { ReactNode } from 'react';
import { Flex, Heading, Text } from '@contentful/f36-components';

export interface AIChatConversationEmptyStateProps {
  title?: string;
  description?: string;
  /**
   * Optional SVG icon rendered above the title
   */
  icon?: ReactNode;
  children?: ReactNode;
  testId?: string;
}

export const AIChatConversationEmptyState = ({
  title,
  description,
  icon,
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
      paddingLeft="spacingS"
      paddingRight="spacingS"
      fullHeight
      fullWidth
      testId={testId}
    >
      {icon}
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
