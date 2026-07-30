import { css } from '@emotion/css';

export const getTableBodyStyles = () => ({
  stackable: (hasColumnTitles: boolean, stackableBreakpoint: string) =>
    css({
      [`@container (width <= ${stackableBreakpoint})`]: hasColumnTitles
        ? {
            display: 'grid',
            gridTemplateColumns: 'max-content 2fr',
          }
        : {
            display: 'flex',
            flexDirection: 'column',
          },
    }),
});
