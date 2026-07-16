import { css } from '@emotion/css';

export const getBackButtonStyles = (withResponsiveHeader: boolean) => ({
  button: withResponsiveHeader && css({ alignSelf: 'flex-start' }),
});
