import React from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';

import { PlaygroundTopBar } from './PlaygroundTopBar';
import { palette } from '../LiveEditor/theme';

declare module 'react' {
  interface Attributes {
    css?: Interpolation<Theme>;
  }
}
const indexFile = `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "@contentful/f36-components";
import "./styles.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
);`;

const stylesFile = `
  body {
    padding: ${tokens.spacingM};
  }
`;

interface Props {
  code: string;
  showOpenInCodeSandbox?: boolean;
}

export function SandpackRenderer({
  code,
  showOpenInCodeSandbox = false,
}: Props) {
  // Styles that override Sandpack's default styling
  const sandpackStyles: { [key: string]: Interpolation<Theme> } = {
    wrapper: {
      overflow: 'hidden !important',
    },
    layout: {
      height: `100vh !important`,
      flex: '1 !important',
      border: 0,
      borderRadius: 0,
      '& > .sp-stack': {
        height: '100% !important',
      },
      '& .sp-cm': {
        paddingLeft: tokens.spacingM,
      },
      '& .cm-scroller': {
        padding: 0,
        '& .cm-gutters': {
          padding: 0,
        },
        '& .cm-gutter': {
          padding: `0 ${tokens.spacing2Xs}`,
        },
        '& .cm-gutterElement': {
          fontSize: tokens.fontSizeM,
          padding: 0,
        },
      },
      '& .cm-content': {
        padding: 0,
        '& .cm-line': {
          padding: `0 ${tokens.spacingS}`,
        },
        '& .cm-activeLine': {
          backgroundColor: 'rgba(207, 217, 224, 0.5)',
          borderRadius: 0,
        },
      },
    },
  };

  return (
    <SandpackProvider
      css={sandpackStyles.wrapper}
      customSetup={{
        dependencies: {
          '@dnd-kit/core': '^6.0.8',
          '@dnd-kit/sortable': '^7.0.2',
          react: '^19.1.0',
          'react-dom': '^19.1.0',
          'react-scripts': '^4.0.0',
          '@contentful/f36-components': '^6.0.0-alpha.0',
          '@contentful/f36-layout': '^6.0.0-alpha.0',
          '@contentful/f36-multiselect': '^6.0.0-alpha.0',
          '@contentful/f36-navlist': '^6.0.0-alpha.0',
          '@contentful/f36-progress-stepper': '^6.0.0-alpha.0',
          '@contentful/f36-tokens': '^6.0.0-alpha.0',
          '@contentful/f36-icons': '^6.0.0-alpha.0',
          '@contentful/f36-core': '^6.0.0-alpha.0',
          '@contentful/f36-utils': '^6.0.0-alpha.0',
          '@emotion/css': '^11.13.5',
          lodash: '^4.17.21',
          'react-hook-form': '^7.53.2',
          'react-icons': '^4.4.0',
          'react-focus-lock': '^2.9.1',
        },
      }}
      files={{
        '/App.js': code,
        '/styles.css': {
          code: stylesFile,
          hidden: true,
        },
        '/index.js': {
          code: indexFile,
          hidden: true,
        },
      }}
      theme={{
        colors: {
          accent: palette.accent, // tokens.blue700
          disabled: palette.color, // tokens.gray900
          error: palette.deleted, // tokens.red700
          errorSurface: palette.errorBackground, // tokens.red200
          hover: palette.activeText, //tokens.blue700
          surface1: palette.backgroundColor,
          surface2: tokens.gray300, // tokens.gray300
          surface3: palette.activeBackground, // tokens.blue200
        },
        font: {
          body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
          mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
          lineHeight: '1.4',
          size: tokens.fontSizeM,
        },
        syntax: {
          plain: palette.color, // tokens.gray900
          comment: {
            color: palette.comment, //tokens.gray600
            fontStyle: 'italic',
          },
          keyword: palette.keyword, // tokens.red700
          tag: palette.tag, //tokens.blue700
          punctuation: palette.color, // tokens.gray900
          definition: palette.definition, // tokens.green700
          property: {
            color: palette.selector, //tokens.blue700
            fontStyle: 'italic',
          },
          static: palette.attrValue, // tokens.purple500
          string: palette.string, // tokens.yellow800
        },
      }}
      template="react"
    >
      <PlaygroundTopBar />

      <SandpackLayout css={sandpackStyles.layout}>
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers
          showInlineErrors
          wrapContent
        />

        <SandpackPreview
          showSandpackErrorOverlay
          showOpenInCodeSandbox={showOpenInCodeSandbox}
          showRefreshButton
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
