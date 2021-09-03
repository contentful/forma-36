import * as React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import tokens from '@contentful/f36-tokens';

export const GlobalStyles = ({
  withNormalize = true,
}: {
  withNormalize?: boolean;
}) => {
  return (
    <Global
      styles={css`
        ${withNormalize ? emotionNormalize : undefined};

        html,
        body {
          margin: 0;
          padding: 0;
          border: 0;
          min-height: 100%;
          font-size: 16px;
          font-family: ${tokens.fontStackPrimary};
          line-height: ${tokens.lineHeightDefault};
          vertical-align: baseline;
        }

        code {
          font-family: ${tokens.fontStackMonospace};
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
};
