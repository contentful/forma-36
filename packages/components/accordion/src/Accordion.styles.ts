import { css, cx } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getAccordionStyles = ({ className }: { className?: string }) => ({
  accordion: cx(
    css({
      boxSizing: 'border-box',
      padding: '0',
      margin: '0',
      listStyle: 'none',
      '&:first-child': {
        borderTop: `1px solid ${tokens.gray300}`,
      },
    }),
    className,
  ),
});
