import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  root: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
    flexShrink: 0,
    minHeight: '48px',
    padding: `${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingXs} ${tokens.spacingM}`,
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
  draggable: css({
    paddingLeft: tokens.spacing2Xs,
    cursor: 'grab',
    touchAction: 'none',
  }),
  dragging: css({
    cursor: 'grabbing',
  }),
  dragHandle: css({
    flexShrink: 0,
    alignSelf: 'stretch',
    cursor: 'inherit',
    background: 'transparent',
  }),
  title: css({
    margin: 0,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: tokens.gray900,
    fontSize: tokens.fontSizeM,
    fontWeight: tokens.fontWeightDemiBold,
    lineHeight: tokens.lineHeightM,
  }),
  titleWithoutCaption: css({
    flex: 1,
  }),
  caption: css({
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: tokens.gray700,
    fontSize: tokens.fontSizeS,
    lineHeight: tokens.lineHeightS,
  }),
  closeButton: css({
    flexShrink: 0,
    marginLeft: 'auto',
  }),
});
