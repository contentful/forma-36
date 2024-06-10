import React from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Asset, type AssetStatus, type AssetType } from '@contentful/f36-asset';
import { Skeleton } from '@contentful/f36-skeleton';

import { BaseCard } from '../BaseCard/BaseCard';
import type { BaseCardInternalProps } from '../BaseCard/BaseCard.types';
import { getAssetCardStyles } from './AssetCard.styles';
import { DefaultCardHeader } from '../BaseCard/DefaultCardHeader';

export interface AssetCardInternalProps
  extends Omit<BaseCardInternalProps, 'header' | 'padding' | 'ref'> {
  size?: 'small' | 'default';
  src?: string;
  status?: AssetStatus;
  /**
   * Type of the entity represented by the card. Shown in the header of the card
   */
  type?: AssetType;
}

export type AssetCardProps = AssetCardInternalProps;

export const AssetCard = ({
  actions,
  className,
  icon = null,
  isSelected,
  size = 'default',
  src,
  status,
  title,
  type,
  withDragHandle = false,
  isLoading,
  testId = 'cf-ui-asset-card',
  badge: customBadge,
  ...otherProps
}: AssetCardInternalProps) => {
  const styles = getAssetCardStyles();
  const badge = customBadge ? (
    customBadge
  ) : status ? (
    <EntityStatusBadge entityStatus={status} />
  ) : null;
  const header =
    icon || badge || actions ? (
      <DefaultCardHeader icon={icon} badge={badge} actions={actions} />
    ) : null;

  if (isLoading) {
    return (
      <Skeleton.Container
        className={styles.skeleton}
        svgWidth={size === 'default' ? '18rem' : '11rem'}
        svgHeight={size === 'default' ? '18.75rem' : '12rem'}
      >
        <Skeleton.Image width="100%" height="18.75rem" />
      </Skeleton.Container>
    );
  }

  return (
    <BaseCard
      {...otherProps}
      badge={badge}
      className={cx(styles.root({ size }), className)}
      header={header}
      isSelected={isSelected}
      title={title}
      withDragHandle={withDragHandle}
      testId={testId}
    >
      <Flex alignItems="center" fullHeight justifyContent="center">
        <Asset
          className={styles.asset}
          src={src}
          status={status}
          title={title}
          type={type}
        />
      </Flex>
    </BaseCard>
  );
};
