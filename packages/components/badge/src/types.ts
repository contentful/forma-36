import type { ComponentVariant } from '@contentful/f36-core';

export type BadgeSize = 'default' | 'small';

export type BadgeVariant =
  | ComponentVariant
  | 'muted'
  | 'primary-filled'
  | 'featured';
