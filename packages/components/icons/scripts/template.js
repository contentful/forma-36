const React = require('react');
// const templateExample = (variables, { tpl }) => {
//   return tpl`
// import React, { SVGProps } from "react";

// ${variables.interfaces};

// const ${variables.componentName} = (${variables.props}) => (
//   ${variables.jsx}
// );

// ${variables.exports};
// `;
// };

const template = (variables, { tpl }) => {
  const { componentName, jsx, props } = variables;
  const SVGContent = React.createElement('<>', null, jsx.children);
  return tpl`
import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const ${componentName} = (${props}) => /*#__PURE__*/ generateIcon({  
  name: '${componentName}',

  path: (
    <>
      ${SVGContent}
    </>
  ),
});
`;
};

module.exports = template;
