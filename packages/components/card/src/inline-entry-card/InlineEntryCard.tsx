import React from 'react';
import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getEntityStatusStyles } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

import { BaseCard } from '../base-card/BaseCard';
import type { EntryCardInternalProps } from '../entry-card/EntryCard';
import { styles } from './InlineEntryCard.styles';
import { CardActions } from '../base-card/CardActions';

const generateStyles = ({
  status,
}: {
  status: InlineEntryCardProps['status'];
}) => {
  const statusColors = getEntityStatusStyles({ status });

  return css({
    '&::before': {
      backgroundColor: statusColors.color,
      bottom: 0,
      content: '""',
      display: 'block',
      left: 0,
      position: 'absolute',
      top: 0,
      width: `calc(1rem * (4 / ${tokens.fontBaseDefault}))`,
    },
  });
};

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
  const header = (
    <CardActions buttonProps={{ className: styles.actions }}>
      {actions}
    </CardActions>
  );
  const statusStyles = generateStyles({ status });

  return (
    <BaseCard
      {...otherProps}
      className={cx(styles.root, statusStyles, className)}
      contentBodyProps={{ className: css({ padding: 0 }) }}
      header={header}
    >
      <Text>{title}</Text>
    </BaseCard>
  );
};
