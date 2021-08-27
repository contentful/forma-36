import type { ComponentProps } from 'react';
import type { BaseInputInternalProps } from '../base-input/types';

export type checkboxTypes = 'checkbox' | 'radio' | 'switch';

export interface BaseCheckboxProps
  extends Omit<
    BaseInputInternalProps,
    'type' | 'as' | 'placeholder' | 'isReadOnly' | 'icon' | 'isInvalid'
  > {
  /**
   * Defines the type of the input to be rendered
   * @default checkbox
   */
  type?: checkboxTypes;
  /**
   * Defines if the element is checked
   * @default false
   */
  isChecked?: boolean;
  /**
   * Defines if the state is indeterminate
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * Additional props that are passed to the input element
   */
  inputProps?: Partial<ComponentProps<'input'>>;
}

export type CheckboxProps = Omit<BaseCheckboxProps, 'type'>;
export type RadioButtonProps = Omit<
  BaseCheckboxProps,
  'type' | 'isIndeterminate'
>;
export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;
