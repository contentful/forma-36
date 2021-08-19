import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export function getAssetStyles() {
  return {
    relative: css({
      position: 'relative',
    }),
    height100: css({
      height: '100%',
    }),
    image: css({
      width: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
    }),
    titleContainer: css({
      opacity: 0,
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'flex-end',
      boxSizing: 'border-box',
      background: `linear-gradient(0deg, ${tokens.gray900} 0%, transparent calc(1rem * (100 / ${tokens.fontBaseDefault})), transparent 100% )`,
      ':hover': { opacity: 1 },
    }),
    title: css({
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
    }),
  };
}
