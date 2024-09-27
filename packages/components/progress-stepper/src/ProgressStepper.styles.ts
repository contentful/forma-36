import { css } from 'emotion';

export const getStyles = () => {
  return {
    horizontalList: css({
      display: 'grid',
      gridAutoFlow: 'column',
      overflow: 'hidden',
      overflowX: 'auto',
      counterReset: 'step',
      gridAutoColumns: '1fr',
      padding: 0,
      margin: 0,
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
