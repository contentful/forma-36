import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';
import truncate from 'truncate';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import type {
  EntityStatus,
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Subheading, Paragraph } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';
import type { BaseCardInternalProps } from '../base-card/BaseCard.types';
import { getEntryCardStyles } from './EntryCard.styles';

const ENTRY_CARD_DEFAULT_TAG = 'article';

export type EntryCardSize = 'default' | 'small' | 'auto';

export type EntryCardInternalProps = Omit<
  BaseCardInternalProps,
  'badge' | 'header' | 'padding' | 'ref' | 'type' | 'title'
> & {
  /**
   * The title of the entry
   */
  title?: string;
  /**
   * The description of the entry
   */
  description?: string;
  /**
   * The content type of the entry
   */
  contentType?: string;
  /**
   * The publish status of the entry
   */
  status?: EntityStatus;
  /**
   * The thumbnail of the entry
   */
  thumbnailElement?: ReactElement;
  /**
   * Changes the height of the component. When small will also ensure thumbnail and description aren't rendered
   */
  size?: EntryCardSize;
};

export type EntryCardProps<
  E extends React.ElementType = typeof ENTRY_CARD_DEFAULT_TAG
> = PolymorphicProps<EntryCardInternalProps, E>;

function EntryCardTitle({ title }: { title?: string }) {
  if (!title) {
    return null;
  }

  const truncatedTitle = truncate(title, 255, {});

  return (
    <Subheading
      title={title.length > 255 ? title : ''}
      testId="title"
      as="h1"
      marginBottom="none"
    >
      {truncatedTitle}
    </Subheading>
  );
}

function EntryCardDescription({
  description,
  size,
}: {
  size: EntryCardSize;
  description?: string;
}) {
  if (!description || size === 'small') {
    return null;
  }

  const truncatedDescription = truncate(description, 95, {});

  return <Paragraph marginBottom="none">{truncatedDescription}</Paragraph>;
}

function _EntryCard<
  E extends React.ElementType = typeof ENTRY_CARD_DEFAULT_TAG
>(
  {
    actions,
    children,
    className,
    src,
    status,
    thumbnailElement,
    description,
    title,
    size,
    contentType,
    ...otherProps
  }: EntryCardProps<E>,
  forwardedRef: React.Ref<any>,
) {
  const styles = getEntryCardStyles();
  const badge = status ? <EntityStatusBadge entityStatus={status} /> : null;

  return (
    <BaseCard
      as={ENTRY_CARD_DEFAULT_TAG}
      {...otherProps}
      actions={actions}
      badge={badge}
      className={cx(styles.root, className)}
      ref={forwardedRef}
      type={contentType}
    >
      <Flex
        alignItems="center"
        className={styles.content(size)}
        flexDirection="row"
      >
        <Flex flexDirection="column" flexGrow={1} gap="spacingS">
          <EntryCardTitle title={title} />
          <EntryCardDescription size={size} description={description} />
          {children}
        </Flex>

        {thumbnailElement && (
          <figure
            className={cx(
              styles.thumbnail,
              size === 'small' && styles.thumbnailSmall,
            )}
          >
            {thumbnailElement}
          </figure>
        )}
      </Flex>
    </BaseCard>
  );
}

export const EntryCard: PolymorphicComponent<
  EntryCardInternalProps,
  typeof ENTRY_CARD_DEFAULT_TAG
> = forwardRef(_EntryCard);
