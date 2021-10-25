import { css } from 'emotion';
import type { ObjectInterpolation } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAssetCardStyles = () => {
  return {
    asset: css({
      height: '100%',
    }),
    contentBody: css({
      padding: 0,
    }),
    header: css({
      alignItems: 'center',
      borderBottomColor: tokens.gray200,
      borderBottomStyle: 'solid',
      borderBottomWidth: 1,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
      boxSizing: 'border-box',
      color: tokens.gray600,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      gridColumn: 'content',
      gridRow: 'header',
      lineHeight: tokens.lineHeightM,
      paddingBottom: tokens.spacingXs,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingXs,
      paddingTop: tokens.spacingXs,
      minHeight: '37px',
    }),
    headerItem: css({
      marginLeft: tokens.spacingXs,
    }),
    headerWithActions: css({
      paddingBottom: 0,
      paddingRight: tokens.spacingXs,
      paddingTop: 0,
    }),
    root: ({ isSelected, size }) => {
      const styles: ObjectInterpolation<undefined> = {
        borderRadius: tokens.borderRadiusMedium,
        height:
          size === 'small'
            ? // 192px
              `calc(12px * ${tokens.fontBaseDefault})`
            : // 304px
              `calc(19px * ${tokens.fontBaseDefault})`,
        padding: 0,
        textAlign: 'center',
      };

      if (isSelected) {
        styles.backgroundColor = tokens.colorWhite;
        styles.borderColor = tokens.blue500;
        styles.boxShadow = `0 0 0 1px ${tokens.gray300}`;
      }

      return css(styles);
    },
    skeleton: css({
      border: `1px solid ${tokens.gray300}`,
      borderRadius: tokens.borderRadiusMedium,
      padding: tokens.spacingM,
    }),
  };
};
