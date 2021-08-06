import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAccordionPanelStyles = () => {
  return {
    accordionPanel: css({
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: '0',
      transition: `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),
    accordionPanelContent: css({
      width: '100%',
      padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
    }),
  };
};
