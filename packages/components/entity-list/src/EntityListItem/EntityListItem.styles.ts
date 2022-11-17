import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { EntityListItemProps } from './EntityListItem';

export const getEntityListItemStyles = () => ({
  root: (props: Pick<EntityListItemProps, 'isDragActive'>) =>
    css({
      display: 'flex',
      boxShadow: `inset 0 -1px 0 ${tokens.gray200}`,
      position: 'relative',
      transition: `${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      transitionProperty: 'box-shadow, background-color',
      backgroundColor: tokens.colorWhite,
      ...(props.isDragActive
        ? {
            boxShadow: tokens.boxShadowHeavy,
          }
        : {}),

      '&:hover': {
        backgroundColor: tokens.gray100,
      },
    }),
  card: css({
    display: 'flex',
    textDecoration: 'none',
    width: '100%',
    minHeight: tokens.spacing3Xl,
    padding: tokens.spacingXs,
    margin: 0, // remove the default button margin in Safari.
    border: 'none',
    background: 'none',
    textAlign: 'left',
  }),
  content: css({
    flexGrow: 1,
    minWidth: 0,
  }),
  media: css({
    display: 'flex',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.gray200,
    width: tokens.spacing2Xl,
    height: tokens.spacing2Xl,
    margin: '0',
    marginRight: tokens.spacingXs,
  }),
  thumbnail: css({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
  contentType: css({
    marginLeft: tokens.spacingXs,
  }),
  entityType: css({
    marginRight: tokens.spacing2Xs,
    textTransform: 'capitalize',
  }),
  description: css({
    marginLeft: tokens.spacing2Xs,
  }),
  meta: css({
    marginLeft: 'auto',
    flexShrink: 0,
  }),
  dragHandle: css({
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: `inset 0 -1px 0 ${tokens.gray200}`,
  }),
  menuTrigger: css({
    padding: '0 0.125rem',
    minHeight: '1.5rem',
  }),
});
