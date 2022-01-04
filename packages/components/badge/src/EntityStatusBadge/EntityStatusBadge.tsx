import React from 'react';
import type { EntityStatus, ExpandProps } from '@contentful/f36-core';

import { Badge } from '../Badge/Badge';
import type { BadgeProps } from '../Badge/Badge';
import type { BadgeVariant, BadgeSize } from '../types';

const statusMap: { [key in EntityStatus]: BadgeVariant } = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

export interface EntityStatusBadgeProps
  extends Omit<BadgeProps, 'variant' | 'children'> {
  size?: BadgeSize;
  entityStatus: EntityStatus;
}

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

const _EntityStatusBadge = React.forwardRef<
  HTMLDivElement,
  ExpandProps<EntityStatusBadgeProps>
>(EntityStatusBadge);
export { _EntityStatusBadge as EntityStatusBadge };
