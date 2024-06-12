import { css } from 'emotion';

export const getStyles = () => {
  return {
    horizontalList: css({
      display: 'grid',
      gridAutoFlow: 'column dense',
      gridAutoColumns: '1fr',
      margin: 0,
      padding: 0,
    }),
    verticalList: css({
      display: 'grid',
      gridAutoFlow: 'row dense',
      gridAutoRows: '1fr',
      margin: 0,
      padding: 0,
      height: '100%',
    }),
    verticalNav: css({
      height: '100%',
    }),
  };
};
