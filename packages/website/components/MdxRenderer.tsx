import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  Box,
  DisplayText,
  Heading,
  List,
  Paragraph,
  Subheading,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextLink,
} from '@contentful/f36-components';
import { StaticSource } from './LiveEditor/StaticSource';
import { ComponentSource } from './LiveEditor/ComponentSource';
import { MdxComponents } from '../mdx-components';

/* eslint-disable react/display-name */
const components = {
  h1: (props) => <DisplayText as="h1" {...props} />,
  h2: (props) => <Heading as="h2" marginTop="spacing2Xl" {...props} />,
  h3: (props) => <Subheading as="h3" marginTop="spacingL" {...props} />,
  h4: (props) => <Subheading as="h4" {...props} />,
  h5: (props) => <Subheading as="h5" {...props} />,
  h6: (props) => <Subheading as="h6" {...props} />,
  p: (props) => <Paragraph {...props} />,
  a: (props) => <TextLink {...props} />,
  ul: (props) => <List {...props} />,
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
  thead: (props) => <TableHead {...props} />,
  tbody: (props) => <TableBody {...props} />,
  tr: (props) => <TableRow {...props} />,
  th: (props) => <TableCell style={{ textAlign: 'left' }} {...props} />,
  td: (props) => <TableCell {...props} />,
  ...MdxComponents,
};
/* eslint-enable react/display-name */

export function MdxRenderer(props: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return <MDXRemote {...props.source} components={components} />;
}
