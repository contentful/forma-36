import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';

import type { NoteProps, NoteVariant } from './Note';

const variantToStyles = (variant: NoteVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: tokens.blue100,
        borderColor: tokens.blue300,

        a: {
          color: tokens.blue700,
        },
      };
    case 'positive':
      return {
        backgroundColor: tokens.green100,
        borderColor: tokens.green300,

        a: {
          color: tokens.blue700,
        },
      };
    case 'negative':
      return {
        backgroundColor: tokens.red100,
        borderColor: tokens.red300,

        a: {
          color: tokens.blue700,
        },
      };
    case 'warning':
      return {
        backgroundColor: tokens.orange100,
        borderColor: tokens.orange300,

        a: {
          color: tokens.blue700,
        },
      };
    case 'neutral':
      return {
        backgroundColor: tokens.gray100,
        borderColor: tokens.gray300,

        a: {
          color: tokens.blue700,
        },
      };
    default:
      return {};
  }
};

export const getNoteStyles = () => {
  return {
    container: ({ variant }: Pick<NoteProps, 'variant'>) =>
      css({
        position: 'relative',
        borderRadius: tokens.borderRadiusMedium,
        border: '1px solid',
        ...variantToStyles(variant),
      }),
    title: css({
      color: tokens.gray800,
      fontSize: tokens.fontSizeL,
      lineHeight: tokens.lineHeightL,
    }),
    description: css({
      color: tokens.gray700,
    }),
    close: css({
      position: 'absolute',
      top: tokens.spacingXs,
      right: tokens.spacingXs,
      padding: tokens.spacingXs,
      '&:hover, &:active': {
        backgroundColor: 'transparent',
      },
    }),
    closeIcon: css({
      fill: tokens.gray600,
    }),
  };
};
