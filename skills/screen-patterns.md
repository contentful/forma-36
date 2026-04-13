# Forma 36 — Screen Patterns

Named, reusable patterns for the most common Contentful UI screens. When a design calls for one of these, use this as the structural template — not a blank canvas.

---

## 1. List / Index Page

The most common pattern in Contentful. A collection of items (entries, content types, assets, apps) with filtering and primary action.

```
Header
  title: "Experiences"
  actions: [secondary button, primary button]
  filters: [search input, optional filter selects]

Content area
  ├── Bulk action bar (appears when items are selected)
  ├── Table or EntityList
  │     rows: [thumbnail?, title, metadata columns, status badge, actions menu]
  └── Pagination
```

**Rules:**
- Primary action ("Create experience") is always top-right in the Header
- Empty state shows when no items exist OR when search returns no results (different messages for each)
- Row actions via `Menu` with `IconButton` trigger (MoreHorizontal icon) — not inline buttons
- Status column uses `EntityStatusBadge`
- Bulk selection: checkbox column left, bulk action bar appears above table
- Loading state: show `Skeleton.Row` inside the table body

**Empty state (no items):**
- Heading: "No [items] yet"
- Body: one sentence describing the purpose of this section
- Action: primary button to create the first item

**Empty state (filtered, no results):**
- Heading: "No results for "[query]""
- Body: "Try a different search term or clear filters."
- Action: TextLink "Clear filters"

---

## 2. Detail / Edit Page

A single entity being viewed or edited. Common for entries, content types, experience editors.

```
Header
  title: entry name (or "Untitled" if new)
  breadcrumbs: [parent section]
  actions: [secondary actions menu, "Save" or "Publish" primary]

Content area (two-column when sidebar present)
  ├── Main content area (fields, editor, canvas)
  └── Right sidebar: status, metadata, publish controls, linked entries
```

**Rules:**
- `dividerLine={true}` on Header when right sidebar is present
- Status in sidebar uses `EntityStatusBadge`
- Publish button is `positive` variant — "Publish"
- Save draft is `secondary` — "Save"
- Unsaved changes: show a `Note variant="warning"` below the Header, not a blocking modal
- Discard changes: show a confirmation Modal before navigating away

---

## 3. Settings Page

Configuration of a feature, app, or space setting.

```
Header
  title: "[Feature] settings"
  actions: [optional "Save changes" primary button]

Content area
  ├── Optional: Tabs (if settings have distinct categories)
  ├── Sections with Heading separator
  │     ├── FormControl fields
  │     └── Optional Note for context
  └── Danger zone section (at bottom, with negative Note)
        └── Destructive actions (delete, reset, disable)
```

**Rules:**
- Group related settings under a `Heading` or `SectionHeading` with a `gray/200` divider
- Danger zone (destructive actions) always goes at the very bottom, separated visually
- Destructive actions in danger zone: `negative` variant `Button`, always trigger a confirmation Modal
- Inline save: show `Notification.success` after saving — don't navigate away
- Auto-save: show a subtle "Saving…" Spinner + "Saved" text near the field or in a status area

---

## 4. Empty State

Used when a section has no content yet — first-time experience, no search results, or after clearing filters.

```
Centered container (vertical + horizontal center of content area)
  ├── Icon (optional): 48px, gray/400, relevant to the section
  ├── Heading: "No [items] yet"
  ├── Body: one sentence describing purpose or next step
  └── Primary action: Button variant="primary" or TextLink
```

**Heading formulas:**
- First-time: "No [content types] yet"
- No search results: `No results for "[query]"`
- Permission-restricted: "You don't have access to [section]"

**Body formulas:**
- First-time: "[Section] lets you [what it does]. Start by [first action]."
- No results: "Try a different search term or [adjust filters]."
- Error: "Something went wrong while loading [items]. [Retry link]."

**Rules:**
- Never show an empty state while data is still loading — show Skeleton instead
- Never show a generic "No data" — always be specific about what's missing and what to do
- Keep body copy to one sentence
- Only one action in an empty state — the most obvious next step

---

## 5. Error State

When a page or section fails to load or an operation fails unrecoverably.

```
Centered container
  ├── Icon: WarningIcon or CloseCircleIcon, 48px, red/600
  ├── Heading: "Couldn't load [section]"
  ├── Body: brief explanation + what the user can do
  └── Actions: "Try again" (primary) + optional "Go back" (secondary)
```

**Rules:**
- "Couldn't load" not "Error 500" or technical codes — humanize
- Always offer a clear recovery action ("Try again", "Go back", "Contact support")
- Log technical details to console; show human language in the UI
- For partial failures (one section fails, rest loads): use `Note variant="negative"` inline, not a full-page error

---

## 6. Confirmation Dialog (Destructive Action)

Triggered before any irreversible action.

```
Modal size="small"
  Header: "[Delete/Remove/Archive] [item type]"
  Content:
    Paragraph: "This will permanently [consequence]. This cannot be undone."
    Optional: list of what will be affected
  Controls:
    Button variant="negative": "[Delete/Remove/Archive] [item type]"
    Button variant="secondary": "Never mind"
```

**Rules:**
- Title and confirm button always match: same verb + noun
- Confirm button is `negative` variant — always
- Cancel is always "Never mind" — never "Cancel", "No", or "Go back"
- Body: state the consequence specifically — never vague ("This action cannot be undone")
- `shouldCloseOnOverlayClick={false}` for destructive modals — user must make an explicit choice
- Confirm button shows `isLoading` while the action is in flight

---

## 7. Multi-Step Flow / Wizard

Onboarding, content type creation, or any guided multi-step process.

```
Layout variant="narrow" or Modal size="large" / "fullscreen"
  ├── Step indicator (top, horizontal) — "Step 2 of 4"
  ├── Header: step title
  ├── Content: step-specific form or information
  └── Footer controls:
        ├── Left: "Back" (secondary, or hidden on step 1)
        └── Right: "Continue" (primary) or "Finish" (positive, last step)
```

**Rules:**
- "Back" on left, "Continue" on right — never reversed
- Final step confirm button: `positive` variant — "Create [thing]" or "Finish setup"
- Show a progress indicator (step count or progress bar) — never leave users wondering how long the flow is
- Validate before allowing "Continue" — show `ValidationMessage` inline, not a blocking alert
- Allow exiting the flow — show discard confirmation if data has been entered

---

## 8. Dashboard / Overview Page

High-level summary of a space or feature — metrics, recent activity, quick actions.

```
Header
  title: "Overview" or space/project name
  actions: optional primary CTA

Content area
  ├── Row of metric Cards (3–4 columns)
  ├── Recent activity list or EntityList
  └── Quick action Cards or links
```

**Rules:**
- Cards in metric rows: equal width, consistent padding `default`
- No more than 4 metric cards in a row before wrapping or reorganizing into a different layout
- "Recent activity" shows last 5–10 items — link to full list
- Loading: show `Skeleton.Container` per card, not a full-page spinner
- Empty state per section independently — not one global empty state for the whole dashboard

---

## 9. Form Page (Standalone)

A dedicated page for a single form — app configuration, user preferences, invite flow.

```
Layout variant="narrow"
  Header: form title
  Content:
    Stack of FormControl fields (spacing="spacingM")
    Optional: Note for context or instructions
    Optional: Accordion for advanced/optional sections
  Footer or inline:
    Button variant="primary": "Save" or "Submit"
    Optional Button variant="secondary": "Cancel" (navigates back)
```

**Rules:**
- Use `Layout variant="narrow"` to keep forms readable — never stretch a form to full width
- Group related fields under a `Heading` — don't list 15 fields in one undifferentiated block
- Required fields: mark with `isRequired` on `FormControl` — the asterisk appears automatically
- Validation: inline, on blur or on submit — never a separate error summary page
- On success: `Notification.success` + navigate to the result, or stay on form with a success state

---

## Navigation Hierarchy

When building multi-level navigation:

| Level | Pattern |
|---|---|
| Top-level sections | Left sidebar `M1NavigationSidebarMain` sections |
| Sub-sections within a section | Tabs in the content area |
| Drill-down to a single item | Header with Breadcrumb + back button |
| Related views on a single item | Tabs in the detail page content area |

**Never use modals as navigation.** A modal should complete a task, not replace a page.
**Never use Tabs at the sidebar level** — sidebar items navigate between sections, not tabs.
