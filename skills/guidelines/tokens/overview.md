# Tokens

All design tokens live in `@contentful/f36-tokens`. Never use raw values — always reference the token name.

```tsx
import tokens from '@contentful/f36-tokens';
```

## Token philosophy

Tokens are the single source of truth for every visual property. They ensure consistency across components, screens, and contributors. When you use a token, the design system can evolve without breaking your code.

**Rules:**
- Do not hardcode hex colors, pixel values, font sizes, or shadow strings
- If a value exists as a token, use the token
- If no token exists for the value you need, the value is probably wrong — check the design

## Token groups

| File | What it covers |
|---|---|
| `color.md` | Semantic colors, gray scale, blue/green/red/orange/purple/yellow palettes |
| `typography.md` | Font families, sizes, weights, line heights, letter spacing |
| `spacing.md` | The spacing scale (4px–80px) and how to apply it |
| `effects.md` | Shadows, border radius, z-index, transitions, focus rings |
