# @contentful/f36-utils

This package is part of [Forma-36](https://github.com/contentful/forma-36). See the repo for more details.

## Portal

[Portal] renders a React component tree in a separate part of the DOM.

### How to use Portal

Anything that you put inside the Portal component renders in a `<div data-cf-ui-portal>` element that gets appended to `document.body` by default. You can append to a different container by passing the HTML element of the container as the `container` prop.

### Code examples

```jsx
// import { Portal } from '@contenful/forma-36-react-components';

<Portal>Render in a new tree.</Portal>
```
