import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import type { CSSObject } from '@emotion/serialize';

const styles = {
  accordionPanel: {
    boxSizing: 'border-box',
    overflow: 'hidden',
    height: '0',
    transition: `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
  } as CSSObject,
  accordionPanelContent: {
    width: '100%',
    padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
  } as CSSObject,
};

export const getAccordionPanelStyles = () => {
  return {
    accordionPanel: css(styles.accordionPanel),
    accordionPanelContent: css(styles.accordionPanelContent),
  };
};
