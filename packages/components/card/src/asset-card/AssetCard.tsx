import React from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Asset } from '@contentful/f36-asset';
import type { AssetStatus, AssetType } from '@contentful/f36-asset';
import { Icon } from '@contentful/f36-icon';

import { BaseCard } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard';
import { CardActions } from '../base-card/CardActions';
import { getAssetCardStyles } from './AssetCard.styles';

export interface AssetCardInternalProps
  extends Omit<BaseCardInternalProps, 'badge' | 'header' | 'padding' | 'ref'> {
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
  actionsButtonProps,
  className,
  icon,
  isSelected,
  size = 'default',
  src,
  status,
  title,
  type,
  withDragHandle = true,
  ...otherProps
}: AssetCardInternalProps) => {
  const styles = getAssetCardStyles();
  const badge = status ? <EntityStatusBadge entityStatus={status} /> : null;
  const header =
    type || icon || badge || actions ? (
      <Flex className={cx(styles.header, actions && styles.headerWithActions)}>
        <Flex as="footer" flexGrow={1}>
          {type}
        </Flex>
        {icon && <Icon as={icon} className={styles.headerItem} />}
        {badge && (
          <Flex alignItems="center" className={styles.headerItem}>
            {badge}
          </Flex>
        )}
        {actions && (
          <CardActions buttonProps={actionsButtonProps}>{actions}</CardActions>
        )}
      </Flex>
    ) : null;

  return (
    <BaseCard
      {...otherProps}
      badge={badge}
      className={cx(styles.root({ isSelected }), className)}
      header={header}
      isSelected={isSelected}
      contentBodyProps={{ className: styles.contentBody }}
      title={title}
      withDragHandle={withDragHandle}
    >
      <Flex
        alignItems="center"
        className={styles.sizeWrapper({ size })}
        justifyContent="center"
      >
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
