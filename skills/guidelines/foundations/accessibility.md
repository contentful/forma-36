# Accessibility

Accessibility is non-negotiable. Every screen must work for all users.

## Color contrast

- Text on backgrounds must meet WCAG 2.1 AA minimum (4.5:1 for normal text, 3:1 for large text)
- Never rely on color alone to convey meaning — always pair with text or icon
- Interactive elements must have visible focus states

## Keyboard navigation

- All interactive elements must be reachable via Tab
- Focus order must follow logical reading order
- Modals must trap focus and restore it on close
- Menus and dropdowns must support arrow key navigation
- Escape must close overlays (modals, menus, tooltips)

## ARIA labels

- Icon-only buttons: always provide `aria-label` describing the action
- Form inputs: always use `FormControl.Label` (renders as `<label>`)
- Grouped inputs: use `FormControl as="fieldset"` with `Label as="legend"`
- NavList: always provide `aria-label` on the nav element
- ProgressStepper: `ariaLabel` is required

## Screen readers

- Use plain language — aim for 8th-grade reading level
- Avoid directional instructions ("click the button on the left")
- Use semantic HTML elements (`<nav>`, `<main>`, `<header>`, `<aside>`)
- Do not use `aria-hidden` on content that conveys meaning
- Skeleton loading states should include an accessible label

## Focus rings

Use the glow tokens for focus indicators:
- `glowPrimary` — default focus
- `glowNegative` — error context
- `glowPositive` — success context

These are applied automatically by Forma 36 components. Do not override or remove them.
