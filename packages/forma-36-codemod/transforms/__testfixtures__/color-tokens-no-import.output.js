const tokens = {};

export const styles = {
  filterPill: {
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
