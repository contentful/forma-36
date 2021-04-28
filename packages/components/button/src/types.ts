import { ComponentVariant } from '@contentful/f36-core';

export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonVariant = Exclude<ComponentVariant, 'warning'>;
