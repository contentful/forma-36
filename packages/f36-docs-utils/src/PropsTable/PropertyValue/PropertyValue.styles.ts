import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getPropertyValueStyles = ({ isDarkMode }) => ({
  tag: css({
    display: 'inline-block',
    justifySelf: 'flex-start',
    backgroundColor: isDarkMode ? tokens.gray700 : tokens.gray200,
    borderRadius: tokens.borderRadiusSmall,
  }),
});
