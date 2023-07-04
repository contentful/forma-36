import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { Image, type ImageProps } from '@contentful/f36-image';
import { getAvatarStyles } from './Avatar.styles';

export type Size = 'tiny' | 'small' | 'medium' | 'large';

export type Variant = 'app' | 'user';

export interface AvatarProps extends CommonProps {
  alt?: ImageProps['alt'];
  isLoading?: boolean;
  size?: Size;
  src?: ImageProps['src'];
  variant?: Variant;
  showColorBorders?: boolean;
  isPrimary?: boolean;
  isActive?: boolean;
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
    showColorBorders = false,
    isPrimary = false,
    isActive = true,
    icon = null,
  }: AvatarProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  // Only render the fallback when `src` is undefined or an empty string
  const isFallback = Boolean(!isLoading && !src);
  const styles = getAvatarStyles({ isFallback, size, variant });

  return (
    <div
      className={cx(styles.root, className, {
        [styles.rootColorBorder]: showColorBorders,
        [styles.isPrimaryAvatar]: isPrimary,
        [styles.imageContainer]: icon !== null,
        [styles.isInactive]: !isActive,
      })}
      data-test-id={testId}
      ref={forwardedRef}
    >
      {isFallback ? (
        <div className={styles.fallback} data-test-id={`${testId}-fallback`} />
      ) : (
        <Image
          alt={alt}
          className={styles.image}
          height={size}
          src={src}
          width={size}
        />
      )}
      {icon !== null && <span className={styles.overlayIcon}>{icon}</span>}
    </div>
  );
}

export const Avatar = forwardRef(_Avatar);
