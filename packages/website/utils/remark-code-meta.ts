import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

interface CodeNode extends Node {
  type: 'code';
  lang?: string;
  meta?: string;
  value: string;
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
}

export function remarkCodeMeta() {
  return (tree: Node) => {
    visit(tree, 'code', (node: CodeNode) => {
      if (!node.meta) return;

      const attrs = parseMetaString(node.meta);

      if (!node.data) node.data = {};
      if (!node.data.hProperties) node.data.hProperties = {};

      // :white_check_mark: Ensures MDX passes these to the <code> component
      node.data.hName = 'code';
      Object.assign(node.data.hProperties, attrs);
    });
  };
}

function parseMetaString(meta: string): Record<string, unknown> {
  const attrs: Record<string, unknown> = {};
  const regex = /(\w+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s]+)))?/g;
  let match;

  while ((match = regex.exec(meta)) !== null) {
    const key = match[1];
    const raw = match[2] || match[3] || match[4] || true;
    attrs[key] = raw === 'true' ? true : raw === 'false' ? false : raw;
  }

  return attrs;
}
