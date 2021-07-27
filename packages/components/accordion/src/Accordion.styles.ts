import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  accordion: css({
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  }),
  accordionItem: css({
    padding: '0',
    margin: '0',
    borderBottom: `1px solid ${tokens.colorElementMid}`,
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  }),
};
