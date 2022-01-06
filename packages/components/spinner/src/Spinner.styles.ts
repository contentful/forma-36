import { css, keyframes } from 'emotion';
import type { SpinnerSize } from './types';

const sizes: { [key in SpinnerSize]: string } = {
  large: '36px',
  medium: '20px',
  small: '14px',
};

export const getStyles = () => {
  const animations = {
    scale1: keyframes`
    0% {
      transform: scale(1, 1);
    }
    6.666667% {
      transform: scale(1.5, 0.5);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1.5, 0.5);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
    scale2: keyframes`
    0% {
      transform: scale(1, 1);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    20% {
      transform: scale(1.5, 0.5);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    46.666667% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    73.333333% {
      transform: scale(1.5, 0.5);
    }
    80% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
    scale3: keyframes`
    0% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1.5, 0.5);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    80% {
      transform: scale(1, 1);
    }
    86.666667% {
      transform: scale(1.5, 0.5);
    }
    93.333333% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
    translate1: keyframes`
    0% {
      transform: translate(10px, 33.528168px);
    }
    6.666667% {
      transform: translate(10px, 41.764084px);
    }
    13.333333% {
      transform: translate(10px, 33.528168px);
    }
    26.666667% {
      transform: translate(10px, -2.651608px);
    }
    33.333333% {
      transform: translate(10px, -4.471832px);
    }
    40% {
      transform: translate(10px, -2.651608px);
    }
    53.333333% {
      transform: translate(10px, 33.528168px);
    }
    60% {
      transform: translate(10px, 41.764084px);
    }
    66.666667% {
      transform: translate(10px, 33.528168px);
    }
    100% {
      transform: translate(10px, 33.528168px);
    }
  `,
    translate2: keyframes`
    0% {
      transform: translate(30px, 33.528168px);
    }
    13.333333% {
      transform: translate(30px, 33.528168px);
    }
    20% {
      transform: translate(30px, 41.764084px);
    }
    26.666667% {
      transform: translate(30px, 33.528168px);
    }
    40% {
      transform: translate(30px, -2.651608px);
    }
    46.666667% {
      transform: translate(30px, -4.471832px);
    }
    53.333333% {
      transform: translate(30px, -2.651608px);
    }
    66.666667% {
      transform: translate(30px, 33.528168px);
    }
    73.333333% {
      transform: translate(30px, 41.764084px);
    }
    80% {
      transform: translate(30px, 33.528168px);
    }
    100% {
      transform: translate(30px, 33.528168px);
    }
  `,
    translate3: keyframes`
    0% {
      transform: translate(50px, 33.528168px);
    }
    26.666667% {
      transform: translate(50px, 33.528168px);
    }
    33.333333% {
      transform: translate(50px, 41.764084px);
    }
    40% {
      transform: translate(50px, 33.528168px);
    }
    53.333333% {
      transform: translate(50px, -2.651608px);
    }
    60% {
      transform: translate(50px, -4.471832px);
    }
    66.666667% {
      transform: translate(50px, -2.651608px);
    }
    80% {
      transform: translate(50px, 33.528168px);
    }
    86.666667% {
      transform: translate(50px, 41.764084px);
    }
    93.333333% {
      transform: translate(50px, 33.528168px);
    }
    100% {
      transform: translate(50px, 33.528168px);
    }
  `,
  };

  return {
    root: (props: { size: SpinnerSize; customSize?: number }) =>
      css({
        height: props.customSize ? `${props.customSize}px` : undefined,
        verticalAlign: 'middle',
        width: props.customSize ? `${props.customSize}px` : sizes[props.size],
      }),
    circle1Scale: css({
      animation: `${animations.scale1} 1s linear infinite normal forwards;`,
    }),
    circle2Scale: css({
      animation: `${animations.scale2} 1s linear infinite normal forwards;`,
    }),
    circle3Scale: css({
      animation: `${animations.scale3} 1s linear infinite normal forwards;`,
    }),
    circle1Translate: css({
      animation: `${animations.translate1} 1s linear infinite normal forwards;`,
    }),
    circle2Translate: css({
      animation: `${animations.translate2} 1s linear infinite normal forwards;`,
    }),
    circle3Translate: css({
      animation: `${animations.translate3} 1s linear infinite normal forwards;`,
    }),
  };
};
