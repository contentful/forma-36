# @contentful/f36-utils

This package is part of the pre-release. This means it is unsupported and subject to breaking changes without warning.
Please use official, supported version of the library [forma-36](https://github.com/contentful/forma-36/tree/master/packages/forma-36-react-components), [NPM](https://www.npmjs.com/package/@contentful/forma-36-react-components)

## Portal

[Portal] renders a React component tree in a separate part of the DOM.

### How to use Portal

Anything that you put inside the Portal component renders in a `<div data-cf-ui-portal>` element that gets appended to `document.body` by default. You can append to a different container by passing the HTML element of the container as the `container` prop.

### Code examples

```jsx
<Portal>Render in a new tree.</Portal>
```
