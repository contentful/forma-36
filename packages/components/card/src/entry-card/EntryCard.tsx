import React, { forwardRef } from 'react';
import type { ReactElement, ReactNode } from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import type {
  EntityStatus,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Heading } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard';
import { getEntryCardStyles } from './EntryCard.styles';

const DEFAULT_TAG = 'article';

export type EntryCardInternalProps = Omit<
  BaseCardInternalProps,
  'badge' | 'header' | 'padding' | 'ref'
> & {
  children?: ReactElement | ReactNode;
  /**
   * Render the card in a loading state with skeleton components
   */
  isLoading?: boolean;
  src?: string;
  status?: EntityStatus;
  thumbnail?: ReactElement;
};

export type EntryCardProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<EntryCardInternalProps, E>;

function _EntryCard<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    actions,
    children,
    className,
    src,
    status,
    thumbnail,
    title,
    type,
    ...otherProps
  }: EntryCardProps<E>,
  forwardedRef: React.Ref<any>,
) {
  const styles = getEntryCardStyles();
  const badge = status ? <EntityStatusBadge entityStatus={status} /> : null;

  return (
    <BaseCard
      as={DEFAULT_TAG}
      {...otherProps}
      actions={actions}
      badge={badge}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      type={type}
    >
      <Flex
        alignItems="flex-start"
        className={styles.content}
        flexDirection="row"
      >
        <Flex flexDirection="column" flexGrow={1}>
          {title && <Heading>{title}</Heading>}

          {children}
        </Flex>

        {thumbnail && <Flex marginLeft="spacingXs">{thumbnail}</Flex>}
      </Flex>
    </BaseCard>
  );
}

export const EntryCard: PolymorphicComponent<
  EntryCardInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_EntryCard);
