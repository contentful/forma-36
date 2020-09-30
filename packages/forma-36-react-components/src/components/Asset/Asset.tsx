import React, { Component } from 'react';
import cn from 'classnames';
import { AssetState } from '../Card/AssetCard/AssetCard';
import { AssetIcon } from './AssetIcon/AssetIcon';

import styles from './Asset.css';

export const types = {
  archive: 'archive',
  audio: 'audio',
  code: 'code',
  image: 'image',
  markup: 'markup',
  pdf: 'pdf',
  plaintext: 'plaintext',
  presentation: 'presentation',
  richtext: 'richtext',
  spreadsheet: 'spreadsheet',
  video: 'video',
};

export function isAssetType(type: string): type is AssetType {
  return Object.keys(types).includes(type);
}

export type AssetType = keyof typeof types;

export interface AssetProps {
  src: string;
  title: string;
  type?: AssetType;
  className?: string;
  status?: AssetState;
  testId?: string;
}

const defaultProps: Partial<AssetProps> = {
  type: 'image',
  testId: 'cf-ui-asset',
};

export class Asset extends Component<AssetProps> {
  static defaultProps = defaultProps;

  renderImage = (src: string, title: string) => (
    <React.Fragment>
      <div className={styles['Asset__image-container']}>
        <img
          className={styles['Asset__image-container__image']}
          src={src}
          alt={title}
        />
      </div>
      <div className={styles['Asset__title-container']}>
        <span className={styles['Asset__title-container__title']}>{title}</span>
      </div>
    </React.Fragment>
  );

  renderAsset = (type: AssetType, title: string) => {
    return (
      <div className={styles['Asset__asset-container']}>
        <div className={styles['Asset__illustration-container']}>
          <AssetIcon type={type} />
        </div>
        <span className={styles['Asset__asset-container__title']}>{title}</span>
      </div>
    );
  };

  render() {
    const {
      className,
      src,
      status,
      title,
      type,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Asset, className);

    // Archived images will not have a preview available
    const asImage =
      type && type === 'image' && (!status || status !== 'archived') && src;

    return (
      <div className={classNames} data-test-id={testId} {...otherProps}>
        {asImage ? this.renderImage(src, title) : this.renderAsset(type, title)}
      </div>
    );
  }
}

export default Asset;
