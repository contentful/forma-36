import { type ComponentType, type ExoticComponent } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IconComponent = ExoticComponent<any> | ComponentType<any>;

export type IconSize = 'medium' | 'small' | 'tiny';

export enum IconVariant {
  Active = 'active',
  Default = 'default',
}
