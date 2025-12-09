import { Box, type CommonProps, Flex } from '@contentful/f36-core';
import { forwardRef, Ref } from 'react';
import { getStyles } from './AIChatMessage.styles';
import React from 'react';
import { Text } from '@contentful/f36-typography';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Heading, List, TextLink, Table } from '@contentful/f36-components';
import { cx } from 'emotion';

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

  const isUserMessage = authorRole === 'user';
  const styles = getStyles({ isUserMessage });

  return (
    <Box
      ref={ref}
      testId={testId}
      className={cx(styles.messageContainer, className)}
    >
      <Box className={styles.message}>
        <ReactMarkdown
          children={content}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // as per design we need smaller h1 so using h2 and simlar style for h2 and h3
            h1: (props) => (
              <Heading {...props} as={'h2'} fontSize="fontSizeL" />
            ),
            h2: (props) => (
              <Heading {...props} as={'h3'} fontSize="fontSizeM" />
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
            p: (props) => <Text as="p" marginBottom="spacingS" {...props} />,
            a: TextLink,
            ul: (props) => (
              <List {...props} as={'ul'} className={styles.list} />
            ),
            ol: (props) => (
              <List {...props} as={'ol'} className={styles.list} />
            ),
            li: (props) => <List.Item {...props} />,
            table: (props) => <Table {...props} />,
            tbody: (props) => <Table.Body {...props} />,
            thead: (props) => <Table.Head {...props} />,
            tr: (props) => <Table.Row {...props} />,
            th: (props) => <Table.Cell children={props.children} />,
            td: (props) => <Table.Cell children={props.children} />,
            strong: (props) => (
              <Text
                as="strong"
                fontWeight="fontWeightDemiBold"
                fontSize="fontSizeM"
                {...props}
              />
            ),
            em: (props) => (
              <Text as="strong" fontWeight="fontWeightDemiBold" {...props} />
            ),
            del: (props) => <Text as="del" {...props} />,
            ins: (props) => <Text as="u" {...props} />,
            u: (props) => <Text as="u" {...props} />,
            code: ({
              inline,
              children,
              ...props
            }: {
              inline?: boolean;
              children?: React.ReactNode;
            }) =>
              inline ? (
                <code className={styles.inlineCode} {...props}>
                  {children}
                </code>
              ) : (
                <code className={styles.codeBlock} {...props}>
                  {children}
                </code>
              ),
            pre: ({ children }) => <>{children}</>,
            blockquote: (props) => (
              <blockquote className={styles.blockquote} {...props} />
            ),
          }}
        />
        {additionalContent && (
          <Box testId={`${testId}-additional-content`}>{additionalContent}</Box>
        )}
      </Box>
      {messageActionButtons && (
        <Flex testId={`${testId}-actions`}>{messageActionButtons}</Flex>
      )}
    </Box>
  );
}

/**
 * Displays a user's or assistant's message with support for markdown content.
 * Message can be augmented with additional content and action buttons.
 */
export const AIChatMessage = forwardRef(_AIChatMessage);
