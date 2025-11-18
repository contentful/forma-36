import React from 'react';
import { Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getRenderNode } from './defaultRenderNode';

export interface RichTextProps {
  /** Object returned by the CDA for rich text fields in a content entry */
  document: Document;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links?: any;
}

export function RichText({ document, links }: RichTextProps) {
  return (
    <>
      {documentToReactComponents(document, {
        renderNode: getRenderNode(links),
      })}
    </>
  );
}
