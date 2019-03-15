import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { iconName } from './constants';

const ArrowDown = require('./svg/ArrowDown.svg');
const ArrowDownTrimmed = require('./svg/ArrowDownTrimmed.svg');
const ArrowUp = require('./svg/ArrowUp.svg');
const ArrowUpTrimmed = require('./svg/ArrowUpTrimmed.svg');
const Asset = require('./svg/Asset.svg');
const AssetTrimmed = require('./svg/AssetTrimmed.svg');
const ChatBubble = require('./svg/ChatBubble.svg');
const ChatBubbleTrimmed = require('./svg/ChatBubbleTrimmed.svg');
const CheckCircle = require('./svg/CheckCircle.svg');
const CheckCircleTrimmed = require('./svg/CheckCircleTrimmed.svg');
const ChevronDown = require('./svg/ChevronDown.svg');
const ChevronDownTrimmed = require('./svg/ChevronDownTrimmed.svg');
const ChevronLeft = require('./svg/ChevronLeft.svg');
const ChevronLeftTrimmed = require('./svg/ChevronLeftTrimmed.svg');
const ChevronRight = require('./svg/ChevronRight.svg');
const ChevronRightTrimmed = require('./svg/ChevronRightTrimmed.svg');
const ChevronUp = require('./svg/ChevronUp.svg');
const ChevronUpTrimmed = require('./svg/ChevronUpTrimmed.svg');
const Close = require('./svg/Close.svg');
const CloseTrimmed = require('./svg/CloseTrimmed.svg');
const Code = require('./svg/Code.svg');
const CodeTrimmed = require('./svg/CodeTrimmed.svg');
const Copy = require('./svg/Copy.svg');
const CopyTrimmed = require('./svg/CopyTrimmed.svg');
const Download = require('./svg/Download.svg');
const DownloadTrimmed = require('./svg/DownloadTrimmed.svg');
const Drag = require('./svg/Drag.svg');
const DragTrimmed = require('./svg/DragTrimmed.svg');
const Edit = require('./svg/Edit.svg');
const EditTrimmed = require('./svg/EditTrimmed.svg');
const EmbeddedEntryBlock = require('./svg/EmbeddedEntryBlock.svg');
const EmbeddedEntryBlockTrimmed = require('./svg/EmbeddedEntryBlockTrimmed.svg');
const EmbeddedEntryInline = require('./svg/EmbeddedEntryInline.svg');
const EmbeddedEntryInlineTrimmed = require('./svg/EmbeddedEntryInlineTrimmed.svg');
const Entry = require('./svg/Entry.svg');
const EntryTrimmed = require('./svg/EntryTrimmed.svg');
const ErrorCircle = require('./svg/ErrorCircle.svg');
const ErrorCircleTrimmed = require('./svg/ErrorCircleTrimmed.svg');
const ExternalLink = require('./svg/ExternalLink.svg');
const ExternalLinkTrimmed = require('./svg/ExternalLinkTrimmed.svg');
const FaceHappy = require('./svg/FaceHappy.svg');
const FaceHappyTrimmed = require('./svg/FaceHappyTrimmed.svg');
const Filter = require('./svg/Filter.svg');
const FilterTrimmed = require('./svg/FilterTrimmed.svg');
const Folder = require('./svg/Folder.svg');
const FolderCreate = require('./svg/FolderCreate.svg');
const FolderCreateTrimmed = require('./svg/FolderCreateTrimmed.svg');
const FolderOpen = require('./svg/FolderOpen.svg');
const FolderOpenTrimmed = require('./svg/FolderOpenTrimmed.svg');
const FolderTrimmed = require('./svg/FolderTrimmed.svg');
const FormatBold = require('./svg/FormatBold.svg');
const FormatBoldTrimmed = require('./svg/FormatBoldTrimmed.svg');
const FormatItalic = require('./svg/FormatItalic.svg');
const FormatItalicTrimmed = require('./svg/FormatItalicTrimmed.svg');
const FormatUnderlined = require('./svg/FormatUnderlined.svg');
const FormatUnderlinedTrimmed = require('./svg/FormatUnderlinedTrimmed.svg');
const Heading = require('./svg/Heading.svg');
const HeadingOne = require('./svg/HeadingOne.svg');
const HeadingOneTrimmed = require('./svg/HeadingOneTrimmed.svg');
const HeadingTrimmed = require('./svg/HeadingTrimmed.svg');
const HeadingTwo = require('./svg/HeadingTwo.svg');
const HeadingTwoTrimmed = require('./svg/HeadingTwoTrimmed.svg');
const HelpCircle = require('./svg/HelpCircle.svg');
const HelpCircleTrimmed = require('./svg/HelpCircleTrimmed.svg');
const HorizontalRule = require('./svg/HorizontalRule.svg');
const HorizontalRuleTrimmed = require('./svg/HorizontalRuleTrimmed.svg');
const InfoCircle = require('./svg/InfoCircle.svg');
const InfoCircleTrimmed = require('./svg/InfoCircleTrimmed.svg');
const Link = require('./svg/Link.svg');
const LinkTrimmed = require('./svg/LinkTrimmed.svg');
const ListBulleted = require('./svg/ListBulleted.svg');
const ListBulletedTrimmed = require('./svg/ListBulletedTrimmed.svg');
const ListNumbered = require('./svg/ListNumbered.svg');
const ListNumberedTrimmed = require('./svg/ListNumberedTrimmed.svg');
const Lock = require('./svg/Lock.svg');
const LockTrimmed = require('./svg/LockTrimmed.svg');
const LooksOne = require('./svg/LooksOne.svg');
const LooksOneTrimmed = require('./svg/LooksOneTrimmed.svg');
const LooksTwo = require('./svg/LooksTwo.svg');
const LooksTwoTrimmed = require('./svg/LooksTwoTrimmed.svg');
const Menu = require('./svg/Menu.svg');
const MenuTrimmed = require('./svg/MenuTrimmed.svg');
const MoreHorizontal = require('./svg/MoreHorizontal.svg');
const MoreHorizontalTrimmed = require('./svg/MoreHorizontalTrimmed.svg');
const MoreVertical = require('./svg/MoreVertical.svg');
const MoreVerticalTrimmed = require('./svg/MoreVerticalTrimmed.svg');
const Plus = require('./svg/Plus.svg');
const PlusCircle = require('./svg/PlusCircle.svg');
const PlusCircleTrimmed = require('./svg/PlusCircleTrimmed.svg');
const PlusTrimmed = require('./svg/PlusTrimmed.svg');
const Quote = require('./svg/Quote.svg');
const QuoteTrimmed = require('./svg/QuoteTrimmed.svg');
const Receipt = require('./svg/Receipt.svg');
const ReceiptTrimmed = require('./svg/ReceiptTrimmed.svg');
const Search = require('./svg/Search.svg');
const SearchTrimmed = require('./svg/SearchTrimmed.svg');
const Settings = require('./svg/Settings.svg');
const SettingsTrimmed = require('./svg/SettingsTrimmed.svg');
const ShoppingCart = require('./svg/ShoppingCart.svg');
const ShoppingCartTrimmed = require('./svg/ShoppingCartTrimmed.svg');
const Star = require('./svg/Star.svg');
const StarTrimmed = require('./svg/StarTrimmed.svg');
const Text = require('./svg/Text.svg');
const TextTrimmed = require('./svg/TextTrimmed.svg');
const ThumbDown = require('./svg/ThumbDown.svg');
const ThumbDownTrimmed = require('./svg/ThumbDownTrimmed.svg');
const ThumbUp = require('./svg/ThumbUp.svg');
const ThumbUpTrimmed = require('./svg/ThumbUpTrimmed.svg');
const Users = require('./svg/Users.svg');
const UsersTrimmed = require('./svg/UsersTrimmed.svg');
const Warning = require('./svg/Warning.svg');
const WarningTrimmed = require('./svg/WarningTrimmed.svg');

const styles = require('./Icon.css');

const iconComponents = {
  ArrowDown,
  ArrowDownTrimmed,
  ArrowUp,
  ArrowUpTrimmed,
  Asset,
  AssetTrimmed,
  ChatBubble,
  ChatBubbleTrimmed,
  CheckCircle,
  CheckCircleTrimmed,
  ChevronDown,
  ChevronDownTrimmed,
  ChevronLeft,
  ChevronLeftTrimmed,
  ChevronRight,
  ChevronRightTrimmed,
  ChevronUp,
  ChevronUpTrimmed,
  Close,
  CloseTrimmed,
  Code,
  CodeTrimmed,
  Copy,
  CopyTrimmed,
  Download,
  DownloadTrimmed,
  Drag,
  DragTrimmed,
  Edit,
  EditTrimmed,
  EmbeddedEntryBlock,
  EmbeddedEntryBlockTrimmed,
  EmbeddedEntryInline,
  EmbeddedEntryInlineTrimmed,
  Entry,
  EntryTrimmed,
  ErrorCircle,
  ErrorCircleTrimmed,
  ExternalLink,
  ExternalLinkTrimmed,
  FaceHappy,
  FaceHappyTrimmed,
  Filter,
  FilterTrimmed,
  Folder,
  FolderCreate,
  FolderCreateTrimmed,
  FolderOpen,
  FolderOpenTrimmed,
  FolderTrimmed,
  FormatBold,
  FormatBoldTrimmed,
  FormatItalic,
  FormatItalicTrimmed,
  FormatUnderlined,
  FormatUnderlinedTrimmed,
  Heading,
  HeadingOne,
  HeadingOneTrimmed,
  HeadingTrimmed,
  HeadingTwo,
  HeadingTwoTrimmed,
  HelpCircle,
  HelpCircleTrimmed,
  HorizontalRule,
  HorizontalRuleTrimmed,
  InfoCircle,
  InfoCircleTrimmed,
  Link,
  LinkTrimmed,
  ListBulleted,
  ListBulletedTrimmed,
  ListNumbered,
  ListNumberedTrimmed,
  Lock,
  LockTrimmed,
  LooksOne,
  LooksOneTrimmed,
  LooksTwo,
  LooksTwoTrimmed,
  Menu,
  MenuTrimmed,
  MoreHorizontal,
  MoreHorizontalTrimmed,
  MoreVertical,
  MoreVerticalTrimmed,
  Plus,
  PlusCircle,
  PlusCircleTrimmed,
  PlusTrimmed,
  Quote,
  QuoteTrimmed,
  Receipt,
  ReceiptTrimmed,
  Search,
  SearchTrimmed,
  Settings,
  SettingsTrimmed,
  ShoppingCart,
  ShoppingCartTrimmed,
  Star,
  StarTrimmed,
  Text,
  TextTrimmed,
  ThumbDown,
  ThumbDownTrimmed,
  ThumbUp,
  ThumbUpTrimmed,
  Users,
  UsersTrimmed,
  Warning,
  WarningTrimmed,
};

export type IconType = keyof typeof iconName;
export type IconColorType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'secondary'
  | 'muted'
  | 'white';

export type IconSize = 'tiny' | 'small' | 'large';

export interface IconProps {
  size?: IconSize;
  color?: IconColorType;
  style?: CSSProperties;
  icon: IconType;
  extraClassNames?: string;
  testId?: string;
}

const defaultProps = {
  testId: 'cf-ui-icon',
  size: 'small',
  color: 'primary',
};

export class Icon extends Component<IconProps & typeof defaultProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      extraClassNames,
      icon,
      size,
      color,
      testId,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Icon, extraClassNames, {
      [styles[`Icon--${size}`]]: size,
      [styles[`Icon--${color}`]]: color,
      [styles['Icon--trimmed']]: icon.toLowerCase().includes('trimmed'),
    });

    const Element = iconComponents[icon];

    return (
      <Element data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default Icon;
