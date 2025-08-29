---
'@contentful/f36-icons': major
---

The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

📖 Follow this [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#icon).

### Codemod

A codemod is available to migrate your icons:

```bash
npx @contentful/f36-codemod
```
