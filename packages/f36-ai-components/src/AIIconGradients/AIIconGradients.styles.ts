import { css } from '@emotion/css';

/**
 * Returns styles for AI icon gradients.
 * Use this to get the gradient styles for applying to icons.
 *
 * @example
 * ```tsx
 * import { getAIIconGradientStyles } from '@contentful/f36-ai-components';
 *
 * const { primaryGradientIconStyle } = getAIIconGradientStyles();
 * return <Icon as={agent.icon} className={primaryGradientIconStyle} />
 * ```
 */
export const getAIIconGradientStyles = () => {
  return {
    primaryGradientIconStyle: css({
      '*': {
        fill: `url("#primary-icon-gradient") rgba(140, 46, 234, 1)`,
      },
    }),
  };
};
