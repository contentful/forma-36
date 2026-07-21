import { css } from '@emotion/css';

export const getTableBodyStyles = () => ({
  stackable: (hasColumnTitles: boolean) =>
    css({
      '@container (width <= 700px)': {
        '&': {
          ...(hasColumnTitles
            ? {
                display: 'grid',
                gridTemplateColumns: 'max-content 2fr',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
              }),
        },
      },
    }),
});
