# Effects Tokens

Shadows, border radius, z-index, transitions, and focus rings.

## Shadows

| Token                   | CSS value                                                                                                                                                | Use                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `boxShadowDefault`      | `0px 0px 0px 1px rgba(25,37,50,.10), 0px 3px 7px -3px rgba(25,37,50,.10), 0px 6px 12px -2px rgba(25,37,50,.10)`                                          | Panels, sidebar, content area, cards |
| `boxShadowHeavy`        | `0px 0px 0px 1px rgba(25,37,50,.10), 0px -6px 16px -6px rgba(25,37,50,.03), 0px 8px 16px -8px rgba(25,37,50,.20), 0px 13px 27px -5px rgba(25,37,50,.15)` | Elevated modals, popovers            |
| `boxShadowPositive`     | `0px 1px 0px rgb(25,37,50,.10)`                                                                                                                          | Secondary and transparent buttons    |
| `insetBoxShadowDefault` | `inset 0px 2px 0px rgba(225,228,232,.20)`                                                                                                                | Pressed/active input states          |

Do not invent custom shadows. These four values are all that exist.

## Focus rings (glow tokens)

Applied on `:focus-visible` for accessible focus indicators.

| Token          | Use                        |
| -------------- | -------------------------- |
| `glowPrimary`  | Primary input/button focus |
| `glowNegative` | Error input focus          |
| `glowPositive` | Success input focus        |
| `glowWarning`  | Warning input focus        |
| `glowMuted`    | Neutral focus              |

All glow tokens render as `0px 0px 0px 3px` with a color-appropriate light shade.

## Border radius

Only two values are exported as tokens:

| Token                | Value | Use                            |
| -------------------- | ----- | ------------------------------ |
| `borderRadiusSmall`  | 4px   | Nav items, badges, small chips |
| `borderRadiusMedium` | 6px   | Buttons, inputs, menus         |

Design conventions (not exported tokens — use inline styles):

| Value   | Use                            |
| ------- | ------------------------------ |
| `12px`  | Panels, cards, modals, sidebar |
| `100px` | Avatars, pill-shaped elements  |

Top-only radius for panels flush to the bottom: `border-radius: 12px 12px 0 0`.

Do not use rounded corners outside this set: 4px, 6px, 12px, 100px.

## Z-index

| Token                   | Value  | Use                         |
| ----------------------- | ------ | --------------------------- |
| `zIndexNegative`        | -1     | Behind-everything layer     |
| `zIndexWorkbench`       | 0      | Page base layer             |
| `zIndexDefault`         | 1      | Normal stacking             |
| `zIndexWorkbenchHeader` | 10     | Sticky headers              |
| `zIndexModal`           | 100    | Modals, dialogs             |
| `zIndexModalContent`    | 101    | Modal content above overlay |
| `zIndexDropdown`        | 1000   | Menus, dropdowns            |
| `zIndexTooltip`         | 10000  | Tooltips                    |
| `zIndexNotification`    | 100000 | Toast notifications         |

## Transitions

| Token                         | Value                                | Use                                    |
| ----------------------------- | ------------------------------------ | -------------------------------------- |
| `transitionDurationShort`     | 0.1s                                 | Micro interactions (hover, focus ring) |
| `transitionDurationDefault`   | 0.2s                                 | Standard transitions (collapse, fade)  |
| `transitionDurationLong`      | 0.3s                                 | Larger movements (sidebar, modal)      |
| `transitionEasingDefault`     | ease-in-out                          | Default easing                         |
| `transitionEasingCubicBezier` | cubic-bezier(0.13, 0.62, 0.11, 0.99) | Spring-like emphasis                   |
