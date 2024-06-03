import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    orderedList: css({
      display: 'grid',
      // does this need to be dense?
      gridAutoFlow: 'column dense',
      margin: 0,
      padding: 0,
      '&::first-child::before': { visibility: 'hidden' },
      '&::last-child::after': { visibility: 'hidden' },
    }),
    listItem: css({
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: '1fr 50px 1fr',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `
        "divider-before counter divider-after"
        "label label label"
        `,

      // counter-increment: count 1;

      '&::before, &::after': {
        position: 'relative',
        top: '50%',
        display: 'block',
        content: '""',
        height: '2px',
        backgroundColor: 'hotpink',
      },

      '&::before': { gridArea: 'divider-before' },
      '&::after': { gridArea: 'divider-after' },
      // '&::first-child::before': { visibility: 'hidden' },
      // '&::last-child::after': { visibility: 'hidden' },
      // '&::nth-child(2)': { gridArea: 'label' }
    }),
    listItemContent: css({
      textAlign: 'center',
    }),
    label: css({
      gridArea: 'label',
      textAlign: 'center',
    }),

    //   .stepper-item {
    //     grid-area: counter;

    //     &::before {
    //       display: block;
    //       content: counter(count, decimal);
    //       background: hotpink;
    //       border-radius: 50%;
    //       text-align: center;
    //       width: 32px;
    //       height: 32px;
    //     }
    //   }
  };
};
