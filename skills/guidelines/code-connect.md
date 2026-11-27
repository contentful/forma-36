# Figma Code Connect

Forma 36 components are connected to their Figma design components via Code Connect. When a Figma URL is provided, the MCP `get_design_context` tool returns Code Connect snippets that map Figma variant properties directly to React props.

## How to use Code Connect in your workflow

1. **Figma URL provided** — Call `get_design_context` with the `fileKey` and `nodeId` extracted from the URL
2. **Read the snippets** — The response includes Code Connect snippets showing the exact import and prop mapping for each recognized component
3. **Trust the snippet** — Code Connect mappings use the verified Figma property names (e.g., "Type" not "Variant"). The snippet gives you the correct React code.
4. **Fill in the gaps** — Code Connect covers variant props but not event handlers, children content, or complex composition. Use `guidelines/components/` for those.

## Figma files

| File                                                                                           | Key                      | Connected     |
| ---------------------------------------------------------------------------------------------- | ------------------------ | ------------- |
| [Forma 36 Components](https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components) | `BDteZSphg3YPJTMlABQozc` | 48 components |
| [Forma 36 Assets (Icons)](https://www.figma.com/design/ILoICAP1fxyvE7xmpWiJBi/Forma-36-Assets) | `ILoICAP1fxyvE7xmpWiJBi` | 239 icons     |

## Important: Figma property names differ from React prop names

Figma uses its own property names in the component panel. These are **case-sensitive** and often differ from what you'd expect. The most common gotcha:

- Figma calls the variant selector **"Type"** — not "Variant"
- Figma uses values like **"Small (default)"** — not just "Small"
- Figma uses **"Text"** for tooltip content — not "Content"

The table below shows the exact Figma property names for each component. Use these when writing `.figma.tsx` Code Connect files or when debugging why a mapping isn't working.

---

## Component Code Connect Reference

All components import from `@contentful/f36-components`.

### Buttons & Actions

| Component        | Figma prop | Values                                                          | React prop  |
| ---------------- | ---------- | --------------------------------------------------------------- | ----------- |
| **Button**       | `Type`     | Primary, Secondary, Positive, Negative, Transparent             | `variant`   |
|                  | `Size`     | Small (default), Medium                                         | `size`      |
|                  | `Loading`  | boolean                                                         | `isLoading` |
| **IconButton**   | `Type`     | Primary, Secondary, Positive, Negative, Transparent             | `variant`   |
|                  | `Size`     | Small (default), Medium                                         | `size`      |
| **TextLink**     | `Type`     | Primary, Secondary, Positive, Negative, White, Muted, Highlight | `variant`   |
|                  | `Label`    | string                                                          | `children`  |
| **CopyButton**   | `Size`     | Small, Medium                                                   | `size`      |
| **ToggleButton** | `Size`     | Small (default), Medium                                         | `size`      |
|                  | `Label`    | string                                                          | `children`  |

Note: TextLink's Figma value "Highlight" maps to React `variant="premium"`.

### Forms

| Component        | Figma prop       | Values                       | React prop   |
| ---------------- | ---------------- | ---------------------------- | ------------ |
| **TextInput**    | `Size`           | Medium, Small                | `size`       |
|                  | `Disabled`       | True, False                  | `isDisabled` |
|                  | `Invalid`        | True, False                  | `isInvalid`  |
| **Textarea**     | `Disabled`       | True, False                  | `isDisabled` |
|                  | `Invalid`        | True, False                  | `isInvalid`  |
| **Select**       | `Size`           | Medium, Small                | `size`       |
|                  | `State`          | Disabled (only mapped value) | `isDisabled` |
|                  | `Invalid`        | True                         | `isInvalid`  |
| **Checkbox**     | `Checked`        | boolean                      | `isChecked`  |
|                  | `Help text`      | string                       | `helpText`   |
| **Radio**        | _(example-only)_ |                              |              |
| **Switch**       | `Size`           | Medium, Small                | `size`       |
|                  | `Checked`        | True, False                  | `isChecked`  |
|                  | `Disabled`       | True, False                  | `isDisabled` |
| **Autocomplete** | _(example-only)_ |                              |              |
| **Multiselect**  | _(example-only)_ |                              |              |
| **Datepicker**   | _(example-only)_ |                              |              |

### Feedback & Status

| Component             | Figma prop       | Values                                                                    | React prop         |
| --------------------- | ---------------- | ------------------------------------------------------------------------- | ------------------ |
| **Badge**             | `Type`           | Primary, Primary filled, Positive, Negative, Warning, Secondary, Featured | `variant`          |
|                       | `Size`           | Medium, Small                                                             | `size`             |
| **EntityStatusBadge** | `Status`         | Draft, New, Changed, Published, Archived, Deleted                         | `entityStatus`     |
|                       | `Size`           | Default, Small                                                            | `size`             |
| **Note**              | `Type`           | Neutral, Primary, Positive, Warning, Negative                             | `variant`          |
|                       | `Close button`   | boolean                                                                   | `withCloseButton`  |
| **Notification**      | `Type`           | Success, Error, Warning                                                   | _(imperative API)_ |
| **Spinner**           | _(example-only)_ |                                                                           |                    |

### Navigation & Overlays

| Component           | Figma prop       | Values                                | React prop  |
| ------------------- | ---------------- | ------------------------------------- | ----------- |
| **Modal**           | `Size`           | Small, Medium, Large, Full width, Zen | `size`      |
| **Tabs**            | _(example-only)_ |                                       |             |
| **Tooltip**         | `Placement`      | Top, Right, Bottom, Left              | `placement` |
|                     | `Text`           | string                                | `content`   |
| **Menu** (MenuItem) | _(example-only)_ |                                       |             |
| **NavList**         | _(example-only)_ |                                       |             |
| **Popover**         | _(example-only)_ |                                       |             |

### Data Display

| Component           | Figma prop       | Values                              | React prop    |
| ------------------- | ---------------- | ----------------------------------- | ------------- |
| **Accordion**       | _(example-only)_ |                                     |               |
| **Card**            | `Margins`        | None, Default, Large                | `padding`     |
| **AssetCard**       | `Size`           | Small, Default                      | `size`        |
| **EntryCard**       | _(example-only)_ |                                     |               |
| **InlineEntryCard** | `Status`         | Draft, Published, Changed, Archived | `status`      |
| **EntityList**      | _(example-only)_ |                                     |               |
| **Pagination**      | _(example-only)_ |                                     |               |
| **Skeleton**        | _(example-only)_ |                                     |               |
| **ProgressStepper** | `Orientation`    | Horizontal, Vertical                | `orientation` |
|                     | `Step style`     | Icons, Numbers                      | `stepStyle`   |
| **Calendar**        | _(example-only)_ |                                     |               |

### Content & Media

| Component       | Figma prop       | Values                             | React prop  |
| --------------- | ---------------- | ---------------------------------- | ----------- |
| **Avatar**      | `Type`           | User, App                          | `variant`   |
|                 | `Size`           | Tiny, Small, Medium, Large         | `size`      |
| **AvatarGroup** | `Style`          | Stack, Grid                        | _(variant)_ |
|                 | `Size`           | Small, Medium                      | `size`      |
| **Asset**       | _(example-only)_ |                                    |             |
| **UsageCard**   | `Type`           | Usage, Info                        | `variant`   |
| **UsageCount**  | `Type`           | Consumption, Periodic, Entitlement | `variant`   |

### Layout & Utility

| Component      | Figma prop       | Values                | React prop           |
| -------------- | ---------------- | --------------------- | -------------------- |
| **Header**     | _(example-only)_ |                       |                      |
| **Navbar**     | _(example-only)_ |                       |                      |
| **DragHandle** | _(example-only)_ |                       |                      |
| **Pill**       | `Type`           | Idle, Active, Deleted | `variant`            |
|                | `Drag handle`    | boolean               | `isDraggable`        |
|                | `Close button`   | boolean               | `onClose` (presence) |

### Typography

| Component          | Figma prop       | Values                         | React prop    |
| ------------------ | ---------------- | ------------------------------ | ------------- |
| **Heading**        | `Truncated`      | boolean                        | `isTruncated` |
| **Subheading**     | `Truncated`      | boolean                        | `isTruncated` |
| **Paragraph**      | `Truncated`      | boolean                        | `isTruncated` |
| **DisplayText**    | `Font size`      | Large, Medium, Small (default) | `size`        |
| **SectionHeading** | _(example-only)_ |                                |               |
| **Caption**        | _(example-only)_ |                                |               |

---

## Icons Code Connect

All 239 connected icons follow the same pattern:

```tsx
import { ArrowDownIcon } from '@contentful/f36-icons';

// Figma prop: Size → tiny, small, medium
<ArrowDownIcon size={props.size} />;
```

Every icon component maps the Figma **"Size"** property:

- Medium → `"medium"`
- Small → `"small"`
- Tiny → `"tiny"`

Icons import from `@contentful/f36-icons`. The naming convention is PascalCase + `Icon` suffix (e.g., `ArrowDownIcon`, `MagnifyingGlassIcon`, `PlusIcon`).

---

## Components NOT connected

These components are not available as Code Connect mappings due to Figma structure limitations:

| Component       | Reason                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **ButtonGroup** | Figma node is an INSTANCE, not a COMPONENT_SET                                                                         |
| **FormControl** | No single component_set in Figma — it's a composition pattern with sub-components (Label, HelpText, ValidationMessage) |
| **Radio**       | `.RadioInput` is a private frame (dot-prefixed), not a published COMPONENT_SET                                         |
| **Textarea**    | `.TextareaField` is a private frame (dot-prefixed), not a published COMPONENT_SET                                      |

For these, use the component reference in `guidelines/components/` directly.

---

## Writing new Code Connect mappings

If you need to create a new `.figma.tsx` mapping file, use this pattern:

```tsx
import figma from '@figma/code-connect';
import { ComponentName } from '@contentful/f36-components';

figma.connect(
  ComponentName,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=XXXX-YYYY',
  {
    props: {
      variant: figma.enum('Type', {
        // Use exact Figma property name
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      size: figma.enum('Size', {
        'Small (default)': 'small', // Include full Figma value text
        Medium: 'medium',
      }),
      isDisabled: figma.boolean('Disabled'),
      label: figma.string('Label'),
    },
    example: (props) => (
      <ComponentName variant={props.variant} size={props.size}>
        {props.label}
      </ComponentName>
    ),
  },
);
```

**Rules for writing mappings:**

- Always use `get_code_connect_suggestions` MCP tool to inspect actual Figma property names before writing
- Figma property names are case-sensitive — "Type" not "type"
- Include the full Figma value text: "Small (default)" not "Small"
- The node URL must point to a COMPONENT_SET or COMPONENT node, not an INSTANCE or CANVAS
- Use the `figma-code-connect-components` skill for the full mapping workflow

---

## Figma Plugin API patterns for Forma 36

### Variable binding (Path D — code to Figma)

When creating Figma designs from code, bind design tokens to Figma variables instead of hardcoding values. Use `setBoundVariable` for non-paint properties and `setBoundVariableForPaint` for fills/strokes.

```js
// 1. Find the variable by name from existing collections
const collections = await figma.variables.getLocalVariableCollectionsAsync();
const tokenCollection = collections.find((c) => c.name === 'Tokens');
const allVarIds = tokenCollection.variableIds;

// Helper: find a variable by name
async function findVar(name) {
  for (const id of allVarIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (v.name === name || v.name.endsWith('/' + name)) return v;
  }
  return null;
}

// 2. Bind spacing (GAP, PADDING, etc.)
const spacingM = await findVar('spacingM');
if (spacingM) {
  frame.setBoundVariable('itemSpacing', spacingM);
  frame.setBoundVariable('paddingTop', spacingM);
  frame.setBoundVariable('paddingBottom', spacingM);
}

// 3. Bind colors (fills/strokes) — returns a NEW paint, must reassign
const blue600 = await findVar('blue600');
if (blue600) {
  const fills = [...node.fills];
  const newPaint = figma.variables.setBoundVariableForPaint(
    fills[0],
    'color',
    blue600,
  );
  node.fills = [newPaint]; // Must reassign — paint is immutable
}
```

### Read-then-write pattern (Path E — edit existing Figma)

Always read current state and log values BEFORE overwriting. This enables rollback and makes edits auditable.

```js
// Step 1: Read current state and return it
const node = await figma.getNodeByIdAsync('1234:5678');
const currentProps = node.type === 'INSTANCE' ? node.componentProperties : {};
const currentText = node.type === 'TEXT' ? node.characters : null;

return {
  nodeId: node.id,
  type: node.type,
  name: node.name,
  before: { componentProperties: currentProps, text: currentText },
};

// Step 2 (separate use_figma call): Apply edits using the values from Step 1
// Step 3: Call get_screenshot MCP tool to verify — MANDATORY after every significant edit
```

### Screenshot verification (Path E — edit existing Figma)

After making edits, verify the result visually. This is a **separate MCP tool call**, not Plugin API code.

**After every `use_figma` edit script, immediately call:**

```
get_screenshot({ nodeId: "1234:5678", fileKey: "abc123" })
```

Check the screenshot for:

- Text not clipped or overlapping
- Colors match expected tokens
- Layout spacing looks correct
- Component variants show the right state

This catches visual regressions that code inspection alone cannot detect. Always verify after: swapping component variants, changing auto-layout settings, updating text content, or modifying fills/strokes. **Do not skip this step.**
