import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { type TableCellInternalProps } from './TableCell';
import { type TableProps } from '../Table';

type GetTableCellStylesArguments = {
  align: TableCellInternalProps['align'];
  isSortable?: TableCellInternalProps['isSortable'];
  isSorted: TableCellInternalProps['isSorted'];
  isTableHead: boolean;
  verticalAlign?: TableProps['verticalAlign'];
};

export const getTableCellStyles = ({
  align,
  isSortable,
  isSorted,
  isTableHead,
  verticalAlign,
}: GetTableCellStylesArguments) => ({
  button: css({
    appearance: 'none',
    background: 'none',
    border: 0,
    color: isSorted ? tokens.gray900 : 'inherit',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'flex-start',
    outline: 0,
    padding: tokens.spacingS,
  }),
  container: css({
    backgroundColor: tokens.colorWhite,
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: isSortable ? 0 : tokens.spacingS,
    textAlign: align,
    color: tokens.gray700,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    verticalAlign,

    '&:focus': {
      backgroundColor: tokens.gray100,
      outline: 0,
    },
    '&:focus:not(:focus-visible)': {
      backgroundColor: 'unset',
      boxShadow: 'unset',
    },
    '&:focus-visible': {
      backgroundColor: tokens.gray100,
    },
  }),
  sortIcon: (showSorting: boolean) =>
    css({
      opacity: showSorting ? 0.2 : 0,
      transition: `opacity ${tokens.transitionEasingCubicBezier} ${tokens.transitionDurationDefault}`,
    }),
});
