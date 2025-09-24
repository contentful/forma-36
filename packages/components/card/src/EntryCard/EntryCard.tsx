import React, { forwardRef } from 'react';
import truncate from 'truncate';
import { cx } from '@emotion/css';
import {
  Flex,
  type ExpandProps,
  type PolymorphicComponent,
  type PolymorphicProps,
} from '@contentful/f36-core';
import { EntityStatusBadge } from '@contentful/f36-badge';
import {
  Subheading,
  Paragraph,
  type HeadingElement,
} from '@contentful/f36-typography';

import { BaseCard } from '../BaseCard/BaseCard';
import { getEntryCardStyles } from './EntryCard.styles';
import { EntryCardInternalProps, EntryCardSize } from './EntryCard.types';

const ENTRY_CARD_DEFAULT_TAG = 'article';

export type EntryCardProps<
  E extends React.ElementType = typeof ENTRY_CARD_DEFAULT_TAG,
> = PolymorphicProps<EntryCardInternalProps, E>;

function EntryCardTitle({
  title,
  titleTag,
}: {
  title?: string;
  titleTag: HeadingElement;
}) {
  if (!title) {
    return null;
  }

  const truncatedTitle = truncate(title, 255, {});

  return (
    <Subheading
      title={title.length > 255 ? title : ''}
      testId="title"
      as={titleTag}
      marginBottom="none"
      isWordBreak
    >
      {truncatedTitle}
    </Subheading>
  );
}

EntryCardTitle.displayName = 'EntryCardTitle';

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

  return (
    <Paragraph marginBottom="none" isWordBreak>
      {truncatedDescription}
    </Paragraph>
  );
}

EntryCardDescription.displayName = 'EntryCardDescription';

function EntryCardBase<
  E extends React.ElementType = typeof ENTRY_CARD_DEFAULT_TAG,
>(
  {
    actions,
    children,
    className,
    customActionButton,
    src,
    status,
    thumbnailElement,
    description,
    withDragHandle = false,
    title,
    titleTag = 'h2',
    size,
    testId = 'cf-ui-entry-card',
    contentType,
    badge,
    ...otherProps
  }: EntryCardProps<E>,
  forwardedRef: React.Ref<any>,
) {
  const styles = getEntryCardStyles();
  const entryStatusBadge = status ? (
    <EntityStatusBadge entityStatus={status} />
  ) : null;

  return (
    // @ts-expect-error this beast of polymorphic component needs a deeper refactor.
    <BaseCard
      as={ENTRY_CARD_DEFAULT_TAG}
      {...otherProps}
      actions={actions}
      badge={badge ? badge : entryStatusBadge}
      className={cx(styles.root, className)}
      customActionButton={customActionButton}
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
          <EntryCardTitle title={title} titleTag={titleTag} />
          <EntryCardDescription size={size} description={description} />
          {children}
        </Flex>

        {thumbnailElement && size !== 'small' && (
          <figure className={styles.thumbnail(size)}>{thumbnailElement}</figure>
        )}
      </Flex>
    </BaseCard>
  );
}

EntryCardBase.displayName = 'EntryCard';

export const EntryCard = forwardRef(EntryCardBase) as PolymorphicComponent<
  ExpandProps<EntryCardInternalProps>,
  typeof ENTRY_CARD_DEFAULT_TAG
>;
