import React from 'react';
import {
  Archive,
  Audio,
  CodeIllustration,
  Image,
  Markup,
  Pdf,
  Plaintext,
  Richtext,
  Presentation,
  Spreadsheet,
  Video,
} from '@contentful/f36-icons';
import type { IconProps } from '@contentful/f36-icon';
import { AssetType } from '../Asset';
import styles from './AssetIcon.css';
import cn from 'classnames';

export interface AssetIconProps extends Omit<IconProps, 'illustration'> {
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
    size: 'large',
    className: cn(className, styles['AssetIcon']),
  };

  switch (type) {
    case 'audio':
      return <Audio {...props} />;
    case 'code':
      return <CodeIllustration {...props} />;
    case 'image':
      return <Image {...props} />;
    case 'markup':
      return <Markup {...props} />;
    case 'pdf':
      return <Pdf {...props} />;
    case 'plaintext':
      return <Plaintext {...props} />;
    case 'presentation':
      return <Presentation {...props} />;
    case 'richtext':
      return <Richtext {...props} />;
    case 'spreadsheet':
      return <Spreadsheet {...props} />;
    case 'video':
      return <Video {...props} />;
    case 'archive':
    default:
      return <Archive {...props} />;
  }
}

AssetIcon.defaultProps = {
  testId: 'cf-ui-asset-icon',
};
