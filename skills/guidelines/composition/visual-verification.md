# Visual Verification — Figma-to-Code Post-Flight

When translating a Figma design to code (Path C), the design context from `get_design_context` gives you component-level Code Connect snippets but often misses page-level structure. This verification loop ensures the generated code faithfully reproduces the source design.

---

## Why this is necessary

`get_design_context` returns a bag of component snippets, not a spatial layout description. It tells you "there's a Button with variant=primary" but not "there's a sidebar on the left with 3 nav groups and a divider between each." Common gaps:

- **Sidebar navigation** — presence, structure, active states, section groupings
- **Top navigation bar** — logo, nav items, space/environment pill, utility icons
- **Filter patterns** — chips vs dropdowns, filter bar composition, "+ Add filter" buttons
- **Table composition** — column count, avatar columns, icon prefixes on names, workflow badges
- **Data formatting** — absolute dates vs relative, "by Author" attribution patterns
- **Page chrome** — breadcrumbs, back buttons, action bar composition

The model fills these gaps with "plausible defaults" from training data, producing a reasonable but inaccurate page. Visual verification catches this.

---

## The verification loop

### Step 1: Screenshot the source design

Before or immediately after generating code, capture the Figma source:

```
get_screenshot(fileKey, nodeId)
```

Study this screenshot. Before writing any code, inventory every visible element:

- Is there a sidebar? What sections and items does it contain?
- Is there a top nav? What items are in it?
- How many table columns are there? What's in each?
- What filter controls are visible? Chips, dropdowns, search?
- Are there avatars, icons, or badges alongside content?

### Step 2: Generate the code

Write the React/Forma 36 code using the design context + Code Connect snippets + skill guidelines. Use the screenshot inventory from Step 1 to ensure you account for every element.

### Step 3: Render and screenshot the output

Start a local dev server (or use an existing one) and open the generated page:

```
# Start dev server if needed
npm run dev

# Navigate to the page
browser_navigate("http://localhost:5173/your-page")

# Wait for render
browser_wait_for("networkidle")

# Capture
browser_take_screenshot()
```

### Step 4: Compare screenshots

Place both screenshots side by side (the model sees both in context). Systematically check:

| Check               | What to look for                                          |
| ------------------- | --------------------------------------------------------- |
| **Navigation**      | Same sidebar? Same top bar? Same nav items and groupings? |
| **Layout**          | Same number of columns/sections? Sidebar width matches?   |
| **Table columns**   | Same column count, headers, and content in each?          |
| **Filters**         | Same filter controls in the same arrangement?             |
| **Icons & avatars** | Entry icons, user avatars, status icons all present?      |
| **Badges & status** | Same badge types, colors, and positions?                  |
| **Actions**         | Same buttons in header? Same row action menus?            |
| **Data format**     | Dates, attribution, counts formatted the same way?        |
| **Typography**      | Same heading levels, font weights, text colors?           |
| **Empty space**     | Any large gaps or missing sections?                       |

For each difference found, note the specific element and what needs to change.

### Step 5: Fix and re-verify

Update the code to address every difference. Then re-render, re-screenshot, and compare again. Stop when no meaningful differences remain.

---

## Typical findings by category

These are the most commonly missed elements, ordered by frequency:

1. **Sidebar navigation** — most often completely missing when the design context is truncated
2. **Top navigation bar** — logo, nav items, environment indicator
3. **Table column mismatch** — missing avatar/icon columns, missing workflow/metadata columns
4. **Filter chip bar** — replaced with dropdowns when the design uses filter chips
5. **Content type icons** — small icons next to entry names in list views
6. **Date formatting** — relative ("2 hours ago") when design shows absolute ("04 June 2024")
7. **Author attribution** — "Created by" with avatar vs plain text

---

## When to skip verification

- **Path A/B** (no Figma source) — there's no reference design to compare against
- **Small component snippets** — if translating a single component, not a full page
- **Iteration on a known-good base** — if you're making targeted edits to verified code
