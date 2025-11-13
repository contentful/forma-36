import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { type TableCellInternalProps } from './TableCell';
import { type TableProps } from '../Table';

type GetTableCellStylesArguments = {
  align: TableCellInternalProps['align'];
  isSortable?: TableCellInternalProps['isSortable'];
  isTableHead: boolean;
  verticalAlign?: TableProps['verticalAlign'];
};

export const getTableCellStyles = ({
  align,
  isSortable,
  isTableHead,
  verticalAlign,
}: GetTableCellStylesArguments) => ({
  button: css({
    alignItems: 'flex-start',
    appearance: 'none',
    background: 'none',
    border: 0,
    color: 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    gap: tokens.spacing2Xs,
    outline: 0,
    padding: tokens.spacingS,

    '&:focus': {
      backgroundColor: tokens.gray100,
      boxShadow: tokens.glowPrimary,
    },
    '&:focus:not(:focus-visible)': {
      backgroundColor: 'unset',
      boxShadow: 'unset',
    },
    '&:focus-visible': {
      backgroundColor: tokens.gray100,
      boxShadow: tokens.glowPrimary,
    },
  }),
  container: css({
    backgroundColor: tokens.colorWhite,
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: isSortable ? 0 : tokens.spacingS,
    textAlign: align,
    color: isTableHead ? tokens.gray600 : tokens.gray700,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    verticalAlign,
  }),
  sortIcon: (showSorting: boolean) =>
    css({
      fill: tokens.gray400,
      opacity: showSorting ? 1 : 0,
      transition: `opacity ${tokens.transitionEasingCubicBezier} ${tokens.transitionDurationDefault}`,
    }),
});
