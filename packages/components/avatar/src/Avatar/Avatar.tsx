import React, { forwardRef } from 'react';
import { cx } from 'emotion';

import { type CommonProps } from '@contentful/f36-core';
import { Image, type ImageProps } from '@contentful/f36-image';
import {
  Tooltip,
  type TooltipInternalProps,
  type WithEnhancedContent,
} from '@contentful/f36-tooltip';

import { convertSizeToPixels, getAvatarStyles } from './Avatar.styles';
import type { ColorVariant } from './utils';

export type Size = 'tiny' | 'small' | 'medium' | 'large';

export type Variant = 'app' | 'user';

export interface AvatarProps extends CommonProps {
  alt?: ImageProps['alt'];
  isLoading?: boolean;
  size?: Size;
  initials?: string;
  src?: ImageProps['src'];
  /**
   * A tooltipProps attribute used to conditionally render the tooltip around root element
   */
  tooltipProps?: CommonProps &
    WithEnhancedContent &
    Omit<TooltipInternalProps, 'children'>;
  variant?: Variant;
  colorVariant?: ColorVariant;
  icon?: React.ReactElement;
}

function _Avatar(
  {
    alt = '',
    className,
    colorVariant,
    icon = null,
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
  const styles = getAvatarStyles({ isFallback, size, variant, colorVariant });
  const sizePixels = convertSizeToPixels(size);

  const content = (
    <div
      className={cx(styles.root, className, {
        [styles.imageContainer]: icon !== null,
        [styles.isMuted]: colorVariant === 'muted',
        [styles.colorBorder]: !!colorVariant,
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
          height={sizePixels}
          src={src}
          width={sizePixels}
        />
      )}
      {icon !== null && <span className={styles.overlayIcon}>{icon}</span>}
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
