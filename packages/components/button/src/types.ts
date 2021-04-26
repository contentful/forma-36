import { ComponentVariant } from '@contentful/f36-core';

export type ButtonSize = 'default' | 'small' | 'large';

export type ButtonVariant = Exclude<ComponentVariant, 'warning'>;
