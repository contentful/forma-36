# Navigation & Overlays

## Tabs

Navigate between sections of related content. Maximum 6 tabs.

```tsx
<Tabs defaultTab="content">
  <Tabs.List>
    <Tabs.Tab panelId="content">Content</Tabs.Tab>
    <Tabs.Tab panelId="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="content">...</Tabs.Panel>
  <Tabs.Panel id="settings">...</Tabs.Panel>
</Tabs>
```

| Prop | Notes |
|---|---|
| `defaultTab` | Initial active tab ID |
| `currentTab` / `onTabChange` | Controlled mode |
| `Tabs.List variant` | `'default'` `'horizontal-divider'` `'vertical-divider'` |
| `Tabs.Panel forceMount` | Keep mounted (for form state, animation) |

Labels must be concise and describe the panel content accurately.

## Modal

Blocks the interface. Use only when:
- An action needs confirmation before proceeding
- Information is essential to the current workflow

```tsx
<Modal isShown={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header title="Delete content type" onClose={() => setIsOpen(false)} />
  <Modal.Content>
    <Paragraph>This content type and all its fields will be permanently deleted.</Paragraph>
  </Modal.Content>
  <Modal.Controls>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>Never mind</Button>
    <Button variant="negative" isLoading={deleting} onClick={handleDelete}>
      Delete content type
    </Button>
  </Modal.Controls>
</Modal>
```

| Prop | Notes |
|---|---|
| `size` | `'small'` `'medium'` `'large'` `'fullWidth'` `'fullscreen'` |
| `shouldCloseOnOverlayClick` | `false` for destructive modals |
| `shouldCloseOnEscapePress` | default `true` |
| `initialFocusRef` | Focus a specific element on open |

**Rules:**
- Title: verb + noun ("Delete content type")
- Confirm button: verb + noun, matching the title
- Cancel: "Never mind"
- Never use Modal for navigation or non-essential information
- Confirm button shows `isLoading` while action is in flight

## Menu

Action list triggered by a button.

```tsx
<Menu>
  <Menu.Trigger>
    <IconButton icon={<MoreHorizontalIcon />} aria-label="Actions" variant="secondary" />
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item onClick={handleEdit}>Edit</Menu.Item>
    <Menu.Item onClick={handleDuplicate}>Duplicate</Menu.Item>
    <Menu.Divider />
    <Menu.Item onClick={handleDelete}>Delete</Menu.Item>
  </Menu.List>
</Menu>
```

Use Menu for actions. Use Select for form value choices. Never mix them.

Sub-components: `Menu.Trigger`, `Menu.List`, `Menu.Item`, `Menu.Divider`, `Menu.SectionTitle`, `Menu.SubmenuTrigger`.

## Tooltip

Supplementary, non-critical context on hover/focus.

```tsx
<Tooltip content="Keyboard shortcut: Ctrl+S" id="save-tooltip">
  <Button variant="primary">Save</Button>
</Tooltip>
```

| Prop | Notes |
|---|---|
| `content` | Short text — one sentence max |
| `id` | Required for ARIA |
| `placement` | Positioning |
| `showDelay` | Default 375ms |
| `usePortal` | Use with `overflow: hidden` parents |

**Rules:**
- No buttons, links, or forms inside Tooltip content
- Content must be non-critical — if the user needs this info, put it in the UI
- Always include a unique `id`

## Popover

Low-level primitive. Use only when Menu/Autocomplete/Multiselect don't fit.

```tsx
<Popover isOpen={open} onClose={() => setOpen(false)}>
  <Popover.Trigger>
    <Button onClick={() => setOpen(true)}>Filter</Button>
  </Popover.Trigger>
  <Popover.Content>...</Popover.Content>
</Popover>
```

You must implement accessibility yourself with Popover.

## NavList

Vertical sidebar navigation.

```tsx
<NavList aria-label="Main navigation">
  <NavList.Item as="a" href="/experiences" isActive>Experiences</NavList.Item>
  <NavList.Item as="a" href="/content">Content</NavList.Item>
</NavList>
```

Items navigate only — do not use NavList items to trigger actions.
