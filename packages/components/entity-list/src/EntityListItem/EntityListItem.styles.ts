import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { EntityListItemProps } from './EntityListItem';

export const getEntityListItemStyles = () => ({
  root: (props: Pick<EntityListItemProps, 'isDragActive'>) =>
    css({
      display: 'flex',
      borderBottom: `1px solid ${tokens.gray200}`,
      position: 'relative',
      transition: `${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      transitionProperty: 'box-shadow, background-color',
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
    minHeight: '3.75rem',
    padding: tokens.spacingXs,
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
    width: '2.5rem',
    height: '2.5rem',
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
    marginLeft: '0.25rem',
  }),
  description: css({
    marginTop: '0.25rem',
  }),
  meta: css({
    marginLeft: 'auto',
    flexShrink: 0,
  }),
  dragHandle: css({
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
  }),
  menuTrigger: css({
    padding: '0 0.125rem',
    minHeight: '1.5rem',
  }),
});
