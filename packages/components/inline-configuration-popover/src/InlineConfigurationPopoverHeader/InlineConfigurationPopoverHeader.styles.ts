import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => ({
  root: css({
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingXs,
    flexShrink: 0,
    minHeight: '48px',
    padding: tokens.spacingXs,
    borderBottom: `1px solid ${tokens.gray200}`,
  }),
  // Without a drag handle, the title lines up with the body's content
  notDraggable: css({
    paddingLeft: tokens.spacingM,
  }),
  draggable: css({
    cursor: 'grab',
    touchAction: 'none',
  }),
  dragging: css({
    cursor: 'grabbing',
  }),
  // A 16px handle, as in Figma. DragHandle has no size prop, so its width
  // and icon are narrowed here. Its dots are as dark as the close icon.
  dragHandle: css({
    flexShrink: 0,
    alignSelf: 'stretch',
    width: tokens.spacingM,
    borderRadius: tokens.borderRadiusSmall,
    cursor: 'inherit',
    background: 'transparent',
    '& svg': {
      width: tokens.spacingM,
      height: tokens.spacingM,
      // DragHandle sets the dots' color as the svg's fill attribute
      fill: tokens.gray900,
    },
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
  // Centers custom content, e.g. a Badge, instead of placing it on the
  // text baseline
  titleCustom: css({
    display: 'flex',
    alignItems: 'center',
  }),
  caption: css({
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: tokens.gray500,
    fontSize: tokens.fontSizeS,
    lineHeight: tokens.lineHeightS,
  }),
  closeButton: css({
    flexShrink: 0,
    marginLeft: 'auto',
  }),
});
