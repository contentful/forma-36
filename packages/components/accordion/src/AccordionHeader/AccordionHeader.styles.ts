import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
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
    transition: `background-color ${tokens.transitionDurationDefault}
      ${tokens.transitionEasingDefault}})`,
    '&:hover': {
      backgroundColor: tokens.colorElementLightest,
    },
    '&:focus': {
      outline: 'none',
      backgroundColor: tokens.colorElementLightest,
    },
  }),
  alignHeaderStart: css({
    minWidth: '9px' /* necessary to align the chevron properly */,
    marginRight: tokens.spacingXs,
  }),
  alignHeaderEnd: css({
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  }),
  accordionHeaderIcon: css({
    transform: 'rotate(0deg)',
    transition: `transform ${tokens.transitionDurationDefault}
      ${tokens.transitionEasingDefault}`,
  }),
  accordionHeaderIconExpanded: css({ transform: 'rotate(180deg)' }),
};
