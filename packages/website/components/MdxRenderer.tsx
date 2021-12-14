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
import { Props, PropsHeading } from '@contentful/f36-docs-utils';

import { ColorSwatchGroup } from './ColorSwatchGroup';
import { Slider } from './Slider';
import { SpacingTokensTable } from './SpacingTokensTable';

/* eslint-disable react/display-name */
const components = {
  h1: (props) => <DisplayText {...props} />,
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
    // todo: implement live editor
    return <code {...props} />;
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
  ColorSwatchGroup,
  Slider,
  SpacingTokensTable,
  Props,
  PropsHeading,
};
/* eslint-enable react/display-name */

export function MdxRenderer(props: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return <MDXRemote {...props.source} components={components} />;
}
