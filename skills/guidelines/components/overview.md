# Components

All components import from `@contentful/f36-components` unless noted otherwise.

```tsx
import {
  Button,
  Stack,
  FormControl,
  TextInput,
} from '@contentful/f36-components';
```

## Choosing a component

**I need to arrange items on screen:**

- Toolbar / inline group with uniform gap -> `Stack`
- Complex alignment (space-between, mixed sizes) -> `Flex`
- Two-dimensional grid -> `Grid`
- Full page shell with header/sidebar -> `Layout`
- Just padding/margin -> `Box`

**I need user input:**

- Short free text -> `TextInput`
- Long free text -> `Textarea`
- Pick one from <=8 options -> `Select`
- Pick one from >8 options -> `Autocomplete`
- Toggle a setting -> `Switch` (immediate effect) or `Checkbox` (requires save)
- Pick one from a mutually exclusive group -> `Radio.Group`
- Pick multiple from a list -> `Multiselect`
- Pick a date -> `DatePicker`

**I need to trigger an action:**

- Primary page action -> `Button variant="primary"` (one per section max)
- Supporting action -> `Button variant="secondary"`
- Constructive action (create, publish) -> `Button variant="positive"`
- Destructive action -> `Button variant="negative"`
- Icon-only action -> `IconButton`
- Navigation -> `TextLink` (never `Button`)
- Action list from a trigger -> `Menu`

**I need to show feedback:**

- Temporary toast after action -> `Notification`
- Persistent inline context -> `Note`
- Status label -> `Badge` (or `EntityStatusBadge` for Contentful entities)
- Loading -> `Skeleton` (data fetch) or `Spinner` (full area)

**I need navigation/overlays:**

- Sidebar navigation -> `NavList`
- Content sections -> `Tabs` (max 6)
- Workflow-blocking confirmation -> `Modal`
- Supplementary hover context -> `Tooltip`

## Component files

| File               | Components covered                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `layout.md`        | Box, Flex, Stack, Grid, Layout                                                                                      |
| `buttons.md`       | Button, IconButton, TextLink, CopyButton                                                                            |
| `forms.md`         | FormControl, TextInput, Textarea, Select, Autocomplete, Multiselect, Checkbox, Radio, Switch, DatePicker            |
| `feedback.md`      | Notification, Note, Badge, EntityStatusBadge, Spinner                                                               |
| `navigation.md`    | Tabs, Modal, Menu, Tooltip, Popover, NavList                                                                        |
| `data-display.md`  | Table, Card, EntityList, Accordion, Collapse, Skeleton, Pagination, List, ProgressStepper                           |
| `content-media.md` | Asset, Avatar, Image, DateTime, UsageCard                                                                           |
| `utility.md`       | DragHandle, Pill, Typography components (DisplayText, Heading, Subheading, SectionHeading, Paragraph, Text), Header |
