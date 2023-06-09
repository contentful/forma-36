import React, { forwardRef } from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { Image, type ImageProps } from '@contentful/f36-image';
import { getAvatarStyles } from './Avatar.styles';

export enum Size {
  Tiny = '20px',
  Small = '24px',
  Medium = '32px',
  Large = '48px',
}

export enum Variant {
  App = 'app',
  User = 'user',
}

export interface AvatarProps extends CommonProps {
  alt?: ImageProps['alt'];
  isLoading?: boolean;
  size?: Size;
  src?: ImageProps['src'];
  variant?: Variant;
}

function _Avatar(
  {
    alt = '',
    className,
    isLoading = false,
    size = Size.Medium,
    src,
    testId = 'cf-ui-avatar',
    variant = Variant.User,
  }: AvatarProps,
  forwardedRef: React.Ref<HTMLDivElement>,
) {
  // Only render the fallback when `src` is undefined or an empty string
  const isFallback = Boolean(!isLoading && !src);
  const styles = getAvatarStyles({ isFallback, size, variant });

  return (
    <div
      className={cx(styles.root, className)}
      data-test-id={testId}
      ref={forwardedRef}
    >
      {!isFallback ? (
        <Image
          alt={alt}
          className={styles.image}
          height={size}
          src={src}
          width={size}
        />
      ) : (
        <div className={styles.fallback} data-test-id={`${testId}-fallback`} />
      )}
    </div>
  );
}

export const Avatar = forwardRef(_Avatar);
