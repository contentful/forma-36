import React from 'react';
import slugger from 'github-slugger';
import {
  Heading,
  Paragraph,
  Subheading,
  List,
  Table,
  TextLink,
} from '@contentful/f36-components';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Block, Inline, Text } from '@contentful/rich-text-types';
import type { RenderNode } from '@contentful/rich-text-react-renderer';

import { StaticSource } from '../LiveEditor/StaticSource';
import Image from 'next/image';

const getHeadingId = (node: Block | Inline) =>
  slugger.slug((node.content[0] as Text).value, false);

const prepareMapFromArray = <T,>(array: T[], getKey: (item: T) => string) => {
  const map = new Map();
  for (const item of array) {
    map.set(getKey(item), item);
  }
  return map;
};

export function getRenderNode(links): RenderNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const entryMap = prepareMapFromArray<any>(
    links.entries.block,
    (entry) => entry.sys.id,
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assetsMap = prepareMapFromArray<any>(
    links.assets.block,
    (asset) => asset.sys.id,
  );

  return {
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <Paragraph>{children}</Paragraph>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      const id = getHeadingId(node);

      return (
        <Heading id={id} as="h2" marginTop="spacing2Xl">
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const id = getHeadingId(node);

      return (
        <Subheading id={id} as="h3" marginTop="spacingXl">
          {children}
        </Subheading>
      );
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      const id = getHeadingId(node);
      return (
        <Subheading id={id} as="h4">
          {children}
        </Subheading>
      );
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      const id = getHeadingId(node);
      return (
        <Subheading id={id} as="h5">
          {children}
        </Subheading>
      );
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      const id = getHeadingId(node);
      return (
        <Subheading id={id} as="h6">
          {children}
        </Subheading>
      );
    },
    [BLOCKS.UL_LIST]: (_node, children) => <List as="ul">{children}</List>,
    [BLOCKS.LIST_ITEM]: (_node, children) => <List.Item>{children}</List.Item>,
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = entryMap.get(node.data.target.sys.id);
      return <StaticSource code={entry.code} className="language-jsx" />;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = assetsMap.get(node.data.target.sys.id);
      if (asset?.url) {
        return (
          <Image
            src={asset.url}
            width={asset.width}
            height={asset.height}
            alt={asset.description}
          />
        );
      }
      return null;
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return <TextLink href={node.data.uri}>{children}</TextLink>;
    },
    [BLOCKS.TABLE]: (node) => {
      // The first element in the array is always the table’s header
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const [headerRow, ...bodyRows] = node.content as any[];

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
}
