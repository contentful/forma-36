import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const accordionItem = {
  padding: '0',
  margin: '0',
  borderBottom: `1px solid ${tokens.colorElementMid}`,
  '&:first-child': {
    borderTop: `1px solid ${tokens.colorElementMid}`,
  },
} as CSSObject;

export default () => ({
  accordionItem: css(accordionItem),
});
