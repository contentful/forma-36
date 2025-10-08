import React, { forwardRef } from 'react';
import { cx } from 'emotion';

import { type CommonProps } from '@contentful/f36-core';
import { Image, type ImageProps } from '@contentful/f36-image';
import {
  Tooltip,
  type TooltipInternalProps,
  type WithEnhancedContent,
} from '@contentful/f36-tooltip';

import { getAvatarStyles } from './Avatar.styles';
import { type ColorVariant, type Size, type SizeInPixel } from './utils';
import type { Variant } from './types';
export { type Variant } from './types';

export interface AvatarProps extends CommonProps {
  alt?: ImageProps['alt'];
  /**
   * @default false
   */
  isLoading?: boolean;
  /**
   * Use the available sizes or a numerical custom one, e.g. '52px'
   * @default 'medium'
   */
  size?: Size | SizeInPixel;
  initials?: string;
  src?: ImageProps['src'];
  /**
   * A tooltipProps attribute used to conditionally render the tooltip around root element
   */
  tooltipProps?: CommonProps &
    WithEnhancedContent &
    Omit<TooltipInternalProps, 'children'>;
  /**
   * @default 'user'
   */
  variant?: Variant;
  /**
   * @default 'gray'
   */
  colorVariant?: ColorVariant;
  icon?: React.ReactElement;
}

function _Avatar(
  {
    alt = '',
    className,
    colorVariant = 'gray',
    icon,
    isLoading = false,
    size = 'medium',
    initials,
    src,
    testId = 'cf-ui-avatar',
    tooltipProps,
    variant = 'user',
    ...otherProps
  }: AvatarProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  // Only render the fallback when `src` is undefined or an empty string
  const isFallback = Boolean(!isLoading && !src);
  const styles = getAvatarStyles({ size, variant, colorVariant });

  const content = (
    <div
      className={cx(styles.root, className, {
        [styles.imageContainer]: !!src,
      })}
      data-test-id={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      {isFallback ? (
        <div className={styles.fallback} data-test-id={`${testId}-fallback`}>
          {initials?.substring(0, 2).toUpperCase()}
        </div>
      ) : (
        <Image
          alt={alt}
          className={styles.image}
          src={src}
          height="100%"
          width="100%"
        />
      )}
      {!!icon && (
        <span className={styles.overlayIcon} data-test-id={`${testId}-icon`}>
          {icon}
        </span>
      )}
    </div>
  );

  if (tooltipProps)
    return (
      <Tooltip {...tooltipProps} usePortal>
        {content}
      </Tooltip>
    );

  return content;
}

export const Avatar = forwardRef(_Avatar);
