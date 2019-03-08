import React, { Component } from 'react';
import cn from 'classnames';
import Illustration, { IllustrationType } from '../Illustration/Illustration';

const styles = require('./Asset.css');

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

export type AssetType = keyof typeof types;

export interface AssetProps {
  extraClassNames?: string;
  src: string;
  title: string;
  type?: AssetType;
}

export class Asset extends Component<AssetProps> {
  static defaultProps = {
    extraClassNames: undefined,
    type: 'image',
  };

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

  renderAsset = (type: string, title: string) => {
    const illustraionName = type.charAt(0).toUpperCase() + type.slice(1);
    return (
      <div className={styles['Asset__asset-container']}>
        <div className={styles['Asset__illustration-container']}>
          <Illustration illustration={illustraionName as IllustrationType} />
        </div>
        <span className={styles['Asset__asset-container__title']}>{title}</span>
      </div>
    );
  };

  render() {
    const { extraClassNames, src, title, type, ...otherProps } = this.props;

    const classNames = cn(styles.Asset, extraClassNames);

    return (
      <div className={classNames} {...otherProps}>
        {type === 'image'
          ? this.renderImage(src, title)
          : this.renderAsset(type, title)}
      </div>
    );
  }
}

export default Asset;
