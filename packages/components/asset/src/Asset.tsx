import React from 'react';
import { cx } from '@emotion/css';
import {
  Box,
  Flex,
  type EntityStatus,
  type PickUnion,
  type CommonProps,
} from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

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

function AssetBase(
  {
    className,
    src,
    status,
    testId = 'cf-ui-asset',
    title,
    type = 'image',
    ...otherProps
  }: AssetProps,
  ref: React.Ref<HTMLElement>,
) {
  const styles = getAssetStyles();
  const isImage = src && src !== '' && type === 'image';

  // Do not show image previews when publish status is archived
  const showPreview = isImage && status !== 'archived';

  return (
    <Box
      className={cx(styles.root, className)}
      testId={testId}
      ref={ref}
      {...otherProps}
    >
      {showPreview ? (
        <>
          <Flex
            alignItems="center"
            justifyContent="center"
            className={styles.height100}
          >
            <img className={styles.image} src={src} alt={title} />
          </Flex>
          {title && (
            <div className={styles.titleContainer}>
              <Text
                className={styles.title}
                fontColor="colorWhite"
                margin="spacingS"
                isTruncated
              >
                {title}
              </Text>
            </div>
          )}
        </>
      ) : (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          paddingLeft="spacingS"
          paddingRight="spacingS"
          className={styles.height100}
        >
          <Flex
            marginBottom="spacingM"
            marginTop="spacingM"
            justifyContent="center"
          >
            <AssetIcon type={type} />
          </Flex>
          <Text isTruncated marginBottom="spacingM" fontColor="gray600">
            {title}
          </Text>
        </Flex>
      )}
    </Box>
  );
}

AssetBase.displayName = 'Asset';

export const Asset = React.forwardRef(AssetBase);
