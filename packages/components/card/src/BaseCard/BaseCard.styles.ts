import { css } from '@emotion/css';
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
    skeleton: css({
      border: `1px solid ${tokens.gray300}`,
      borderRadius: tokens.borderRadiusMedium,
      padding: tokens.spacingM,
    }),
  };
};

export const getRootStyles = (
  hasHeader: boolean,
  isHovered: boolean,
  isSelected: boolean,
) => {
  return {
    root: css({
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
      paddingTop: hasHeader ? 0 : tokens.spacingM,
      ...(isHovered && {
        borderColor: tokens.blue500,
        cursor: 'pointer',
      }),
      ...(isSelected && {
        backgroundColor: tokens.blue100,
        borderColor: tokens.blue500,
      }),
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
    }),
  };
};
