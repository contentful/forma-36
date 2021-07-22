import customName from '@contentful/forma-36-tokens';

export const styles = {
  filterPill: {
    backgroundColor: customName.gray300,
  },
  filterPillLabel: {
    backgroundColor: customName.gray200,
    color: customName.gray700,
  },
  filterSelectContainerActive: {
    backgroundColor: customName.blue500,
    color: customName.colorWhite,
  },
  filterSelect: {
    color: customName.gray700,
    backgroundColor: customName.gray300,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: customName.gray400,
    },
  },
  filterSelectActive: {
    backgroundColor: customName.blue500,
    color: customName.colorWhite,
    '&:hover': {
      backgroundColor: customName.blue600,
      color: customName.colorWhite,
    },
  },
};
