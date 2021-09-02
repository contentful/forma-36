import type { ComponentProps } from 'react';
import type { BaseInputInternalProps } from '../base-input/types';

export type checkboxTypes = 'checkbox' | 'radio' | 'switch';

export interface BaseCheckboxInternalProps
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
  /**
   * Set label for checkbox components
   */
  label: string;
}
