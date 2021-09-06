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

        html {
          margin: 0;
          margin: 0;
          padding: 0;
          border: 0;
          min-height: 100%;
        }

        body {
          font-size: ${tokens.fontSizeM};
          font-family: ${tokens.fontStackPrimary};
          color: ${tokens.gray800};
          line-height: ${tokens.lineHeightDefault};
          vertical-align: baseline;
        }

        code {
          font-family: ${tokens.fontStackMonospace};
        }

        *,
        *::after,
        *::before {
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
};
