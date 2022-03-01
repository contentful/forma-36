import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-components';

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
            activeText: palette.activeText, //tokens.blue700
            defaultText: palette.color, // tokens.gray900
            inactiveText: tokens.gray300, // tokens.gray300
            activeBackground: palette.activeBackground, // tokens.blue200
            defaultBackground: palette.backgroundColor, // tokens.gray200
            inputBackground: palette.inputBackground, // tokens.colorWhite
            accent: palette.accent, // tokens.blue700
            errorBackground: palette.errorBackground, // tokens.red200
            errorForeground: palette.deleted, // tokens.red700
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
          typography: {
            bodyFont:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            monoFont:
              '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
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
