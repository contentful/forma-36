import { Box, type CommonProps, Flex } from '@contentful/f36-core';
import { forwardRef, Ref } from 'react';
import { getStyles } from './AIChatMessage.styles';
import React from 'react';
import { Text } from '@contentful/f36-typography';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Heading, List, TextLink, Table } from '@contentful/f36-components';

export type AIChatMessageRole = 'user' | 'assistant';

export interface AIChatMessageProps extends CommonProps {
  /** Role of the message author */
  authorRole: AIChatMessageRole;
  /** Message content in markdown format */
  content: string;
  /** Optional custom content to be rendered below the message */
  additionalContent?: React.ReactNode;
  /** Action buttons for the message */
  messageActionButtons?: React.ReactNode;
}

function _AIChatMessage(props: AIChatMessageProps, ref: Ref<HTMLDivElement>) {
  const {
    className,
    testId = 'cf-ui-ai-chat-message',
    authorRole,
    content,
    additionalContent,
    messageActionButtons,
  } = props;
  const styles = getStyles({ authorRole });

  return (
    <Box ref={ref} testId={testId} className={className}>
      <Box className={styles.message}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props) => (
              <Heading {...props} as={'h1'} fontSize="fontSizeXl" />
            ),
            h2: (props) => (
              <Heading {...props} as={'h2'} fontSize="fontSizeL" />
            ),
            h3: (props) => (
              <Heading {...props} as={'h3'} fontSize="fontSizeM" />
            ),
            h4: (props) => (
              <Heading {...props} as={'h4'} fontSize="fontSizeS" />
            ),
            h5: (props) => (
              <Text {...props} as={'h5'} fontWeight="fontWeightDemiBold" />
            ),
            h6: (props) => (
              <Text {...props} as={'h6'} fontWeight="fontWeightMedium" />
            ),
            p: Text,
            a: TextLink,
            ul: (props) => <List {...props} as={'ul'} />,
            ol: (props) => <List {...props} as={'ol'} />,
            // tmp fix needed until https://github.com/contentful/forma-36/pull/3227 is shipped
            li: (props) => (
              <List.Item children={props.children || <></>} {...props} />
            ),
            table: (props) => <Table {...props} />,
            tbody: (props) => <Table.Body {...props} />,
            thead: (props) => <Table.Head {...props} />,
            tr: (props) => <Table.Row {...props} />,
            th: (props) => <Table.Cell children={props.children} />,
            td: (props) => <Table.Cell children={props.children} />,
          }}
        />
        {additionalContent && (
          <Box testId={`${testId}-additional-content`}>{additionalContent}</Box>
        )}
      </Box>
      {messageActionButtons && (
        <Flex
          testId={`${testId}-actions`}
          justifyContent={
            authorRole === 'assistant' ? 'flex-start' : 'flex-end'
          }
        >
          {messageActionButtons}
        </Flex>
      )}
    </Box>
  );
}

/**
 * Displays a user's or assistant's message with support for markdown content.
 * Message can be augmented with additional content and action buttons.
 */
export const AIChatMessage = forwardRef(_AIChatMessage);
