# Migration to the Modal header and controls slots

## Summary of change

The `title`, `subtitle` and `modalHeaderProps` props of `Modal`, and the `onClose` prop of `Modal.Header`, are deprecated. Use the new `header` and `controls` slots instead.

- **Deprecated in:** v6.x (minor release)
- **Removal planned:** v7.0.0
- The deprecated props keep working until v7. In development, each one logs a warning once per session.
- You can migrate now. The slot API is available in v6, so you don't have to wait for v7.

## Why

- **Layout:** with node children, headers and buttons passed as `children` end up inside the scrollable `Modal.Content`. The slots render them above and below it, without a render function.
- **One way to build a header:** `title`/`subtitle`/`modalHeaderProps` duplicated the `Modal.Header` API. The `header` slot takes `Modal.Header` or the new `Modal.DisplayHeader` directly.
- **No repeated `onClose`:** the header now takes `onClose` from the `Modal`, so you pass it once.

## What changed

- new `header` slot, takes `Modal.Header` or `Modal.DisplayHeader`, rendered above the content
- new `controls` slot, takes `Modal.Controls`, rendered below the content
- new `closeIconLabel` prop on `Modal`, sets the accessible label of the header close button
- `Modal.Header` now shows the close button whenever the `Modal` has an `onClose`, even if you don't pass `onClose` to the header
- new components `ModalBasic`, `ModalDisplay` and `Modal.DisplayHeader`

---

## Prop changes

Unchanged props are not listed.

| Component        | Prop               | Type                                                        | Default (Old → New)         | Status                                            |
| ---------------- | ------------------ | ----------------------------------------------------------- | --------------------------- | ------------------------------------------------- |
| `Modal`          | `header`           | `ReactElement<ModalHeaderProps \| ModalDisplayHeaderProps>` | undefined                   | New                                               |
| `Modal`          | `controls`         | `ReactElement<ModalControlsProps>`                          | undefined                   | New                                               |
| `Modal`          | `closeIconLabel`   | `string`                                                    | 'Close'                     | New                                               |
| `Modal`          | `title`            | `string`                                                    | undefined → undefined       | Deprecated, removed in v7, use `header`           |
| `Modal`          | `subtitle`         | `string`                                                    | undefined → undefined       | Deprecated, removed in v7, use `header`           |
| `Modal`          | `modalHeaderProps` | `Partial<ModalHeaderProps>`                                 | undefined → undefined       | Deprecated, removed in v7, use `header`           |
| `Modal.Header`   | `onClose`          | `() => void`                                                | undefined → Modal `onClose` | Deprecated, removed in v7, taken from the `Modal` |
| `Modal.Controls` | `justifyContent`   | `CSSProperties['justifyContent']`                           | 'flex-end'                  | New                                               |

---

## Run the codemod

```sh
npx @contentful/f36-codemod <path>
# choose "v7-modal"
```

If you import `Modal` through your own wrapper module, point the codemod at it with `FORMA_IMPORT=<module path> npx @contentful/f36-codemod <path>`. Run your formatter afterwards.

The codemod changes these cases:

```tsx
// title props
<Modal title="Title" subtitle="Subtitle" modalHeaderProps={{ testId: 'header' }}>…</Modal>
// becomes
<Modal header={<Modal.Header title="Title" subtitle="Subtitle" testId="header" />}>…</Modal>

// render function with only Modal.Header, Modal.Content and Modal.Controls
<Modal onClose={onClose}>
  {() => (
    <>
      <Modal.Header title="Title" onClose={onClose} />
      <Modal.Content testId="content">Body</Modal.Content>
      <Modal.Controls>{/* buttons */}</Modal.Controls>
    </>
  )}
</Modal>
// becomes
<Modal
  onClose={onClose}
  header={<Modal.Header title="Title" />}
  controls={<Modal.Controls>{/* buttons */}</Modal.Controls>}
  modalContentProps={{ testId: 'content' }}
>
  Body
</Modal>
```

Usages it can't migrate safely are left unchanged and printed as a warning with file and line.

---

## Manual migration

For each warning:

- **Render function returns a wrapper element, such as a `<form>`.** Move `Modal.Header` and `Modal.Controls` into the slots, and keep the form inside the children. Buttons in `controls` are rendered outside the form, so either submit with `onClick` (see the "Modal with Form" example in the Modal documentation), or give the form an `id` and the submit button `type="submit"` and `form="<id>"`.
- **Render function uses its params** (`({ title, onClose }) => …`). Use the props you already pass to `Modal` instead, then migrate as above.
- **Render function contains other elements**, such as a custom header or body component. Move the header into `Modal.Header`, using its `children` for extra content, or use `Modal.DisplayHeader`. Pass the body as `children`. If you need full control over the layout, keep the render function and only move the header and controls into the slots.
- **`onClose` on `Modal.Header` differs from the `onClose` of the `Modal`.** Move the logic into the `onClose` of the `Modal` and remove it from the header.
- **Named `ModalHeader`, `ModalContent` or `ModalControls`.** Replace them with `Modal.Header`, `Modal.Content` and `Modal.Controls`, then run the codemod again.

If a modal only has a title, consider `ModalBasic`. For onboarding or informative moments, consider `ModalDisplay`.

---

## Migrating with an agent

Run the codemod first, save its warnings, and give them to your coding agent with this prompt:

```text
Migrate the Forma 36 Modal usages listed in the warnings below to the `header` and `controls` slots.
Follow packages/components/modal/MIGRATION.md in the Forma 36 repository.
Handle one warning at a time. Keep behaviour and layout the same. Keep the render function
if the layout needs it. Don't change modals that aren't listed. After each file, run the type check
and the tests that cover the file.

<warnings>
```

---

## Validation checklist

- [ ] No `title`, `subtitle` or `modalHeaderProps` on `Modal`
- [ ] No `onClose` on `Modal.Header`
- [ ] No deprecation warnings from `[Modal]` in the browser console during development
- [ ] Modals with a close button that should not have one are checked: the header shows it whenever the `Modal` has an `onClose`
- [ ] Forms whose submit button moved into `controls` still submit

## Support

If you encounter issues during migration:

- Check our [GitHub Issues](https://github.com/contentful/forma-36/issues) or create a new one
- Send us direct feedback via our feedback form on our [website](https://f36.contentful.com/)
