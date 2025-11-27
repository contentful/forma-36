# Migration of Accordion v5.x to v6.x

## Summary of Breaking Change

`align` is no longer accepted on `AccordionItem` or `AccordionHeader`. Alignment is now a single top‑level concern configured **only on the parent `Accordion`** component and provided to its descendants via context.

> Note: In v5, any `align` value you passed to `AccordionItem` or `AccordionHeader` was **already ignored** because the effective alignment always came from the parent `Accordion` (defaulting to `end`). The v6 removal simply formalizes this behavior and eliminates a misleading prop surface.

| Component       | v5.x                                 | v6.x      |
| --------------- | ------------------------------------ | --------- |
| Accordion       | `align` prop ("start" \| "end")      | no change |
| AccordionItem   | `align` overwritten from `Accordion` | removed   |
| AccordionHeader | `align` overwritten from `Accordion` | removed   |

## Rationale

Previously, allowing `align` on each item/header introduced prop duplication, and increased rendering complexity. The property was always overwritten by the parent `Accordion` and therefore led to wrong expectations of the chevron positioning. Centralizing the setting:

1. Reduces prop surface area and cognitive load.
2. Simplifies implementation by making use of react context instead of prop-drilling.

## Migration Steps

1. Remove all `align` props from `AccordionItem` and `AccordionHeader` usages.
2. Add a single `align` prop to the parent `<Accordion>` if you relied on non‑default alignment.
3. Ensure that all `AccordionItem` / `AccordionHeader` instances are direct or nested descendants of the `Accordion` (they must be inside the provider for the context value to resolve).

## Before ➜ After

### Before (v5.x)

```tsx
<Accordion>
  <AccordionItem align="start" title="A" />
  <AccordionItem align="end" title="B" />
  <AccordionItem title="C">
    <AccordionHeader align="start">Custom Header</AccordionHeader>
  </AccordionItem>
</Accordion>
```

### After (v6.x)

```tsx
<Accordion align="start">
  <AccordionItem title="A" />
  <AccordionItem title="B" />
  <AccordionItem title="C">
    <AccordionHeader>Custom Header</AccordionHeader>
  </AccordionItem>
</Accordion>
```

If you previously mixed different alignments per item, choose a single value that best matches the dominant layout (typically `end`, which remains the default). The new API intentionally does **not** support heterogeneous alignment inside one Accordion.

## New API Surface

```ts
<Accordion align="start" | "end" /> // default is "end"
```

All other Accordion props remain unchanged.

## Validation Checklist

- [ ] No remaining `align` usage on `AccordionItem` / `AccordionHeader`.
- [ ] Parent `<Accordion>` includes `align` only if deviating from default.
- [ ] All accordion structural children are nested within `<Accordion>`.

## FAQs

**Q: I need different alignment for a single item.**  
A: Wrap that item in a separate Accordion instance if absolutely necessary, or redesign to use a consistent alignment. Mixed chevron alignment in a single list is now considered a design anti‑pattern.

**Q: What happens if I leave old `align` props in place?**  
A: They will be ignored (and in strict TypeScript settings, produce a type error). Remove them to prevent confusion.
