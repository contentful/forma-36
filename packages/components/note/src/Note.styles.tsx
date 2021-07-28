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

export const styles = {
  note: ({ variant, hasCloseButton }: NoteProps) =>
    css({
      padding: tokens.spacingM,
      margin: 0,
      fontFamily: tokens.fontStackPrimary,
      fontWeight: tokens.fontWeightNormal,
      lineHeight: tokens.lineHeightDefault,
      fontSize: tokens.fontSizeM,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: tokens.borderRadiusMedium,
      paddingRight: hasCloseButton ? tokens.spacingS : tokens.spacingM,
      border: '1px solid',
      ...variantToStyles(variant),
    }),
  title: css({
    color: tokens.gray800,
    fontWeight: tokens.fontWeightMedium,
    fontSize: tokens.fontSizeL,
    marginBottom: tokens.spacingXs,
  }),
  icon: css({
    marginRight: tokens.spacingS,
    display: 'flex',
  }),
  info: ({ hasCloseButton }: NoteProps) =>
    css({
      marginLeft: tokens.spacingXs,
      fill: 'currentColor',
      marginRight: hasCloseButton ? tokens.spacingS : 'unset',
    }),
  content: css({
    color: tokens.gray700,
    width: '100%',
  }),
  close: css({
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
};
