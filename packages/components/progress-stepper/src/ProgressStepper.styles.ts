import { css } from 'emotion';

export const getStyles = () => {
  return {
    horizontalList: css({
      display: 'inline-grid',
      gridAutoFlow: 'column',
      overflow: 'hidden',
      overflowX: 'auto',
      counterReset: 'step',
      gridAutoColumns: '1fr',
    }),
    verticalList: (numberOfSteps: number) =>
      css({
        display: 'grid',
        gridTemplateRows: `repeat(${numberOfSteps - 1}, 1fr)`,
        margin: 0,
        padding: 0,
        height: '100%',
      }),
    verticalNav: css({
      height: '100%',
    }),
  };
};
