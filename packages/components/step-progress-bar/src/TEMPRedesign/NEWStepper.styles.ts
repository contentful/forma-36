import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    orderedList: css({
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
  };
};
