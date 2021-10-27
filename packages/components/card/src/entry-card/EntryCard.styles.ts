import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getEntryCardStyles = () => {
  return {
    actionsButton: css({
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: tokens.borderRadiusMedium,
    }),
    content: (size?: 'default' | 'small' | 'auto') =>
      css({
        gridColumn: 'content',
        marginTop: size === 'small' ? tokens.spacingXs : tokens.spacingS,
        marginBottom: size === 'small' ? `calc(-1 * ${tokens.spacingXs})` : 0,
      }),
    root: css({
      padding: 0,
    }),
    header: css({
      borderBottomWidth: 1,
      borderBottomColor: tokens.gray200,
      borderBottomStyle: 'solid',
      minHeight: 'auto',
      paddingBottom: tokens.spacingXs,
      paddingLeft: tokens.spacingM,
      paddingRight: tokens.spacingXs,
    }),
    thumbnail: css({
      height: '70px',
      width: '70px',
      margin: `0 0 0 ${tokens.spacingS}`,
      padding: 0,
      overflow: 'hidden',
      position: 'relative',
      img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: 1,
      },
    }),
    thumbnailSmall: css({
      height: '40px',
      width: '40px',
    }),
  };
};
