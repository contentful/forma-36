import { visit } from 'unist-util-visit';
import { Node } from 'unist';

interface CodeNode extends Node {
  type: 'code';
  lang?: string;
  meta?: string;
  value: string;
  data?: {
    hProperties?: Record<string, unknown>;
  };
}

/**
 * Remark plugin to parse custom attributes from code block meta strings
 * and add them as props that can be passed to React components
 */
export function remarkCodeMeta() {
  return (tree: Node) => {
    visit(tree, 'code', (node: CodeNode) => {
      if (node.meta) {
        // Parse attributes from meta string like "static=true title="Example""
        const attrs = parseMetaString(node.meta);

        // Ensure data and hProperties exist
        if (!node.data) {
          node.data = {};
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {};
        }

        // Add parsed attributes to hProperties so they get passed as props
        Object.assign(node.data.hProperties, attrs);
      }
    });
  };
}

function parseMetaString(meta: string): Record<string, unknown> {
  const attrs: Record<string, unknown> = {};

  // Match key=value pairs and standalone keys
  const regex = /(\w+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s]+)))?/g;
  let match;

  while ((match = regex.exec(meta)) !== null) {
    const key = match[1];
    const value = match[2] || match[3] || match[4] || true;

    // Convert string "true"/"false" to boolean
    if (value === 'true') {
      attrs[key] = true;
    } else if (value === 'false') {
      attrs[key] = false;
    } else {
      attrs[key] = value;
    }
  }

  return attrs;
}
