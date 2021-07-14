import customName from '@contentful/forma-36-tokens';

const styles = {
  filterPill: css({
    backgroundColor: customName.gray300,
  }),
  filterPillLabel: css({
    backgroundColor: customName.gray200,
    color: customName.gray700,
  }),
  filterSelectContainerActive: css({
    backgroundColor: customName.blue500,
    color: customName.colorWhite,
  }),
  filterSelect: css({
    color: customName.gray700,
    backgroundColor: customName.gray300,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: customName.gray400,
    },
  }),
  filterSelectActive: css({
    backgroundColor: customName.blue500,
    color: customName.colorWhite,
    '&:hover': {
      backgroundColor: customName.blue600,
      color: customName.colorWhite,
    },
  }),
};
