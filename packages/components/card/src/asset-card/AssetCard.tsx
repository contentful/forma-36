import React from 'react';
import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Asset } from '@contentful/f36-components';
import type { AssetStatus, AssetType } from '@contentful/f36-components';
import { Icon } from '@contentful/f36-icon';

import { BaseCard } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard';
import { CardActions } from '../base-card/CardActions';
import { styles } from './AssetCard.styles';

const generateSizeStyles = ({
  size,
}: {
  size: AssetCardInternalProps['size'];
}): string => {
  return css({
    padding:
      size === 'small'
        ? tokens.spacingL
        : `calc(1rem * (56 / ${tokens.fontBaseDefault}))`,
  });
};

const generateStateStyles = ({
  isSelected,
}: {
  isSelected: AssetCardInternalProps['isSelected'];
}): string => {
  if (isSelected) {
    return css({
      backgroundColor: tokens.colorWhite,
      borderColor: tokens.colorBlueMid,
      boxShadow: `0 0 0 1px ${tokens.colorElementMid}`,
    });
  }
};

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
      className={cx(
        styles.root,
        className,
        generateStateStyles({ isSelected }),
      )}
      header={header}
      isSelected={isSelected}
      contentBodyProps={{ className: styles.contentBody }}
      title={title}
      withDragHandle={withDragHandle}
    >
      <Flex
        alignItems="center"
        className={generateSizeStyles({ size })}
        justifyContent="center"
      >
        <Asset src={src} status={status} title={title} type={type} />
      </Flex>
    </BaseCard>
  );
};
