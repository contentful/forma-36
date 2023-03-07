import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { TableCellInternalProps } from './TableCell';

export const getTableCellStyles = ({
  isTableHead,
  sorting,
  align,
}: {
  isTableHead?: boolean;
} & Pick<TableCellInternalProps, 'sorting' | 'align'>) => ({
  container: css({
    borderBottom: `1px solid ${tokens.gray200}`,
    padding: `${tokens.spacingS} ${tokens.spacingXs}`,
    verticalAlign: 'top',
    textAlign: align,
    color: sorting ? tokens.gray900 : tokens.gray700,
    fontFamily: tokens.fontStackPrimary,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    fontSize: isTableHead ? tokens.fontSizeS : tokens.fontSizeM,
    lineHeight: isTableHead ? tokens.lineHeightS : tokens.lineHeightM,
  }),
});
