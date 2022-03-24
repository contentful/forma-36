import React from 'react';

import {
  Heading,
  Paragraph,
  Subheading,
  List,
  Table,
  TextLink,
} from '@contentful/f36-components';
import { BLOCKS, Block, INLINES } from '@contentful/rich-text-types';
import type { RenderNode } from '@contentful/rich-text-react-renderer';

export const defaultRenderNode: RenderNode = {
  [BLOCKS.PARAGRAPH]: (_node, children) => <Paragraph>{children}</Paragraph>,
  [BLOCKS.HEADING_2]: (_node, children) => (
    <Heading as="h2" marginTop="spacing2Xl">{children}</Heading>
  ),
  [BLOCKS.HEADING_3]: (_node, children) => (
    <Subheading as="h3" marginTop="spacingXl">
      {children}
    </Subheading>
  ),
  [BLOCKS.HEADING_4]: (_node, children) => (
    <Subheading as="h4">{children}</Subheading>
  ),
  [BLOCKS.HEADING_5]: (_node, children) => (
    <Subheading as="h5">{children}</Subheading>
  ),
  [BLOCKS.HEADING_6]: (_node, children) => (
    <Subheading as="h6">{children}</Subheading>
  ),
  [BLOCKS.UL_LIST]: (_node, children) => (
    <List as="ul">
      <List.Item>{children}</List.Item>
    </List>
  ),
  [INLINES.HYPERLINK]: (node, children) => {
   return (
     <TextLink href={node.data.uri}>{children}</TextLink>
   )
  },
  [BLOCKS.TABLE]: (node) => {
    // The first element in the array is always the table’s header
    const [headerRow, ...bodyRows] = node.content as Block[];

    return (
      <Table>
        <Table.Head>
          <Table.Row>
            {headerRow.content.map((cell, idx) => (
              <Table.Cell key={idx}>
                {cell.content[0].content[0].value}
              </Table.Cell>
            ))}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {bodyRows.map((row, idx) => (
            <Table.Row key={idx}>
              {row.content.map((cell, idx) => (
                <Table.Cell key={idx}>
                  {cell.content[0].content[0].value}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};
