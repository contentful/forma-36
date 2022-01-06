const tokens = require('@contentful/forma-36-tokens');

export const styles = {
  filterPill: {
    backgroundColor: tokens.gray300,
  },
  filterPillLabel: {
    backgroundColor: tokens.gray200,
    color: tokens.gray700,
  },
  filterSelectContainerActive: {
    backgroundColor: tokens.blue500,
    color: tokens.colorWhite,
  },
  filterSelect: {
    color: tokens.gray700,
    backgroundColor: tokens.gray300,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tokens.gray400,
    },
  },
  filterSelectActive: {
    backgroundColor: tokens.blue500,
    color: tokens.colorWhite,
    '&:hover': {
      backgroundColor: tokens.blue600,
      color: tokens.colorWhite,
    },
  },
};
