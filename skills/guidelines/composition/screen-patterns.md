# Screen Patterns

Named, reusable patterns for common Contentful screens. When a design calls for one of these, use it as the structural template.

---

## List / Index Page

A collection of items with filtering and primary action. The most common pattern.

```
Header
  title: "Experiences"
  actions: [secondary button, primary button]
  filters: [search input, optional filter selects]

Content
  |- Bulk action bar (when items selected)
  |- Table or EntityList
  |    rows: [thumbnail?, title, metadata, status badge, actions menu]
  |- Pagination
```

**Rules:**

- Primary action ("Create experience") is top-right in Header
- Row actions via Menu with IconButton trigger (`DotsThreeIcon`) — not inline buttons
- Status column uses `EntityStatusBadge`
- Bulk selection: checkbox column left, bulk action bar above table
- Loading: `Skeleton.Row` inside `Table.Body` (props: `rowCount`, `columnCount`)

**Empty state (no items):** "No [items] yet" + one sentence about purpose + primary create button
**Empty state (no search results):** `No results for "[query]"` + "Try a different search term or clear filters." + TextLink "Clear filters"

**Common list page mistakes — avoid these:**

- Row action trigger: use `<IconButton icon={<DotsThreeIcon />} />` — never `MoreHorizontalIcon`, `MoreVerticalIcon`, or `EllipsisIcon`
- Search input: must be inside a `FormControl` with a `Label` (use `visually-hidden` Label if no visible label desired)
- Loading skeleton: use `Skeleton.Row` for tables — it renders the right number of rows and columns automatically
- Sidebar nav icons: use only icons from `@contentful/f36-icons` — never `HomeIcon`, `SettingsIcon` (use `HouseIcon`, `GearSixIcon`, etc.)
- Table column widths: use token-based spacing or percentage values, not arbitrary pixel widths

---

## Detail / Edit Page

A single entity being viewed or edited.

```
Header
  title: entry name (or "Untitled")
  breadcrumbs: [parent section]
  actions: [secondary menu, "Save" or "Publish" primary]

Content (two-column when sidebar present)
  |- Main content (fields, editor, canvas)
  |- Right sidebar: status, metadata, publish controls
```

**Rules:**

- `dividerLine={true}` on Header when right sidebar present
- Publish button: `positive` variant — "Publish"
- Save draft: `secondary` — "Save"
- Unsaved changes: `Note variant="warning"` below Header
- Discard: confirmation Modal before navigating away

---

## Settings Page

```
Header
  title: "[Feature] settings"
  actions: [optional "Save changes" primary]

Content
  |- Optional Tabs (if distinct categories)
  |- Sections with Heading separator
  |    |- FormControl fields
  |    |- Optional Note for context
  |- Danger zone (bottom, with negative Note)
       |- Destructive actions
```

**Rules:**

- Group under `Heading` / `SectionHeading` with `gray200` divider
- Danger zone always at very bottom, visually separated
- Destructive actions: `negative` Button -> confirmation Modal
- Inline save: `Notification.success` — don't navigate away

---

## Empty State

When a section has no content yet.

```
Centered container (vertical + horizontal)
  |- Icon: 48px, gray400, relevant to section (optional)
  |- Heading: "No [items] yet"
  |- Body: one sentence
  |- Action: Button primary or TextLink
```

**Heading formulas:**

- First-time: "No [content types] yet"
- No results: `No results for "[query]"`
- Permission: "You don't have access to [section]"

**Body formulas:**

- First-time: "[Section] lets you [purpose]. Start by [action]."
- No results: "Try a different search term or adjust filters."
- Error: "Something went wrong while loading [items]."

Never show empty state while data is loading — show Skeleton.

---

## Error State

```
Centered container
  |- Icon: WarningOctagonIcon, 48px, red600
  |- Heading: "Couldn't load [section]"
  |- Body: brief explanation + what user can do
  |- Actions: "Try again" (primary) + optional "Go back" (secondary)
```

**Rules:**

- "Couldn't load" not "Error 500" — humanize
- Always offer a recovery action
- Log technical details to console
- Partial failures: `Note variant="negative"` inline, not full-page error

---

## Confirmation Dialog (Destructive)

```
Modal size="small"
  Header: "[Delete/Remove/Archive] [item type]"
  Content: "This will permanently [consequence]. This cannot be undone."
  Controls:
    Button negative: "[Delete/Remove/Archive] [item type]"
    Button secondary: "Never mind"
```

**Rules:**

- Title and confirm button always match: same verb + noun
- Confirm: `negative` variant
- Cancel: "Never mind" — never "Cancel", "No", "Go back"
- `shouldCloseOnOverlayClick={false}`
- Confirm shows `isLoading` while in flight

---

## Multi-Step Flow / Wizard

```
Layout variant="narrow" or Modal size="large"/"fullscreen"
  |- Step indicator: "Step 2 of 4"
  |- Header: step title
  |- Content: step-specific form
  |- Footer:
       Left: "Back" (secondary, hidden on step 1)
       Right: "Continue" (primary) or "Finish" (positive, last step)
```

**Rules:**

- "Back" on left, "Continue" on right
- Final step: `positive` variant — "Create [thing]" or "Finish setup"
- Show progress indicator — never leave users guessing
- Validate before "Continue" — inline ValidationMessage, not blocking alert
- Allow exiting — show discard confirmation if data entered

---

## Dashboard / Overview

```
Header
  title: "Overview" or space name
  actions: optional CTA

Content
  |- Row of metric Cards (3-4 columns)
  |- Recent activity list or EntityList
  |- Quick action Cards
```

**Rules:**

- Metric cards: equal width, `padding="default"`
- Max 4 cards per row
- Recent activity: 5-10 items, link to full list
- Loading: `Skeleton.Container` with `Skeleton.BodyText` per card
- Empty state per section independently

---

## Form Page (Standalone)

```
Layout variant="narrow"
  Header: form title
  Content:
    Stack of FormControl (spacing="spacingM")
    Optional Note for context
    Optional Accordion for advanced sections
  Footer:
    Button primary: "Save" or "Submit"
    Optional Button secondary: "Cancel"
```

**Rules:**

- Use `Layout variant="narrow"` — never full width
- Group related fields under Heading
- `isRequired` on FormControl for required fields
- Validate inline, on blur or submit
- On success: `Notification.success` + navigate to result

---

## Navigation Hierarchy

| Level                          | Pattern                              |
| ------------------------------ | ------------------------------------ |
| Top-level sections             | Left sidebar sections                |
| Sub-sections within a section  | Tabs in the content area             |
| Drill-down to a single item    | Header with Breadcrumb + back button |
| Related views on a single item | Tabs in the detail page content area |

**Never use modals as navigation.** A modal should complete a task, not replace a page.
**Never use Tabs at the sidebar level** — sidebar items navigate between sections, not tabs.
