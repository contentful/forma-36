import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const getSegmentationStyles = () => {
  return {
    root: css({
      alignItems: 'center',
      display: 'flex',
    }),
    separator: css({
      height: tokens.spacingXl,
      position: 'relative',
      width: tokens.spacingXs,

      '&::after': {
        backgroundColor: tokens.gray200,
        content: '""',
        display: 'block',
        height: '16px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '1px',
        transform: 'translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 18deg)',
      },
    }),
  };
};
