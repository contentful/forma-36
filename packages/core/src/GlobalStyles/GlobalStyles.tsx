import * as React from 'react';
import { Global, css, type SerializedStyles } from '@emotion/react';
import tokens from '@contentful/f36-tokens';

const cssReset = css`
  /* Remove default margin */
  /* Button has default margin in some browsers, like safari */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  button {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const GlobalStyles = ({
  withNormalize = true,
  styles,
}: {
  /**
   * Determines if CSS reset should be used
   *
   * @default true
   */
  withNormalize?: boolean;
  /**
   * Extend global styles
   *
   * @default undefined
   */
  styles?: SerializedStyles;
}) => {
  return (
    <Global
      styles={css`
        ${withNormalize ? cssReset : undefined};
        @font-face {
          font-family: 'Geist Mono';
          src: url('https://cdn.f36.contentful.com/fonts/geist-mono-1.4.01.woff2');
        }

        @font-face {
          font-family: 'Geist Sans';
          src: url('https://cdn.f36.contentful.com/fonts/geist-sans-1.4.01.woff2');
        }

        html {
          border: 0;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          color: ${tokens.gray800};
          font-family: ${tokens.fontStackPrimary};
          font-size: ${tokens.fontSizeM};
          line-height: ${tokens.lineHeightM};
          font-synthesis-weight: none;
          /* Improves readability of lowercase L (l) and uppercase i (I) */
          font-feature-settings: 'ss05' on;
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

        ${styles};
      `}
    />
  );
};
