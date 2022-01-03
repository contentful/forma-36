import React from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

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

const stylesFile = `body {
  padding: 16px;
}`;

export function SandpackRenderer(props: {
  code: string;
  topbar?: JSX.Element;
  showOpenInCodeSandbox?: boolean;
}) {
  return (
    <SandpackProvider
      template="react"
      customSetup={{
        files: {
          '/App.js': props.code,
          '/styles.css': {
            code: stylesFile,
            hidden: true,
          },
          '/index.js': {
            hidden: true,
            code: indexFile,
          },
        },
        dependencies: {
          react: '^17.0.0',
          'react-dom': '^17.0.0',
          'react-scripts': '^4.0.0',
          '@contentful/f36-forms': 'latest',
          '@contentful/f36-components': 'latest',
          '@contentful/f36-tokens': 'latest',
          '@contentful/f36-icons': 'latest',
          emotion: '^10.0.17',
          lodash: '^4.17.21',
          'react-hook-form': '7.22.5',
        },
      }}
    >
      {props.topbar}
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers
          showInlineErrors
          wrapContent
          initMode="immediate"
        />
        <SandpackPreview
          showSandpackErrorOverlay
          showOpenInCodeSandbox={props.showOpenInCodeSandbox ?? false}
          showRefreshButton
          viewportSize="auto"
        />
      </SandpackLayout>
    </SandpackProvider>
  );
}
