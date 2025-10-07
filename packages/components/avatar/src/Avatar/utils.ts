import tokens from '@contentful/f36-tokens';

import { AvatarProps } from './Avatar';
import { type Variant } from './types';

export const SIZES = ['tiny', 'small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];
export type SizeInPixel = `${number}px`;

export type ColorVariant = keyof typeof avatarColorMap;

export const avatarColorMap = {
  primary: tokens.blue500,
  muted: applyMuted(tokens.gray500),
  green: tokens.green400,
  orange: tokens.orange400,
  yellow: tokens.yellow500,
  purple: tokens.purple400,
  gray: tokens.gray500,
  pink: '#FF77AE',
  emerald: '#00B8A2',
  lavender: '#9095FF',
};

/**
 * @param color Color string in hex format with a leading `#`
 */
export function applyMuted(color: string): string {
  // This is a temporary solution because `color-mix` is not supported in Safari
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgb(${[
    Math.round((255 + r) / 2),
    Math.round((255 + g) / 2),
    Math.round((255 + b) / 2),
  ].join(' ')})`;

  // Eventually we should use `color-mix`
  // return `color-mix(in srgb, ${color}, ${tokens.colorWhite} 50%)`;
}

export function getWhiteBorderWidth(variant: Variant, size: number): number {
  if (variant === 'user') {
    return 1;
  }

  return size >= 48 ? 3 : 2;
}

export function getColorWidth(colorVariant: ColorVariant): number {
  return ['muted', 'gray'].includes(colorVariant) ? 1 : 2;
}

export function getTotalBorderWidth(
  variant: Variant,
  colorVariant: ColorVariant,
  size: number,
): number {
  return getColorWidth(colorVariant) + getWhiteBorderWidth(variant, size);
}

/**
 * Converts the variant size to pixels
 *
 * @param size
 * @returns the size in pixels
 */
export const parseSize = (size: AvatarProps['size']): number => {
  const sizeMap = {
    tiny: 20,
    small: 24,
    medium: 32,
    large: 48,
  };

  return sizeMap[size] ?? parseInt(size.slice(0, -2), 10);
};

/**
 *
 * @param size
 * @returns the size in pixels with the 'px' suffix
 */
export function toPixels(size: number): SizeInPixel {
  return `${size}px`;
}

export function getOuterRadius(variant: Variant): string {
  return variant === 'app' ? '4px' : '100%';
}

export function getInnerRadius(variant: Variant): string {
  return variant === 'app' ? '1px' : '100%';
}
