import customName from '@contentful/forma-36-tokens';

const styles = {
  filterPill: css({
    backgroundColor: customName.colorElementMid,
  }),
  filterPillLabel: css({
    backgroundColor: customName.colorElementLight,
    color: customName.colorTextMid,
  }),
  filterSelectContainerActive: css({
    backgroundColor: customName.colorBlueMid,
    color: customName.colorWhite,
  }),
  filterSelect: css({
    color: customName.colorTextMid,
    backgroundColor: customName.colorElementMid,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: customName.colorElementDark,
    },
  }),
  filterSelectActive: css({
    backgroundColor: customName.colorBlueMid,
    color: customName.colorWhite,
    '&:hover': {
      backgroundColor: customName.colorBlueBase,
      color: customName.colorWhite,
    },
  }),
};
