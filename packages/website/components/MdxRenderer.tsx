import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import * as f36Components from '@contentful/f36-components';
import * as f36Icons from '@contentful/f36-icons';

import NextLink from 'next/link';
import { MdxComponents } from '../mdx-components';
import { ComponentSource } from './LiveEditor/ComponentSource';
import { StaticSource } from './LiveEditor/StaticSource';
import tokens from '@contentful/f36-tokens';
import { CustomHeading2 } from './CustomHeading2';

const { DisplayText, Subheading, Paragraph, Text, TextLink, List, Table } =
  f36Components;

const components = {
  h1: (props) => <DisplayText as="h1" {...props} />,
  // to cover a specific case with "Props (API reference)"
  h2: CustomHeading2,
  h3: (props) => <Subheading as="h3" marginTop="spacingXl" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  p: (props) => <Paragraph {...props} />,
  strong: (props) => <Text fontWeight="fontWeightDemiBold" {...props} />,
  a: (props) => {
    if (props.href && props.href.startsWith('..')) {
      return (
        <NextLink href={props.href}>
          <TextLink {...props} />
        </NextLink>
      );
    }
    return <TextLink {...props} />;
  },
  ul: (props) => <List style={{ marginBottom: tokens.spacingM }} {...props} />,
  li: (props) => <List.Item {...props} />,
  code: (props) => {
    if (props.static) {
      return <StaticSource {...props} />;
    }
    return <ComponentSource {...props} />;
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
  return <MDXRemote source={props.source} components={components} />;
}
