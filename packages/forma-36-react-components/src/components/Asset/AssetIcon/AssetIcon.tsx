import React from 'react';
import {
  Illustration,
  IllustrationProps,
  IllustrationType,
  isIllustrationType,
} from '../../Illustration';
import { AssetType } from '../Asset';

const DEFAULT_ILLUSTRATION_NAME: IllustrationType = 'Archive';

export interface AssetIconProps
  extends Omit<IllustrationProps, 'illustration'> {
  type?: AssetType;
}

/**
 * Renders only the Illustration that would represent this asset's type
 */
export function AssetIcon({ type, ...otherProps }: AssetIconProps) {
  let illustrationName = type!.charAt(0).toUpperCase() + type!.slice(1); // eslint-disable-line @typescript-eslint/no-non-null-assertion
  if (!isIllustrationType(illustrationName)) {
    illustrationName = DEFAULT_ILLUSTRATION_NAME;
  }

  return (
    <Illustration
      illustration={illustrationName as IllustrationType}
      {...otherProps}
    />
  );
}

AssetIcon.defaultProps = {
  type: 'archive',
  testId: 'cf-ui-asset-icon',
};

export default AssetIcon;
