import React from 'react';
import { Document } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  RenderNode,
} from '@contentful/rich-text-react-renderer';
import { defaultRenderNode } from '../../utils/defaultRenderNode';

interface RichTextProps {
  /** Object returned by the CDA for rich text fields in a content entry */
  document: Document;
  /**
   * A map that helps customise the way a rich text will be rendered in react.
   * Each property is a function (node, children) => ReactNode
   * */
  customRenderNode?: RenderNode;
  /** A string to be used in tests */
  testId?: string;
}

export function RichText({
  document,
  customRenderNode,
  testId = 'contentful-rich-text',
}: RichTextProps) {
  return (
    <span data-test-id={testId}>
      {documentToReactComponents(document.json, {
        renderNode: { ...defaultRenderNode, ...customRenderNode },
      })}
    </span>
  );
}
