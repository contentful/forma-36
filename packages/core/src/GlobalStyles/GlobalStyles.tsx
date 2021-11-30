import * as React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import tokens from '@contentful/f36-tokens';

export const GlobalStyles = ({
  withNormalize = true,
}: {
  /**
   * Determines if normalise.css should be added, [more info](https://github.com/necolas/normalize.css)
   *
   * @default true
   */
  withNormalize?: boolean;
}) => {
  return (
    <Global
      styles={css`
        ${withNormalize ? emotionNormalize : undefined};

        html {
          border: 0;
          box-sizing: border-box;
          margin: 0;
          min-height: 100%;
          padding: 0;
        }

        body {
          color: ${tokens.gray800};
          font-family: ${tokens.fontStackPrimary};
          font-size: ${tokens.fontSizeM};
          line-height: ${tokens.lineHeightM};
        }

        code {
          font-family: ${tokens.fontStackMonospace};
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
        }

        *,
        *::after,
        *::before {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          box-sizing: inherit;
        }
      `}
    />
  );
};
