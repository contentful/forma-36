# Migration of Skeleton from v5.x to v6.x

## Breaking change: Consolidated prop types

The duplicated component prop types `SkeletonDisplayTextProps` and `SkeletonBodyTextProps` have been removed. Use the single unified `SkeletonTextProps` instead.

### Why did it change?

Both removed types were structurally identical to `SkeletonTextProps`, which meant:

- Duplicate maintenance and doc noise
- Confusing autocomplete results
- Unnecessary import surface

Unifying them reduces API surface and keeps the mental model simple: all textual skeleton variants (DisplayText / BodyText / Text) share the same props.

### What do I need to change?

1. Replace any type imports of `SkeletonDisplayTextProps` or `SkeletonBodyTextProps` with `SkeletonTextProps`.
2. If you were extending those interfaces in your own component wrappers, update the `extends` clause.
3. No runtime / behavioral changes are required—only TypeScript types.

### Before / After

```diff ts
-import type { SkeletonDisplayTextProps } from '@contentful/f36-skeleton';
+import type { SkeletonTextProps } from '@contentful/f36-skeleton';

-type HeadingSkeletonProps = SkeletonDisplayTextProps & { align?: 'left' | 'center' };
+type HeadingSkeletonProps = SkeletonTextProps & { align?: 'left' | 'center' };
```

```diff ts
-import type { SkeletonBodyTextProps } from '@contentful/f36-skeleton';
+import type { SkeletonTextProps } from '@contentful/f36-skeleton';

-function ParagraphSkeleton(props: SkeletonBodyTextProps) {
+function ParagraphSkeleton(props: SkeletonTextProps) {
  return <Skeleton.BodyText {...props} />;
}
```

### Component usage

No changes are needed for the JSX usage of the components themselves:

```tsx
<Skeleton.DisplayText numberOfLines={1} />
<Skeleton.BodyText numberOfLines={3} offsetTop={32} />
```

Only the types you import in TypeScript have changed.

### Bulk update (codemod / search & replace)

You can migrate with a simple textual replace (case‑sensitive):

1. Search for `SkeletonDisplayTextProps` → replace with `SkeletonTextProps`.
2. Search for `SkeletonBodyTextProps` → replace with `SkeletonTextProps`.

Example shell (macOS / GNU compatible):

```sh
grep -Rl "SkeletonDisplayTextProps" ./src | xargs sed -i '' 's/SkeletonDisplayTextProps/SkeletonTextProps/g'
grep -Rl "SkeletonBodyTextProps" ./src | xargs sed -i '' 's/SkeletonBodyTextProps/SkeletonTextProps/g'
```

If you prefer a tiny jscodeshift codemod:

```js
// replace-skeleton-prop-types.js
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);
  root
    .find(j.Identifier, { name: 'SkeletonDisplayTextProps' })
    .forEach((p) => (p.value.name = 'SkeletonTextProps'));
  root
    .find(j.Identifier, { name: 'SkeletonBodyTextProps' })
    .forEach((p) => (p.value.name = 'SkeletonTextProps'));
  return root.toSource();
}
```

Run with:

```sh
npx jscodeshift -t replace-skeleton-prop-types.js "src/**/*.{ts,tsx}"
```

### FAQ

**Q: Do I need to update my runtime props?**
A: No. Only the exported type names changed.

**Q: Will `Skeleton.DisplayText` or `Skeleton.BodyText` be removed?**
A: No. This change only affects TypeScript type exports.

**Q: What if I had both old types imported?**
A: You can safely collapse them into a single `SkeletonTextProps` import.

### Summary

Replace the removed types with `SkeletonTextProps`. No behavior changes, just a leaner public API.
