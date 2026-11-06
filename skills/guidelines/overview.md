# Forma 36 — Contentful Design System

Forma 36 is the design language of Contentful. Every screen, component, and interaction must feel like it belongs in the Contentful product — calm, trustworthy, and focused on the user's task.

## Product character

Contentful is a professional content platform used daily by developers, editors, and designers. The UI is never decorative, never surprising, never clever. It is clear, consistent, and accessible.

**Density:** Medium — generous whitespace, but no wasted space. Every element earns its place.
**Surfaces:** White panels with subtle shadows on a light gray (`#F7F9FA`) background. No gradients, no colored surfaces except for semantic meaning.
**Color philosophy:** Color carries meaning. Blue = primary action. Green = success/published. Red = danger/error. Orange = warning/draft. Purple = premium (sparingly). Never use color as decoration.

## Reading order

When building a Forma 36 interface, read these guidelines in this order:

1. **`setup.md`** — Install dependencies and configure your project
2. **`tokens/`** — Learn the spacing, color, typography, shadow, and border tokens
3. **`components/`** — Look up the specific components you need
4. **`composition/`** — Follow the layout shell and screen pattern templates
5. **`foundations/`** — Follow writing, icon, and accessibility rules

## Critical rules

These rules apply everywhere. Do not override them:

- Never use raw hex colors — always use tokens from `@contentful/f36-tokens`
- Never use arbitrary spacing — every gap is a spacing token
- Never skip the `Header` component on any page
- Never use more than one primary button per screen section
- Never use Title Case — sentence case only
- Never use `Workbench` — it is deprecated, use `Layout`
- Never use icons from libraries other than Phosphor
- Cancel button for destructive actions is always "Never mind"
- Every input must live inside a `FormControl`
- Color must never be the only way to convey meaning
