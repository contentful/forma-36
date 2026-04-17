# Typography Tokens

The typeface is **Geist** by Vercel. Always use composite type classes — do not set `font-size` independently from `font-weight` and `line-height`.

## Font families

| Token | Stack |
|---|---|
| `fontStackPrimary` | `Geist Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif` |
| `fontStackMonospace` | `Geist Mono, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace` |

Always use `fontStackPrimary`. Never hardcode `"Geist"` without the fallback stack. Load the font from `https://cdn.f36.contentful.com`.

## Font sizes

| Token | Value | Use |
|---|---|---|
| `fontSize4Xl` | 3rem | Hero display text |
| `fontSize3Xl` | 2.25rem | Large display |
| `fontSize2Xl` | 1.5rem | Page-level headings |
| `fontSizeXl` | 1.25rem | Section headings |
| `fontSizeL` | 1rem | Large body |
| `fontSizeM` | 0.875rem | **Default body** — most interface text |
| `fontSizeS` | 0.75rem | Captions, metadata, section labels |

## Font weights

| Token | Value | Use |
|---|---|---|
| `fontWeightNormal` | 400 | All body text |
| `fontWeightMedium` | 500 | Emphasized labels, active states |
| `fontWeightDemiBold` | 600 | Headings, section titles, nav group labels |

Do not use `700` (bold) or `300` (light). Forma 36 uses only these three weights.

## Line heights

| Token | Value | Use |
|---|---|---|
| `lineHeightDefault` | 1.5 | Body text |
| `lineHeightCondensed` | 1.25 | Nav items, badges, compact UI |

## Letter spacing

| Token | Value |
|---|---|
| `letterSpacingDefault` | 0rem |
| `letterSpacingWide` | 0.1rem |

Forma 36 uses `0` letter spacing by default. Do not add tracking to Geist.

## Composite type roles

When implementing text, combine tokens like this:

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| Display | `fontSize2Xl`+ | `fontWeightDemiBold` | `lineHeightDefault` | Page titles, hero text |
| Section heading | `fontSizeS` | `fontWeightDemiBold` | `lineHeightCondensed` | Nav group labels, table headers |
| Body (default) | `fontSizeM` | `fontWeightNormal` | `lineHeightDefault` | All interface copy |
| Body medium | `fontSizeM` | `fontWeightMedium` | `lineHeightDefault` | Emphasized labels |
| Small / caption | `fontSizeS` | `fontWeightNormal` | `lineHeightDefault` | Metadata, hints |

## High-density variants

For compact UI contexts (dense tables, toolbar items):

| Token | Value | Use |
|---|---|---|
| `fontSizeMHigh` | 0.75rem | Dense body (= default `fontSizeS`) |
| `fontSizeSHigh` | 0.625rem | Dense caption |

## Rules

- Apply `font-feature-settings: 'ss05' 1` on all Geist text
- Line height: `1.5` default, `1.25` condensed (nav items, badges)
- Letter spacing: `0` for all sizes
- Never mix more than two weights on a single screen
- Labels are sentence case — never Title Case or ALL CAPS
