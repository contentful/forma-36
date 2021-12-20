import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import * as f36Components from '@contentful/f36-components';

import { MdxComponents } from '../mdx-components';
import { ComponentSource } from './LiveEditor/ComponentSource';
import { StaticSource } from './LiveEditor/StaticSource';

const {
  DisplayText,
  Heading,
  Subheading,
  Paragraph,
  TextLink,
  List,
  Box,
  Table,
} = f36Components;

/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
const components = {
  h1: (props) => <DisplayText as="h1" {...props} />,
  h2: (props) => <Heading as="h2" marginTop="spacing2Xl" {...props} />,
  h3: (props) => <Subheading as="h3" marginTop="spacingL" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  p: (props) => <Paragraph {...props} />,
  a: (props) => <TextLink {...props} />,
  ul: (props) => (
    <Box marginBottom="spacingL">
      <List {...props} />
    </Box>
  ),
  li: (props) => <List.Item {...props} />,
  code: (props) => {
    if (props.static) {
      return <StaticSource {...props} />;
    }
    return <ComponentSource {...props} />;
  },
  table: (props) => (
    <Box marginBottom="spacingM">
      <Table {...props} />
    </Box>
  ),
  thead: (props) => <Table.Head {...props} />,
  tbody: (props) => <Table.Body {...props} />,
  tr: (props) => <Table.Row {...props} />,
  th: (props) => <Table.Cell style={{ textAlign: 'left' }} {...props} />,
  td: (props) => <Table.Cell {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <img style={{ width: '100%' }} {...props} />,
  ...f36Components,
  ...MdxComponents,
};
/* eslint-enable @next/next/no-img-element */
/* eslint-enable react/display-name */

export function MdxRenderer(props: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return <MDXRemote {...props.source} components={components} />;
}
