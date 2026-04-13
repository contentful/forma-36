---
name: forma36
description: Build UI using Forma 36, Contentful's design system. Use when the user references Forma 36, f36, Contentful components, or wants to build a Contentful app UI — including prototypes, screens, and interface explorations.
---

# Forma 36 — Contentful Design System

Forma 36 is the design language of Contentful. Every prototype, screen, and component built for Contentful must look and feel like it belongs in the Contentful product. This skill ensures that.

The goal is not to use the right component name — it's to produce UI that is indistinguishable from the real Contentful interface.

## Scope, Authority, and Rule Interpretation

This document is the primary operational specification for generating UI with Forma 36.

Use it to determine:
- which UI structures are allowed
- which components and patterns to use
- which visual and writing rules are mandatory
- which implementations are forbidden

This is a normative specification. Outputs must follow explicit rules. Philosophy sections explain intent but do not override rules or permit invention.

---

## Rule Types

All guidance is expressed using the following rule types:

- **Required** — mandatory in every applicable case. Treat as pass/fail.
- **Forbidden** — never allowed. If present, the UI is incorrect.
- **Preferred** — default choice unless a more specific rule overrides it.
- **Context-dependent** — mandatory only when the stated condition is true.

### Rule precedence

Apply rules in this order:
1. Forbidden
2. Required
3. Context-dependent (when condition is true)
4. Preferred
5. Philosophy and explanatory text

When applying rules:
- apply conditional rules only when their condition is true
- when rules conflict, the more specific rule wins
- Forbidden rules always take precedence

Only explicit rules, named components, defined patterns, and tokenized values are normative.

---

## Supporting Files

Supporting files extend this specification with domain-specific detail.

Apply them as follows:
- use this document first to determine structure and rule intent
- use the relevant supporting file for detailed decisions
- when rules do not conflict, apply both
- when rules conflict, the more specific rule wins

This skill is split across four reference files. Read the relevant one for the task at hand:

| File | What's in it |
|---|---|
| `tokens.md` | Complete token reference — all colors, spacing, typography, shadows, border radius, z-index |
| `components.md` | Every component: usage intent, key props, code examples, rules |
| `screen-patterns.md` | Named layout patterns — list page, detail page, empty state, error state, confirmation dialog, wizard, dashboard |
| `brand-guidelines.md` | Voice, tone, writing rules, icon style, photography guidance |

---

## Generation Constraints

**Forbidden**
- Do not invent new components.
- Do not invent new layout patterns.
- Do not invent new visual styles.
- Do not invent new interaction models.
- Do not invent new token values.
- Do not substitute a custom solution when a defined component, primitive, or pattern exists.

**Preferred**
- Use defined Forma 36 components.
- Use layout primitives: Box, Flex, Stack, Grid.
- Use tokenized spacing, radius, color, and typography.
- Use named patterns from screen-patterns.md when applicable.

**Context-dependent**
- If required information is missing, incomplete, or unspecified:
  - do not guess beyond the defined system
  - compose solutions using available primitives and defined components
  - apply existing rule types and precedence
  - prefer standard patterns over custom implementations

## Fallback behavior

These rules define how to proceed when required information is missing, incomplete, ambiguous, or in conflict. Apply them with the rule precedence defined in this document.

### Missing component definition

**Required**
- If a needed component is not defined in this document or the supporting files, do not invent a new component.
- Compose the UI using defined components and layout primitives only.
- Prefer the simplest composition that satisfies the requirement using Box, Flex, Stack, Grid, and defined Forma 36 components.

**Forbidden**
- Do not create a custom component, custom variant, or custom API to fill the gap.

### Missing layout or pattern

**Required**
- If a needed layout or named pattern is not defined, use the standard application shell defined in this document.
- Compose the screen from the existing header, content area, sidebar, and layout primitives only.
- Prefer a standard composition over a custom layout.

**Forbidden**
- Do not invent a new page pattern, navigation pattern, or layout structure.

### Missing interaction or state behavior

**Required**
- If a component-specific interaction rule is missing, use the global Interaction states section as the source of truth.
- Keep behavior minimal and within the defined component model.

**Context-dependent**
- If a state is not applicable to a component, omit it.

**Forbidden**
- Do not invent a new interaction model, custom animation, or undefined state behavior.

### Missing accessibility rule

**Required**
- If a component-specific accessibility rule is missing, apply the explicit accessibility rules already defined in this document for labels, keyboard operation, focus visibility, heading structure, state communication, and text alternatives.
- Prefer native semantics and documented component APIs over custom accessibility implementations.

**Forbidden**
- Do not assume undocumented accessibility behavior for a component.
- Do not remove an accessibility requirement because a component-specific rule is missing.

### Conflicting rules

**Required**
- Apply rule precedence defined in this document.
- When rules conflict, the more specific rule wins.
- When a global rule and a component-specific rule conflict, use the component-specific rule if it does not violate a Forbidden rule.

**Forbidden**
- Do not merge conflicting rules into a compromise implementation.
- Do not ignore a Forbidden rule because another rule is less strict.

### Ambiguous or underspecified requirements

**Required**
- If the requirement is underspecified, select the simplest valid option that is explicitly supported by this document.
- Prefer defined components over composition, and composition over omission, when both remain within documented rules.
- If a requirement cannot be satisfied without inventing a component, pattern, behavior, or rule, omit the unsupported part.

**Forbidden**
- Do not approximate with a “close enough” custom solution.
- Do not infer undocumented product behavior from philosophy text, examples, or visual style alone.

### Safe default rules

**Required**
- Stay within defined tokens, defined components, defined patterns, and defined state rules.
- Prefer standard, lower-complexity compositions over dense or highly customized layouts.
- Preserve existing explicit constraints even when information is missing elsewhere.

**Forbidden**
- Do not add decorative UI, auxiliary controls, or optional interactions that are not required by the specification.

## Design Philosophy

This section is non-normative. It explains intent. It does not create requirements, override explicit rules, or permit invention. Use it only to interpret explicit rules elsewhere in this document.

Forma 36 is built on one idea: software should feel calm, trustworthy, and focused.

Supporting principles:

1. **Clarity over cleverness**  
Prioritize task clarity over decorative or novel presentation.

2. **Restraint as a design decision**  
Prefer lower visual intensity, clear hierarchy, and semantic use of color.

3. **Consistency builds trust**  
Prefer existing patterns, consistent spacing, consistent component behavior, and consistent language.

4. **Accessibility is non-negotiable**  
Apply the explicit accessibility, keyboard, focus, labeling, and state communication rules defined elsewhere in this document.

---

## Visual Language

### Color

| Role | Color | Hex | Use |
|---|---|---|---|
| Primary action | Blue 600 | #0059C8 | Primary interactive action |
| Success / published | Green 600 | #006D23 | Positive outcomes, published state |
| Danger / error | Red 600 | #BD002A | Destructive actions, errors |
| Warning / draft | Orange 500 | #CC4500 | Caution, unpublished or draft state |
| Premium / new | Purple 600 | #6B3DB5 | Paid features |
| UI surface | Gray 100 | #F7F9FA | Page backgrounds |
| Panel surface | White | #FFFFFF | Cards, sidebars, modals |
| Default text | Gray 900 | #111B2B | Body copy, labels |
| Secondary text | Gray 700 | #414D63 | Section headings, metadata |
| Muted text | Gray 600 | #536171 | Hints, inactive labels |
| Borders / dividers | Gray 200 | #E7EBEE | Dividers between sections |

**Supported shade sets**
- blue100 to blue900
- gray100 to gray900
- green100 to green900
- orange100 to orange900
- purple100 to purple900
- red100 to red900
- yellow100 to yellow900

**Required**
- Use only supported shade sets and defined color roles.
- Pair semantic color with text or icon when the color communicates meaning.
- Use Blue 600 only for primary interactive actions.
- Use Purple 600 only for paid features.
- Use blue/100 (#E8F5FF) as the active navigation background.
- Use black text darker than gray-800 only on shades 100 to 400.
- Use white text only on shades 500 to 900.
- For non-yellow same-color foreground/background combinations, use only:
  - 600 on 100
  - 600 on 200
  - 700 on 300
  - 300 on 900
  - 500 on white
  - 500 on gray100
- For yellow same-color foreground/background combinations, use only:
  - 800 on 100
  - 800 on 200
  - 900 on 300
  - 300 on 900
  - 800 on white
  - 800 on gray100

**Forbidden**
- Do not use color as decoration.
- Do not rely on color alone to communicate meaning.
- Do not use blue for non-interactive decoration.
- Do not use a blue text color for active navigation items.
- Do not use unsupported foreground/background shade combinations.
- Do not use non-yellow same-color combinations outside the allowed set.
- Do not use yellow same-color combinations outside the allowed yellow set.
- Do not use yellow when another defined semantic role matches the meaning.

### Typography

| Role | Size | Weight | Use |
|---|---|---|---|
| Display | 1.5rem+ | 600 | Page titles, hero text |
| Section heading | 0.75rem | 600 | Nav group labels, table headers |
| Body (default) | 0.875rem | 400 | Interface copy |
| Body medium | 0.875rem | 500 | Emphasized labels |
| Small / caption | 0.75rem | 400 | Metadata, hints |

**Required**
- Use Geist as the typeface.
- Import from https://cdn.f36.contentful.com.
- Use fallback fonts -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif.
- Use font-feature-settings: 'ss05' 1 on all Geist text.
- Use line height 1.5 by default.
- Use line height 1.25 only for nav items and badges.
- Use letter spacing 0 for all sizes.
- Use sentence case for labels.

**Forbidden**
- Do not mix more than two font weights on a single screen.
- Do not use Title Case for labels.
- Do not use ALL CAPS for labels.

### Spacing

| Token | Value | Common use |
|---|---|---|
| 2xs | 4px | Icon gaps, tight groupings |
| xs | 8px | Between related items |
| s | 12px | Component internal padding |
| m | 16px | Standard padding |
| l | 24px | Section padding |
| xl | 32px | Large section gaps |
| 2xl | 48px | Page-level separation |

**Required**
- Use only the defined spacing tokens.
- Manage external spacing with layout wrappers: Flex, Stack, Box.
- Use token names on layout components: spacingXs, spacingS, spacingM, etc.

**Forbidden**
- Do not use arbitrary pixel values for spacing.
- Do not assign external spacing directly to components.

### Shadows

| Name | Value | Use |
|---|---|---|
| Default | 0 0 0 1px rgba(25,37,50,.10), 0 3px 7px -3px rgba(25,37,50,.10), 0 6px 12px -2px rgba(25,37,50,.10) | Panels, sidebar, content area |
| Button | 0 1px 0 rgba(17,27,43,.05) | Secondary buttons |

**Required**
- Use Shadow/Default for panels, sidebar, and content area.
- Use Shadow/Button for secondary buttons.

**Forbidden**
- Do not create custom shadows.
- Do not create glows.

### Borders & Radius

| Element | Radius |
|---|---|
| Panels, cards | 12px (top corners only for flush-to-edge panels) |
| Buttons, inputs, nav items | 6px |
| Small chips, badges | 4px |
| Avatars | 100px (pill) |

**Required**
- Use only the defined radius values.
- Use 12px for panels and cards.
- Use top corners only for flush-to-edge panels.
- Use 6px for buttons, inputs, and nav items.
- Use 4px for small chips and badges.
- Use 100px for avatars.

**Forbidden**
- Do not use border radius values outside 4px, 6px, 12px, and 100px.

---

## Base Layout

**Required**
- Every screen uses this exact shell.
- Do not invent alternative chrome.

Figma reference: `https://www.figma.com/design/CHqkCTVTpvkqDNXtoAR5cE/Experiences-Library?node-id=6764-6490`

┌──────────────────────────────────────────────────────┐
│  Top bar  (52px, gray-100 background)                │
├───────────────┬──────────────────────────────────────┤
│               │  Content area                        │
│  Sidebar      │  ┌────────────────────────────────┐  │
│  (240px)      │  │  Header (title + actions)      │  │
│               │  ├────────────────────────────────┤  │
│               │  │  Page content                  │  │
│               │  └────────────────────────────────┘  │
└───────────────┴──────────────────────────────────────┘
[8px agent strip]

### Top bar

**Required**
- Height: `52px`.
- Background: `gray/100`.
- Horizontal padding: `24px` left, `64px` right.
- The `64px` right gap is reserved for the agent strip.
- Left content order: Contentful `"C"` logo → Space/Environment switcher pill.
- Right content order: Search icon → Help icon → User avatar (`24px`).
- Environment switcher background: `green/100`.
- Environment switcher border: `green/400`.
- Environment switcher text: `"Space > Production"` in `green/700`.
- Environment switcher includes a `green-300` right-edge indicator strip.
- Environment switcher includes a rocket icon.

**Forbidden**
- Do not change the top bar height.
- Keep the top bar content order consistent with the defined structure.
- Do not use an alternative top bar structure.

### Sidebar

#### Structure

**Required**
- Sidebar is present in the application shell.
- Sidebar includes a collapse button.
- Collapse button is a transparent `IconButton` with `CaretLeft` icon.
- Collapse button position: bottom-right of sidebar.
- Sidebar includes all defined sections, items, icons, and states.

**Forbidden**
- Do not stub the sidebar.
- Do not simplify the sidebar.
- Do not remove defined sections, items, icons, or states.

#### Dimensions

**Required**
- Width: `240px`.
- Background: `white`.
- Shadow: `Shadow/Default`.
- Top corners radius: `12px`.
- Padding: `pt-12px pb-8px px-4px`.
- Inner menu padding: `px-12px`.
- Gap between sections: `12px`.
- Nav item height: `32px`.
- Nav item padding: `px-12px py-6px`.
- Nav item gap: `8px`.
- Nav item border radius: `4px`.
- Section title size: `12px`.
- Section title weight: `600`.
- Section title color: `gray/700`.
- Section title height: `28px`.
- Section title left padding: `pl-12px`.

#### Content

**Required**
- Sections are separated by `gray/200` bottom border.
- Sidebar sections and items:
  1. **Setup** — Design System *(active by default)*, Content Model
  2. **Creation** — Experiences, Content
  3. **Optimization** — Optimizations, Analytics
  4. **Platform Configuration** — Collections, AI & Automations, Taxonomy, Apps
  5. *(no title)* — Settings

#### States

**Required**
- See Interaction states.
- Nav item content: Icon (`16px`, duotone variant for active) + label (body regular, `gray/900`) + optional caret right.
- Active state background: `blue/100` (`#E8F5FF`).
- Default state background: transparent.
- Hover state background: `gray/100`.

#### Constraints

**Required**
- Implement the sidebar faithfully.
- Replicate all sections, items, icons, and states exactly.

**Forbidden**
- Do not modify sidebar structure outside the defined shell.
- Do not invent additional sidebar patterns.

### Content area

**Required**
- Content area fills the remaining width.
- Background: `white`.
- Shadow: `Shadow/Default`.
- Top corners radius: `12px`.
- Padding: `pt-12px px-24px`.
- `Header` is always present at the top of the content area.
- Use `Title` variant for top-level pages.
- Use `Breadcrumb` variant for subpages.
- Page content is placed below the `Header`.

**Context-dependent**
- Set `dividerLine={true}` when the content area has a right sidebar.

**Forbidden**
- Do not omit the `Header`.
- Do not place page content above the `Header`.

---

## Layout rules

### Layout Primitives

**Required**
- Use layout primitives to compose all layout structure outside the application shell.
- Use only Flex, Stack, Box, and Grid for layout composition.
- Use tokenized spacing values on layout primitives: spacingXs, spacingS, spacingM, spacingL, spacingXl, spacing2Xl.
- Use layout primitives to control external spacing between components.
- Keep component external spacing outside the component itself.
- Keep layout composition inside the existing application shell defined in this document.

**Preferred**
- Use Stack for one-directional vertical grouping.
- Use Flex for one-directional layouts that require explicit alignment, justification, or wrapping behavior.
- Use Grid for two-dimensional layouts with rows and columns.
- Use Box for single-region containment, padding, margin, width, or other block-level layout control.
- Use the simplest layout primitive that satisfies the requirement.
- Prefer Stack over Flex when only directional spacing is required.
- Prefer Flex over Grid when the layout is one-dimensional.

**Required**
- Compose layouts from primitives first, then place defined components inside them.
- Use nested primitives when one primitive cannot express the required structure.
- Keep DOM order aligned with visual order.
- Keep page-level spacing, section spacing, and inter-component spacing on layout primitives, not on child components.
- Use existing shell regions as fixed boundaries: top bar, sidebar, content area, header, page content.
- Keep the Header at the top of the content area.
- Place unrestricted page content below the Header.

**Context-dependent**
- When content requires explicit columns or row/column placement, use Grid.
- When content is arranged in a single vertical flow, use Stack.
- When items must be aligned horizontally or distributed along one axis, use Flex.
- When only padding, margin, width, or a single container wrapper is needed, use Box.
- When spacing between elements is required, use spacing tokens only.
- When a right sidebar is present in the content area, follow the existing Header rule for dividerLine={true}.
- If a layout requirement is underspecified, use the simplest valid composition built from Box, Flex, Stack, and Grid.
- If a named pattern is missing, compose the layout from the standard application shell and layout primitives only.

**Forbidden**
- Do not invent new layout primitives.
- Do not invent new layout patterns outside the application shell and named patterns defined elsewhere in this document.
- Do not use arbitrary pixel values for layout spacing.
- Do not use components as layout substitutes when a layout primitive is sufficient.
- Do not assign external spacing directly to components.
- Do not use Grid for one-dimensional layouts.
- Do not use Flex or Stack to approximate a two-dimensional grid layout.
- Do not break the shell structure defined in Base Layout.
- Do not reorder DOM structure to create a visual layout that changes reading or interaction order.

---

## Component rules

### Buttons

**Required**
- Use `Button` for button actions.
- Use `Primary` for the single most important action in a context. Maximum: one per context.
- Use `Secondary` for supporting actions.
- Use `Positive` for constructive actions: create, publish, add.
- Use `Negative` for destructive or irreversible actions: delete, remove, archive.
- Use `Transparent` only on light backgrounds.
- Use native button semantics for button actions.
- Icon-only actions must use `IconButton` or `ToggleButton` with a descriptive `aria-label`.
- Button groups must expose an `aria-label`.

**Context-dependent**
- Use `small` for toolbars.
- Use `medium` as the default size.
- Use `large` only for hero CTAs.
- If a button is marked disabled through a custom button element or `role=button`, click and keydown handlers must not fire.
- For state behavior, see **Interaction states**.
- For loading behavior, see **Interaction & State rules**.

**Forbidden**
- Do not use more than one `Primary` button in the same context.

### Forms

**Required**
- Every input must live inside a `FormControl`.
- Structure is always: `Label → Input → Help text → Validation message`.
- `FormControl.Label` is required.
- `FormControl.HelpText` is for guidance that always shows.
- Pass `isRequired`, `isInvalid`, and `isDisabled` to `FormControl`, not to the input directly.
- Required form elements must be marked programmatically with `isRequired`, not only visually.
- Help text and validation messages must stay inside the same `FormControl`.
- `TextInput` and `Textarea` with separate labels must expose `id` for `htmlFor`.
- Controls used in form submission must expose `name` when submission depends on it.
- Choose the input type as follows:
  - Short free text → `TextInput`
  - Long free text → `Textarea`
  - Pick one from a short list (`≤8` options) → `Select`
  - Pick one from a long list → `Autocomplete`
  - Toggle one option → `Checkbox`
  - Pick one from a mutually exclusive group → `Radio.Group`

**Context-dependent**
- `FormControl.ValidationMessage` is for errors and appears only when invalid. See **Feedback selection rules**.
- If there is no visible label, provide `aria-label` or `aria-labelledby` as supported by the control.
- Use `Checkbox.Group` or an equivalent fieldset/legend structure for related checkbox options.
- Use `Radio.Group` to group related radio buttons and provide a group label.
- If a visible legend is not possible for checkbox or radio groups, use `aria-labelledby`.
- `Switch` labels must describe the action being controlled.
- If a visible label is not present for `Select`, provide `aria-label`.
- Use `Datepicker` inside `FormControl` when label, help text, or validation is needed.
- Icon-only `Datepicker` trigger buttons must provide a screen-reader label.
- Disabled or invalid date states must be communicated in text, not only visually.
- In `Multiselect`, if a visible label is not present, provide an `aria-label`.
- For state behavior, see **Interaction states**.

**Forbidden**
- Do not use placeholder text as a replacement for a label.

### Feedback & Status

**Required**
- Use `Notification` for immediate feedback after a user action.
- `Notification` dismisses after 6 seconds.
- `Notification.success('Entry published')` uses active voice and present tense.
- `Notification.error(...)` must be specific and actionable.
- Use `Note` for proactive context the user needs before acting.
- Place `Note` near the relevant content, not at the top of the page generically.
- Badge labels and status indicators stay to one word.
- Use `EntityStatusBadge` for Contentful entity status.

**Context-dependent**
- `Note` variants: neutral, primary, positive, warning, negative, premium.
- Badge status mapping:
  - positive = Published
  - warning = Draft
  - negative = Deleted
- For selection logic, see **Feedback selection rules**.

**Forbidden**
- Do not use `Notification` for persistent context.
- Do not construct a raw `Badge` for Contentful entity status.

### Navigation & Overlays

**Required**
- For `Modal` usage, see **Feedback selection rules**.
- `Modal` content must include a clear title and description.
- Use `Menu` for actions and navigation choices triggered by a button.
- `Tabs` navigate between sections of related content.
- Maximum tabs: `6`.
- Tab labels must accurately describe the panel content.
- Provide a unique `panelId` for each tab-panel relationship.
- `Tooltip` is supplementary, non-critical context.
- Tooltip content must be short.
- Always include a unique `id` prop on `Tooltip`.
- If the trigger is icon-only, the trigger must have its own accessible label independent of the tooltip text.

**Context-dependent**
- Focus moves into the modal when it opens.
- Focus remains trapped inside the modal while it is open.
- Focus returns to the invoking control when the modal closes.
- Modal dialogs close with `Escape` and outside click unless disabled.
- Menus move focus into the menu when they open and support keyboard navigation among items.
- For state behavior, see **Interaction states**.

**Forbidden**
- Do not use `Select` for actions.
- Do not put links, buttons, or forms inside a `Tooltip`.

---

## Interaction & State rules

This section defines behavior and interaction rules. Use it with **Component rules**, **Interaction states**, and **Feedback selection rules**. Do not restate component selection or structural rules here.

### Sidebar

**Required**
- Sidebar navigation uses the global **Interaction states** model.
- The active item is `Design System` by default.
- The collapse control is an `IconButton` with `CaretLeft`.

**Context-dependent**
- Active nav items use `blue/100` (`#E8F5FF`) background fill.
- Default nav items use transparent background.
- Hovered nav items use `gray/100` background fill.
- Active nav items use the duotone icon variant.

### Content area

**Required**
- See **Base Layout**.

### Buttons

**Required**
- Buttons use the global **Interaction states** model.
- Loading uses `isLoading`.

**Forbidden**
- Do not disable a button and add a spinner manually.

### Forms

**Required**
- Forms use the global **Interaction states** model.

### Feedback & Status

**Required**
- See **Feedback selection rules**.

### Navigation & Overlays

**Required**
- `Modal` behavior follows the global **Interaction states** model.
- Menus support keyboard navigation among items.
- Tooltips are non-critical and supplementary.

**Context-dependent**
- Focus moves into the menu when it opens.
- Focus moves into the modal when it opens.
- Focus remains trapped inside the modal while it is open.
- Focus returns to the invoking control when the modal closes.
- Modal closes with `Escape` and outside click unless disabled.

### Keyboard and focus

**Required**
- All interactive elements are keyboard operable.
- Tab order follows the rendered interaction order.

### Semantic structure and state communication

**Required**
- Semantic DOM order matches visual order.

### Header and layout accessibility

**Required**
- Breadcrumbs and back buttons have descriptive accessible labels.
- Interactive elements placed in header actions or filters are keyboard accessible and clearly labeled.
- Interactive content placed inside layout containers preserves keyboard navigation and focus management.

**Context-dependent**
- If multiple headers are present, use the `as` prop to avoid duplicate landmarks and preserve heading hierarchy.

---

## Feedback selection rules

### Selection logic

**Required**
- Use FormControl.ValidationMessage when the message describes an error on a specific input.
- Use Note when the message must remain visible while the user reviews or acts on related content.
- Use Notification when the message confirms the result of a user action and can dismiss after 6 seconds.
- Use Modal when the user must confirm before proceeding or when the information is essential to the current workflow.

### FormControl.ValidationMessage

**Use when**

**Context-dependent**
- the message is tied to a specific field
- the field is invalid

**Do not use when**

**Forbidden**
- the message applies to the page, section, or workflow rather than a specific input
- the message is only informational guidance

### Note

**Use when**

**Context-dependent**
- the message is proactive context the user needs before acting
- the message must remain visible
- the message belongs near the relevant content

**Do not use when**

**Forbidden**
- the message is a field-specific validation error
- the message is only a temporary action result
- the message is placed at the top of the page generically

### Notification

**Use when**

**Context-dependent**
- the message is immediate feedback after a user action
- the message can dismiss after 6 seconds
- the message is an action result such as success or error

**Do not use when**

**Forbidden**
- the message must remain visible while the user works
- the message is persistent context
- the message replaces inline validation for a specific field

### Modal

**Use when**

**Context-dependent**
- the user must confirm before proceeding
- the information is essential to the current workflow
- the interaction blocks the interface

**Do not use when**

**Forbidden**
- the information is non-essential
- the interaction interrupts high-stakes flows without confirmation need
- the message is only a transient action result
- the message is only persistent inline context

### Forbidden patterns

**Forbidden**
- Do not use Notification for persistent context
- Do not use Note for field validation
- Do not use Modal for non-essential information
- Do not use Modal for a transient success or error message
- Do not use FormControl.ValidationMessage for page-level or section-level messaging

### Acceptance criteria

**Required**
- A field-specific error uses FormControl.ValidationMessage
- A message that must remain visible uses Note
- A temporary action result uses Notification
- A blocking confirmation uses Modal
- Notification messages dismiss after 6 seconds
- Note is placed near the relevant content
- FormControl.ValidationMessage appears only when invalid
- Modal is used only for confirmation before proceeding or information essential to the current workflow

---

## Content & writing

### Writing rules

**Required**
- Use active voice.
- Use present tense.
- Use sentence case everywhere.
- Start button labels with a verb.
- Start link labels with a verb when the link is an action.
- Error messages must state what went wrong and what to do next.
- Confirmation dialogs for destructive actions must state exactly what will be destroyed.

**Forbidden**
- Do not use "please".
- Do not use "click here".
- Do not use "learn more" without context.
- Do not use vague single-word labels such as "Go" or "Submit".
- Do not use Title Case.
- Do not use ALL CAPS.

**Context-dependent**
- If a link is navigation rather than an action, the label must describe the destination clearly.

### Button writing rules

**Required**
- Button labels start with a verb.
- Maximum button label length: 3 words.
- The dismiss action for a destructive flow uses Never mind.

**Forbidden**
- Do not use Cancel as the dismiss action for a destructive flow.

### Modal writing rules

**Required**
- Modal title format: verb + noun.
- Confirm button format: verb + noun.
- Destructive confirmation copy states exactly what will be destroyed.
- The dismiss action for a destructive flow uses Never mind.

**Forbidden**
- Do not use a vague modal title.
- Do not use a vague confirm label.
- Do not use Cancel as the dismiss action for a destructive flow.

---

## What Forma 36 Never Does

**Forbidden**
- Do not use decorative color.
- Do not create custom shadows or glows.
- Do not use rounded corners outside 4px, 6px, 12px, and 100px.
- Do not use arbitrary spacing.
- Do not use Title Case labels.
- Do not use more than one primary button per screen section.
- Do not use Button as a link. Use TextLink for navigation.
- Do not use a bare Badge for entity status. Use EntityStatusBadge.
- Do not use Notification for persistent context. Use Note and follow **Feedback selection rules**.
- Do not place interactive elements inside Tooltip content.
- Do not omit the Header from a page.
- Do not use Workbench. Use Layout.
- Do not use raw hex colors in code. Use tokens from @contentful/f36-tokens.
