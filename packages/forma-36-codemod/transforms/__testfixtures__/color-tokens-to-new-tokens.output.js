import tokens from '@contentful/forma-36-tokens';

const colorElementMid = '#eeeeee';

const styles = {
  filterPill: css({
    color: colorElementMid,
    backgroundColor: tokens.gray300,
  }),
  filterPillLabel: css({
    backgroundColor: tokens.gray200,
    color: tokens.gray700,
  }),
  filterSelectContainerActive: css({
    backgroundColor: tokens.blue500,
    color: tokens.colorWhite,
  }),
  filterSelect: css({
    color: tokens.gray700,
    backgroundColor: tokens.gray300,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: tokens.gray400,
    },
  }),
  filterSelectActive: css({
    backgroundColor: tokens.blue500,
    color: tokens.colorWhite,
    '&:hover': {
      backgroundColor: tokens.blue600,
      color: tokens.colorWhite,
    },
  }),
};
