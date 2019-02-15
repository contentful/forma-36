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
/// <reference path="./dist/components/Checkbox/Checkbox.d.ts" />
/// <reference path="./dist/components/CheckboxField/CheckboxField.d.ts" />
/// <reference path="./dist/components/RadioButton/RadioButton.d.ts" />
/// <reference path="./dist/components/RadioButtonField/RadioButtonField.d.ts" />
/// <reference path="./dist/components/ToggleButton/ToggleButton.d.ts" />
/// <reference path="./dist/components/HelpText/HelpText.d.ts" />
/// <reference path="./dist/components/TextLink/TextLink.d.ts" />
/// <reference path="./dist/components/Note/Note.d.ts" />
/// <reference path="./dist/components/Pill/Pill.d.ts" />
/// <reference path="./dist/components/Tag/Tag.d.ts" />
/// <reference path="./dist/components/ControlledInput/ControlledInput.d.ts" />
/// <reference path="./dist/components/ControlledInputField/ControlledInputField.d.ts" />
/// <reference path="./dist/components/FormLabel/FormLabel.d.ts" />
/// <reference path="./dist/components/Form/FieldGroup/FieldGroup.d.ts" />
/// <reference path="./dist/components/Form/Form/Form.d.ts" />
/// <reference path="./dist/components/Modal/Modal/Modal.d.ts" />
/// <reference path="./dist/components/Modal/ModalConfirm/ModalConfirm.d.ts" />
/// <reference path="./dist/components/Notification/index.d.ts" />

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
import CheckboxComponent from './dist/components/Checkbox/Checkbox';
import CheckboxFieldComponent from './dist/components/CheckboxField/CheckboxField';
import RadioButtonComponent from './dist/components/RadioButton/RadioButton';
import RadioButtonFieldComponent from './dist/components/RadioButtonField/RadioButtonField';
import ToggleButtonComponent from './dist/components/ToggleButton/ToggleButton';
import HelpTextComponent from './dist/components/HelpText/HelpText';
import TextLinkComponent from './dist/components/TextLink/TextLink';
import NoteComponent from './dist/components/Note/Note';
import PillComponent from './dist/components/Pill/Pill';
import TagComponent from './dist/components/Tag/Tag';
import ControlledInputComponent from './dist/components/ControlledInput/ControlledInput';
import ControlledInputFieldComponent from './dist/components/ControlledInputField/ControlledInputField';
import FormLabelComponent from './dist/components/FormLabel/FormLabel';
import FieldGroupComponent from './dist/components/Form/FieldGroup/FieldGroup';
import FormComponent from './dist/components/Form/Form/Form';
import ModalComponent from './dist/components/Modal/Modal/Modal';
import ModalConfirmComponent from './dist/components/Modal/ModalConfirm/ModalConfirm';
import NotificationAPI from './dist/components/Notification/index';

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
export const Checkbox: typeof CheckboxComponent;
export const CheckboxField: typeof CheckboxFieldComponent;
export const RadioButton: typeof RadioButtonComponent;
export const RadioButtonField: typeof RadioButtonFieldComponent;
export const ToggleButton: typeof ToggleButtonComponent;
export const HelpText: typeof HelpTextComponent;
export const TextLink: typeof TextLinkComponent;
export const Note: typeof NoteComponent;
export const Pill: typeof PillComponent;
export const Tag: typeof TagComponent;
export const ControlledInput: typeof ControlledInputComponent;
export const ControlledInputField: typeof ControlledInputFieldComponent;
export const FormLabel: typeof FormLabelComponent;
export const FieldGroup: typeof FieldGroupComponent;
export const Form: typeof FormComponent;
export const Modal: typeof ModalComponent;
export const ModalConfirm: typeof ModalConfirmComponent;
export const Notification: typeof NotificationAPI;

export interface CopyButtonProps {
  extraClassNames?: string;
  testId?: string;
  copyValue?: string;
  onCopy?: (...args: any[]) => any;
}

export class CopyButton extends React.Component<CopyButtonProps, any> {
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
