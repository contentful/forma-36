import { cx, css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';

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
    isPlain,
  }: {
    isActive: boolean;
    isFocused: boolean;
    isHovered: boolean;
    isPlain: boolean;
  }) => {
    return cx(
      css({
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 0,
        borderRight: `1px solid ${tokens.gray200}`,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0, // remove the default button margin in Safari.
        position: 'relative',
        transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
        width: tokens.spacingL,
        '&:hover': {
          backgroundColor: hexToRGBA(tokens.gray900, 0.08),
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
      !isPlain &&
        css({
          borderTopLeftRadius: tokens.borderRadiusMedium,
          borderBottomLeftRadius: tokens.borderRadiusMedium,
          backgroundColor: tokens.gray100,
        }),
      (isActive || isFocused || isHovered) &&
        css({
          backgroundColor: hexToRGBA(tokens.gray900, 0.08),
          cursor: isActive ? 'grabbing' : 'grab',
        }),
    );
  },
});
