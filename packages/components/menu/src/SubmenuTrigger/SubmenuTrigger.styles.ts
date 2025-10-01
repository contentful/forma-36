import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getSubmenuTriggerStyles = () => {
  return {
    root: ({ isActive }) =>
      css({
        display: 'flex',
        alignItems: 'center',
        paddingRight: tokens.spacingXs,
        ...(isActive
          ? {
              backgroundColor: tokens.gray100,
            }
          : {}),
      }),
    content: css({
      marginRight: tokens.spacingM,
    }),
    icon: css({
      marginLeft: 'auto',
      fill: 'currentColor',
    }),
  };
};
