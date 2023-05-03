import { css } from 'emotion';

export const getStyles = () => {
  return {
    root: css({
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      overflowY: 'auto',
    }),
  };
};
