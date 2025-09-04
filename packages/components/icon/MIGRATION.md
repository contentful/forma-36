# Migration Guideline Icon from v4.X.X to v5.X.X

The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

## Run the migration script

We provide an automated migration script to help you update all existing Forma 36 icons to use the new props and the updated icon set based on Phosphor icons.

```bash
npx @contentful/f36-codemod
```

## Icon Props

| Property Name | Type                                      | Description                                                                                                                                                                      | Status    |
| ------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `size`        | `IconSize`                                | Supports three sizes `medium` (`20px x 20px`), `small` (`16px x 16px`), and `tiny` (`14px x 14px`). No longer supported are `xlarge` (`48px x 48px`) and `large` (`32px x 32px`) | updated   |
| `trimmed`     | `boolean`                                 |                                                                                                                                                                                  | removed   |
| `variant`     | `IconVariant`                             |                                                                                                                                                                                  | removed   |
| `color`       | `string`                                  | Allows setting the icon color directly via a string value.                                                                                                                       | new       |
| `isActive`    | `boolean`                                 | Indicates whether the icon is in an active state.                                                                                                                                | new       |
| `viewBox`     | `SVGAttributes<SVGSVGElement>['viewBox']` | Allows custom SVG viewBox.                                                                                                                                                       | unchanged |
| `children`    | `ReactElement \| ReactElement[]`          |                                                                                                                                                                                  | unchanged |

### Code Example

#### Before

```tsx static=true
import { Icon } from '@contentful/f36-icons';
import { ArchiveIcon } from '@contentful/f36-icons';

const AccessAlarm = (props) => {
  return <Icon {...props} as={ArchiveIcon} variant="secondary" />;
};
```

#### After

```tsx static=true
import { Icon } from '@contentful/f36-icon';
import { FileArchiveIcon } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

const AccessAlarm = (props) => {
  return (
    <Icon
      {...props}
      as={FileArchiveIcon}
      color={tokens.colorPositive}
      isActive
    />
  );
};
```

## Icon Component Names

| v4 Component Name       | v5 Component Name      |
| ----------------------- | ---------------------- |
| AppIcon                 | PuzzleIcon             |
| ApisIcon                | CloudArrowUpDownIcon   |
| AppearanceIcon          | CircleHalfIcon         |
| ArchiveIcon             | FileArchiveIcon        |
| ArrowBackwardIcon       | ArrowLeftIcon          |
| ArrowDownIcon           | CaretDownIcon          |
| ArrowDownwardIcon       | ArrowDownIcon          |
| ArrowForwardIcon        | ArrowRightIcon         |
| ArrowUpIcon             | CaretUpIcon            |
| ArrowUpwardIcon         | ArrowUpIcon            |
| AssetIcon               | ImageSquareIcon        |
| AudioIcon               | FileAudioIcon          |
| BillingIcon             | ReceiptIcon            |
| CalendarIcon            | CalendarBlankIcon      |
| ChatBubbleIcon          | ChatIcon               |
| CheckCircleIcon         | CheckCircleIcon        |
| ChevronDownIcon         | CaretDownIcon          |
| ChevronLeftIcon         | CaretLeftIcon          |
| ChevronRightIcon        | CaretRightIcon         |
| ChevronUpIcon           | CaretUpIcon            |
| ClockIcon               | ClockIcon              |
| CloseIcon               | XIcon                  |
| CloudUploadIcon         | CloudArrowUpIcon       |
| CodeIcon                | CodeSimpleIcon         |
| CodeIllustrationIcon    | BracketsCurlyIcon      |
| ContentIcon             | PenNibIcon             |
| ContentModelIcon        | WrenchIcon             |
| CopyIcon                | CopySimpleIcon         |
| CycleIcon               | RepeatIcon             |
| DeleteIcon              | TrashSimpleIcon        |
| DiamondIcon             | SketchLogoIcon         |
| DoneIcon                | CheckIcon              |
| DoubleArrowIcon         | CaretUpDownIcon        |
| DownloadIcon            | DownloadSimpleIcon     |
| DragIcon                | DotsSixVerticalIcon    |
| EditIcon                | PencilSimpleIcon       |
| EmbeddedEntryBlockIcon  | EmbeddedBlockIcon      |
| EmbeddedEntryInlineIcon | EmbeddedLineIcon       |
| EntryIcon               | EntryIcon              |
| EnvironmentIcon         | EnvironmentIcon        |
| EnvironmentAliasIcon    | EnvironmentAliasIcon   |
| ErrorCircleIcon         | WarningOctagonIcon     |
| ErrorCircleOutlineIcon  | WarningOctagonIcon     |
| ExternalLinkIcon        | ArrowSquareOutIcon     |
| FaceHappyIcon           | SmileyIcon             |
| FilterIcon              | FunnelSimpleIcon       |
| FolderIcon              | FolderSimpleIcon       |
| FolderCreateIcon        | FolderSimplePlusIcon   |
| FolderOpenIcon          | FolderOpenIcon         |
| FormatBoldIcon          | TextBIcon              |
| FormatItalicIcon        | TextItalicIcon         |
| FormatUnderlinedIcon    | TextUnderlineIcon      |
| GiftIcon                | GiftIcon               |
| HeadingIcon             | TextHIcon              |
| HeadingOneIcon          | TextHOneIcon           |
| HeadingTwoIcon          | TextHTwoIcon           |
| HelpCircleIcon          | InfoIcon               |
| HelpCircleInvertedIcon  | InfoIcon               |
| HomeIcon                | HouseIcon              |
| HorizontalRuleIcon      | MinusIcon              |
| ImageIcon               | ImageSquareIcon        |
| InfoCircleIcon          | InfoIcon               |
| LanguageIcon            | GlobeIcon              |
| LinkIcon                | LinkSimpleIcon         |
| LinkAlternateIcon       | LinkSimpleIcon         |
| ListBulletedIcon        | ListBulletsIcon        |
| ListNumberedIcon        | ListNumbersIcon        |
| LockIcon                | LockSimpleIcon         |
| LooksOneIcon            | NumberOneIcon          |
| LooksTwoIcon            | NumberTwoIcon          |
| LogoutIcon              | SignOutIcon            |
| MarkupIcon              | FileCodeIcon           |
| MediaIcon               | FileImageIcon          |
| MenuIcon                | ListIcon               |
| MinusIcon               | MinusIcon              |
| MoreHorizontalIcon      | DotsThreeIcon          |
| MoreVerticalIcon        | DotsThreeVerticalIcon  |
| OauthIcon               | FingerprintIcon        |
| OrginfoIcon             | BuldingIcon            |
| OrganizationsIcon       | BuildingIcon           |
| PageIcon                | FileIcon               |
| PdfIcon                 | FilePdfIcon            |
| PaintBrushIcon          | PaintBrushIcon         |
| PersonIcon              | UserIcon               |
| PlaintextIcon           | FileTextIcon           |
| PlusIcon                | PlusIcon               |
| PlusCircleIcon          | PlusIcon               |
| PresentationIcon        | PresentationIcon       |
| PreviewIcon             | EyeIcon                |
| PreviewOffIcon          | EyeClosedIcon          |
| PurchaseIcon            | ShoppingCartSimpleIcon |
| PuzzleIcon              | PuzzlePieceIcon        |
| QuoteIcon               | QuotesIcon             |
| ReceiptIcon             | ReceiptIcon            |
| ReferencesIcon          | SwapIcon               |
| ReleaseIcon             | ReleaseIcon            |
| RichtextIcon            | RichTextIcon           |
| SearchIcon              | MagnifyingGlassIcon    |
| SettingsIcon            | GearSixIcon            |
| ShoppingCartIcon        | ShoppingCartSimpleIcon |
| SortIcon                | CaretUpDownIcon        |
| SortAscendingIcon       | SortAscendingIcon      |
| SortDescendingIcon      | SortDescendingIcon     |
| SpacesIcon              | CubeIcon               |
| SpreadsheetIcon         | TableIcon              |
| SsoIcon                 | KeyholeIcon            |
| StarIcon                | StarIcon               |
| SubscriptIcon           | TextSubscriptIcon      |
| SubscriptionIcon        | ShoppingCartSimpleIcon |
| SuperscriptIcon         | TextSuperscriptIcon    |
| TabIcon                 | TabsIcon               |
| TableIcon               | TableIcon              |
| TagsIcon                | TagIcon                |
| TeamsIcon               | UsersThreeIcon         |
| TextIcon                | TextTIcon              |
| ThumbDownIcon           | ThumbsDownIcon         |
| ThumbUpIcon             | ThumbsUpIcon           |
| ToggleIcon              | ArrowsLeftRightIcon    |
| TokenIcon               | KeyIcon                |
| TriangleOutlineIcon     | TriangleIcon           |
| UsersIcon               | UsersIcon              |
| UserProfileIcon         | UserIcon               |
| UsageIcon               | GaugeIcon              |
| VideoIcon               | FileVideoIcon          |
| WarningIcon             | WarningIcon            |
| WorkflowsIcon           | WorkflowsIcon          |
