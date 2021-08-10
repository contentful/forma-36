import React, { forwardRef } from 'react';
import { css, cx } from 'emotion';
import type { ObjectInterpolation } from 'emotion';
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { Heading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { Icon } from '@contentful/f36-icon';
import tokens from '@contentful/f36-tokens';

import { BaseCard } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard';
import { CardActions } from '../base-card/CardActions';
import { styles } from './Card.styles';
import { styles as baseStyles } from '../base-card/BaseCard.styles';

const DEFAULT_TAG = 'article';

const generateHeaderPaddingStyles = ({ actions, padding }) => {
  const styles: ObjectInterpolation<undefined> = {
    padding: padding === 'large' ? tokens.spacingL : tokens.spacingM,
  };

  if (actions) {
    styles.paddingTop =
      padding === 'large' ? tokens.spacingM : tokens.spacingXs;
  }

  return css(styles);
};

export type CardInternalProps = Omit<
  BaseCardInternalProps,
  'header' | 'ref' | 'type'
> & {
  /**
   * Padding size to apply to the component
   */
  padding?: 'default' | 'large';
};

export type CardProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  CardInternalProps
>;

export const _Card: PolymorphicComponentWithRef<
  CardInternalProps,
  typeof DEFAULT_TAG
> = (
  {
    actions,
    badge,
    className,
    icon,
    padding = 'default',
    title,
    ...otherProps
  },
  forwardedRef,
) => {
  const hasHeader = title || icon || badge || actions;
  const header = (
    <Flex
      className={cx(
        styles.header,
        actions && styles.headerWithActions,
        generateHeaderPaddingStyles({ actions, padding }),
      )}
    >
      {title && (
        <Flex as="header" flexGrow={1}>
          <Heading>{title}</Heading>
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
      as={DEFAULT_TAG}
      contentBodyProps={
        padding === 'large' && {
          className: styles.contentWithLargePadding,
        }
      }
      {...otherProps}
      header={hasHeader ? header : null}
      ref={forwardedRef}
    />
  );
};

export const Card: PolymorphicComponent<
  CardInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_Card);
