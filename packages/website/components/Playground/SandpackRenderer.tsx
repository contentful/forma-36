import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import tokens from '@contentful/f36-tokens';

import { PlaygroundTopBar } from './PlaygroundTopBar';

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

      <SandpackLayout>
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
