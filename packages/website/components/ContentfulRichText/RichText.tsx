import React from 'react';
import { Document } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  RenderNode,
} from '@contentful/rich-text-react-renderer';

import { defaultRenderNode, defaultRenderMarks } from './defaultRenderNode';

export interface RichTextProps {
  /** Object returned by the CDA for rich text fields in a content entry */
  document: Document;
  /**
   * A map that helps customise the way a rich text will be rendered in react.
   * Each property is a function (node, children) => ReactNode
   * */
  customRenderNode?: RenderNode;
}

export function RichText({ document, customRenderNode }: RichTextProps) {
  return (
    <>
      {documentToReactComponents(document, {
        renderNode: { ...defaultRenderNode, ...customRenderNode },
        renderMark: { ...defaultRenderMarks }
      })}
    </>
  );
}
