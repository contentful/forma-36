import tokens from '@contentful/forma-36-tokens';

const colorElementMid = '#eeeeee';

export const styles = {
  filterPill: {
    color: colorElementMid,
    backgroundColor: tokens.colorElementMid,
  },
  filterPillLabel: {
    backgroundColor: tokens.colorElementLight,
    color: tokens.colorTextMid,
  },
  filterSelectContainerActive: {
    backgroundColor: tokens.colorBlueMid,
    color: tokens.colorWhite,
  },
  filterSelect: {
    color: tokens.colorTextMid,
    backgroundColor: tokens.colorElementMid,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tokens.colorElementDark,
    },
  },
  filterSelectActive: {
    backgroundColor: tokens.colorBlueMid,
    color: tokens.colorWhite,
    '&:hover': {
      backgroundColor: tokens.colorBlueBase,
      color: tokens.colorWhite,
    },
  },
};
