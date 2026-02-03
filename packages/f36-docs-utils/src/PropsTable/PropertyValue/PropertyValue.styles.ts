import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getPropertyValueStyles = () => ({
  tag: css({
    display: 'inline-block',
    justifySelf: 'flex-start',
    backgroundColor: tokens.gray200,
    borderRadius: tokens.borderRadiusSmall,
  }),
});
