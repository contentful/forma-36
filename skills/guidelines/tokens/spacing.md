# Spacing Tokens

Spacing follows a fixed scale. Use these values only — never arbitrary pixel values.

## The scale

| Token | Value | Rem | Use |
|---|---|---|---|
| `spacing2Xs` | 4px | 0.25rem | Icon gaps, tight groupings |
| `spacingXs` | 8px | 0.5rem | Between related items |
| `spacingS` | 12px | 0.75rem | Component internal padding |
| `spacingM` | 16px | 1rem | Standard padding |
| `spacingL` | 24px | 1.5rem | Section padding |
| `spacingXl` | 32px | 2rem | Large section gaps |
| `spacing2Xl` | 48px | 3rem | Page-level separation |
| `spacing3Xl` | 64px | 4rem | Large page gaps |
| `spacing4Xl` | 80px | 5rem | Maximum spacing |

## How to apply spacing

Components carry no external margin by default. Use layout wrappers or inline tokens.

**Layout component props:**
```tsx
<Stack spacing="spacingM" />
<Flex gap="spacingS" />
<Box padding="spacingM" marginBottom="spacingL" />
```

**Inline styles (when layout props are insufficient):**
```tsx
<div style={{ padding: tokens.spacingM, gap: tokens.spacingS }} />
```

## Choosing the right spacing

- Between items in a group (buttons, badges) → `spacingXs` (8px)
- Internal padding of a component → `spacingS` (12px) or `spacingM` (16px)
- Between sections on a page → `spacingL` (24px) or `spacingXl` (32px)
- Page-level top/bottom margins → `spacing2Xl` (48px)

## Content width tokens

| Token | Value | Use |
|---|---|---|
| `contentWidthDefault` | 1280px | Standard page max-width (`Layout variant="wide"`) |
| `contentWidthText` | 768px | Narrow content (`Layout variant="narrow"`, forms) |
| `contentWidthFull` | 100% | Fullscreen (`Layout variant="fullscreen"`) |

## Rules

- Never use a spacing value outside this scale
- Never set margin or padding to an arbitrary pixel value
- If the spacing you need does not exist in the scale, the design is probably wrong
