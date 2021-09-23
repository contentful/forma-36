import React from 'react';
import { css, cx } from 'emotion';
import { Text } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';
import type { EntryCardInternalProps } from '../entry-card/EntryCard';
import { getInlineEntryCardStyles } from './InlineEntryCard.styles';
import { CardActions } from '../base-card/CardActions';

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
  ...otherProps
}: InlineEntryCardInternalProps) => {
  const styles = getInlineEntryCardStyles();
  const header = (
    <CardActions buttonProps={{ className: styles.actions }}>
      {actions}
    </CardActions>
  );

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
