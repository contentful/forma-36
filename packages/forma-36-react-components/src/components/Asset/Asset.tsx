import React from 'react';
import cn from 'classnames';

import { AssetIcon } from './AssetIcon/AssetIcon';
import type { AssetState } from '../Card/AssetCard/AssetCard';
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
  /**
   * Class names to be appended to the className prop of the Dropdown wrapper
   */
  className?: string;
  /**
   * A `src` attribute to use for image assets
   */
  src?: string;
  /**
   * The publish status of the asset
   */
  status?: AssetState;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
  /**
   * The title of the asset
   */
  title?: string;
  /**
   * The type of asset being represented
   */
  type?: AssetType;
}

export function Asset({
  className,
  src,
  status,
  testId,
  title,
  type,
  ...otherProps
}: AssetProps): React.ReactElement {
  const classNames = cn(styles.Asset, className);
  const isImage = type === 'image' && src !== undefined && src !== '';

  // Do not show image previews when publish status is archived
  const showPreview = isImage && status !== 'archived';

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      {showPreview ? (
        <React.Fragment>
          <div className={styles['Asset__image-container']}>
            <img
              className={styles['Asset__image-container__image']}
              src={src}
              alt={title}
            />
          </div>
          {title && (
            <div className={styles['Asset__title-container']}>
              <span className={styles['Asset__title-container__title']}>
                {title}
              </span>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className={styles['Asset__asset-container']}>
          <div className={styles['Asset__illustration-container']}>
            <AssetIcon type={type} />
          </div>
          {title && (
            <span className={styles['Asset__asset-container__title']}>
              {title}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Asset.defaultProps = {
  type: 'image',
  testId: 'cf-ui-asset',
};

export default Asset;
