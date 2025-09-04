import React from 'react';
import {
  FileArchiveIcon,
  FileAudioIcon,
  BracketsCurlyIcon,
  ImageSquareIcon,
  FileCodeIcon,
  FilePdfIcon,
  FileTextIcon,
  RichTextIcon,
  PresentationIcon,
  TableIcon,
  FileVideoIcon,
} from '@contentful/f36-icons';
import type { GeneratedIconProps } from '@contentful/f36-icon';
import type { AssetType } from '../types';

import { cx } from '@emotion/css';
import { getAssetIconStyles } from './AssetIcon.styles';

export interface AssetIconProps
  extends Omit<GeneratedIconProps, 'illustration' | 'ref'> {
  type?: AssetType;
}

/**
 * Renders only the Illustration that would represent this asset's type
 */
export const AssetIcon = ({
  type = 'archive',
  className,
  testId = 'cf-ui-asset-icon',
  ...otherProps
}: AssetIconProps) => {
  const styles = getAssetIconStyles();
  const props = {
    ...otherProps,
    testId,
    className: cx(styles.root, className),
  };

  switch (type) {
    case 'audio':
      return <FileAudioIcon {...props} />;
    case 'code':
      return <BracketsCurlyIcon {...props} />;
    case 'image':
      return <ImageSquareIcon {...props} />;
    case 'markup':
      return <FileCodeIcon {...props} />;
    case 'pdf':
      return <FilePdfIcon {...props} />;
    case 'plaintext':
      return <FileTextIcon {...props} />;
    case 'presentation':
      return <PresentationIcon {...props} />;
    case 'richtext':
      return <RichTextIcon {...props} />;
    case 'spreadsheet':
      return <TableIcon {...props} />;
    case 'video':
      return <FileVideoIcon {...props} />;
    case 'archive':
    default:
      return <FileArchiveIcon {...props} />;
  }
};

AssetIcon.displayName = 'AssetIcon';
