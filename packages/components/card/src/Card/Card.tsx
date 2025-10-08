import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import {
  Flex,
  type PolymorphicComponent,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';

import { BaseCard, BASE_CARD_DEFAULT_TAG } from '../BaseCard/BaseCard';
import type { BaseCardInternalProps } from '../BaseCard/BaseCard.types';
import { CardActions } from '../BaseCard/CardActions';
import { getCardStyles } from './Card.styles';

type BaseProps = Omit<
  BaseCardInternalProps,
  'header' | 'withDragHandle' | 'ref' | 'src' | 'type'
> & {
  /**
   * Padding size to apply to the component
   *
   * @default default
   */
  padding?: 'default' | 'large' | 'none';
};

type BasePropsWithDragHandle = Omit<BaseProps, 'padding'> &
  Pick<BaseCardInternalProps, 'withDragHandle'> & { padding: 'none' };

export type CardInternalProps = BaseProps | BasePropsWithDragHandle;

export type CardProps<
  E extends React.ElementType = typeof BASE_CARD_DEFAULT_TAG,
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

_Card.displayName = 'Card';

export const Card: PolymorphicComponent<
  ExpandProps<CardInternalProps>,
  typeof BASE_CARD_DEFAULT_TAG
> = forwardRef(_Card);
