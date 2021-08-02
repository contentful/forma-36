import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const getAccordionStyles = (): CSSObject => {
  return {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  };
};

export default () => ({
  accordion: css(getAccordionStyles()),
});
