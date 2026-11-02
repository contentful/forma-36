import React from 'react';

/**
 * Reads the `ref` of a React element. React 19 moved it to props and warns
 * when `element.ref` is read.
 */
export function getElementRef(element: React.ReactElement) {
  if (Number.parseInt(React.version, 10) >= 19) {
    return (element.props as { ref?: React.Ref<HTMLElement> }).ref;
  }
  return (element as unknown as { ref?: React.Ref<HTMLElement> }).ref;
}
