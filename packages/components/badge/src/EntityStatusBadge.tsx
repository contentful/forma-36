import React from 'react';
import type { BadgeVariant, EntityStatus } from './types';
import { Badge } from './Badge';
import type { BadgeProps } from './Badge';

const statusMap: { [key: string]: BadgeVariant } = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

export type EntityStatusBadgeProps = Omit<
  BadgeProps,
  'variant' | 'children'
> & {
  entityStatus: EntityStatus;
};

function EntityStatusBadge(
  props: EntityStatusBadgeProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { entityStatus, ...otherProps } = props;
  const variant = statusMap[entityStatus];
  return (
    <Badge {...otherProps} variant={variant} ref={ref}>
      {entityStatus}
    </Badge>
  );
}

const _EntityStatusBadge = React.forwardRef(EntityStatusBadge);
export { _EntityStatusBadge as EntityStatusBadge };
