import React from 'react';
import type { EntityStatus, ExpandProps } from '@contentful/f36-core';

import { Badge, type BadgeProps } from '../Badge/Badge';
import type { BadgeVariant } from '../types';

const statusMap: { [key in EntityStatus]: BadgeVariant } = {
  published: 'positive',
  draft: 'warning',
  archived: 'secondary',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

export interface EntityStatusBadgeProps
  extends Omit<BadgeProps, 'variant' | 'children' | 'endIcon' | 'startIcon'> {
  entityStatus: EntityStatus;
}

function EntityStatusBadge(
  props: EntityStatusBadgeProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const { entityStatus, size = 'default', ...otherProps } = props;

  const variant = statusMap[entityStatus];
  return (
    <Badge {...otherProps} size={size} variant={variant} ref={ref}>
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
