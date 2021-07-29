import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

const styles = {
  accordion: css({
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    listStyle: 'none',
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  }),
  accordionHeader: css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: '0',
    padding: tokens.spacingM,
    backgroundColor: 'transparent',
    fontFamily: tokens.fontStackPrimary,
    fontSize: tokens.fontSizeL,
    fontWeight: tokens.fontWeightDemiBold,
    lineHeight: tokens.lineHeightDefault,
    color: tokens.colorTextBase,
    width: '100%',
    cursor: 'pointer',
    transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    '&:hover': {
      backgroundColor: tokens.colorElementLightest,
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: tokens.colorElementLightest,
    },
  }),
  alignHeaderStart: css({
    minWidth: '9px',
    marginRight: tokens.spacingXs,
  }),
  alignHeaderEnd: css({
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  }),
  accordionHeaderIcon: css({
    transform: 'rotate(0deg)',
    transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
  }),
  accordionHeaderIconExpanded: css({ transform: 'rotate(180deg)' }),
  accordionItem: css({
    padding: '0',
    margin: '0',
    borderBottom: `1px solid ${tokens.colorElementMid}`,
    '&:first-child': {
      borderTop: `1px solid ${tokens.colorElementMid}`,
    },
  }),
  accordionPanel: css({
    boxSizing: 'border-box',
    overflow: 'hidden',
    height: '0',
    transition: `height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, padding ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
  }),
  accordionPanelExtended: css({
    padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
    height: 'auto',
  }),
  accordionPanelContent: css({
    width: '100%',
    padding: `${tokens.spacingXs} ${tokens.spacingM} ${tokens.spacingM}`,
  }),
};

export default () => styles;
