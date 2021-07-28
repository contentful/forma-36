import { ComponentVariant } from '@contentful/f36-core';

export type TextLinkVariant =
  | Exclude<ComponentVariant, 'warning'>
  | 'muted'
  | 'white';
