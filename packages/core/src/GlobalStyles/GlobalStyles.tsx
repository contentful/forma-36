import * as React from 'react';
import { Global } from '@emotion/core';
import { css } from 'emotion';
// @ts-expect-error mute missing types
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
          font-size: ${tokens.fontSizeM};
          font-family: ${tokens.fontStackPrimary};
          vertical-align: baseline;
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
