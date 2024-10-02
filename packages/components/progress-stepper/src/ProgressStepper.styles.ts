import { css } from 'emotion';

export const getStyles = ({ isInline }) => {
  return {
    horizontalList: css({
      display: isInline ? 'inline-grid' : 'grid',
      gridAutoFlow: 'column',
      overflow: 'hidden',
      overflowX: 'auto',
      counterReset: 'step',
      gridAutoColumns: '1fr',
      padding: 0,
      margin: 0,
    }),
    verticalList: css({
      display: 'inline-grid',
      height: '100%',
      gridAutoRows: '1fr',
      gridAutoFlow: 'row',
      gridAutoColumns: '1fr',
      overflow: 'hidden',
      overflowX: 'auto',
      counterReset: 'step',
      padding: 0,
      margin: 0,
    }),
    verticalNav: css({
      height: '100%',
    }),
  };
};
