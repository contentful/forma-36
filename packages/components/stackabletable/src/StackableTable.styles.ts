import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStackableTableStyles = (stackableBreakpoint: string) => ({
  wrapper: css({
    width: '100%',
    containerType: 'inline-size',
    [`@container (width <= ${stackableBreakpoint})`]: {
      '& tbody': {
        display: 'grid',
        gridTemplateColumns: 'max-content 2fr',
      },
      '& tr': {
        display: 'grid',
        gridColumn: '1 / 3',
        gridTemplateColumns: 'subgrid',
        borderBottom: `1px solid ${tokens.gray200}`,
      },
      '& td': {
        maxWidth: 'unset !important',
        width: '100% !important',
        borderBottom: 'none',
        padding: `${tokens.spacing2Xs} ${tokens.spacingS}`,
      },
      '& td:first-child': {
        gridColumn: '1 / 3',
        borderTopLeftRadius: tokens.borderRadiusMedium,
        borderTopRightRadius: tokens.borderRadiusMedium,
        fontWeight: tokens.fontWeightDemiBold,
        paddingTop: tokens.spacingS,
      },
      '& td:last-child': {
        paddingBottom: tokens.spacingS,
      },
    },
    '& th:first-child, & td:first-child': {
      borderTopLeftRadius: tokens.borderRadiusMedium,
    },
    '& th:last-child, & td:last-child': {
      borderTopRightRadius: tokens.borderRadiusMedium,
    },
  }),
  inline: css({
    borderRadius: tokens.borderRadiusMedium,
    boxShadow: `0 0 0 1px ${tokens.gray200}`,
  }),
  embedded: css({
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
});
