import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getAccordionPanelStyles = () => {
  return {
    accordionPanelContent: css({
      width: '100%',
      padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
    }),
  };
};
