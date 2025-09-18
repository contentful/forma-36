import { createContext, useContext } from 'react';
import { BaseCheckboxProps } from './BaseCheckbox';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup';

export type BaseCheckboxGroupContextProps = Omit<
  BaseCheckboxGroupProps,
  'children'
>;
export type BaseCheckboxGroupContextValue = Pick<
  BaseCheckboxProps,
  'isChecked' | 'defaultChecked' | 'onChange' | 'onBlur' | 'name' | 'value'
>;

export const BaseCheckboxGroupContext = createContext<
  BaseCheckboxGroupContextProps | undefined
>(undefined);

export const useBaseCheckboxGroupContext = () => {
  const context = useContext(BaseCheckboxGroupContext);
  return context;
};

export const useBaseCheckboxGroup = (
  props: Partial<BaseCheckboxProps>,
): BaseCheckboxGroupContextValue => {
  const context = useBaseCheckboxGroupContext();
  if (!context) {
    return props;
  }

  let isChecked, defaultChecked;

  if (context.type === 'checkbox') {
    isChecked =
      context.value === undefined
        ? undefined
        : context.value?.includes(props.value);
    defaultChecked =
      isChecked !== undefined
        ? undefined
        : context.defaultValue?.includes(props.value);
  }

  if (context.type === 'radio') {
    isChecked =
      context.value === undefined ? undefined : context.value === props.value;
    defaultChecked =
      isChecked !== undefined
        ? undefined
        : context.defaultValue === props.value;
  }

  const onChange = (event) => {
    if (props.onChange) {
      props.onChange(event);
    }

    if (context.onChange) {
      context.onChange(event);
    }
  };

  const onBlur = (event) => {
    if (props.onBlur) {
      props.onBlur(event);
    }
    if (context.onBlur) {
      context.onBlur(event);
    }
  };

  return {
    defaultChecked,
    isChecked,
    onBlur,
    onChange,
    name: context.name ?? props.name,
    value: props.value,
  };
};
