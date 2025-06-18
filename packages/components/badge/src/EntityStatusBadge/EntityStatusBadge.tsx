import React from 'react';
import type {
  EntityStatus,
  ExpandProps,
  PickUnion,
} from '@contentful/f36-core';

import { Badge, type BadgeProps } from '../Badge/Badge';
import type { BadgeSize, BadgeVariant } from '../types';

import { ClockIcon } from '@contentful/f36-icons-alpha';

const statusMap: { [key in EntityStatus]: BadgeVariant } = {
  published: 'positive',
  draft: 'warning',
  archived: 'secondary',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

type BadgeSizeWithIsScheduledProp =
  | {
      /**
       * Sets the size of the component
       * @default default
       */
      size?: Exclude<BadgeSize, 'small'>;
      /**
       * Indicates that the entity that the badge is related to has a scheduled action
       */
      isScheduled?: boolean;
    }
  | {
      /**
       * Sets the size of the component
       * @default default
       */
      size: PickUnion<BadgeSize, 'small'>;
      // We use discriminative union typing, so in case the size is set as small we don't allow isScheduled
      isScheduled?: never;
    };

export type EntityStatusBadgeProps = Omit<
  BadgeProps,
  'children' | 'endIcon' | 'size' | 'startIcon' | 'variant'
> &
  BadgeSizeWithIsScheduledProp & {
    entityStatus: EntityStatus;
  };

function EntityStatusBadge(
  props: EntityStatusBadgeProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    entityStatus,
    isScheduled = undefined,
    size = 'default',
    ...otherProps
  } = props;
  const withClockIcon = isScheduled && size === 'default';
  const variant = statusMap[entityStatus];

  return (
    <Badge
      {...otherProps}
      {...(withClockIcon
        ? { size, startIcon: <ClockIcon testId="schedule-icon" /> }
        : { size })}
      variant={variant}
      ref={ref}
    >
      {entityStatus}
    </Badge>
  );
}

EntityStatusBadge.displayName = 'EntityStatusBadge';

const _EntityStatusBadge = React.forwardRef<
  HTMLDivElement,
  ExpandProps<EntityStatusBadgeProps>
>(EntityStatusBadge);
export { _EntityStatusBadge as EntityStatusBadge };
