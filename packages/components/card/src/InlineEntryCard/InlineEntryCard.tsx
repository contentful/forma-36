import React from 'react';
import { cx } from '@emotion/css';
import { Tooltip } from '@contentful/f36-tooltip';
import { Text } from '@contentful/f36-typography';
import { Skeleton } from '@contentful/f36-skeleton';

import { BaseCard } from '../BaseCard/BaseCard';
import type { BaseCardDragHandleProps } from '../BaseCard/BaseCard.types';
import type { EntryCardInternalProps } from '../EntryCard/EntryCard.types';
import { getInlineEntryCardStyles } from './InlineEntryCard.styles';
import { CardActions } from '../BaseCard/CardActions';

export type InlineEntryCardInternalProps = Omit<
  EntryCardInternalProps,
  'icon' | 'ref' | 'src' | 'size' | 'type' | keyof BaseCardDragHandleProps
>;

export type InlineEntryCardProps = InlineEntryCardInternalProps;

export const InlineEntryCard = ({
  actions,
  className,
  children,
  status,
  title,
  isLoading,
  testId = 'cf-ui-inline-entry-card',
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
      <Skeleton.Container
        className={styles.skeleton}
        svgHeight="1.25rem"
        svgWidth="6rem"
      >
        <Skeleton.BodyText numberOfLines={1} />
      </Skeleton.Container>
    );
  }

  return (
    <Tooltip placement="bottom" content={title}>
      <BaseCard
        {...otherProps}
        className={cx(styles.root({ status }), className)}
        header={header}
        testId={testId}
      >
        {children || <Text>{title}</Text>}
      </BaseCard>
    </Tooltip>
  );
};
