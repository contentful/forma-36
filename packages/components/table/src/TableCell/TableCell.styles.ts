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
  container: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    cursor: isSortable ? 'pointer' : 'initial',
    padding: tokens.spacingS,
    textAlign: align,
    color: isSorted ? tokens.gray900 : tokens.gray700,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    verticalAlign,
  }),
});
