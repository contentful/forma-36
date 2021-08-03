import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const styles = {
  accordion: {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    '&:first-child': {
      borderTop: `1px solid ${tokens.gray300}`,
    },
  } as CSSObject,
};

export const getAccordionStyles = (className) => ({
  accordion: cx(css(styles.accordion), className),
});
