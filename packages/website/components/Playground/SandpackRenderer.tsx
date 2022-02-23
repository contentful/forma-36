import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';

import { PlaygroundTopBar } from './PlaygroundTopBar';
import { palette } from '../LiveEditor/theme';
const indexFile = `import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "@contentful/f36-components";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  rootElement
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
  return (
    <SandpackProvider
      template="react"
      customSetup={{
        files: {
          '/App.js': code,
          '/styles.css': {
            code: stylesFile,
            hidden: true,
          },
          '/index.js': {
            code: indexFile,
            hidden: true,
          },
        },
        dependencies: {
          react: '^17.0.0',
          'react-dom': '^17.0.0',
          'react-scripts': '^4.0.0',
          '@contentful/f36-components': '^4.0.0',
          '@contentful/f36-tokens': '^4.0.0',
          '@contentful/f36-icons': '^4.0.0',
          '@contentful/f36-pagination': '^4.0.0-beta', // Remove when not in beta
          emotion: '^10.0.17',
          lodash: '^4.17.21',
          'react-hook-form': '7.22.5',
          'react-icons': '4.3.1',
          'react-focus-lock': '^2.5.2',
          'react-sortable-hoc': '^2.0.0',
          'array-move': '^3.0.0',
        },
      }}
    >
      <PlaygroundTopBar />

      <SandpackLayout
        theme={{
          palette: {
            activeText: palette.activeText,
            defaultText: palette.color,
            inactiveText: palette.inactiveText,
            activeBackground: palette.backgroundColor,
            defaultBackground: palette.backgroundColor,
            inputBackground: palette.inputBackground,
            accent: palette.accent,
            errorBackground: palette.errorBackground,
            errorForeground: palette.deleted,
          },
          syntax: {
            plain: palette.color,
            comment: {
              color: palette.comment,
              fontStyle: 'italic',
            },
            keyword: palette.tag,
            tag: palette.tag,
            punctuation: palette.color,
            definition: palette.deleted,
            property: palette.selector,
            static: palette.attrValue,
            string: palette.attrValue,
          },
          typography: {
            bodyFont:
              'font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;',
            monoFont:
              'font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;',
            fontSize: '14px',
            lineHeight: '1.4',
          },
        }}
      >
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
          viewportSize="auto"
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
