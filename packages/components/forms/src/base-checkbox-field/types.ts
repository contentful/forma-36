import type { CommonProps } from '@contentful/f36-core';
import type { BaseCheckboxProps } from '@contentful/f36-inputs';
import { HelpTextProps } from '@contentful/f36-helptext';
import { LabelProps } from '../Label';

type BaseCheckboxExtendedProps =
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

interface CommonBaseFieldProps
  extends CommonProps,
    Pick<BaseCheckboxProps, BaseCheckboxExtendedProps> {
  helpText?: string;
  helpTextProps?: Omit<HelpTextProps, 'ref'>;
  formLabelProps?: LabelProps;
  validationMessage?: string;
  inputProps?: Omit<BaseCheckboxProps, BaseCheckboxExtendedProps>;
}

interface CheckboxFieldProps extends Omit<CommonBaseFieldProps, 'type'> {
  type?: 'checkbox';
}
interface RadioButtonFieldProps
  extends Omit<CommonBaseFieldProps, 'type' | 'isIndeterminate'> {
  type: Exclude<BaseCheckboxProps['type'], 'checkbox'>;
}

export type BaseCheckboxFieldProps = CheckboxFieldProps | RadioButtonFieldProps;
