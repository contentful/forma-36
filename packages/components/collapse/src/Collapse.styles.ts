import { css, cx } from 'emotion';

export const getCollapseStyles = ({ className }: { className?: string }) => {
  return {
    collapseWrapper: cx(
      css({
        boxSizing: 'border-box',
        overflow: 'hidden',
      }),
      className,
    ),
  };
};
