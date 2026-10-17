# Icons

Forma 36 uses the **Phosphor** icon library exclusively.

```tsx
import {
  PlusIcon,
  MagnifyingGlassIcon,
  TrashSimpleIcon,
} from '@contentful/f36-icons';
```

## Styles

- **Regular** (outline, 2px stroke) — default state
- **Duotone** (filled, two-tone) — active/toggled state

Never use filled solid single-color icons. Never use icons from Material Icons, Heroicons, Feather, Lucide, or any other library.

## Sizing

Match icon size to the text it accompanies:

| Context                         | Size              | Pixels |
| ------------------------------- | ----------------- | ------ |
| Caption text, metadata          | `tiny`            | 14px   |
| Nav items, form fields, buttons | `small` (default) | 16px   |
| Body text, headings             | `medium`          | 20px   |

## Color

Match icon color to its semantic role:

| Role                    | Token                   |
| ----------------------- | ----------------------- |
| Default / neutral       | `gray900`               |
| Muted / decorative      | `gray600`               |
| Active / primary action | `blue600`               |
| On dark backgrounds     | `colorWhite`            |
| Success                 | `green600`              |
| Destructive / error     | `red600`                |
| Warning                 | `orange400`             |
| Premium / new feature   | `purple600` (sparingly) |

## Labels

Most icons need a visible text label. Icons may appear without labels only when:

- Universally understood (magnifying glass for search, question mark for help, gear for settings)
- In a consistent, expected position

When in doubt, add a label or tooltip. Icon-only buttons always need `aria-label`.

## Valid icon names — closed set

These are the most commonly used icons in `@contentful/f36-icons`. **Only use names from this list.** If you need an icon not listed here, check the [Phosphor icon set](https://phosphoricons.com/) and use the PascalCase + `Icon` suffix convention — but NEVER invent a name.

### Actions & Navigation

`PlusIcon` `MinusIcon` `MinusCircleIcon` `XIcon` `XSquareIcon` `MagnifyingGlassIcon` `FunnelSimpleIcon` `SortAscendingIcon` `SortDescendingIcon` `ArrowUpIcon` `ArrowDownIcon` `ArrowLeftIcon` `ArrowRightIcon` `ArrowsOutIcon` `ArrowSquareOutIcon` `ArrowClockwiseIcon` `ArrowCounterClockwiseIcon` `CaretDownIcon` `CaretUpIcon` `CaretLeftIcon` `CaretRightIcon` `CaretUpDownIcon` `LinkSimpleIcon` `LinkBreakIcon` `DownloadSimpleIcon` `SignInIcon` `SignOutIcon` `SwapIcon` `RepeatIcon`

### Content & Editing

`PencilSimpleIcon` `TrashSimpleIcon` `CopySimpleIcon` `FileIcon` `FileTextIcon` `FileImageIcon` `FileCodeIcon` `FolderSimpleIcon` `FolderOpenIcon` `FolderSimplePlusIcon` `ImageSquareIcon` `ImagesSquareIcon` `TextAlignLeftIcon` `TextAlignCenterIcon` `TextAlignRightIcon` `ListBulletsIcon` `ListNumbersIcon` `ListIcon` `CodeSimpleIcon` `CalendarBlankIcon` `CalendarDotsIcon` `ClockIcon` `TagIcon` `PaintBrushIcon` `PenNibIcon`

### Communication & Status

`ChatIcon` `EnvelopeIcon` `BellIcon` `CheckIcon` `CheckCircleIcon` `WarningIcon` `WarningOctagonIcon` `InfoIcon` `QuestionIcon` `EyeIcon` `EyeClosedIcon` `LockSimpleIcon` `LockSimpleOpenIcon` `KeyIcon` `KeyholeIcon` `FingerprintIcon`

### UI & System

`GearSixIcon` `DotsThreeIcon` `DotsThreeVerticalIcon` `DotsSixVerticalIcon` `GridFourIcon` `ColumnsIcon` `RowsIcon` `StarIcon` `HeartStraightIcon` `BookmarkSimpleIcon` `GlobeIcon` `GlobeXIcon` `HouseIcon` `UserIcon` `UsersIcon` `UsersThreeIcon` `LightningIcon` `RocketIcon` `RocketLaunchIcon` `LightbulbIcon` `FlaskIcon` `DiamondIcon` `CubeIcon` `TreeStructureIcon` `StackIcon` `WrenchIcon` `GaugeIcon`

### Content modeling & Contentful-specific (custom icons)

`EntryIcon` `EnvironmentIcon` `EnvironmentAliasIcon` `ReleaseIcon` `RichTextIcon` `EmbeddedBlockIcon` `EmbeddedLineIcon` `SparkleIcon` `SparkleFilledIcon` `DashboardIcon` `WorkflowsIcon` `InspectorModeIcon` `VariableIcon` `ReplaceIcon` `FallbackIcon`

### WRONG names — never use these

- ~~`MoreHorizontalIcon`~~ → use `DotsThreeIcon`
- ~~`MoreVerticalIcon`~~ → use `DotsThreeVerticalIcon`
- ~~`DeleteIcon`~~ → use `TrashSimpleIcon`
- ~~`EditIcon`~~ → use `PencilSimpleIcon`
- ~~`SettingsIcon`~~ → use `GearSixIcon`
- ~~`RefreshIcon`~~ → use `ArrowClockwiseIcon` or `RepeatIcon`
- ~~`MenuIcon`~~ → use `ListIcon`
- ~~`AlertIcon`~~ → use `WarningIcon`
- ~~`SearchIcon`~~ → use `MagnifyingGlassIcon`
- ~~`TrashIcon`~~ → use `TrashSimpleIcon`
- ~~`PencilIcon`~~ → use `PencilSimpleIcon`
- ~~`GearIcon`~~ → use `GearSixIcon`
- ~~`CopyIcon`~~ → use `CopySimpleIcon`
- ~~`FilterIcon`~~ → use `FunnelSimpleIcon`
- ~~`CloseIcon`~~ → use `XIcon`
- ~~`DownloadIcon`~~ → use `DownloadSimpleIcon`
- ~~`LinkIcon`~~ → use `LinkSimpleIcon`
- ~~`LockIcon`~~ → use `LockSimpleIcon`
- ~~`LockOpenIcon`~~ → use `LockSimpleOpenIcon`
- ~~`FolderIcon`~~ → use `FolderSimpleIcon`
- ~~`ImageIcon`~~ → use `ImageSquareIcon`
- ~~`CalendarIcon`~~ → use `CalendarBlankIcon`
- ~~`CodeIcon`~~ → use `CodeSimpleIcon`
- ~~`BookmarkIcon`~~ → use `BookmarkSimpleIcon`
- ~~`HeartIcon`~~ → use `HeartStraightIcon`
- ~~`EyeSlashIcon`~~ → use `EyeClosedIcon`
- ~~`ExternalLinkIcon`~~ → use `ArrowSquareOutIcon`
- ~~`HomeIcon`~~ → use `HouseIcon`
