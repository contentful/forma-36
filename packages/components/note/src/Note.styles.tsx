import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import tokens from '@contentful/f36-tokens';
import { NoteProps, NoteVariant } from './Note';

const variantToStyles = (variant: NoteVariant): CSSObject => {
  switch (variant) {
    case 'primary':
      return {
        backgroundColor: tokens.colorBlueLightest,
        borderColor: tokens.colorBlueLight,

        a: {
          color: tokens.colorBlueDark,
        },
      };
    case 'positive':
      return {
        backgroundColor: tokens.colorGreenLightest,
        borderColor: tokens.colorGreenLight,

        a: {
          color: tokens.colorGreenDark,
        },
      };
    case 'negative':
      return {
        backgroundColor: tokens.colorRedLightest,
        borderColor: tokens.colorRedLight,

        a: {
          color: tokens.colorRedDark,
        },
      };
    case 'warning':
      return {
        backgroundColor: tokens.colorOrangeLightest,
        borderColor: tokens.colorOrangeLight,

        a: {
          color: tokens.colorOrangeDark,
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
      color: tokens.colorTextBase,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      borderRadius: tokens.borderRadiusMedium,
      paddingRight: hasCloseButton ? tokens.spacingS : tokens.spacingM,
      border: '1px solid',
      ...variantToStyles(variant),
    }),
  title: css({
    fontWeight: tokens.fontWeightMedium,
    fontSize: tokens.fontSizeL,
    marginBottom: tokens.spacingXs,
    color: tokens.colorTextDark,
    lineHeight: tokens.lineHeightL,
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
    width: '100%',
    lineHeight: tokens.lineHeightM,
  }),
};
