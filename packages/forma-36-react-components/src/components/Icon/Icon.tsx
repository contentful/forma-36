import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { iconName } from './constants';

import ArrowDown from './svg/ArrowDown';
import ArrowDownTrimmed from './svg/ArrowDownTrimmed';
import ArrowUp from './svg/ArrowUp';
import ArrowUpTrimmed from './svg/ArrowUpTrimmed';
import Asset from './svg/Asset';
import AssetTrimmed from './svg/AssetTrimmed';
import Calendar from './svg/Calendar';
import ChatBubble from './svg/ChatBubble';
import ChatBubbleTrimmed from './svg/ChatBubbleTrimmed';
import CheckCircle from './svg/CheckCircle';
import CheckCircleTrimmed from './svg/CheckCircleTrimmed';
import ChevronDown from './svg/ChevronDown';
import ChevronDownTrimmed from './svg/ChevronDownTrimmed';
import ChevronLeft from './svg/ChevronLeft';
import ChevronLeftTrimmed from './svg/ChevronLeftTrimmed';
import ChevronRight from './svg/ChevronRight';
import ChevronRightTrimmed from './svg/ChevronRightTrimmed';
import ChevronUp from './svg/ChevronUp';
import ChevronUpTrimmed from './svg/ChevronUpTrimmed';
import Clock from './svg/Clock';
import ClockTrimmed from './svg/ClockTrimmed';
import Close from './svg/Close';
import CloseTrimmed from './svg/CloseTrimmed';
import Code from './svg/Code';
import CodeTrimmed from './svg/CodeTrimmed';
import Copy from './svg/Copy';
import CopyTrimmed from './svg/CopyTrimmed';
import Cycle from './svg/Cycle';
import CycleTrimmed from './svg/CycleTrimmed';
import Delete from './svg/Delete';
import DeleteTrimmed from './svg/DeleteTrimmed';
import Download from './svg/Download';
import DownloadTrimmed from './svg/DownloadTrimmed';
import Drag from './svg/Drag';
import DragTrimmed from './svg/DragTrimmed';
import Edit from './svg/Edit';
import EditTrimmed from './svg/EditTrimmed';
import EmbeddedEntryBlock from './svg/EmbeddedEntryBlock';
import EmbeddedEntryBlockTrimmed from './svg/EmbeddedEntryBlockTrimmed';
import EmbeddedEntryInline from './svg/EmbeddedEntryInline';
import EmbeddedEntryInlineTrimmed from './svg/EmbeddedEntryInlineTrimmed';
import Entry from './svg/Entry';
import EntryTrimmed from './svg/EntryTrimmed';
import ErrorCircle from './svg/ErrorCircle';
import ErrorCircleTrimmed from './svg/ErrorCircleTrimmed';
import ExternalLink from './svg/ExternalLink';
import ExternalLinkTrimmed from './svg/ExternalLinkTrimmed';
import FaceHappy from './svg/FaceHappy';
import FaceHappyTrimmed from './svg/FaceHappyTrimmed';
import Filter from './svg/Filter';
import FilterTrimmed from './svg/FilterTrimmed';
import Folder from './svg/Folder';
import FolderCreate from './svg/FolderCreate';
import FolderCreateTrimmed from './svg/FolderCreateTrimmed';
import FolderOpen from './svg/FolderOpen';
import FolderOpenTrimmed from './svg/FolderOpenTrimmed';
import FolderTrimmed from './svg/FolderTrimmed';
import FormatBold from './svg/FormatBold';
import FormatBoldTrimmed from './svg/FormatBoldTrimmed';
import FormatItalic from './svg/FormatItalic';
import FormatItalicTrimmed from './svg/FormatItalicTrimmed';
import FormatUnderlined from './svg/FormatUnderlined';
import FormatUnderlinedTrimmed from './svg/FormatUnderlinedTrimmed';
import Heading from './svg/Heading';
import HeadingOne from './svg/HeadingOne';
import HeadingOneTrimmed from './svg/HeadingOneTrimmed';
import HeadingTrimmed from './svg/HeadingTrimmed';
import HeadingTwo from './svg/HeadingTwo';
import HeadingTwoTrimmed from './svg/HeadingTwoTrimmed';
import HelpCircle from './svg/HelpCircle';
import HelpCircleTrimmed from './svg/HelpCircleTrimmed';
import HorizontalRule from './svg/HorizontalRule';
import HorizontalRuleTrimmed from './svg/HorizontalRuleTrimmed';
import InfoCircle from './svg/InfoCircle';
import InfoCircleTrimmed from './svg/InfoCircleTrimmed';
import Language from './svg/Language';
import Link from './svg/Link';
import LinkTrimmed from './svg/LinkTrimmed';
import ListBulleted from './svg/ListBulleted';
import ListBulletedTrimmed from './svg/ListBulletedTrimmed';
import ListNumbered from './svg/ListNumbered';
import ListNumberedTrimmed from './svg/ListNumberedTrimmed';
import Lock from './svg/Lock';
import LockTrimmed from './svg/LockTrimmed';
import Logout from './svg/Logout';
import LooksOne from './svg/LooksOne';
import LooksOneTrimmed from './svg/LooksOneTrimmed';
import LooksTwo from './svg/LooksTwo';
import LooksTwoTrimmed from './svg/LooksTwoTrimmed';
import Menu from './svg/Menu';
import MenuTrimmed from './svg/MenuTrimmed';
import MoreHorizontal from './svg/MoreHorizontal';
import MoreHorizontalTrimmed from './svg/MoreHorizontalTrimmed';
import MoreVertical from './svg/MoreVertical';
import MoreVerticalTrimmed from './svg/MoreVerticalTrimmed';
import Person from './svg/Person';
import Plus from './svg/Plus';
import PlusCircle from './svg/PlusCircle';
import PlusCircleTrimmed from './svg/PlusCircleTrimmed';
import PlusTrimmed from './svg/PlusTrimmed';
import Preview from './svg/Preview';
import Quote from './svg/Quote';
import QuoteTrimmed from './svg/QuoteTrimmed';
import Receipt from './svg/Receipt';
import ReceiptTrimmed from './svg/ReceiptTrimmed';
import References from './svg/References';
import Release from './svg/Release';
import ReleaseTrimmed from './svg/ReleaseTrimmed';
import Search from './svg/Search';
import SearchTrimmed from './svg/SearchTrimmed';
import Settings from './svg/Settings';
import SettingsTrimmed from './svg/SettingsTrimmed';
import ShoppingCart from './svg/ShoppingCart';
import ShoppingCartTrimmed from './svg/ShoppingCartTrimmed';
import Star from './svg/Star';
import StarTrimmed from './svg/StarTrimmed';
import Tags from './svg/Tags';
import Text from './svg/Text';
import TextTrimmed from './svg/TextTrimmed';
import ThumbDown from './svg/ThumbDown';
import ThumbDownTrimmed from './svg/ThumbDownTrimmed';
import ThumbUp from './svg/ThumbUp';
import ThumbUpTrimmed from './svg/ThumbUpTrimmed';
import Users from './svg/Users';
import UsersTrimmed from './svg/UsersTrimmed';
import Warning from './svg/Warning';
import WarningTrimmed from './svg/WarningTrimmed';
import Workflows from './svg/Workflows';

import styles from './Icon.css';

const iconComponents = {
  ArrowDown,
  ArrowDownTrimmed,
  ArrowUp,
  ArrowUpTrimmed,
  Asset,
  AssetTrimmed,
  Calendar,
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
  Clock,
  ClockTrimmed,
  Close,
  CloseTrimmed,
  Code,
  CodeTrimmed,
  Copy,
  CopyTrimmed,
  Cycle,
  CycleTrimmed,
  Delete,
  DeleteTrimmed,
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
  Language,
  Link,
  LinkTrimmed,
  ListBulleted,
  ListBulletedTrimmed,
  ListNumbered,
  ListNumberedTrimmed,
  Lock,
  LockTrimmed,
  Logout,
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
  Person,
  Plus,
  PlusCircle,
  PlusCircleTrimmed,
  PlusTrimmed,
  Preview,
  Quote,
  QuoteTrimmed,
  Receipt,
  ReceiptTrimmed,
  References,
  Release,
  ReleaseTrimmed,
  Search,
  SearchTrimmed,
  Settings,
  SettingsTrimmed,
  ShoppingCart,
  ShoppingCartTrimmed,
  Star,
  StarTrimmed,
  Tags,
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
  Workflows,
};

export type IconType = keyof typeof iconName;
export type IconColorType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted'
  | 'white';

export type IconSize = 'tiny' | 'small' | 'medium' | 'large';

export interface IconProps {
  size?: IconSize;
  color?: IconColorType;
  style?: CSSProperties;
  icon: IconType;
  className?: string;
  testId?: string;
}

const defaultProps: Partial<IconProps> = {
  testId: 'cf-ui-icon',
  size: 'small',
  color: 'primary',
};

export class Icon extends Component<IconProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, icon, size, color, testId, ...otherProps } = this.props;

    const classNames = cn(
      styles.Icon,
      {
        [styles[`Icon--${size}`]]: size,
        [styles[`Icon--${color}`]]: color,
        [styles['Icon--trimmed']]: icon.toLowerCase().includes('trimmed'),
      },
      className,
    );

    const Element = iconComponents[icon];

    return (
      <Element data-test-id={testId} className={classNames} {...otherProps} />
    );
  }
}

export default Icon;
