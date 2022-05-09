import { cx, css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  label: css({
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
  }),
  root: ({
    isActive,
    isFocused,
    isHovered,
  }: {
    isActive: boolean;
    isFocused: boolean;
    isHovered: boolean;
  }) => {
    return cx(
      css({
        alignItems: 'center',
        backgroundColor: tokens.gray100,
        border: 0,
        borderBottomLeftRadius: tokens.borderRadiusMedium,
        borderRight: `1px solid ${tokens.gray200}`,
        borderTopLeftRadius: tokens.borderRadiusMedium,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        position: 'relative',
        transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
        width: tokens.spacingL,
        '&:hover': {
          backgroundColor: tokens.gray200,
        },
        '&:focus': {
          boxShadow: tokens.glowPrimary,
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'unset',
        },
        '&:focus-visible': {
          boxShadow: tokens.glowPrimary,
        },
      }),
      (isActive || isFocused || isHovered) &&
        css({
          backgroundColor: tokens.gray200,
          cursor: isActive ? 'grabbing' : 'grab',
        }),
    );
  },
});
