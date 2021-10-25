import { css } from 'emotion';
import type { ObjectInterpolation } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getBaseCardStyles = () => {
  return {
    contentBody: css({
      gridColumn: 'content',
      gridRow: 'content',
      paddingBottom: tokens.spacingM,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingM,
    }),
    dragHandle: css({
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      height: '100%',
      gridColumn: 'dragHandle',
      gridRow: 'header / span 2',
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
    root: ({ hasHeader, isFocused, isHovered, isSelected }) => {
      const styles: ObjectInterpolation<undefined> = {
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.gray300,
        borderRadius: tokens.borderRadiusMedium,
        borderStyle: 'solid',
        borderWidth: 1,
        color: tokens.gray900,
        display: 'grid',
        gridTemplateColumns: '[dragHandle] auto [content] minmax(0, 1fr)',
        gridTemplateRows: '[header] auto [content] minmax(0, 1fr)',
        fontSize: tokens.fontSizeM,
        fontWeight: tokens.fontWeightNormal,
        lineHeight: tokens.lineHeightM,
        position: 'relative',
        textDecoration: 'none',
        transition: `border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
    box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      };

      if (!hasHeader) {
        styles.paddingTop = tokens.spacingM;
      }

      if (isHovered) {
        styles.borderColor = tokens.colorPrimary;
        styles.cursor = 'pointer';
      }

      if (isFocused) {
        styles.borderColor = tokens.colorPrimary;
        styles.boxShadow = tokens.glowPrimary;
        styles.outline = 0;
      }

      if (isSelected) {
        styles.backgroundColor = tokens.blue100;
        styles.borderColor = tokens.colorPrimary;
        styles.boxShadow = tokens.glowPrimary;
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
