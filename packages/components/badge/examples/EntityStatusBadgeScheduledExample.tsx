import React from 'react';
import { EntityStatusBadge } from '@contentful/f36-components';

export default function EntityStatusBadgeScheduledExample() {
  return <EntityStatusBadge entityStatus="changed" isScheduled />;
}
