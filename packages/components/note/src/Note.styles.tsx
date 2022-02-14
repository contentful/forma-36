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
          color: tokens.green700,
        },
      };
    case 'negative':
      return {
        backgroundColor: tokens.red100,
        borderColor: tokens.red300,

        a: {
          color: tokens.red700,
        },
      };
    case 'warning':
      return {
        backgroundColor: tokens.orange100,
        borderColor: tokens.orange300,

        a: {
          color: tokens.orange700,
        },
      };
    default:
      return {};
  }
};

export const getNoteStyles = () => {
  return {
    container: ({ variant, title }: NoteProps) =>
      css({
        borderRadius: tokens.borderRadiusMedium,
        alignItems: !title ? 'center' : null,
        border: '1px solid',
        ...variantToStyles(variant),
      }),
    title: css({
      color: tokens.gray800,
      fontSize: tokens.fontSizeL,
      lineHeight: tokens.lineHeightL,
      marginBottom: tokens.spacingXs,
    }),
    description: css({
      color: tokens.gray700,
    }),
    close: ({ title }: NoteProps) =>
     css({
      padding: tokens.spacingXs,
      marginTop: title ? `-${tokens.spacingXs}` : '0',
      marginRight: title ? `-${tokens.spacingXs}` : '0',
      '&:hover, &:active': {
        backgroundColor: 'transparent',
      },
    }),
    closeIcon: css({
      color: tokens.gray600,
    }),
  };
};
