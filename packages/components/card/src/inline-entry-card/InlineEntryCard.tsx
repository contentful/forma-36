import React from 'react';
import { css, cx } from 'emotion';
import { Text } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';
import type { EntryCardInternalProps } from '../entry-card/EntryCard';
import { getInlineEntryCardStyles } from './InlineEntryCard.styles';
import { CardActions } from '../base-card/CardActions';

import { SkeletonBodyText, SkeletonContainer } from '@contentful/f36-skeleton';

export type InlineEntryCardInternalProps = Omit<
  EntryCardInternalProps,
  'children' | 'icon' | 'withDragHandle' | 'ref' | 'src' | 'type'
>;

export type InlineEntryCardProps = InlineEntryCardInternalProps;

export const InlineEntryCard = ({
  actions,
  className,
  status,
  title,
  isLoading,
  ...otherProps
}: InlineEntryCardInternalProps) => {
  const styles = getInlineEntryCardStyles();
  const header = (
    <CardActions buttonProps={{ className: styles.actions }}>
      {actions}
    </CardActions>
  );

  if (isLoading) {
    return (
      <SkeletonContainer
        className={styles.skeleton}
        svgHeight="1.25rem"
        svgWidth="6rem"
      >
        <SkeletonBodyText numberOfLines={1} />
      </SkeletonContainer>
    );
  }

  return (
    <BaseCard
      {...otherProps}
      className={cx(styles.root({ status }), className)}
      contentBodyProps={{ className: css({ padding: 0 }) }}
      header={header}
    >
      <Text>{title}</Text>
    </BaseCard>
  );
};
