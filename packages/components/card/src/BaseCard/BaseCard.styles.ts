import { css } from 'emotion';
import type { ObjectInterpolation } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getBaseCardStyles = () => {
  return {
    contentBody: css({
      gridColumn: 'content',
      gridRow: 'content',
      whiteSpace: 'initial',
    }),
    wrapper: css({
      flex: '1 1 0',
      display: 'grid',
      gridTemplateRows: '[header] auto [content] minmax(0, 1fr)',
      gridTemplateColumns: 'auto [content] minmax(0, 1fr)',
    }),
    dragHandle: css({
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderTopLeftRadius: tokens.borderRadiusMedium,
      cursor: 'grab',
    }),
    root: ({ hasHeader, isHovered, isSelected }) => {
      const styles: ObjectInterpolation<undefined> = {
        backgroundColor: tokens.colorWhite,
        borderColor: tokens.gray300,
        borderRadius: tokens.borderRadiusMedium,
        borderStyle: 'solid',
        borderWidth: 1,
        color: tokens.gray900,
        display: 'flex',
        textAlign: 'left',
        width: '100%',
        fontSize: tokens.fontSizeM,
        fontWeight: tokens.fontWeightNormal,
        position: 'relative',
        textDecoration: 'none',
        transition: `border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
    box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,

        '&:focus': css({
          borderColor: tokens.colorPrimary,
          boxShadow: tokens.glowPrimary,
          outline: '0',
        }),
      };

      if (!hasHeader) {
        styles.paddingTop = tokens.spacingM;
      }

      if (isHovered) {
        styles.borderColor = tokens.colorPrimary;
        styles.cursor = 'pointer';
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
