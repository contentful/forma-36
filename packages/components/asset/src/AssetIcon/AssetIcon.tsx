import React from 'react';
import {
  ArchiveIcon,
  AudioIcon,
  CodeIllustrationIcon,
  ImageIcon,
  MarkupIcon,
  PdfIcon,
  PlaintextIcon,
  RichtextIcon,
  PresentationIcon,
  SpreadsheetIcon,
  VideoIcon,
} from '@contentful/f36-icons';
import type { GeneratedIconProps } from '@contentful/f36-icon';
import type { AssetType } from '../types';

import { cx } from 'emotion';
import { getAssetIconStyles } from './AssetIcon.styles';

export interface AssetIconProps
  extends Omit<GeneratedIconProps, 'illustration' | 'ref'> {
  type?: AssetType;
}

/**
 * Renders only the Illustration that would represent this asset's type
 */
export function AssetIcon({
  type = 'archive',
  className,
  testId = 'cf-ui-asset-icon',
  ...otherProps
}: AssetIconProps) {
  const styles = getAssetIconStyles();
  const props = {
    ...otherProps,
    testId,
    className: cx(styles.root, className),
  };

  switch (type) {
    case 'audio':
      return <AudioIcon {...props} />;
    case 'code':
      return <CodeIllustrationIcon {...props} />;
    case 'image':
      return <ImageIcon {...props} />;
    case 'markup':
      return <MarkupIcon {...props} />;
    case 'pdf':
      return <PdfIcon {...props} />;
    case 'plaintext':
      return <PlaintextIcon {...props} />;
    case 'presentation':
      return <PresentationIcon {...props} />;
    case 'richtext':
      return <RichtextIcon {...props} />;
    case 'spreadsheet':
      return <SpreadsheetIcon {...props} />;
    case 'video':
      return <VideoIcon {...props} />;
    case 'archive':
    default:
      return <ArchiveIcon {...props} />;
  }
}
