import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import type {
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';

import { BaseCard, BASE_CARD_DEFAULT_TAG } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard';
import { CardActions } from '../base-card/CardActions';
import { getCardStyles } from './Card.styles';
import { getBaseCardStyles } from '../base-card/BaseCard.styles';

export type CardInternalProps = Omit<
  BaseCardInternalProps,
  'header' | 'ref' | 'type'
> & {
  /**
   * Padding size to apply to the component
   */
  padding?: 'default' | 'large' | 'none';
};

export type CardProps<
  E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG
> = PolymorphicProps<CardInternalProps, E>;

function _Card<E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG>(
  {
    actions,
    badge,
    icon,
    padding = 'default',
    title,
    ...otherProps
  }: CardProps<E>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const styles = getCardStyles({ padding });
  const baseStyles = getBaseCardStyles();
  const hasHeader = title || icon || badge || actions;
  const header = (
    <Flex className={cx(styles.header, actions && styles.headerWithActions)}>
      {title && (
        <Flex as="header" flexGrow={1}>
          <Heading marginBottom="none">{title}</Heading>
        </Flex>
      )}

      {icon && <Icon as={icon} className={baseStyles.headerItem} />}
      {badge && (
        <Flex alignItems="center" className={baseStyles.headerItem}>
          {badge}
        </Flex>
      )}
      {actions && <CardActions>{actions}</CardActions>}
    </Flex>
  );

  return (
    <BaseCard
      className={styles.root}
      contentBodyProps={{ className: styles.content }}
      {...otherProps}
      header={hasHeader ? header : null}
      ref={forwardedRef}
    />
  );
}

export const Card: PolymorphicComponent<
  CardInternalProps,
  typeof BASE_CARD_DEFAULT_TAG
> = forwardRef(_Card);
