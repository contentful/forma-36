import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import type {
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import type { ExpandProps } from '@contentful/f36-core';

import { BaseCard, BASE_CARD_DEFAULT_TAG } from '../BaseCard-1/BaseCard';
import type { BaseCardInternalProps } from '../BaseCard-1/BaseCard.types';
import { CardActions } from '../BaseCard-1/CardActions';
import { getCardStyles } from './Card.styles';

export type CardInternalProps = Omit<
  BaseCardInternalProps,
  'header' | 'ref' | 'type' | 'withDragHandle'
> & {
  /**
   * Padding size to apply to the component
   *
   * @default default
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
    className,
    testId = 'cf-ui-card',
    ...otherProps
  }: CardProps<E>,
  forwardedRef: React.Ref<HTMLElement>,
) {
  const styles = getCardStyles({ padding });
  const hasHeader = Boolean(title || icon || badge || actions);

  return (
    <BaseCard
      className={cx(styles.root, className)}
      {...otherProps}
      testId={testId}
      header={
        hasHeader && (
          <Flex alignItems="center" className={cx(styles.header)}>
            {title && (
              <Flex as="header" flexGrow={1}>
                <Heading marginBottom="none">{title}</Heading>
              </Flex>
            )}
            {icon && (
              <Flex alignItems="center" marginLeft="spacingXs">
                {icon}
              </Flex>
            )}
            {badge && (
              <Flex alignItems="center" marginLeft="spacingXs">
                {badge}
              </Flex>
            )}
            {actions && <CardActions>{actions}</CardActions>}
          </Flex>
        )
      }
      ref={forwardedRef}
    />
  );
}

export const Card: PolymorphicComponent<
  ExpandProps<CardInternalProps>,
  typeof BASE_CARD_DEFAULT_TAG
> = forwardRef(_Card);
