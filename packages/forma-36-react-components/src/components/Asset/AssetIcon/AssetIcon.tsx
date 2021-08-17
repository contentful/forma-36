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

AssetIcon.defaultProps = {
  testId: 'cf-ui-asset-icon',
};
