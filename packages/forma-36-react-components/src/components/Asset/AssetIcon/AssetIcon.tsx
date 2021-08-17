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
import { AssetType } from '../Asset';
import styles from './AssetIcon.css';
import cn from 'classnames';

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
  ...otherProps
}: AssetIconProps) {
  const props = {
    ...otherProps,
    className: cn(className, styles['AssetIcon']),
  };

  switch (type) {
    case 'audio':
      return <AudioCode {...props} />;
    case 'code':
      return <CodeIllustrationCode {...props} />;
    case 'image':
      return <ImageCode {...props} />;
    case 'markup':
      return <MarkupCode {...props} />;
    case 'pdf':
      return <PdfCode {...props} />;
    case 'plaintext':
      return <PlaintextCode {...props} />;
    case 'presentation':
      return <PresentationCode {...props} />;
    case 'richtext':
      return <RichtextCode {...props} />;
    case 'spreadsheet':
      return <SpreadsheetCode {...props} />;
    case 'video':
      return <VideoCode {...props} />;
    case 'archive':
    default:
      return <ArchiveCode {...props} />;
  }
}

AssetIcon.defaultProps = {
  testId: 'cf-ui-asset-icon',
};
