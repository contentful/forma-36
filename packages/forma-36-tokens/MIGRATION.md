# Forma 36 tokens - colors update in version 0.10.3

In order to provide a better, more accessible experience for our customers, we decided to migrate our existing color palette into the new one.
We are introducing a new color system that contains 6 base colors, along with gray and black/white. Each color consists of 9 shades, ranging from 100 to 900.

The new approach allows us to meet all accessibility requirements. It also introduces a more consistent naming convention and the ability to easily scale the palette in the future if needed.

## What's new

The main change in this release is the introduction of the new set of color tokens that will contain new namespaces and new values. The new palette is more vibrant, so you will see the change in Contentful products.

Old tokens are still available, but they are deprecated from now on. You will see the deprecation note when using old namespaces with the recommendations on how to replace them.

**What happened in this release?**

Let's use blue, as an example.

We are introducing a new scale that contains all the new namespaces, but we still keep the old tokens, that will be mapped to new values. As a result we get e.g:

```js
{
  "color-blue-lightest":"#E8F5FF",
  "color-blue-light":"#98CBFF",
  "color-blue-mid":"#036FE3",
  "color-blue-base":"#0059C8",
  "color-blue-dark":"#0041AB",
  "blue-100":"#E8F5FF",
  "blue-200":"#CEECFF",
  "blue-300":"#98CBFF",
  "blue-400":"#40A0FF",
  "blue-500":"#036FE3",
  "blue-600":"#0059C8",
  "blue-700":"#0041AB",
  "blue-800":"#003298",
  "blue-900":"#002A8E"
}

```

The same approach we took with all our color tokens, so now old and new tokens are available to you, with the same, consistent values.

**Note: We plan to remove the old, deprecated tokend in the next major version. But don't worry, we will help you to migrate your tokens to the new names right now.**

## How to migrate your code to the new tokens

In order to allow you to migrate your code to our new tokens, we created a codemod that will do all the work.

Just run:

`npx @contentful/f36-codemod <transform> <path> [...options]`

- `transform` - name of transform, see available transforms below.
- `path` - files or directory to transform
- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

What will happen in your code, e.g:

```tsx
import tokens from '@contentful/forma-36-tokens';

const styles = {
  background: tokens.colorElementLight,
};
```

will be transformed to:

```tsx
import tokens from '@contentful/forma-36-tokens';

const styles = {
  background: tokens.gray200,
};
```

We make sure that all the tokens are correctly migrated to the new namespaces for you. Just run the command, sit back, and relax 🙂
