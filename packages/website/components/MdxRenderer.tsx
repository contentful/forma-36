import React from 'react';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

import * as f36Components from '@contentful/f36-components';
import * as f36Icons from '@contentful/f36-icons';

import NextLink from 'next/link';
import { MdxComponents } from '../mdx-components';
import { ComponentSource } from './LiveEditor/ComponentSource';
import { StaticSource } from './LiveEditor/StaticSource';
import tokens from '@contentful/f36-tokens';
import { CustomHeading2 } from './CustomHeading2';

const {
  DisplayText,
  Subheading,
  SectionHeading,
  Paragraph,
  Text,
  TextLink,
  List,
  Table,
  Heading,
  Stack,
  Flex,
  Note,
} = f36Components;

const components = {
  h1: (props) => <DisplayText as="h1" {...props} />,
  // to cover a specific case with "Props (API reference)"
  h2: CustomHeading2,
  h3: (props) => <Subheading as="h3" marginTop="spacingXl" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  Heading,
  DisplayText,
  Subheading,
  SectionHeading,
  Paragraph,
  Text,
  TextLink,
  Note,
  Stack,
  Flex,
  p: (props) => <Paragraph {...props} />,
  strong: (props) => <Text fontWeight="fontWeightDemiBold" {...props} />,
  a: (props) => {
    if (props.href && props.href.startsWith('..')) {
      const { href, children, ...textLinkProps } = props;
      return (
        <TextLink as={NextLink} href={href} {...textLinkProps}>
          {children}
        </TextLink>
      );
    }
    return <TextLink {...props} />;
  },
  ul: (props) => <List style={{ marginBottom: tokens.spacingM }} {...props} />,
  li: (props) => <List.Item {...props} />,
  code: (props) => {
    // Inline code will never be inside <pre>
    if (props.parentName !== 'pre') {
      return (
        <code
          style={{
            fontFamily: tokens.fontStackMonospace,
            backgroundColor: tokens.gray200,
            color: tokens.gray800,
            padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
            borderRadius: tokens.borderRadiusSmall,
            fontSize: tokens.fontSizeM,
          }}
          {...props}
        />
      );
    }

    // If it's inside <pre>, MDX will render via `pre` mapping below
    return <code {...props} />;
  },
  pre: (props) => {
    const codeElement = props.children;
    const {
      className = '',
      static: isStatic,
      file,
      children,
    } = codeElement.props;

    const code = Array.isArray(children) ? children.join('') : children;
    const language = className.replace('language-', '');

    if (isStatic) {
      return <StaticSource code={code} language={language} />;
    }

    return <ComponentSource code={code} file={file} />;
  },
  table: (props) => <Table {...props} />,
  thead: (props) => <Table.Head {...props} />,
  tbody: (props) => <Table.Body {...props} />,
  tr: (props) => <Table.Row {...props} />,
  th: (props) => <Table.Cell style={{ textAlign: 'left' }} {...props} />,
  td: (props) => <Table.Cell {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img style={{ width: '100%' }} {...props} />,
  ...f36Icons,

  ...MdxComponents,
};

export function MdxRenderer(props: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return <MDXRemote {...props.source} components={components} />;
}
