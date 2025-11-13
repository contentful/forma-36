import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

function hasChildren(
  element: ReactNode,
): element is ReactElement<{ children: ReactNode | ReactNode[] }> {
  return (
    isValidElement<{ children?: ReactNode[] }>(element) &&
    Boolean(element.props.children)
  );
}

/**
 * Recursively extracts text and numbers from React children to return as a
 * combined string.
 *
 * @param children - React node to extract text from
 * @returns String with all child nodes' text combined
 */
export function getTextFromChildren(children: ReactNode) {
  let string = '';

  Children.toArray(children).map((child) => {
    if (isValidElement(child) && hasChildren(child)) {
      string += getTextFromChildren(child.props.children);
    } else if (typeof child === 'string' || typeof child === 'number') {
      string = `${string}${child}`;
    }
  });

  return string;
}
