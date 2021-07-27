import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  accordionPanel: css({
    boxSizing: 'border-box',
    overflow: 'hidden',
    padding: `0 ${tokens.spacingM}`,
    height: '0',
    transition: `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
  }),
  accordionPanelExtended: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
    height: 'auto',
  }),
};
