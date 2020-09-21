import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';
import { iconName } from './constants';

import ArrowDown from './svg/ArrowDown.svg';
import ArrowDownTrimmed from './svg/ArrowDownTrimmed.svg';
import ArrowUp from './svg/ArrowUp.svg';
import ArrowUpTrimmed from './svg/ArrowUpTrimmed.svg';
import Asset from './svg/Asset.svg';
import AssetTrimmed from './svg/AssetTrimmed.svg';
import Calendar from './svg/Calendar.svg';
import ChatBubble from './svg/ChatBubble.svg';
import ChatBubbleTrimmed from './svg/ChatBubbleTrimmed.svg';
import CheckCircle from './svg/CheckCircle.svg';
import CheckCircleTrimmed from './svg/CheckCircleTrimmed.svg';
import ChevronDown from './svg/ChevronDown.svg';
import ChevronDownTrimmed from './svg/ChevronDownTrimmed.svg';
import ChevronLeft from './svg/ChevronLeft.svg';
import ChevronLeftTrimmed from './svg/ChevronLeftTrimmed.svg';
import ChevronRight from './svg/ChevronRight.svg';
import ChevronRightTrimmed from './svg/ChevronRightTrimmed.svg';
import ChevronUp from './svg/ChevronUp.svg';
import ChevronUpTrimmed from './svg/ChevronUpTrimmed.svg';
import Close from './svg/Close.svg';
import CloseTrimmed from './svg/CloseTrimmed.svg';
import Code from './svg/Code.svg';
import CodeTrimmed from './svg/CodeTrimmed.svg';
import Copy from './svg/Copy.svg';
import CopyTrimmed from './svg/CopyTrimmed.svg';
import Cycle from './svg/Cycle.svg';
import CycleTrimmed from './svg/CycleTrimmed.svg';
import Delete from './svg/Delete.svg';
import DeleteTrimmed from './svg/DeleteTrimmed.svg';
import Download from './svg/Download.svg';
import DownloadTrimmed from './svg/DownloadTrimmed.svg';
import Drag from './svg/Drag.svg';
import DragTrimmed from './svg/DragTrimmed.svg';
import Edit from './svg/Edit.svg';
import EditTrimmed from './svg/EditTrimmed.svg';
import EmbeddedEntryBlock from './svg/EmbeddedEntryBlock.svg';
import EmbeddedEntryBlockTrimmed from './svg/EmbeddedEntryBlockTrimmed.svg';
import EmbeddedEntryInline from './svg/EmbeddedEntryInline.svg';
import EmbeddedEntryInlineTrimmed from './svg/EmbeddedEntryInlineTrimmed.svg';
import Entry from './svg/Entry.svg';
import EntryTrimmed from './svg/EntryTrimmed.svg';
import ErrorCircle from './svg/ErrorCircle.svg';
import ErrorCircleTrimmed from './svg/ErrorCircleTrimmed.svg';
import ExternalLink from './svg/ExternalLink.svg';
import ExternalLinkTrimmed from './svg/ExternalLinkTrimmed.svg';
import FaceHappy from './svg/FaceHappy.svg';
import FaceHappyTrimmed from './svg/FaceHappyTrimmed.svg';
import Filter from './svg/Filter.svg';
import FilterTrimmed from './svg/FilterTrimmed.svg';
import Folder from './svg/Folder.svg';
import FolderCreate from './svg/FolderCreate.svg';
import FolderCreateTrimmed from './svg/FolderCreateTrimmed.svg';
import FolderOpen from './svg/FolderOpen.svg';
import FolderOpenTrimmed from './svg/FolderOpenTrimmed.svg';
import FolderTrimmed from './svg/FolderTrimmed.svg';
import FormatBold from './svg/FormatBold.svg';
import FormatBoldTrimmed from './svg/FormatBoldTrimmed.svg';
import FormatItalic from './svg/FormatItalic.svg';
import FormatItalicTrimmed from './svg/FormatItalicTrimmed.svg';
import FormatUnderlined from './svg/FormatUnderlined.svg';
import FormatUnderlinedTrimmed from './svg/FormatUnderlinedTrimmed.svg';
import Heading from './svg/Heading.svg';
import HeadingOne from './svg/HeadingOne.svg';
import HeadingOneTrimmed from './svg/HeadingOneTrimmed.svg';
import HeadingTrimmed from './svg/HeadingTrimmed.svg';
import HeadingTwo from './svg/HeadingTwo.svg';
import HeadingTwoTrimmed from './svg/HeadingTwoTrimmed.svg';
import HelpCircle from './svg/HelpCircle.svg';
import HelpCircleTrimmed from './svg/HelpCircleTrimmed.svg';
import HorizontalRule from './svg/HorizontalRule.svg';
import HorizontalRuleTrimmed from './svg/HorizontalRuleTrimmed.svg';
import InfoCircle from './svg/InfoCircle.svg';
import InfoCircleTrimmed from './svg/InfoCircleTrimmed.svg';
import Link from './svg/Link.svg';
import LinkTrimmed from './svg/LinkTrimmed.svg';
import ListBulleted from './svg/ListBulleted.svg';
import ListBulletedTrimmed from './svg/ListBulletedTrimmed.svg';
import ListNumbered from './svg/ListNumbered.svg';
import ListNumberedTrimmed from './svg/ListNumberedTrimmed.svg';
import Lock from './svg/Lock.svg';
import LockTrimmed from './svg/LockTrimmed.svg';
import LooksOne from './svg/LooksOne.svg';
import LooksOneTrimmed from './svg/LooksOneTrimmed.svg';
import LooksTwo from './svg/LooksTwo.svg';
import LooksTwoTrimmed from './svg/LooksTwoTrimmed.svg';
import Menu from './svg/Menu.svg';
import MenuTrimmed from './svg/MenuTrimmed.svg';
import MoreHorizontal from './svg/MoreHorizontal.svg';
import MoreHorizontalTrimmed from './svg/MoreHorizontalTrimmed.svg';
import MoreVertical from './svg/MoreVertical.svg';
import MoreVerticalTrimmed from './svg/MoreVerticalTrimmed.svg';
import Person from './svg/Person.svg';
import Plus from './svg/Plus.svg';
import PlusCircle from './svg/PlusCircle.svg';
import PlusCircleTrimmed from './svg/PlusCircleTrimmed.svg';
import PlusTrimmed from './svg/PlusTrimmed.svg';
import Quote from './svg/Quote.svg';
import QuoteTrimmed from './svg/QuoteTrimmed.svg';
import Receipt from './svg/Receipt.svg';
import ReceiptTrimmed from './svg/ReceiptTrimmed.svg';
import References from './svg/References.svg';
import Release from './svg/Release.svg';
import ReleaseTrimmed from './svg/ReleaseTrimmed.svg';
import Search from './svg/Search.svg';
import SearchTrimmed from './svg/SearchTrimmed.svg';
import Settings from './svg/Settings.svg';
import SettingsTrimmed from './svg/SettingsTrimmed.svg';
import ShoppingCart from './svg/ShoppingCart.svg';
import ShoppingCartTrimmed from './svg/ShoppingCartTrimmed.svg';
import Star from './svg/Star.svg';
import StarTrimmed from './svg/StarTrimmed.svg';
import Tags from './svg/Tags.svg';
import Text from './svg/Text.svg';
import TextTrimmed from './svg/TextTrimmed.svg';
import ThumbDown from './svg/ThumbDown.svg';
import ThumbDownTrimmed from './svg/ThumbDownTrimmed.svg';
import ThumbUp from './svg/ThumbUp.svg';
import ThumbUpTrimmed from './svg/ThumbUpTrimmed.svg';
import Users from './svg/Users.svg';
import UsersTrimmed from './svg/UsersTrimmed.svg';
import Clock from './svg/Clock.svg';
import ClockTrimmed from './svg/ClockTrimmed.svg';
import Warning from './svg/Warning.svg';
import WarningTrimmed from './svg/WarningTrimmed.svg';
import Workflows from './svg/Workflows.svg';

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
  Person,
  Plus,
  PlusCircle,
  PlusCircleTrimmed,
  PlusTrimmed,
  Quote,
  QuoteTrimmed,
  References,
  Release,
  ReleaseTrimmed,
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

const defaultProps = {
  testId: 'cf-ui-icon',
  size: 'small',
  color: 'primary',
};

export class Icon extends Component<IconProps & typeof defaultProps> {
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
