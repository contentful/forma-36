# Composition — Layouts & Screen Patterns

This section covers how to assemble components into complete screens. Every Contentful screen follows a consistent shell and uses named patterns for common page types.

## Files

| File                     | What it covers                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| `base-shell.md`          | The standard app chrome — top bar, sidebar, content area                                          |
| `screen-patterns.md`     | Named patterns: list, detail, settings, empty state, error, confirmation, wizard, dashboard, form |
| `visual-verification.md` | Figma-to-code post-flight — screenshot comparison loop to catch missing page elements             |

## Rule

Always start from the base shell and a named screen pattern. Do not invent custom chrome or layout structures. If the design does not fit a named pattern, flag it — do not improvise.
