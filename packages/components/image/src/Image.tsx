import React, { ComponentPropsWithoutRef, forwardRef, type Ref } from 'react';
import { cx } from '@emotion/css';
import {
  type CommonProps,
  mergeRefs,
  useImageLoaded,
} from '@contentful/f36-core';
import { Skeleton } from '@contentful/f36-skeleton';
import { getImageStyles } from './Image.styles';

export interface ImageProps
  extends CommonProps,
    Omit<ComponentPropsWithoutRef<'img'>, 'onLoad'> {
  /**
   * Alt attribute to pass to the image element
   */
  alt: string;
  /**
   * Height of the final image once loaded
   */
  height: string;
  /**
   * Width of the final image once loaded
   */
  width: string;
}

function ImageBase(
  {
    className,
    height,
    src,
    testId = 'cf-ui-image',
    width,
    ...otherProps
  }: ImageProps,
  forwardedRef: Ref<HTMLImageElement>,
) {
  const styles = getImageStyles({ height, width });
  const { ref: imageRef, loaded: isImageLoaded, onLoad } = useImageLoaded();
  const isLoaded = Boolean(src && isImageLoaded);

  return (
    <div className={styles.root}>
      {/* eslint-disable-next-line jsx-a11y/alt-text -- `alt` should be provided by the user */}
      <img
        {...otherProps}
        className={cx(styles.image({ isLoaded }), className)}
        data-test-id={testId}
        onLoad={onLoad}
        ref={mergeRefs(imageRef, forwardedRef)}
        src={src}
      />
      {!isLoaded && (
        <Skeleton.Container>
          <Skeleton.Image height={height} width={width} />
        </Skeleton.Container>
      )}
    </div>
  );
}

export const Image = forwardRef(ImageBase);
