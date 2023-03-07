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
    backgroundColor: isTableHead ? tokens.gray100 : undefined,
    borderBottom: `1px solid ${tokens.gray200}`,
    color: sorting ? tokens.gray900 : tokens.gray700,
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeM,
    fontWeight: isTableHead ? tokens.fontWeightMedium : tokens.fontWeightNormal,
    lineHeight: tokens.lineHeightL,
    padding: `${tokens.spacingS} ${tokens.spacingM}`,
    textAlign: align,
    verticalAlign: 'top',
  }),
});
