import React from 'react';
import { cx } from 'emotion';
import type {
  EntityStatus,
  PickUnion,
  CommonProps,
} from '@contentful/f36-core';
import { Box, Flex } from '@contentful/f36-core';
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
  const isImage = src && src !== '' && type === 'image';

  // Do not show image previews when publish status is archived
  const showPreview = isImage && status !== 'archived';

  return (
    <Box
      className={cx(styles.relative, className)}
      testId={testId}
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
