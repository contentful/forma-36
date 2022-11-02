import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { getEntityListItemStyles } from './EntityListItem/EntityListItem.styles';

const entityListItemStyles = getEntityListItemStyles();

export const getEntityListStyles = () => ({
  root: css({
    display: 'block',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    borderBottom: 'none',
    borderRadius: tokens.borderRadiusMedium,
    overflow: 'hidden',
    [`& .${entityListItemStyles.root({})}`]: {
      borderLeft: `1px solid ${tokens.gray200}`,
      borderRight: `1px solid ${tokens.gray200}`,
    },
    [`& .${entityListItemStyles.root({})}:first-child`]: {
      borderTop: `1px solid ${tokens.gray200}`,
    },
    [`& .${entityListItemStyles.root({ isSelected: true })}`]: {
      borderLeft: `1px solid ${tokens.colorPrimary}`,
      borderRight: `1px solid ${tokens.colorPrimary}`,
    },
    [`& .${entityListItemStyles.root({ isSelected: true })}:first-child`]: {
      borderTop: `1px solid ${tokens.colorPrimary}`,
    },
    [`& .${entityListItemStyles.root({
      isSelected: true,
    })}:not(:first-child)::before`]: {
      content: '""',
      display: 'block',
      width: 'calc(100% + 2px)',
      position: 'absolute',
      height: '1px',
      top: -1,
      left: -1,
      backgroundColor: tokens.colorPrimary,
    },
    '& li:first-child': {
      borderTopLeftRadius: tokens.borderRadiusMedium,
      borderTopRightRadius: tokens.borderRadiusMedium,
    },
    '& li:last-child': {
      borderBottomLeftRadius: tokens.borderRadiusMedium,
      borderBottomRightRadius: tokens.borderRadiusMedium,
    },
  }),
});
