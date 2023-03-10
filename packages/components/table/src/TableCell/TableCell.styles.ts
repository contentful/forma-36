import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { TableCellInternalProps } from './TableCell';
import { TableProps } from '../Table';

export const getTableCellStyles = ({
  isTableHead,
  sorting,
  align,
  verticalAlign,
}: {
  isTableHead?: boolean;
  verticalAlign?: TableProps['verticalAlign'];
} & Pick<TableCellInternalProps, 'sorting' | 'align'>) => ({
  container: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: tokens.spacingS,
    textAlign: align,
    color: sorting ? tokens.gray900 : tokens.gray700,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    verticalAlign,
  }),
});
