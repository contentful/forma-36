import type { ComponentProps } from 'react';
import type { BaseInputInternalProps } from '../base-input/types';

export type checkboxTypes = 'checkbox' | 'radio' | 'switch';

export interface BaseCheckboxInternalProps
  extends Omit<
    BaseInputInternalProps,
    'type' | 'as' | 'placeholder' | 'isReadOnly' | 'icon' | 'label'
  > {
  /**
   * Defines the type of the input to be rendered
   * @default checkbox
   */
  type?: checkboxTypes;
  /**
   * Defines if the element is checked, onChange will be required
   * @default undefined
   */
  isChecked?: boolean;
  /**
   * Defines initial checked state for an uncontrolled component
   * @default false
   */
  defaultChecked?: boolean;
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
   * Value to be set as aria-label if not passing a children
   */
  'aria-label'?: string;
}
