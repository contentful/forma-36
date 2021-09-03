import { createContext, useContext } from 'react';
import { CheckboxProps } from './Checkbox';
import { CheckboxGroupProps } from './CheckboxGroup';

export type CheckboxGroupContextProps = Omit<CheckboxGroupProps, 'children'>;
export type CheckboxGroupContextValue = Pick<
  CheckboxProps,
  'isChecked' | 'defaultChecked' | 'onChange' | 'name' | 'value'
>;

export const CheckboxGroupContext = createContext<
  CheckboxGroupContextProps | undefined
>(undefined);

export const useCheckboxGroupContext = () => {
  const context = useContext(CheckboxGroupContext);
  return context;
};

export const useCheckboxGroup = (
  props: Partial<CheckboxProps>,
): CheckboxGroupContextValue => {
  const context = useCheckboxGroupContext();
  if (!context) {
    return props;
  }

  const isChecked =
    context.value === undefined
      ? undefined
      : context.value?.includes(props.value);
  const defaultChecked =
    isChecked !== undefined
      ? undefined
      : context.defaultValue?.includes(props.value);
  const onChange = (event) => {
    props.onChange && props.onChange(event);
    context.onChange && context.onChange(event);
  };

  return {
    defaultChecked,
    isChecked,
    onChange,
    name: context.name ?? props.name,
    value: props.value,
  };
};
