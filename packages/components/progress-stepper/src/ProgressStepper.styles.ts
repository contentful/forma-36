import { css } from '@emotion/css';

export const getStyles = () => {
  return {
    horizontalList: css({
      display: 'grid',
      gridAutoFlow: 'column dense',
      gridAutoColumns: '1fr',
      margin: 0,
      padding: 0,
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
