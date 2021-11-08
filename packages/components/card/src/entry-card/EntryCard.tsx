import React, { forwardRef } from 'react';

import truncate from 'truncate';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import type {
  PolymorphicComponent,
  PolymorphicProps,
} from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import { Subheading, Paragraph } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';

import { getEntryCardStyles } from './EntryCard.styles';
import { EntryCardInternalProps, EntryCardSize } from './EntryCard.types';

const ENTRY_CARD_DEFAULT_TAG = 'article';

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
    withDragHandle = false,
    title,
    size,
    testId = 'cf-ui-entry-card',
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
      withDragHandle={withDragHandle}
      ref={forwardedRef}
      type={contentType}
      testId={testId}
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
          <figure className={styles.thumbnail(size)}>{thumbnailElement}</figure>
        )}
      </Flex>
    </BaseCard>
  );
}

export const EntryCard: PolymorphicComponent<
  EntryCardInternalProps,
  typeof ENTRY_CARD_DEFAULT_TAG
> = forwardRef(_EntryCard);
