import { cx, css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { DragHandleProps } from './DragHandle';

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
    variant,
  }: {
    isActive: boolean;
    isFocused: boolean;
    isHovered: boolean;
    variant: DragHandleProps['variant'];
  }) => {
    return cx(
      css({
        alignItems: 'center',
        backgroundColor: 'transparent',
        border: 0,
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0, // remove the default button margin in Safari.
        position: 'relative',
        transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
        width: tokens.spacingL,
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
      variant === 'secondary' &&
        css({
          borderRight: `1px solid ${tokens.gray200}`,
          borderTopLeftRadius: tokens.borderRadiusMedium,
          borderBottomLeftRadius: tokens.borderRadiusMedium,
          backgroundColor: tokens.gray100,
          '&:hover': {
            backgroundColor: hexToRGBA(tokens.gray900, 0.08),
          },
        }),
      variant === 'secondary' &&
        (isActive || isFocused || isHovered) &&
        css({
          backgroundColor: hexToRGBA(tokens.gray900, 0.08),
        }),
      (isActive || isFocused || isHovered) &&
        css({
          cursor: isActive ? 'grabbing' : 'grab',
        }),
    );
  },
});
