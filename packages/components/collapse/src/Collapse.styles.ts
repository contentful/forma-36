import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getCollapseStyles = ({ className }: { className?: string }) => {
  return {
    collapseWrapper: cx(
      css({
        boxSizing: 'border-box',
        overflow: 'hidden',
        transition: `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      }),
      className,
    ),
  };
};
