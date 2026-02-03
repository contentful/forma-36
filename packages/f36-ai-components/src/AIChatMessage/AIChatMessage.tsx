import {
  Heading,
  List,
  type ListItemProps,
  type ListProps,
  Table,
  type TableBodyProps,
  type TableHeadProps,
  type TableProps,
  type TableRowProps,
  TextLink,
  type TextLinkProps,
} from '@contentful/f36-components';
import {
  Box,
  type BoxProps,
  type CommonProps,
  Flex,
} from '@contentful/f36-core';
import {
  type HeadingElement,
  type HeadingProps,
  Text,
  type TextProps,
} from '@contentful/f36-typography';
import { cx } from 'emotion';
import React, { forwardRef, Ref } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { getStyles } from './AIChatMessage.styles';

export type AIChatMessageRole = 'user' | 'assistant';

type ComponentPropOverrideHandler<T> = (
  defaultProps: React.PropsWithChildren<T>,
) => React.PropsWithChildren<T>;

export interface ComponentsPropOverrides {
  h1?: ComponentPropOverrideHandler<HeadingProps>;
  h2?: ComponentPropOverrideHandler<HeadingProps>;
  h3?: ComponentPropOverrideHandler<HeadingProps>;
  h4?: ComponentPropOverrideHandler<HeadingProps>;
  h5?: ComponentPropOverrideHandler<TextProps>;
  h6?: ComponentPropOverrideHandler<TextProps>;
  p?: ComponentPropOverrideHandler<TextProps>;
  a?: ComponentPropOverrideHandler<TextLinkProps>;
  ul?: ComponentPropOverrideHandler<ListProps>;
  ol?: ComponentPropOverrideHandler<ListProps>;
  li?: ComponentPropOverrideHandler<ListItemProps>;
  table?: ComponentPropOverrideHandler<TableProps>;
  tbody?: ComponentPropOverrideHandler<TableBodyProps>;
  thead?: ComponentPropOverrideHandler<TableHeadProps>;
  tr?: ComponentPropOverrideHandler<TableRowProps>;
  th?: ComponentPropOverrideHandler<React.ComponentProps<typeof Table.Cell>>;
  td?: ComponentPropOverrideHandler<React.ComponentProps<typeof Table.Cell>>;
  strong?: ComponentPropOverrideHandler<TextProps>;
  em?: ComponentPropOverrideHandler<TextProps>;
  del?: ComponentPropOverrideHandler<TextProps>;
  ins?: ComponentPropOverrideHandler<TextProps>;
  u?: ComponentPropOverrideHandler<TextProps>;
  code?: ComponentPropOverrideHandler<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >;
  pre?: ComponentPropOverrideHandler<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
  >;
  blockquote?: ComponentPropOverrideHandler<
    React.DetailedHTMLProps<
      React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >
  >;
  div?: ComponentPropOverrideHandler<React.PropsWithChildren<BoxProps>>;
}

export interface AIChatMessageProps extends CommonProps {
  /** Role of the message author */
  authorRole: AIChatMessageRole;
  /** Message content in markdown format */
  content: string;
  /** Optional custom content to be rendered below the message */
  additionalContent?: React.ReactNode;
  /** Action buttons for the message */
  messageActionButtons?: React.ReactNode;
  /** Optional overrides for markdown component props */
  contentComponentsOverrides?: ComponentsPropOverrides;
}

function getMarkdownComponents(
  styles: ReturnType<typeof getStyles>,
  contentComponentsOverrides: ComponentsPropOverrides = {},
) {
  return {
    // as per design we need smaller h1 so using h2 and simlar style for h2 and h3
    h1: (props) => (
      <Heading
        {...{
          as: 'h2' as HeadingElement,
          fontSize: 'fontSizeL',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h1
            ? contentComponentsOverrides.h1(props)
            : {}),
        }}
      />
    ),
    h2: (props) => (
      <Heading
        {...{
          as: 'h2' as HeadingElement,
          fontSize: 'fontSizeM',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h2
            ? contentComponentsOverrides.h2(props)
            : {}),
        }}
      />
    ),
    h3: (props) => (
      <Heading
        {...{
          as: 'h3' as HeadingElement,
          fontSize: 'fontSizeM',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h3
            ? contentComponentsOverrides.h3(props)
            : {}),
        }}
      />
    ),
    h4: (props) => (
      <Heading
        {...{
          as: 'h4' as HeadingElement,
          fontSize: 'fontSizeS',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h4
            ? contentComponentsOverrides.h4(props)
            : {}),
        }}
      />
    ),
    h5: (props) => (
      <Text
        {...{
          as: 'h5' as const,
          fontWeight: 'fontWeightDemiBold',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h5
            ? contentComponentsOverrides.h5(props)
            : {}),
        }}
      />
    ),
    h6: (props) => (
      <Text
        {...{
          as: 'h6' as const,
          fontWeight: 'fontWeightMedium',
          marginBottom: 'spacingS',
          ...props,
          ...(contentComponentsOverrides?.h6
            ? contentComponentsOverrides.h6(props)
            : {}),
        }}
      />
    ),
    p: (props) => (
      <Text
        {...{
          as: 'p' as const,
          className: styles.paragraph,
          ...props,
          ...(contentComponentsOverrides?.p
            ? contentComponentsOverrides.p(props)
            : {}),
        }}
      />
    ),
    a: (props) => (
      <TextLink
        {...{
          ...props,
          ...(contentComponentsOverrides?.a
            ? contentComponentsOverrides.a(props)
            : {}),
        }}
      />
    ),
    ul: (props) => (
      <List
        {...{
          as: 'ul' as const,
          className: styles.list,
          ...props,
          ...(contentComponentsOverrides?.ul
            ? contentComponentsOverrides.ul(props)
            : {}),
        }}
      />
    ),
    ol: (props) => (
      <List
        {...{
          as: 'ol' as const,
          className: styles.list,
          ...props,
          ...(contentComponentsOverrides?.ol
            ? contentComponentsOverrides.ol(props)
            : {}),
        }}
      />
    ),
    // tmp fix needed until https://github.com/contentful/forma-36/pull/3227 is merged to main
    li: (props) => (
      <List.Item
        {...{
          children: props.children || <></>,
          ...props,
          ...(contentComponentsOverrides?.li
            ? contentComponentsOverrides.li(props)
            : {}),
        }}
      />
    ),
    table: (props) => (
      <Table
        {...{
          className: styles.table,
          ...props,
          ...(contentComponentsOverrides?.table
            ? contentComponentsOverrides.table(props)
            : {}),
        }}
      />
    ),
    tbody: (props) => (
      <Table.Body
        {...{
          ...props,
          ...(contentComponentsOverrides?.tbody
            ? contentComponentsOverrides.tbody(props)
            : {}),
        }}
      />
    ),
    thead: (props) => (
      <Table.Head
        {...{
          ...props,
          ...(contentComponentsOverrides?.thead
            ? contentComponentsOverrides.thead(props)
            : {}),
        }}
      />
    ),
    tr: (props) => (
      <Table.Row
        {...{
          ...props,
          ...(contentComponentsOverrides?.tr
            ? contentComponentsOverrides.tr(props)
            : {}),
        }}
      />
    ),
    th: (props) => (
      <Table.Cell
        {...{
          ...props,
          ...(contentComponentsOverrides?.th
            ? contentComponentsOverrides.th(props)
            : {}),
        }}
      />
    ),
    td: (props) => (
      <Table.Cell
        {...{
          children: props.children,
          ...(contentComponentsOverrides?.td
            ? contentComponentsOverrides.td(props)
            : {}),
        }}
      />
    ),
    strong: (props) => (
      <Text
        {...{
          as: 'strong' as const,
          fontWeight: 'fontWeightDemiBold',
          fontSize: 'fontSizeM',
          ...props,
          ...(contentComponentsOverrides?.strong
            ? contentComponentsOverrides.strong(props)
            : {}),
        }}
      />
    ),
    em: (props) => (
      <Text
        {...{
          as: 'strong' as const,
          fontWeight: 'fontWeightDemiBold',
          ...props,
          ...(contentComponentsOverrides?.em
            ? contentComponentsOverrides.em(props)
            : {}),
        }}
      />
    ),
    del: (props) => (
      <Text
        {...{
          as: 'del' as const,
          ...props,
          ...(contentComponentsOverrides?.del
            ? contentComponentsOverrides.del(props)
            : {}),
        }}
      />
    ),
    ins: (props) => (
      <Text
        {...{
          as: 'u' as const,
          ...props,
          ...(contentComponentsOverrides?.ins
            ? contentComponentsOverrides.ins(props)
            : {}),
        }}
      />
    ),
    u: (props) => (
      <Text
        {...{
          as: 'u' as const,
          ...props,
          ...(contentComponentsOverrides?.u
            ? contentComponentsOverrides.u(props)
            : {}),
        }}
      />
    ),
    code: (props) => (
      <code
        {...{
          className: props.inline ? styles.inlineCode : styles.codeBlock,
          children: props.children,
          ...props,
          ...(contentComponentsOverrides?.code
            ? contentComponentsOverrides.code(props)
            : {}),
        }}
      />
    ),
    pre: ({
      children,
      ...props
    }: React.PropsWithChildren<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    >) => {
      const finalProps = {
        children,
        ...props,
        ...(contentComponentsOverrides?.pre
          ? contentComponentsOverrides.pre(props)
          : {}),
      };
      return <>{finalProps.children}</>;
    },
    blockquote: (
      props: React.PropsWithChildren<
        React.DetailedHTMLProps<
          React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
          HTMLQuoteElement
        >
      >,
    ) => (
      <blockquote
        {...{
          className: styles.blockquote,
          ...props,
          ...(contentComponentsOverrides?.blockquote
            ? contentComponentsOverrides.blockquote(props)
            : {}),
        }}
      />
    ),
    div: (props: React.PropsWithChildren<BoxProps>) => (
      <Box
        {...{
          ...props,
          ...(contentComponentsOverrides?.div
            ? contentComponentsOverrides.div(props)
            : {}),
        }}
      />
    ),
  };
}

function AIChatMessageBase(
  props: AIChatMessageProps,
  ref: Ref<HTMLDivElement>,
) {
  const {
    className,
    testId = 'cf-ui-ai-chat-message',
    authorRole,
    content,
    additionalContent,
    messageActionButtons,
    contentComponentsOverrides = {},
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
          components={getMarkdownComponents(styles, contentComponentsOverrides)}
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
export const AIChatMessage = forwardRef(AIChatMessageBase);
