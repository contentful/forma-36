import React, { Component } from 'react';
import {
  Illustration,
  IllustrationProps,
  IllustrationType,
  isIllustrationType,
} from '../../Illustration';
import { AssetType } from '../Asset';

const DEFAULT_ILLUSTRATION_NAME: IllustrationType = 'Archive';

export type AssetIconProps = {
  type?: AssetType;
} & Omit<IllustrationProps, 'illustration'> &
  typeof defaultProps;

const defaultProps = {
  type: 'archive',
  testId: 'cf-ui-asset-icon',
};

/**
 * Renders only the Illustration that would represent this asset's type
 */
export class AssetIcon extends Component<AssetIconProps> {
  static defaultProps = defaultProps;

  render() {
    const { type, ...otherProps } = this.props;

    let illustrationName = type.charAt(0).toUpperCase() + type.slice(1);
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
}

export default AssetIcon;
