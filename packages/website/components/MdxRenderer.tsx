import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { SandpackRenderer } from './SandpackRenderer';

const components = {
  code: function Code(props: { template: string; children }) {
    if (props.template === 'react') {
      return <SandpackRenderer>{props.children}</SandpackRenderer>;
    }
    return <code>{props.children}</code>;
  },
};

export function MdxRenderer(props: {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}) {
  return <MDXRemote {...props.source} components={components} />;
}
