import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
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
  root: css({
    alignItems: 'center',
    backgroundColor: tokens.colorElementLightest,
    border: 0,
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderRight: `1px solid ${tokens.colorElementMid}`,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    position: 'relative',
    transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    width: tokens.spacingL,

    '&:hover, &:focus': {
      backgroundColor: tokens.colorElementLight,
    },
  }),
};
