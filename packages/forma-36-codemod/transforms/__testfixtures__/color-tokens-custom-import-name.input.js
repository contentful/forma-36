import customName from '@contentful/forma-36-tokens';

export const styles = {
  filterPill: {
    backgroundColor: customName.colorElementMid,
  },
  filterPillLabel: {
    backgroundColor: customName.colorElementLight,
    color: customName.colorTextMid,
  },
  filterSelectContainerActive: {
    backgroundColor: customName.colorBlueMid,
    color: customName.colorWhite,
  },
  filterSelect: {
    color: customName.colorTextMid,
    backgroundColor: customName.colorElementMid,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: customName.colorElementDark,
    },
  },
  filterSelectActive: {
    backgroundColor: customName.colorBlueMid,
    color: customName.colorWhite,
    '&:hover': {
      backgroundColor: customName.colorBlueBase,
      color: customName.colorWhite,
    },
  },
};
