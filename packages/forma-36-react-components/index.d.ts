/// <reference path="./dist/components/Button/Button.d.ts" />
/// <reference path="./dist/components/Spinner/Spinner.d.ts" />
/// <reference path="./dist/components/TabFocusTrap/TabFocusTrap.d.ts" />
/// <reference path="./dist/components/Icon/Icon.d.ts" />
/// <reference path="./dist/components/IconButton/IconButton.d.ts" />
/// <reference path="./dist/components/Asset/Asset.d.ts" />
/// <reference path="./dist/components/Card/AssetCard/AssetCard.d.ts" />
/// <reference path="./dist/components/Card/Card/Card.d.ts" />
/// <reference path="./dist/components/Card/InlineReferenceCard/InlineReferenceCard.d.ts" />
/// <reference path="./dist/components/Card/ReferenceCard/ReferenceCard.d.ts" />

import * as React from 'react';

import ButtonComponent from './dist/components/Button/Button';
import SpinnerComponent from './dist/components/Spinner/Spinner';
import TabFocusTrapComponent from './dist/components/TabFocusTrap/TabFocusTrap';
import IconComponent from './dist/components/Icon/Icon';
import IconButtonComponent from './dist/components/IconButton/IconButton';
import AssetComponent from './dist/components/Asset/Asset';
import AssetCardComponent from './dist/components/Card/AssetCard/AssetCard';
import CardComponent from './dist/components/Card/Card/Card';
import InlineReferenceCardComponent from './dist/components/Card/InlineReferenceCard/InlineReferenceCard';
import ReferenceCardComponent from './dist/components/Card/ReferenceCard/ReferenceCard';

export const Button: typeof ButtonComponent;
export const Spinner: typeof SpinnerComponent;
export const TabFocusTrap: typeof TabFocusTrapComponent;
export const Icon: typeof IconComponent;
export const IconButton: typeof IconButtonComponent;
export const Asset: typeof AssetComponent;
export const AssetCard: typeof AssetCardComponent;
export const Card: typeof CardComponent;
export const InlineReferenceCard: typeof InlineReferenceCardComponent;
export const ReferenceCard: typeof ReferenceCardComponent;

export interface CopyButtonProps {
  extraClassNames?: string;
  testId?: string;
  copyValue?: string;
  onCopy?: (...args: any[]) => any;
}

export class CopyButton extends React.Component<CopyButtonProps, any> {
  render(): JSX.Element;
}

export interface CheckboxProps {}

export const Checkbox: React.SFC<CheckboxProps>;

export interface CheckboxFieldProps {}

export class CheckboxField extends React.Component<CheckboxFieldProps, any> {
  render(): JSX.Element;
}
export interface ControlledInputProps {}

export class ControlledInput extends React.Component<
  ControlledInputProps,
  any
> {
  render(): JSX.Element;
}
export interface ControlledInputFieldProps {}

export class ControlledInputField extends React.Component<
  ControlledInputFieldProps,
  any
> {
  render(): JSX.Element;
}

export type DropdownPosition =
  | 'top'
  | 'right'
  | 'left'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-right'
  | 'top-left';

export interface DropdownProps {
  extraClassNames?: string;
  children: React.ReactNode;
  toggleElement?: React.ReactNode;
  testId?: string;
  submenuToggleLabel?: string;
  position?: DropdownPosition;
  isOpen?: boolean;
  onClose?: (...args: any[]) => any;
}

export class Dropdown extends React.Component<DropdownProps, any> {
  render(): JSX.Element;
}

export type DropdownListBorder = 'top' | 'bottom';

export interface DropdownListProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  border?: DropdownListBorder;
  maxHeight?: number;
}

export class DropdownList extends React.Component<DropdownListProps, any> {
  render(): JSX.Element;
}

export interface DropdownListItemProps {
  extraClassNames?: string;
  children: React.ReactNode;
  onClick?: (...args: any[]) => any;
  testId?: string;
  onMouseDown?: (...args: any[]) => any;
  submenuToggleLabel?: string;
  onFocus?: (...args: any[]) => any;
  onLeave?: (...args: any[]) => any;
  onEnter?: (...args: any[]) => any;
  isDisabled?: boolean;
  isActive?: boolean;
  isTitle?: boolean;
}

export class DropdownListItem extends React.Component<
  DropdownListItemProps,
  any
> {
  render(): JSX.Element;
}
export interface EditorToolbarProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
}

export class EditorToolbar extends React.Component<EditorToolbarProps, any> {
  render(): JSX.Element;
}
export interface EditorToolbarButtonProps {
  extraClassNames?: string;
  label: string;
  testId?: string;
  icon?: any;
  tooltip?: string;
  iconButtonProps?: Object;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: (...args: any[]) => any;
  withDropdown?: boolean;
}

export class EditorToolbarButton extends React.Component<
  EditorToolbarButtonProps,
  any
> {
  render(): JSX.Element;
}

export interface EditorToolbarDividerProps {
  testId?: string;
  extraClassNames?: string;
}

export default class EditorToolbarDivider extends React.Component<
  EditorToolbarDividerProps,
  any
> {
  render(): JSX.Element;
}
export type FormSpacing = 'condensed' | 'default';

export interface FormProps {
  extraClassNames?: string;
  children: React.ReactNode;
  onSubmit?: (...args: any[]) => any;
  spacing?: FormSpacing;
  testId?: string;
}

export class Form extends React.Component<FormProps, any> {
  render(): JSX.Element;
}

export interface FieldGroupProps {
  extraClassNames?: string;
  children: React.ReactNode;
  row?: boolean;
}

export class FieldGroup extends React.Component<FieldGroupProps, any> {
  render(): JSX.Element;
}
export interface FormLabelProps {
  htmlFor: string;
  children: string;
  testId?: string;
  extraClassNames?: string;
  requiredText?: string;
  required?: boolean;
}

export class FormLabel extends React.Component<FormLabelProps, any> {
  render(): JSX.Element;
}
export interface HelpTextProps {
  extraClassNames?: string;
  testId?: string;
  children?: React.ReactNode;
}

export class HelpText extends React.Component<HelpTextProps, any> {
  render(): JSX.Element;
}

export interface IllustrationProps {
  extraClassNames?: string;
  illustration?: any;
  testId?: string;
}

export class Illustration extends React.Component<IllustrationProps, any> {
  render(): JSX.Element;
}
export interface InViewportProps {
  extraClassNames?: string;
  children?: React.ReactNode;
  testId?: string;
  offset?: number;
  onOverflowTop?: (...args: any[]) => any;
  onOverflowRight?: (...args: any[]) => any;
  onOverflowBottom?: (...args: any[]) => any;
  onOverflowLeft?: (...args: any[]) => any;
}

export class InViewport extends React.Component<InViewportProps, any> {
  render(): JSX.Element;
}
export type LineChartWidth = number | string;

export type LineChartHeight = number | string;

export interface LineChartRequire {
  ensure?: (...args: any[]) => any;
}

export interface LineChartProps {
  options: Object;
  empty?: boolean;
  EmptyPlaceholder?: (...args: any[]) => any;
  loading: boolean;
  extraClassNames?: string;
  width?: LineChartWidth;
  height?: LineChartHeight;
  require?: LineChartRequire;
}

export class LineChart extends React.Component<LineChartProps, any> {
  render(): JSX.Element;
}
export interface ListProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
}

export class List extends React.Component<ListProps, any> {
  render(): JSX.Element;
}

export interface ListItemProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
}

export class ListItem extends React.Component<ListItemProps, any> {
  render(): JSX.Element;
}
export type ModalPosition = any | any;

export type ModalTopOffset = string | number;

export type ModalSize = any | any | any | number | string;

export type ModalChildren = React.ReactNode | ((...args: any[]) => any);

export interface ModalProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;
  /**
   * Function that will be called when the exit is complete.
   */
  onClose: (...args: any[]) => any;
  /**
   * Function that will be called when the enter is complete.
   */
  onAfterOpen?: (...args: any[]) => any;
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * Boolean indicating if modal is centered
   */
  position?: ModalPosition;
  /**
   * Top offset if position is ModalPositions.TOP
   */
  topOffset?: ModalTopOffset;
  /**
   * Modal title that is used in header
   */
  title?: string;
  /**
   * Size of the modal window
   */
  size?: ModalSize;
  /**
   * Are modals highter that viewerport allowed
   */
  allowHeightOverflow?: boolean;
  extraClassNames?: string;
  testId?: string;
  children: ModalChildren;
}

export class Modal extends React.Component<ModalProps, any> {
  render(): JSX.Element;
}
export type ModalConfirmIntent = 'primary' | 'positive' | 'negative';

export type ModalConfirmSize = any | any | any | number | string;

export interface ModalConfirmProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;
  /**
   * Function that will be called when the confirm button is clicked. This does not close the ModalConfirm.
   */
  onConfirm: (...args: any[]) => any;
  /**
   * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
   */
  onCancel: (...args: any[]) => any;
  /**
   * Modal title that is used in header
   */
  title?: string;
  /**
   * Label of the confirm button
   */
  confirmLabel?: string;
  /**
   * Label of the cancel button
   */
  cancelLabel?: string;
  /**
   * The intent of the ModalConfirm. Used for the Button.
   */
  intent?: ModalConfirmIntent;
  /**
   * Size of the modal window
   */
  size?: ModalConfirmSize;
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled?: boolean;
  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading?: boolean;
  testId?: string;
  confirmTestId?: string;
  cancelTestId?: string;
  children: React.ReactNode;
}

export class ModalConfirm extends React.Component<ModalConfirmProps, any> {
  render(): JSX.Element;
}
export interface ContentProps {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
}

export const Content: React.SFC<ContentProps>;

export interface ControlsProps {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
}

export const Controls: React.SFC<ControlsProps>;

export interface HeaderProps {
  onClose?: (...args: any[]) => any;
  title: string;
  testId?: string;
  extraClassNames?: string;
}

export const Header: React.SFC<HeaderProps>;

export type NoteNoteType = any | any | any;

export interface NoteProps {
  title?: string;
  noteType?: NoteNoteType;
  children: React.ReactNode;
  testId?: string;
  extraClassNames?: string;
  style?: Object;
}

export const Note: React.SFC<NoteProps>;

export interface NotificationItemProps {}

export class NotificationItem extends React.Component<
  NotificationItemProps,
  any
> {
  render(): JSX.Element;
}
export interface NotificationItemContainerProps {
  isShown?: boolean;
  duration: number;
}

export class NotificationItemContainer extends React.Component<
  NotificationItemContainerProps,
  any
> {
  render(): JSX.Element;
}

export interface NotificationsManagerProps {
  register: (...args: any[]) => any;
}

export class NotificationsManager extends React.PureComponent<
  NotificationsManagerProps,
  any
> {
  render(): JSX.Element;
}

export interface PillProps {
  extraClassNames?: string;
  testId?: string;
  label: string;
  onClose?: (...args: any[]) => any;
  onDrag?: (...args: any[]) => any;
}

export class Pill extends React.Component<PillProps, any> {
  render(): JSX.Element;
}

export interface RadioButtonProps {}

export const RadioButton: React.SFC<RadioButtonProps>;

export interface RadioButtonFieldProps {}

export class RadioButtonField extends React.Component<
  RadioButtonFieldProps,
  any
> {
  render(): JSX.Element;
}

export type SelectWidth = 'auto' | 'small' | 'medium' | 'large' | 'full';

export interface SelectProps {
  required?: boolean;
  children: React.ReactNode;
  name?: string;
  id?: string;
  hasError?: boolean;
  value?: string;
  isDisabled?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  testId?: string;
  onFocus?: (...args: any[]) => any;
  extraClassNames?: string;
  width?: SelectWidth;
}

export class Select extends React.Component<SelectProps, any> {
  render(): JSX.Element;
}

export interface OptionProps {
  value: string;
  children: React.ReactNode;
}

export class Option extends React.Component<OptionProps, any> {
  render(): JSX.Element;
}
export type SelectFieldValue = string | number;

export interface SelectFieldProps {
  value?: SelectFieldValue;
  validationMessage?: string;
  testId?: string;
  children: React.ReactNode;
  extraClassNames?: string;
  formLabelProps?: Object;
  textLinkProps?: Object;
  selectProps?: Object;
  name: string;
  id: string;
  labelText?: string;
  helpText?: string;
  required?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
}

export class SelectField extends React.Component<SelectFieldProps, any> {
  render(): JSX.Element;
}

export interface SkeletonBodyTextProps {}

export class SkeletonBodyText extends React.Component<
  SkeletonBodyTextProps,
  any
> {
  render(): JSX.Element;
}

export type SkeletonContainerWidth = number | string;

export type SkeletonContainerHeight = number | string;

export type SkeletonContainerSpeed = number | string;

export type SkeletonContainerSvgWidth = number | string;

export type SkeletonContainerSvgHeight = number | string;

export interface SkeletonContainerProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  ariaLabel?: string;
  width?: SkeletonContainerWidth;
  height?: SkeletonContainerHeight;
  preserveAspectRatio?: string;
  clipId?: string;
  gradientId?: string;
  backgroundColor?: string;
  backgroundOpacity?: number;
  animate?: boolean;
  speed?: SkeletonContainerSpeed;
  foregroundColor?: string;
  foregroundOpacity?: number;
  svgWidth?: SkeletonContainerSvgWidth;
  svgHeight?: SkeletonContainerSvgHeight;
}

export class SkeletonContainer extends React.Component<
  SkeletonContainerProps,
  any
> {
  render(): JSX.Element;
}
export interface SkeletonDisplayTextProps {}

export class SkeletonDisplayText extends React.Component<
  SkeletonDisplayTextProps,
  any
> {
  render(): JSX.Element;
}
export interface SkeletonImageProps {
  testId?: string;
  offsetLeft?: number;
  offsetTop?: number;
  width?: number;
  height?: number;
  radiusX?: number;
  radiusY?: number;
}

export class SkeletonImage extends React.Component<SkeletonImageProps, any> {
  render(): JSX.Element;
}
export interface SkeletonTextProps {}

export class SkeletonText extends React.Component<SkeletonTextProps, any> {
  render(): JSX.Element;
}

export interface TableProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class Table extends React.Component<TableProps, any> {
  render(): JSX.Element;
}
export interface TableBodyProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TableBody extends React.Component<TableBodyProps, any> {
  render(): JSX.Element;
}
export type TableCellSorting = any | any;

export type TableCellAlign = 'center' | 'left' | 'right';

export interface TableCellProps {
  extraClassNames?: string;
  children?: React.ReactNode;
  sorting?: TableCellSorting;
  align?: TableCellAlign;
}

export class TableCell extends React.Component<TableCellProps, any> {
  render(): JSX.Element;
}
export interface TableSortingLabelProps {
  extraClassNames?: string;
  children: React.ReactNode;
  direction?: any;
  active: boolean;
}

export class TableSortingLabel extends React.Component<
  TableSortingLabelProps,
  any
> {
  render(): JSX.Element;
}
export interface TableHeadProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TableHead extends React.Component<TableHeadProps, any> {
  render(): JSX.Element;
}
export interface TableRowProps {
  extraClassNames?: string;
  children: React.ReactNode;
}

export class TableRow extends React.Component<TableRowProps, any> {
  render(): JSX.Element;
}

export type TagTagType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'secondary'
  | 'muted';

export interface TagProps {
  extraClassNames?: string;
  children: React.ReactNode;
  tagType?: TagTagType;
  testId?: string;
}

export class Tag extends React.Component<TagProps, any> {
  render(): JSX.Element;
}
export type TextFieldValue = string | number;

export interface TextFieldProps {
  value?: TextFieldValue;
  validationMessage?: string;
  testId?: string;
  extraClassNames?: string;
  formLabelProps?: Object;
  textLinkProps?: Object;
  textInputProps?: Object;
  name: string;
  id: string;
  labelText?: string;
  helpText?: string;
  required?: boolean;
  textarea?: boolean;
  countCharacters?: boolean;
  onChange?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
}

export class TextField extends React.Component<TextFieldProps, any> {
  render(): JSX.Element;
}
export type TextInputWidth = 'small' | 'medium' | 'large' | 'full';

export type TextInputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'url';

export interface TextInputProps {
  width?: TextInputWidth;
  type?: TextInputType;
  name?: string;
  id?: string;
  extraClassNames?: string;
  withCopyButton?: boolean;
  placeholder?: string;
  onChange?: (...args: any[]) => any;
  disabled?: boolean;
  testId?: string;
  maxLength?: number;
  onBlur?: (...args: any[]) => any;
  onCopy?: (...args: any[]) => any;
  value?: string;
  error?: boolean;
  required?: boolean;
}

export class TextInput extends React.Component<TextInputProps, any> {
  render(): JSX.Element;
}
export type TextLinkLinkType =
  | 'primary'
  | 'positive'
  | 'negative'
  | 'secondary'
  | 'muted';

export interface TextLinkProps {
  children: React.ReactNode;
  href?: string;
  disabled?: boolean;
  testId?: string;
  linkType?: TextLinkLinkType;
  onClick?: (...args: any[]) => any;
  extraClassNames?: string;
  icon?: any;
}

export class TextLink extends React.Component<TextLinkProps, any> {
  render(): JSX.Element;
}
export type TextareaWidth = 'small' | 'medium' | 'large' | 'full';

export interface TextareaProps {
  name?: string;
  id?: string;
  testId?: string;
  placeholder?: string;
  extraClassNames?: string;
  width?: TextareaWidth;
  maxLength?: number;
  required?: boolean;
  onChange?: (...args: any[]) => any;
  disabled?: boolean;
  value?: string;
  rows?: number;
  onBlur?: (...args: any[]) => any;
  error?: boolean;
}

export class Textarea extends React.Component<TextareaProps, any> {
  render(): JSX.Element;
}
export interface ToggleButtonProps {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
  icon?: string;
  isActive?: boolean;
  onToggle?: (...args: any[]) => any;
  buttonProps?: Object;
  isDisabled?: boolean;
}

export class ToggleButton extends React.Component<ToggleButtonProps, any> {
  render(): JSX.Element;
}
export type TooltipPlace = 'top' | 'bottom' | 'right' | 'left';

export type TooltipMaxWidth = number | string;

export interface TooltipProps {
  extraClassNames?: string;
  targetWrapperClassName?: string;
  onFocus?: (...args: any[]) => any;
  onBlur?: (...args: any[]) => any;
  id?: string;
  onMouseLeave?: (...args: any[]) => any;
  containerElement?: React.ReactNode;
  onMouseOver?: (...args: any[]) => any;
  content?: React.ReactNode;
  children: React.ReactNode;
  testId?: string;
  place?: TooltipPlace;
  isVisible?: boolean;
  maxWidth?: TooltipMaxWidth;
}

export class Tooltip extends React.Component<TooltipProps, any> {
  render(): JSX.Element;
}
export type DisplayTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type DisplayTextSize = 'default' | 'large';

export interface DisplayTextProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  element?: DisplayTextElement;
  size?: DisplayTextSize;
}

export class DisplayText extends React.Component<DisplayTextProps, any> {
  render(): JSX.Element;
}
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface HeadingProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  element?: HeadingElement;
}

export class Heading extends React.Component<HeadingProps, any> {
  render(): JSX.Element;
}
export type ParagraphElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface ParagraphProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  element?: ParagraphElement;
}

export class Paragraph extends React.Component<ParagraphProps, any> {
  render(): JSX.Element;
}
export type SectionHeadingElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

export interface SectionHeadingProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  element?: SectionHeadingElement;
}

export class SectionHeading extends React.Component<SectionHeadingProps, any> {
  render(): JSX.Element;
}
export type SubheadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface SubheadingProps {
  extraClassNames?: string;
  children: React.ReactNode;
  testId?: string;
  element?: SubheadingElement;
}

export class Subheading extends React.Component<SubheadingProps, any> {
  render(): JSX.Element;
}
export interface ValidationMessageProps {
  children: string;
  extraClassNames?: string;
  testId?: string;
}

export class ValidationMessage extends React.Component<
  ValidationMessageProps,
  any
> {
  render(): JSX.Element;
}
