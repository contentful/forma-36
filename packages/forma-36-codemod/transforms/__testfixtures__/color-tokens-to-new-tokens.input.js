import tokens from '@contentful/forma-36-tokens';

const colorElementMid = '#eeeeee';

const styles = {
  filterPill: css({
    color: colorElementMid,
    backgroundColor: tokens.colorElementMid,
  }),
  filterPillLabel: css({
    backgroundColor: tokens.colorElementLight,
    color: tokens.colorTextMid,
  }),
  filterSelectContainerActive: css({
    backgroundColor: tokens.colorBlueMid,
    color: tokens.colorWhite,
  }),
  filterSelect: css({
    color: tokens.colorTextMid,
    backgroundColor: tokens.colorElementMid,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tokens.colorElementDark,
    },
  }),
  filterSelectActive: css({
    backgroundColor: tokens.colorBlueMid,
    color: tokens.colorWhite,
    '&:hover': {
      backgroundColor: tokens.colorBlueBase,
      color: tokens.colorWhite,
    },
  }),
};
