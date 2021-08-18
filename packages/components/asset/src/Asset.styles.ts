import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

/*


.Asset__asset-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.Asset__asset-container__title {
  color: var(--color-text-light);
  font-size: var(--font-size-m);
  font-family: var(--font-stack-primary);
  padding-left: var(--spacing-s);
  padding-right: var(--spacing-s);
  max-height: calc(1rem * (40 / var(--font-base-default)));
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: calc(1rem * calc(20 / var(--font-base-default)));
}

.Asset__illustration-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: calc(1rem * calc(20 / var(--font-base-default)));
  margin-top: calc(1rem * calc(20 / var(--font-base-default)));
}





*/

export function getAssetStyles() {
  return {
    root: css({
      display: 'block',
      position: 'relative',
    }),
    imageContainer: css({
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    image: css({
      width: 'auto',
      maxWidth: '100%',
      maxHeight: '100%',
    }),
    titleContainer: css({
      opacity: 0,
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      height: '100%',
      color: tokens.colorWhite,
      fontSize: tokens.fontSizeM,
      fontFamily: tokens.fontStackPrimary,
      padding: tokens.spacingS,
      display: 'flex',
      overflow: 'hidden',
      alignItems: 'flex-end',
      boxSizing: 'border-box',
      background: `linear-gradient(0deg, ${tokens.gray900} 0%, transparent calc(1rem * (100 / ${tokens.fontBaseDefault})), transparent 100% )`,
      ':hover': { opacity: 1 },
    }),
    title: css({
      bottom: '0',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: tokens.lineHeightCondensed,
      maxHeight: `calc(1rem * (35 / ${tokens.fontBaseDefault}))`,
      wordWrap: 'break-word',
    }),
    assetContainer: css({
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    assetIllustrationContainer: css({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: tokens.spacingM,
      marginTop: tokens.spacingM,
    }),
    assetTitle: css({
      color: tokens.gray600,
      fontSize: tokens.fontSizeM,
      fontFamily: tokens.fontStackPrimary,
      paddingLeft: tokens.spacingS,
      paddingRight: tokens.spacingS,
      maxHeight: `calc(1rem * (40 / ${tokens.fontBaseDefault}))`,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginBottom: tokens.spacingM,
    }),
  };
}
