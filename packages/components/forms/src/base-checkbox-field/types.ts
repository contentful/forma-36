import type { CommonProps } from '@contentful/f36-core';
import type { BaseCheckboxProps } from '../base-checkbox';
import { HelpTextProps } from '@contentful/f36-helptext';
import { LabelProps } from '../Label';

type ExposedBaseCheckboxProps =
  | 'label'
  | 'id'
  | 'isRequired'
  | 'isDisabled'
  | 'isChecked'
  | 'isIndeterminate'
  | 'value'
  | 'onChange'
  | 'type'
  | 'name';

export interface BaseCheckboxFieldProps
  extends CommonProps,
    Pick<BaseCheckboxProps, ExposedBaseCheckboxProps> {
  helpText?: string;
  helpTextProps?: Omit<HelpTextProps, 'ref'>;
  formLabelProps?: LabelProps;
  validationMessage?: string;
  inputProps?: Omit<BaseCheckboxProps, ExposedBaseCheckboxProps>;
}

export type CheckboxFieldProps = Omit<BaseCheckboxFieldProps, 'type'>;
export type RadioButtonFieldProps = Omit<
  BaseCheckboxFieldProps,
  'type' | 'isIndeterminate'
>;
export type SwitchFieldProps = Omit<
  BaseCheckboxFieldProps,
  'type' | 'isIndeterminate'
>;
