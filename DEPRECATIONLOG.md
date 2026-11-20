# Deprecation Log

This log tracks all deprecated features and components in Forma 36. For details on the deprecation process, see [DEPRECATION.md](DEPRECATION.md).

---

## Active Deprecations

### Modal props `title`, `subtitle`, `modalHeaderProps` and `Modal.Header` `onClose` (`@contentful/f36-modal`)

- **Deprecated**: 2026-11-18
- **Deprecated In**: v6.x.x
- **Removal Planned**: next Major (v7)
- **Reason**: Replaced by the `header` and `controls` slots, which render the header and buttons outside the scrollable content without a render function. `Modal.Header` now takes `onClose` from the `Modal`.
- **Migration**: Use `header={<Modal.Header title="…" />}` and `controls={<Modal.Controls>…</Modal.Controls>}`; the `v7-modal` codemod migrates most usages
- **Guide**: [Migration documentation](./packages/components/modal/MIGRATION.md)

### ModalConfirm and `ModalConfirmProps` (`@contentful/f36-modal`)

- **Deprecated**: 2026-11-19
- **Deprecated In**: v6.x.x
- **Removal Planned**: next Major (v7)
- **Reason**: Renamed to `ConfirmationModal` to match the variant-first naming of `BasicModal` and `DisplayModal`. The API is unchanged.
- **Migration**: Use `ConfirmationModal` and `ConfirmationModalProps` instead; the `v7-modal` codemod renames the imports and usages
- **Guide**: [Migration documentation](./packages/components/modal/MIGRATION.md)

### Pill (`@contentful/f36-pill`)

- **Deprecated**: 2026-05-21
- **Deprecated In**: v6.x.x
- **Removal Planned**: next Major (v7)
- **Reason**: Replaced by `PillNext` from `@contentful/f36-pill-next` with improved variant support, accessibility, and alignment with the refreshed design system
- **Migration**: Use `PillNext` from `@contentful/f36-pill-next` instead
- **Guide**: [Migration documentation](./packages/components/pill/MIGRATION.md)

### Navbar (`@contentful/f36-navbar`)

- **Deprecated**: 2026-08-11
- **Deprecated In**: v6.x.x
- **Removed In**: next Major (v7)
- **Reason**: We moved away from a horizontal main navigation to a vertical sidebar Navigation.

---

## Removed Deprecations

### Previously Deprecated Item

<!-- Format example
- **Deprecated**: YYYY-MM-DD
- **Deprecated In**: v3.x.x
- **Removed In**: v4.0.0
- **Reason**: [Brief explanation]
-->
