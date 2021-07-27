import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  accordionItem: css({
    padding: '0',
    margin: '0',
    borderBottom: `1px solid ${tokens.colorElementMid}`,
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  }),
};
