import { css } from '@emotion/css';
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
        margin: 0, // remove the default button margin in Safari.
        transition: `border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
    box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,

        '&:focus': css({
          borderColor: isSelected ? tokens.blue100 : tokens.blue500,
          boxShadow: tokens.glowPrimary,
          outline: 'none',
        }),
        '&:focus:not(:focus-visible)': css({
          borderColor: isSelected ? tokens.blue500 : tokens.gray300,
          boxShadow: 'unset',
        }),
        '&:focus-visible': css({
          borderColor: tokens.blue500,
          boxShadow: tokens.glowPrimary,
        }),
      };

      if (!hasHeader) {
        styles.paddingTop = tokens.spacingM;
      }

      if (isHovered) {
        styles.borderColor = tokens.blue500;
        styles.cursor = 'pointer';
      }

      if (isSelected) {
        styles.backgroundColor = tokens.blue100;
        styles.borderColor = tokens.blue500;
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
