import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';

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

export function SandpackRenderer(props: { code: string }) {
  return (
    <Sandpack
      template="react"
      files={{
        '/App.js': props.code,
        '/styles.css': {
          code: stylesFile,
          hidden: true,
        },
        '/index.js': {
          hidden: true,
          code: indexFile,
        },
      }}
      customSetup={{
        dependencies: {
          react: '^17.0.0',
          'react-dom': '^17.0.0',
          'react-scripts': '^4.0.0',
          '@contentful/f36-components': 'latest',
          '@contentful/f36-tokens': 'latest',
        },
      }}
    />
  );
}
