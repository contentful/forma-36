import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { Image, type ImageProps } from '@contentful/f36-image';
import { convertSizeToPixels, getAvatarStyles } from './Avatar.styles';
import type { ColorVariant } from './utils';

export type Size = 'tiny' | 'small' | 'medium' | 'large';

export type Variant = 'app' | 'user';

export interface AvatarProps extends CommonProps {
  alt?: ImageProps['alt'];
  isLoading?: boolean;
  size?: Size;
  src?: ImageProps['src'];
  variant?: Variant;
  colorVariant?: ColorVariant;
  icon?: React.ReactElement;
}

function _Avatar(
  {
    alt = '',
    className,
    isLoading = false,
    size = 'medium',
    src,
    testId = 'cf-ui-avatar',
    variant = 'user',
    colorVariant,
    icon = null,
    ...otherProps
  }: AvatarProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  // Only render the fallback when `src` is undefined or an empty string
  const isFallback = Boolean(!isLoading && !src);
  const styles = getAvatarStyles({ isFallback, size, variant, colorVariant });
  const sizePixels = convertSizeToPixels(size);
  return (
    <div
      className={cx(styles.root, className, {
        [styles.imageContainer]: icon !== null,
        [styles.isInactive]: colorVariant === 'muted',
        [styles.colorBorder]: !!colorVariant,
      })}
      data-test-id={testId}
      ref={forwardedRef}
      {...otherProps}
    >
      {isFallback ? (
        <div className={styles.fallback} data-test-id={`${testId}-fallback`} />
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
}

export const Avatar = forwardRef(_Avatar);
