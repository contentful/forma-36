import React from 'react';
import { cx } from 'emotion';
import type {
  EntityStatus,
  PickUnion,
  CommonProps,
} from '@contentful/f36-core';

import { AssetIcon } from './AssetIcon/AssetIcon';
import { getAssetStyles } from './Asset.styles';
import type { AssetType } from './types';

export type AssetStatus = PickUnion<
  EntityStatus,
  'archived' | 'changed' | 'deleted' | 'draft' | 'published'
>;

export interface AssetProps extends CommonProps {
  /**
   * A `src` attribute to use for image assets
   */
  src?: string;
  /**
   * The publish status of the asset
   */
  status?: AssetStatus;
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
  testId = 'cf-ui-asset',
  title,
  type = 'image',
  ...otherProps
}: AssetProps) {
  const styles = getAssetStyles();
  const classNames = cx(styles.root, className);
  const isImage = type === 'image' && src !== undefined && src !== '';

  // Do not show image previews when publish status is archived
  const showPreview = isImage && status !== 'archived';

  return (
    <div className={classNames} data-test-id={testId} {...otherProps}>
      {showPreview ? (
        <React.Fragment>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={src} alt={title} />
          </div>
          {title && (
            <div className={styles.titleContainer}>
              <span className={styles.title}>{title}</span>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className={styles.assetContainer}>
          <div className={styles.assetIllustrationContainer}>
            <AssetIcon type={type} />
          </div>
          {title && <span className={styles.assetTitle}>{title}</span>}
        </div>
      )}
    </div>
  );
}
