import React from 'react';
import { cx } from 'emotion';
import { Tooltip } from '@contentful/f36-tooltip';
import { Text } from '@contentful/f36-typography';

import { BaseCard } from '../BaseCard/BaseCard';
import type { EntryCardInternalProps } from '../EntryCard/EntryCard.types';
import { getInlineEntryCardStyles } from './InlineEntryCard.styles';
import { CardActions } from '../BaseCard/CardActions';

import { SkeletonBodyText, SkeletonContainer } from '@contentful/f36-skeleton';

export type InlineEntryCardInternalProps = Omit<
  EntryCardInternalProps,
  'icon' | 'withDragHandle' | 'ref' | 'src' | 'type'
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
