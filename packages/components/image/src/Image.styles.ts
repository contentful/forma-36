import { css } from '@emotion/css';
import type { ImageProps } from './Image';

export const getImageStyles = ({
  height,
  width,
}: Pick<ImageProps, 'height' | 'width'>) => {
  return {
    image: ({ isLoaded }: { isLoaded: boolean }) =>
      css({
        display: isLoaded ? 'block' : 'none',
        height: isLoaded ? height : 0,
        opacity: isLoaded ? 1 : 0,
        width: isLoaded ? width : 0,
      }),
    root: css({
      height,
      width,
    }),
  };
};
