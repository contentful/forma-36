import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { Spacing } from '../types';

export const getStackStyles = ({
  spacing,
  flexDirection,
}: {
  spacing: Spacing;
  flexDirection?: 'row' | 'column';
}) => {
  if (flexDirection === 'column') {
    return css({
      '> * ~ *': {
        marginTop: tokens[spacing],
        marginInline: 0,
        marginBottom: 0,
      },
    });
  }
  return css({
    '> * ~ *': {
      marginTop: 0,
      marginBottom: 0,
      marginInline: `${tokens[spacing]} 0`,
    },
  });
};
