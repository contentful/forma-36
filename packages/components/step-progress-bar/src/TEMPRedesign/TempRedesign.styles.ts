import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    orderedList: css({
      display: 'grid',
      // does this need to be dense?
      gridAutoFlow: 'column dense',
      gridAutoColumns: '1fr', // makes all the columns the same width
      margin: 0,
      padding: 0,
      // these are not doing what we want them to do
      // '&::first-child::before': { visibility: 'hidden' },
      // '&::last-child::after': { visibility: 'hidden' },
    }),
    listItem: css({
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: '5px 0', // this sets the gap between rows and columns
      gridTemplateColumns: '1fr 24px 1fr', // changed middle column from 50px to 24px
      gridTemplateRows: '24px', // this sets the height of each row (changed from auto to 24px)
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
        backgroundColor: tokens.gray300,
      },

      // if we comment these out it doesn't change anything
      '&::before': { gridArea: 'divider-before' },
      '&::after': { gridArea: 'divider-after' },

      // issue with these is that the width of the stepper still includes these, tried display: none but that didn't work
      '&:first-child::before': { visibility: 'hidden' }, // needed to make it 1 colon in front of first-child to get it to work
      '&:last-child::after': { visibility: 'hidden' },
      // '&::nth-child(2)': { gridArea: 'label' }
    }),
    listItemContent: css({
      textAlign: 'center',
      height: '24px', // these changes add the circle back
      width: '24px',
      border: `2px solid ${tokens.gray300}`,
      borderRadius: '50%',
      backgroundColor: 'white',
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
